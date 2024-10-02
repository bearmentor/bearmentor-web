import { type MetaFunction } from "@remix-run/node"

import { IconMentorship, IconRead } from "~/components/icons/iconify"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonGroup } from "~/components/ui/button-group"
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
          <SiteHeroHeading>
            Private <span className="break-keep">1-on-1</span> Mentorship
          </SiteHeroHeading>

          <SiteHeroDescription>
            Struggling to learn alone? With Bearmentor Private Mentorship,
            achieve your personal goals with a dedicated mentor. Customize
            everything you need.
          </SiteHeroDescription>

          <ButtonGroup>
            <ButtonAnchor href="/request" mode="cta" display="with-icon">
              <IconMentorship className="size-4" /> Request for Mentorship
            </ButtonAnchor>
            <ButtonAnchor
              href="https://bearmentor.com/mentorship"
              mode="cta"
              display="with-icon"
              variant="secondary"
            >
              <IconRead className="size-4" /> Learn More
            </ButtonAnchor>
          </ButtonGroup>
        </SiteHeroCenter>
      </aside>
    </SiteHero>
  )
}
