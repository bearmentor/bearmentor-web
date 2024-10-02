import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { IconBootcamp, IconRead } from "~/components/icons/iconify"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonGroup } from "~/components/ui/button-group"
import { dataFeaturedProjects } from "~/data/featured-projects"
import { dataFeaturedReviews } from "~/data/featured-reviews"
import { dataMentors } from "~/data/mentors"
import { dataMentorsCompanies } from "~/data/mentors-companies"
import { dataTechStackItems } from "~/data/tech-stack-items"
import { FeaturedProjects } from "~/modules/site/featured-projects"
import { FeaturedReviews } from "~/modules/site/featured-reviews"
import {
  SiteHero,
  SiteHeroCenter,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { Mentors } from "~/modules/site/mentors"
import { TechStack } from "~/modules/site/tech-stack"
import { createMeta } from "~/utils/meta"

export const meta: MetaFunction = () =>
  createMeta({
    title: "Online Full Stack Web Development Bootcamp",
    description:
      "Struggling to learn alone? With Bearmentor Online Bootcamp, learn fundamentals and build projects for 6 months.",
  })

export const loader = async () => {
  // In the future will fetch some data from API or database
  return json({
    mentors: dataMentors,
    mentorsCompanies: dataMentorsCompanies,
    techStackItems: dataTechStackItems,
    featuredProjects: dataFeaturedProjects,
    featuredReviews: dataFeaturedReviews,
  })
}

export default function BootcampRoute() {
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
      <FeaturedProjects projects={featuredProjects} />
      {/* Syllabus / Curriculum */}
      <FeaturedReviews reviews={featuredReviews} />
    </div>
  )
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
