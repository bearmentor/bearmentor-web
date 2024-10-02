import featuredReviewsJSON from "~/data/featured-reviews.json"
import { generateNanoIdShort } from "~/utils/string"

export type Review = {
  id?: string
  text: string
  user: {
    username: string
    name: string
    imageURL: string
  }
}

export const dataFeaturedReviews: Review[] = featuredReviewsJSON.map(
  review => ({
    ...review,
    id: generateNanoIdShort(),
  }),
)
