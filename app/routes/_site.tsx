import { Outlet } from "@remix-run/react"

import { SiteLayout } from "~/modules/site/layout"

export default function SiteLayoutRoute() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  )
}
