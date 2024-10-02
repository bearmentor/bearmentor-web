import reviewsJSON from "~/data/reviews.json"
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

export const dataReviews: Review[] = reviewsJSON.map(review => ({
  ...review,
  id: generateNanoIdShort(),
}))
