import {
  EmojiStudent,
  EmojiStudentMan,
  EmojiStudentWoman,
} from "~/components/emojis/iconify"
import { Card } from "~/components/ui/card"
import { Flex } from "~/components/ui/flex"
import { type Review } from "~/data/reviews"
import { SectionExplain } from "~/modules/site/section-explain"

export function FeaturedReviews({ reviews }: { reviews: Review[] }) {
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
