import featuredProjectsJSON from "~/data/featured-projects.json"
import { generateNanoIdShort } from "~/utils/string"

export type FeaturedProject = {
  id?: string
  title: string
  url: string
  description: string
  repositories: {
    name: string
    url: string
  }[]
}

export const dataFeaturedProjects: FeaturedProject[] = featuredProjectsJSON.map(
  project => ({
    ...project,
    id: generateNanoIdShort(),
  }),
)
