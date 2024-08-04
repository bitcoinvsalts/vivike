Generated with [Bati](https://batijs.dev) ([version 239](https://www.npmjs.com/package/create-bati/v/0.0.239)) using this command:

```sh
pnpm create bati --react --tailwindcss --auth0 --express --edgedb --google-analytics
```

# Next steps
## *Auth0*
- Sign up or login to an Auth0 account, then go to [your Dashboard](https://manage.auth0.com/dashboard/)
- Create Application -> Regular Web Application 
- What technology are you using for your project? -> Node.js (Express) -> Integrate Now
- Configure Auth0:
  - Allowed Callback URL: http://localhost:3000/api/auth/callback/auth0
  - Allowed Logout URLs: http://localhost:3000
- Save Changes
- Copy your `Client ID`, `Client Secret` and `Domain` and paste it in `.env` file like this:

```env
// .env
AUTH0_CLIENT_SECRET=<Client Secret>
AUTH0_CLIENT_ID=<Client ID>
AUTH0_ISSUER_BASE_URL=https://<your-auth0-domain>.<eu>.auth0.com
```

> [!NOTE]
> Login route is `http://localhost:3000/api/auth/signin`.
> Logout route is `http://localhost:3000/api/auth/signout`.

- Read more [Auth.js: Auth0 provider](https://authjs.dev/reference/core/providers/auth0)



## *EdgeDB*
### Setup
If [EdgeDB CLI](https://www.edgedb.com/docs/cli/index) is not yet installed, execute the following command:
```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
```

Once the CLI is installed, you can initialize a project:
```sh
edgedb project init
```

Then follow instructions at <https://www.edgedb.com/docs/intro/quickstart#set-up-your-schema>

# About this app
This app is ready to start. It's powered by [Vike](https://vike.dev) and [React](https://react.dev/learn).

### `/pages/+config.ts`

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:
- A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
- A default [`title`](https://vike.dev/head).
- Default [`<head>` tags](https://vike.dev/head).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:
 - [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.jsx` file is located on the filesystem)
 - [Route Strings](https://vike.dev/route-string)
 - [Route Functions](https://vike.dev/route-function)

### `/pages/_error/+Page.jsx`

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### `/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with [`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for some pages.

### HTML Streaming

You can enable/disable [HTML streaming](https://vike.dev/streaming) for all your pages, or only for some pages while still using it for others.

