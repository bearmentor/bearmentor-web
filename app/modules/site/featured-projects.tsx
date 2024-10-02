import {
  EmojiBall,
  EmojiCooking,
  EmojiIsland,
} from "~/components/emojis/iconify"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Flex } from "~/components/ui/flex"
import { type Project } from "~/data/featured-projects"
import { SectionExplain } from "~/modules/site/section-explain"

export function FeaturedProjects({ projects }: { projects: Project[] }) {
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
        {projects.map(featuredProject => (
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
