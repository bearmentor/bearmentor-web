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
    title: "Mentors",
    description: "All registered mentors from Bearmentor.",
  })

export const loader = ({ request }: LoaderFunctionArgs) => {
  if (shouldRedirect(request)) {
    return redirectRouteToURL(request, configRedirects)
  }
  return null
}

export default function MentorsRoute() {
  return <Hero />
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-emerald-700 to-emerald-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroCenter>
          <SiteHeroHeading>Mentors</SiteHeroHeading>
          <SiteHeroDescription>
            All registered mentors from Bearmentor.
          </SiteHeroDescription>
        </SiteHeroCenter>
      </aside>
    </SiteHero>
  )
}