import mentorsJSON from "~/data/mentors.json"
import { generateSlug } from "~/utils/string"

export type Mentor = {
  slug: string
  name: string
  imageURL: string
  title: string
  company: string
  location: string
  countryCode: string
  links?: {
    website?: string
    linkedin?: string
    telegram?: string
    twitter?: string
  }[]
}

export const dataMentors: Mentor[] = mentorsJSON.map(mentor => ({
  ...mentor,
  slug: generateSlug(mentor.name),
}))
