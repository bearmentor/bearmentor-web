import { type MetaFunction } from "@remix-run/node"

import { ButtonGroup } from "~/components/ui/button-group"
import { ButtonLink } from "~/components/ui/button-link"
import {
  SiteHero,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { createMeta } from "~/utils/meta"

export const meta: MetaFunction = () => createMeta({})

export default function IndexRoute() {
  return (
    <>
      <Hero />
      <Mentors />
    </>
  )
}

function Hero() {
  return (
    <SiteHero backgroundImage="/backgrounds/home.jpg">
      <aside className="max-w-xl space-y-6">
        <SiteHeroHeading>Grow your career in tech with mentors</SiteHeroHeading>

        <SiteHeroDescription>
          Struggling to learn alone? With Bearmentor, achieve your goals
          together with supportive community of mentors and professionals.
        </SiteHeroDescription>

        <ButtonGroup>
          <ButtonLink to="/bootcamp" mode="cta">
            Join Online Bootcamp
          </ButtonLink>
          <ButtonLink to="/mentorship" mode="cta" variant="secondary">
            Private Mentorship
          </ButtonLink>
        </ButtonGroup>
      </aside>
    </SiteHero>
  )
}

function Mentors() {
  return (
    <section className="site-section">
      <h2>High Quality Mentors</h2>
    </section>
  )
}
