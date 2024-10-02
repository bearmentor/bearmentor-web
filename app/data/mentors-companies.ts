import mentorCompaniesJSON from "~/data/mentors-companies.json"
import { generateSlug } from "~/utils/string"

const mentorCompanies: MentorCompany[] = mentorCompaniesJSON

export type MentorCompany = {
  slug?: string
  name: string
  imageURL: string
  url: string
}

export const dataMentorsCompanies: MentorCompany[] = mentorCompanies.map(
  company => ({
    ...company,
    slug: generateSlug(company.name),
  }),
)
