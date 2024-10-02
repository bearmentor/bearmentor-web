import {
  EmojiBook,
  EmojiLaptop,
  EmojiToolbox,
} from "~/components/emojis/iconify"
import { Anchor } from "~/components/ui/anchor"
import { Flex } from "~/components/ui/flex"
import { type TechStackItem } from "~/data/tech-stack-items"
import { SectionExplain } from "~/modules/site/section-explain"

export function TechStack({
  techStackItems,
}: {
  techStackItems: TechStackItem[]
}) {
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
