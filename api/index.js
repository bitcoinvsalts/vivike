import express from 'express'
import { renderPage } from 'vike/server'
import { root } from './root.js'
import cookieParser from 'cookie-parser'
const { auth } = require('express-openid-connect');


const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

startServer()

async function startServer() {
  const app = express()
  autho(app)
  await assets(app)
  vike(app)
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}

function autho(app) {
  const config = {
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: 'https://dev-02ip8ekqdbissnyc.us.auth0.com',
    clientID: 'HHDaQ3D9UE8XZPRAORExmCjftxyQZaWO',
    secret: 'Kp66pYGmd3jZtbvzerB3lAL58Drs4HUEsChMyd1ZAxIEdOWUzgiGELeyqmK5G9S2',
    baseURL: 'https://vivike.vercel.app/'
  };
  app.use(cookieParser())
  app.use(express.json()) // Parse & make HTTP request body available at `req.body`
  app.use(
    auth(config)
  );
  app.use(function (req, res, next) {
    req.user = req.oidc.user;
    console.log("===>", req.user)
    next();
  });
}

async function assets(app) {
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }
}

function vike(app) {
  app.get('*', async (req, res, next) => {
    console.log("--=====--", req.user?.nickname)
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      headersOriginal: req.headers,
      user: req.user,
      userFullName: req.user?.nickname
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    } else {
      const { statusCode, headers, earlyHints } = httpResponse
      if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      httpResponse.pipe(res)
    }
  })
}
