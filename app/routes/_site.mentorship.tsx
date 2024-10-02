import { type MetaFunction } from "@remix-run/node"

import { ButtonLink } from "~/components/ui/button-link"
import {
  SiteHero,
  SiteHeroCenter,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { createMeta } from "~/utils/meta"

export const meta: MetaFunction = () =>
  createMeta({
    title: "Private 1-on-1 Mentorship",
    description:
      "Struggling to learn alone? With Bearmentor Private Mentorship, achieve your personal goals with a dedicated mentor. Customize everything you need.",
  })

export default function MentorshipRoute() {
  return <Hero />
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-cyan-700 to-cyan-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroCenter>
          <SiteHeroHeading>Private 1-on-1 Mentorship</SiteHeroHeading>

          <SiteHeroDescription>
            Struggling to learn alone? With Bearmentor Private Mentorship,
            achieve your personal goals with a dedicated mentor. Customize
            everything you need.
          </SiteHeroDescription>

          <ButtonLink to="/request" mode="cta">
            Request for Mentorship
          </ButtonLink>
        </SiteHeroCenter>
      </aside>
    </SiteHero>
  )
}
