import techStackItemsJSON from "~/data/tech-stack-items.json"
import { generateSlug } from "~/utils/string"

const techStackItems: TechStackItem[] = techStackItemsJSON

export type TechStackItem = {
  slug?: string
  name: string
  description: string
  url: string
}

export const dataTechStackItems: TechStackItem[] = techStackItems.map(
  techStackitem => ({
    ...techStackitem,
    slug: generateSlug(techStackitem.name),
  }),
)
