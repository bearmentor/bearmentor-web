import { type LinksFunction, type MetaFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react"

import "~/tailwind.css"

import { configSite } from "~/configs/site"
import { createMeta } from "~/utils/meta"

export const meta: MetaFunction = () => createMeta({})

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={configSite.languageCode}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()

  console.error(error)

  return (
    <html lang={configSite.languageCode}>
      <head>
        <title>Sorry, something wrong</title>
        <Meta />
        <Links />
      </head>

      <body>
        <main className="p-2">
          <p>Sorry, something went wrong. Please try again later.</p>
          <p>Regards, Bearmentor</p>
        </main>

        <Scripts />
      </body>
    </html>
  )
}
