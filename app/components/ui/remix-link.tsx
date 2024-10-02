import {
  Link as RemixLink,
  NavLink as RemixNavLink,
  type LinkProps as RemixLinkProps,
  type NavLinkProps as RemixNavLinkProps,
} from "@remix-run/react"
import { useLocation, type To } from "react-router-dom"

export { type RemixLinkProps as LinkProps }

export function useToPreview(to: To) {
  const location = useLocation()
  const hasPreview = new URLSearchParams(location.search).has("preview")
  const toWhere = hasPreview ? `${to}?preview` : to
  return toWhere
}

export function Link({ to, ...props }: RemixLinkProps) {
  const toWhere = useToPreview(to)
  return <RemixLink {...props} to={toWhere} />
}

export function NavLink({ to, ...props }: RemixNavLinkProps) {
  const toWhere = useToPreview(to)
  return <RemixNavLink {...props} to={toWhere} />
}
