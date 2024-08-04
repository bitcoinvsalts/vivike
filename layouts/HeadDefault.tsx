import React from "react";
import logoUrl from "../assets/logo.svg";

// Default <head> (can be overridden by pages)

export default function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Demo showcasing Vike" />
      <link rel="icon" href={logoUrl} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}');`,
        }}
      ></script>
    </>
  );
}
