import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { IconLeaf } from "~/components/icons/iconify"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { ButtonGroup } from "~/components/ui/button-group"
import { ButtonLink } from "~/components/ui/button-link"
import { dataMentors } from "~/data/mentors"
import { dataMentorsCompanies } from "~/data/mentors-companies"
import {
  SiteHero,
  SiteHeroDescription,
  SiteHeroHeading,
} from "~/modules/site/hero"
import { createMeta } from "~/utils/meta"
import { getNameInitials } from "~/utils/string"

export const meta: MetaFunction = () => createMeta({})

export const loader = async () => {
  const mentors = dataMentors
  const mentorsCompanies = dataMentorsCompanies

  return json({ mentors, mentorsCompanies })
}

/**
 * Home Page
 */
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
      <aside className="mx-auto w-full max-w-6xl space-y-6">
        <SiteHeroHeading>Grow your career in tech with mentors</SiteHeroHeading>

        <SiteHeroDescription>
          Struggling to learn alone? With Bearmentor, achieve your goals
          together with supportive community of mentors and professionals.
        </SiteHeroDescription>

        <ButtonGroup>
          <ButtonLink to="/bootcamp" mode="cta" display="with-icon">
            <IconLeaf className="size-6" /> Join Online Bootcamp
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
  const { mentors, mentorsCompanies } = useLoaderData<typeof loader>()

  return (
    <section className="site-section space-y-10">
      <header className="space-y-2">
        <span className="text-3xl">🌱 🌿 🌳</span>
        <h2>High Quality Mentors</h2>
        <p className="max-w-lg text-balance">
          With true experience between 3 to 14 years of experience in the
          software industry, from various companies & organizations
        </p>
      </header>

      <ul className="flex max-w-5xl flex-wrap gap-6">
        {mentors.map(mentor => (
          <li
            key={mentor.slug}
            className="flex w-28 flex-col items-center gap-1"
          >
            <Avatar className="size-24">
              <AvatarImage src={mentor.imageURL} />
              <AvatarFallback className="text-3xl">
                {getNameInitials(mentor.name)}
              </AvatarFallback>
            </Avatar>

            <span className="text-center text-xs">{mentor.name}</span>
          </li>
        ))}
      </ul>

      <ul className="flex max-w-5xl flex-wrap gap-12">
        {mentorsCompanies.map(mentorCompany => (
          <li
            key={mentorCompany.slug}
            className="flex w-28 flex-col items-center gap-1"
          >
            <span className="text-center text-xl font-bold">
              {mentorCompany.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
