/**
 * EDITME: Meta Config
 *
 * Meta data for SEO purpose and Remix meta function
 */

import { configSite } from "~/configs/site"

const isDevelopment = process.env.NODE_ENV === "development"

export const configMeta = {
  defaultName: configSite.name,
  defaultTitle: configSite.title,
  defaultDescription: configSite.description,
  defaultSeparator: "—",
  domain: configSite.domain,
  url: isDevelopment ? "http://localhost:3000" : `https://${configSite.domain}`,
  theme_color: "#fffbeb",
  background_color: "#fffbeb",
  locale: "en_US",
  canonicalPath: "/",
  ogType: "website",
  ogImageAlt: configSite.title,
  ogImageType: "image/png",
  ogImagePath: "/brand/bearmentor-og.png", // Recommended: 1200 x 630
  twitterImagePath: "/brand/bearmentor-twitter.png", // Recommended: 1024 x 512
  fbAppId: "",
  author: configSite.author,
  company: configSite.company,
}
