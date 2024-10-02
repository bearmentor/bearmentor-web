import { redirect } from "@remix-run/node"

export type ConfigRedirect = {
  path: string
  url?: string
  to?: string
}

export function shouldRedirect(request: Request) {
  const url = new URL(request.url)
  return !url.searchParams.has("preview")
}

export function redirectRouteToURL(
  request: Request,
  configRedirects: ConfigRedirect[],
) {
  const url = new URL(request.url)

  const foundItem = configRedirects.find(
    item => item.path.trim() === url.pathname,
  )

  // TODO: Redirect to user or organization page

  if (!foundItem) return redirect("/")
  if (foundItem.url && !foundItem.to) return redirect(foundItem.url)
  if (!foundItem.url && foundItem.to) return redirect(foundItem.to)

  return null
}
