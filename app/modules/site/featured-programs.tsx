import {
  EmojiCamping,
  EmojiCastle,
  EmojiSchool,
} from "~/components/emojis/iconify"
import {
  IconBootcamp,
  IconMentorship,
  IconRead,
} from "~/components/icons/iconify"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonGroup } from "~/components/ui/button-group"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Flex } from "~/components/ui/flex"
import { SectionExplain } from "~/modules/site/section-explain"

export function FeaturedPrograms() {
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
