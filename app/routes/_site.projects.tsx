import { LoaderFunctionArgs, type MetaFunction } from "@remix-run/node"

import { configRedirects } from "~/configs/redirects"
import {
  SiteHero,
  SiteHeroCenter,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { createMeta } from "~/utils/meta"
import {
  redirectRouteToURL,
  shouldRedirect,
} from "~/utils/redirect-route.server"

export const meta: MetaFunction = () =>
  createMeta({
    title: "Projects",
    description: "All published projects from Bearmentor community members.",
  })

export const loader = ({ request }: LoaderFunctionArgs) => {
  if (shouldRedirect(request)) {
    return redirectRouteToURL(request, configRedirects)
  }
  return null
}

export default function ProjectsRoute() {
  return <Hero />
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-teal-700 to-teal-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroCenter>
          <SiteHeroHeading>Projects</SiteHeroHeading>
          <SiteHeroDescription>
            All published projects from Bearmentor community members.
          </SiteHeroDescription>
        </SiteHeroCenter>
      </aside>
    </SiteHero>
  )
}
