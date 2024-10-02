import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import {
  EmojiBall,
  EmojiBook,
  EmojiCamping,
  EmojiCastle,
  EmojiCooking,
  EmojiHerb,
  EmojiIsland,
  EmojiLaptop,
  EmojiSchool,
  EmojiSeedling,
  EmojiStudent,
  EmojiStudentMan,
  EmojiStudentWoman,
  EmojiToolbox,
  EmojiTree,
} from "~/components/emojis/iconify"
import {
  IconBootcamp,
  IconMentorship,
  IconRead,
} from "~/components/icons/iconify"
import { Anchor } from "~/components/ui/anchor"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonGroup } from "~/components/ui/button-group"
import { ButtonLink } from "~/components/ui/button-link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Flex } from "~/components/ui/flex"
import { dataFeaturedProjects } from "~/data/featured-projects"
import { dataMentors } from "~/data/mentors"
import { dataMentorsCompanies } from "~/data/mentors-companies"
import { dataReviews } from "~/data/reviews"
import { dataTechStackItems } from "~/data/tech-stack-items"
import {
  SiteHero,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { SectionExplain } from "~/modules/site/section-explain"
import { createMeta } from "~/utils/meta"
import { getNameInitials } from "~/utils/string"

export const meta: MetaFunction = () => createMeta({})

export const loader = async () => {
  const mentors = dataMentors
  const mentorsCompanies = dataMentorsCompanies
  const techStackItems = dataTechStackItems
  const reviews = dataReviews
  const featuredProjects = dataFeaturedProjects

  return json({
    mentors,
    mentorsCompanies,
    techStackItems,
    reviews,
    featuredProjects,
  })
}

/**
 * Home Page
 */
export default function IndexRoute() {
  return (
    <div className="space-y-10">
      <Hero />
      <Mentors />
      <TechStack />
      <FeaturedPrograms />
      <Reviews />
      <FeaturedProjects />
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

function Mentors() {
  const { mentors, mentorsCompanies } = useLoaderData<typeof loader>()

  return (
    <SectionExplain
      flair={
        <Flex>
          <EmojiSeedling className="size-10" />
          <EmojiHerb className="size-10" />
          <EmojiTree className="size-10" />
        </Flex>
      }
      heading="High Quality Mentors"
      description="With true experience between 3 to 14 years of experience in the
          software industry, from various companies & organizations"
    >
      <ul
        id="home-mentors"
        className="flex max-w-5xl flex-wrap justify-center gap-6 sm:justify-start"
      >
        {mentors.map(mentor => (
          <li
            key={mentor.slug}
            className="flex w-20 flex-col items-center gap-2 sm:w-28"
          >
            <Avatar className="size-20 sm:size-24">
              <AvatarImage src={`${mentor.imageURL}-/preview/200x200/`} />
              <AvatarFallback className="text-3xl">
                {getNameInitials(mentor.name)}
              </AvatarFallback>
            </Avatar>

            <span className="text-center text-xs">{mentor.name}</span>
          </li>
        ))}
      </ul>

      <ul
        id="home-mentors-companies"
        className="flex max-w-4xl flex-wrap justify-center gap-6 px-2 sm:justify-start"
      >
        {mentorsCompanies.map(mentorCompany => (
          <li
            key={mentorCompany.slug}
            className="flex w-20 flex-col items-center gap-1 sm:w-28"
          >
            <Anchor
              href={mentorCompany.url}
              className="hover-opacity text-center"
            >
              <span className="text-md font-bold sm:text-xl">
                {mentorCompany.name}
              </span>
            </Anchor>
          </li>
        ))}
      </ul>

      <ButtonGroup className="flex-col sm:flex-row">
        <ButtonLink to="/bootcamp" display="with-icon">
          <IconBootcamp className="size-4" /> Join Online Bootcamp
        </ButtonLink>
        <ButtonLink to="/mentorship" display="with-icon" variant="secondary">
          <IconMentorship className="size-4" /> Private Mentorship
        </ButtonLink>
      </ButtonGroup>
    </SectionExplain>
  )
}

function TechStack() {
  const { techStackItems } = useLoaderData<typeof loader>()

  return (
    <SectionExplain
      flair={
        <Flex>
          <EmojiBook className="size-10" />
          <EmojiToolbox className="size-10" />
          <EmojiLaptop className="size-10" />
        </Flex>
      }
      heading="Curriculum, Tech Stack, Tools"
      description="Ever growing collection of learning resources and things to use."
    >
      <ul className="flex max-w-5xl flex-wrap gap-3 sm:gap-6">
        {techStackItems.map(techStackItem => (
          <li
            key={techStackItem.slug}
            className="flex flex-col items-center gap-1"
          >
            <Anchor href={techStackItem.url} className="hover-opacity">
              <span className="sm:text-md text-center text-base font-bold">
                {techStackItem.name}
              </span>
            </Anchor>
          </li>
        ))}
      </ul>
    </SectionExplain>
  )
}

function FeaturedPrograms() {
  return (
    <SectionExplain
      flair={
        <Flex>
          <EmojiCamping className="size-10" />
          <EmojiSchool className="size-10" />
          <EmojiCastle className="size-10" />
        </Flex>
      }
      heading="Featured Programs"
      description="Choose based on your goal, preference, timeline, and budget."
    >
      <Card size="tall" className="border-teal-200 bg-teal-100">
        <CardHeader>
          <CardTitle size="featured" className="text-teal-800">
            Full Stack Web Development: Online Bootcamp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ButtonGroup>
            <ButtonAnchor href="/register" display="with-icon">
              <IconBootcamp className="size-4" /> Register to Join Bootcamp
            </ButtonAnchor>
            <ButtonAnchor
              href="https://bearmentor.com"
              display="with-icon"
              variant="ghost"
            >
              <IconRead className="size-4" /> Learn More
            </ButtonAnchor>
          </ButtonGroup>
        </CardContent>
      </Card>

      <Card size="tall" className="border-cyan-200 bg-cyan-100">
        <CardHeader>
          <CardTitle size="featured" className="text-cyan-800">
            Private 1-on-1 Mentorship: Online or Offline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ButtonGroup>
            <ButtonAnchor href="/request" display="with-icon">
              <IconMentorship className="size-4" /> Request for Mentorship
            </ButtonAnchor>
            <ButtonAnchor
              href="https://bearmentor.com/mentorship"
              display="with-icon"
              variant="ghost"
            >
              <IconRead className="size-4" /> Learn More
            </ButtonAnchor>
          </ButtonGroup>
        </CardContent>
      </Card>
    </SectionExplain>
  )
}

function Reviews() {
  const { reviews } = useLoaderData<typeof loader>()

  return (
    <SectionExplain
      flair={
        <Flex>
          <EmojiStudent className="size-10" />
          <EmojiStudentWoman className="size-10" />
          <EmojiStudentMan className="size-10" />
        </Flex>
      }
      heading="Trusted by 100+ Learners"
      description="What they say about us the mentors and learning experience. The student reviews and testimonials."
    >
      <ul className="flex max-w-5xl flex-wrap gap-3 sm:gap-6">
        {reviews.map(review => (
          <li key={review.user.username}>
            <Card size="base">
              <p>{review.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </SectionExplain>
  )
}

function FeaturedProjects() {
  const { featuredProjects } = useLoaderData<typeof loader>()

  return (
    <SectionExplain
      flair={
        <Flex>
          <EmojiIsland className="size-10" />
          <EmojiCooking className="size-10" />
          <EmojiBall className="size-10" />
        </Flex>
      }
      heading="Alumni's Portfolio Projects"
      description="Things we can learn to build. Proven and published by the students as well."
    >
      <ul className="flex max-w-5xl flex-wrap gap-3 sm:gap-6">
        {featuredProjects.map(featuredProject => (
          <li key={featuredProject.id}>
            <Card size="tall" className="max-w-lg">
              <CardHeader>
                <CardTitle>{featuredProject.title}</CardTitle>
                <CardDescription>{featuredProject.description}</CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </SectionExplain>
  )
}
