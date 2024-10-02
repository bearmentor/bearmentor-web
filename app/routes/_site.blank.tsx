import { type MetaFunction } from "@remix-run/react"

import { createMeta } from "~/utils/meta"
import { createSitemap } from "~/utils/sitemap"

export const handle = createSitemap()

export const meta: MetaFunction = () =>
  createMeta({
    title: "Blank",
    description: "Just a blank page",
    canonicalPath: "/blank",
  })

export default function BlankRoute() {
  return (
    <div>
      <p>Blank Page</p>
    </div>
  )
}
