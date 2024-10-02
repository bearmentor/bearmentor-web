import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import {
  EmojiHerb,
  EmojiSeedling,
  EmojiTree,
} from "~/components/emojis/iconify"
import { IconBootcamp, IconMentorship } from "~/components/icons/iconify"
import { Anchor } from "~/components/ui/anchor"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { ButtonGroup } from "~/components/ui/button-group"
import { ButtonLink } from "~/components/ui/button-link"
import { Flex } from "~/components/ui/flex"
import { dataMentors } from "~/data/mentors"
import { dataMentorsCompanies } from "~/data/mentors-companies"
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

  return json({ mentors, mentorsCompanies, techStackItems })
}

/**
 * Home Page
 */
export default function IndexRoute() {
  return (
    <div className="space-y-6">
      <Hero />
      <Mentors />
      <TechStack />
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
            <IconBootcamp className="size-6" /> Join Online Bootcamp
          </ButtonLink>
          <ButtonLink
            to="/mentorship"
            mode="cta"
            display="with-icon"
            variant="secondary"
          >
            <IconMentorship className="size-6" /> Private Mentorship
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
      <ul className="flex max-w-5xl flex-wrap gap-6">
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

      <ul className="flex max-w-4xl flex-wrap gap-10">
        {mentorsCompanies.map(mentorCompany => (
          <li
            key={mentorCompany.slug}
            className="flex w-24 flex-col items-center gap-1 sm:w-28"
          >
            <Anchor href={mentorCompany.url} className="hover-opacity">
              <span className="text-md text-center font-bold sm:text-xl">
                {mentorCompany.name}
              </span>
            </Anchor>
          </li>
        ))}
      </ul>

      <ButtonGroup>
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
      flair="📖 🧰 ⚙️️"
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
