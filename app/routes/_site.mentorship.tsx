import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { IconMentorship, IconRead } from "~/components/icons/iconify"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonGroup } from "~/components/ui/button-group"
import { dataFeaturedProjects } from "~/data/featured-projects"
import { dataFeaturedReviews } from "~/data/featured-reviews"
import { dataTechStackItems } from "~/data/tech-stack-items"
import { FeaturedProjects } from "~/modules/site/featured-projects"
import { FeaturedReviews } from "~/modules/site/featured-reviews"
import {
  SiteHero,
  SiteHeroCenter,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { TechStack } from "~/modules/site/tech-stack"
import { createMeta } from "~/utils/meta"

export const meta: MetaFunction = () =>
  createMeta({
    title: "Private 1-on-1 Mentorship",
    description:
      "Struggling to learn alone? With Bearmentor Private Mentorship, achieve your personal goals with a dedicated mentor. Customize everything you need.",
  })

export const loader = async () => {
  // In the future will fetch some data from API or database
  return json({
    techStackItems: dataTechStackItems,
    featuredProjects: dataFeaturedProjects,
    featuredReviews: dataFeaturedReviews,
  })
}

export default function MentorshipRoute() {
  const { techStackItems, featuredReviews, featuredProjects } =
    useLoaderData<typeof loader>()

  return (
    <div className="space-y-10">
      <Hero />
      <TechStack techStackItems={techStackItems} />
      <FeaturedProjects projects={featuredProjects} />
      {/* Syllabus / Curriculum */}
      <FeaturedReviews reviews={featuredReviews} />
    </div>
  )
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
