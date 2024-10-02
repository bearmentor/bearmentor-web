import { type MetaFunction } from "@remix-run/node"

import { IconBootcamp, IconRead } from "~/components/icons/iconify"
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
    title: "Online Full Stack Web Development Bootcamp",
    description:
      "Struggling to learn alone? With Bearmentor Online Bootcamp, learn fundamentals and build projects for 6 months.",
  })

export default function BootcampRoute() {
  return <Hero />
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-teal-700 to-teal-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroCenter>
          <SiteHeroHeading>
            Online Full Stack Web Development Bootcamp
          </SiteHeroHeading>

          <SiteHeroDescription>
            Struggling to learn alone? With Bearmentor Online Bootcamp, learn
            the fundamentals, build real-world projects, and upgrade your
            career. Alongside friends and professional mentors for 6 months.
          </SiteHeroDescription>

          <ButtonGroup>
            <ButtonAnchor href="/register" mode="cta" display="with-icon">
              <IconBootcamp className="size-4" /> Register to Join Bootcamp
            </ButtonAnchor>
            <ButtonAnchor
              href="https://bearmentor.com"
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
