import { generateSlug } from "~/utils/string"

export type MentorCompany = {
  slug: string
  name: string
  imageURL: string
  url: string
}

const mentorCompanyNames = [
  "Catamyst",
  "BandungDev",
  "eFishery",
  "DKATALIS",
  "Bank Jago",
  "Hijra Bank",
  "Tokopedia",
  "Pegadaian",
  "Tiket.com",
  "BIAENERGI",
  "Fox",
  "Moon",
]

export const dataMentorsCompanies: MentorCompany[] = mentorCompanyNames.map(
  name => ({
    slug: generateSlug(name),
    name: name,
    imageURL: "https://ucarecdn.com/3e59cef1-1404-432d-b7f0-d7a47f41570a/",
    url: "https://example.com",
  }),
)
