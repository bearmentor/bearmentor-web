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
    title: "Online Full Stack Web Development Bootcamp",
    description:
      "Struggling to learn alone? With Bearmentor Online Bootcamp, learn fundamentals and build projects for 6 months.",
  })

export default function BootcampRoute() {
  return <Hero />
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-yellow-700 to-yellow-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroCenter>
          <SiteHeroHeading>
            Online Full Stack Web Development Bootcamp
          </SiteHeroHeading>

          <SiteHeroDescription>
            Struggling to learn and applying to real projects? With Bearmentor
            Online Bootcamp, learn the fundamentals and build real-world
            published projects. Alongside friends and guided by professional
            mentors for 6 months.
          </SiteHeroDescription>

          <ButtonLink to="/register" mode="cta">
            Register to Join Bootcamp
          </ButtonLink>
        </SiteHeroCenter>
      </aside>
    </SiteHero>
  )
}
