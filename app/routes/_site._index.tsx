import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { IconBootcamp, IconMentorship } from "~/components/icons/iconify"
import { ButtonGroup } from "~/components/ui/button-group"
import { ButtonLink } from "~/components/ui/button-link"
import { dataFeaturedProjects } from "~/data/featured-projects"
import { dataFeaturedReviews } from "~/data/featured-reviews"
import { dataMentors } from "~/data/mentors"
import { dataMentorsCompanies } from "~/data/mentors-companies"
import { dataTechStackItems } from "~/data/tech-stack-items"
import { FeaturedPrograms } from "~/modules/site/featured-programs"
import { FeaturedProjects } from "~/modules/site/featured-projects"
import { FeaturedReviews } from "~/modules/site/featured-reviews"
import {
  SiteHero,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { Mentors } from "~/modules/site/mentors"
import { TechStack } from "~/modules/site/tech-stack"
import { createMeta } from "~/utils/meta"

export const meta: MetaFunction = () => createMeta({})

export const loader = async () => {
  // In the future will fetch some data from API or database
  return json({
    mentors: dataMentors,
    mentorsCompanies: dataMentorsCompanies,
    techStackItems: dataTechStackItems,
    featuredReviews: dataFeaturedReviews,
    featuredProjects: dataFeaturedProjects,
  })
}

/**
 * Home Page
 */
export default function IndexRoute() {
  const {
    mentors,
    mentorsCompanies,
    techStackItems,
    featuredReviews,
    featuredProjects,
  } = useLoaderData<typeof loader>()

  return (
    <div className="space-y-10">
      <Hero />
      <Mentors mentors={mentors} mentorsCompanies={mentorsCompanies} />
      <TechStack techStackItems={techStackItems} />
      <FeaturedPrograms />
      <FeaturedReviews reviews={featuredReviews} />
      <FeaturedProjects projects={featuredProjects} />
    </div>
  )
}

function Hero() {
  return (
    <SiteHero backgroundImage="/backgrounds/home.jpg">
      <aside className="mx-auto w-full max-w-5xl space-y-6">
        <SiteHeroHeading>Grow your career in tech with mentors</SiteHeroHeading>

        <SiteHeroDescription>
          Struggling to learn alone? With Bearmentor, achieve your goals
          together with supportive community of mentors and professionals.
        </SiteHeroDescription>

        <ButtonGroup>
          <ButtonLink to="/bootcamp" mode="cta" display="with-icon">
            <IconBootcamp className="size-4" /> Join Online Bootcamp
          </ButtonLink>
          <ButtonLink
            to="/mentorship"
            mode="cta"
            display="with-icon"
            variant="secondary"
          >
            <IconMentorship className="size-4" /> Private Mentorship
          </ButtonLink>
        </ButtonGroup>
      </aside>
    </SiteHero>
  )
}
