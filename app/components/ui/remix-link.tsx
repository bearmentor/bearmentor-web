import {
  Link as RemixLink,
  NavLink as RemixNavLink,
  type LinkProps as RemixLinkProps,
  type NavLinkProps as RemixNavLinkProps,
} from "@remix-run/react"
import { useLocation, type To } from "react-router-dom"

export { type RemixLinkProps as LinkProps }

type ModifiedLinkProps = {
  isExternal?: boolean
}

export function useToPreview(to: To) {
  const location = useLocation()
  const hasPreview = new URLSearchParams(location.search).has("preview")
  const toWhere = hasPreview ? `${to}?preview` : to

  return { toWhere, hasPreview }
}

export function Link({ to, ...props }: RemixLinkProps & ModifiedLinkProps) {
  const { toWhere } = useToPreview(to)

  return <RemixLink {...props} to={toWhere} />
}

export function NavLink({
  to,
  isExternal,
  ...props
}: RemixNavLinkProps & ModifiedLinkProps) {
  const { toWhere, hasPreview } = useToPreview(to)

  return (
    <RemixNavLink
      {...props}
      to={toWhere}
      prefetch="intent"
      target={!hasPreview && isExternal ? "_blank" : undefined}
      rel={!hasPreview && isExternal ? "noreferrer noopener" : undefined}
    />
  )
}
