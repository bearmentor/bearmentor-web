/**
 * Metadata Generator
 *
 * Validate using:
 * - https://opengraph.dev
 * - https://opengraph.xyz
 */

import { configMeta } from "~/configs/meta"

interface GenerateMetaParams {
  title?: string
  description?: string
  canonicalPath?: string
  url?: string
}

export function createMeta({
  title = configMeta.defaultTitle,
  description = configMeta.defaultDescription,
  canonicalPath = "/",
  url = configMeta.url,
}: GenerateMetaParams) {
  return [
    {
      title: title ? `${title} · Bearmentor` : title,
    },
    {
      name: "description",
      content: description,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalPath ? `${configMeta.url}${canonicalPath}` : url,
    },
  ]
}
