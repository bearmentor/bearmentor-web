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
    title: "Community Members",
    description:
      "All registered members of Bearmentor Community. Join us and become a part of the growing community.",
  })

export const loader = ({ request }: LoaderFunctionArgs) => {
  if (shouldRedirect(request)) {
    return redirectRouteToURL(request, configRedirects)
  }
  return null
}

export default function MembersRoute() {
  return <Hero />
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-green-700 to-green-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroCenter>
          <SiteHeroHeading>Members</SiteHeroHeading>
          <SiteHeroDescription>
            All registered members of Bearmentor Community. Join us and become a
            part of the growing community.
          </SiteHeroDescription>
        </SiteHeroCenter>
      </aside>
    </SiteHero>
  )
}
