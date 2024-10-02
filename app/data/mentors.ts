import { generateSlug } from "~/utils/string"

export type Mentor = {
  slug: string
  name: string
  imageURL: string
  title: string
  company: string
  location: string
  countryCode: string
}

const mentorNames = [
  "M Haidar Hanif",
  "Naufaldi Rafif Satriya",
  "Ben Nata",
  "Nadia Maharani",
  "Raditya Dwisatrio Santoso",
  "Danny Dwi Cahyono",
  "Dion Edo Fananie",
  "Vicky Herdiansyah Adri",
  "M Ardhana Wahyu Nugraha",
  "Aufa Billah Putra Jazama",
  "Guntur Kurniawan Heryanto",
  "Windyasari Septriani",
  "Adhy Wiranata",
]

export const dataMentors: Mentor[] = mentorNames.map(name => ({
  slug: generateSlug(name),
  name: name,
  imageURL: "https://ucarecdn.com/3e59cef1-1404-432d-b7f0-d7a47f41570a/",
  title: "Mentor Title",
  company: "Mentor Company",
  location: "Mentor Location",
  countryCode: "ID",
}))
