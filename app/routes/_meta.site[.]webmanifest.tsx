import { type LoaderFunctionArgs } from "@remix-run/node"

import { configMeta } from "~/configs/meta"
import { getDomainUrl } from "~/utils/url.server"

// EDITME: Based on actual size of image assets in /public/manifest
const maskableIconSizes = [512]
const iconSizes = [512]

export function loader({ request }: LoaderFunctionArgs) {
  return {
    id: "/",
    name: configMeta.defaultName,
    short_name: configMeta.defaultName,
    description: configMeta.defaultDescription,
    theme_color: configMeta.theme_color,
    background_color: configMeta.background_color,
    display: "standalone",
    display_override: ["fullscreen", "minimal-ui"],
    orientation: "portrait-primary",
    start_url: getDomainUrl(request),
    scope: getDomainUrl(request),
    icons: [
      ...maskableIconSizes.map(size => ({
        purpose: "maskable",
        src: `/manifest/bearmentor-maskable-${size}.png`,
        type: "image/png",
        sizes: `${size}x${size}`,
      })),
      ...iconSizes.map(size => ({
        src: `/manifest/bearmentor-icon-${size}.png`,
        type: "image/png",
        sizes: `${size}x${size}`,
      })),
    ],
    // screenshots: [
    //   {
    //     src: "/manifest/bearmentor-wide.png",
    //     type: "image/png",
    //     sizes: "720x540",
    //     form_factor: "wide",
    //   },
    //   {
    //     src: "/manifest/bearmentor-narrow.png",
    //     type: "image/png",
    //     sizes: "540x720",
    //     form_factor: "narrow",
    //   },
    // ],
  }
}

// Don't render or return anything default, since we need a JSON response
// Ignore: Generated an empty chunk: "_meta.site_._webmanifest".
