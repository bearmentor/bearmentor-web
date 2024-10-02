import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonNavLink } from "~/components/ui/button-link"
import { NavLink } from "~/components/ui/remix-link"
import { cn } from "~/utils/cn"

export type NavLinkItem = {
  text: string
  to: string
  mode?: "external"
  component?: "link" | "button-link" | "button-anchor"
}

export function NavLinks({
  navLinks,
  onClick,
}: {
  navLinks: NavLinkItem[]
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <>
      {navLinks.map(({ text, to, mode, component }) => {
        const isExternal = mode === "external"

        return (
          <li key={to}>
            {!component && (
              <NavLink
                onClick={onClick}
                to={to}
                isExternal={isExternal}
                className={({ isActive }) =>
                  cn(
                    "focus-ring hover-opacity font-semibold tracking-tighter",
                    isActive && "text-primary",
                  )
                }
              >
                {text}
              </NavLink>
            )}

            {component === "button-link" && (
              <ButtonNavLink
                onClick={onClick}
                to={to}
                variant="tertiary"
                mode="navbar"
              >
                {text}
              </ButtonNavLink>
            )}

            {component === "button-anchor" && (
              <ButtonAnchor
                onClick={onClick}
                href={to}
                variant="tertiary"
                mode="navbar"
              >
                {text}
              </ButtonAnchor>
            )}
          </li>
        )
      })}
    </>
  )
}
