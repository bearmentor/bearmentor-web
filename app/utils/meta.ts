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
}

export function createMeta({
  title = configMeta.defaultTitle,
  description = configMeta.defaultDescription,
}: GenerateMetaParams) {
  return [
    { title: title ? `${title} · Bearmentor` : title },
    { name: "description", content: description },
  ]
}
