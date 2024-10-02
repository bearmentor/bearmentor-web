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
import { type Mentor } from "~/data/mentors"
import { type MentorCompany } from "~/data/mentors-companies"
import { SectionExplain } from "~/modules/site/section-explain"
import { getNameInitials } from "~/utils/string"

export function Mentors({
  mentors,
  mentorsCompanies,
}: {
  mentors: Mentor[]
  mentorsCompanies: MentorCompany[]
}) {
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
