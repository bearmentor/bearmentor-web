import { Logo } from "~/components/shared/logo"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { ButtonNavLink } from "~/components/ui/button-link"
import { NavLink } from "~/components/ui/remix-link"
import { cn } from "~/utils/cn"

type NavLinkItem = {
  text: string
  to: string
  mode?: "external"
  component?: "link" | "button-link" | "button-anchor"
}

const leftNavLinks: NavLinkItem[] = [
  { text: "Mentors", to: "/mentors", mode: "external" },
  { text: "Members", to: "/members", mode: "external" },
  { text: "Projects", to: "/projects", mode: "external" },
]

const rightNavLinks: NavLinkItem[] = [
  { text: "Mentorship", to: "/mentorship" },
  { text: "Join Bootcamp", to: "/bootcamp", component: "button-link" },
]

export function SiteNavbar() {
  return (
    <div className="fixed hidden w-full select-none items-center justify-center px-0 py-4 md:flex">
      <SiteNavbarLarge />
    </div>
  )
}

export function SiteNavbarLarge() {
  return (
    <nav className="rounded-full border border-border bg-background bg-gradient-to-b from-amber-50 to-amber-100 py-1 pl-6 pr-1 shadow">
      <ul className="flex flex-wrap items-center justify-between gap-5 lg:gap-10">
        <NavLinks navLinks={leftNavLinks} />

        <li>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </li>

        <NavLinks navLinks={rightNavLinks} />
      </ul>
    </nav>
  )
}

export function NavLinks({ navLinks }: { navLinks: NavLinkItem[] }) {
  return (
    <>
      {navLinks.map(({ text, to, mode, component }) => {
        const isExternal = mode === "external"

        return (
          <li key={to}>
            {!component && (
              <NavLink
                to={to}
                isExternal={isExternal}
                className={({ isActive }) =>
                  cn(
                    "hover-opacity font-semibold tracking-tighter",
                    isActive && "text-primary",
                  )
                }
              >
                {text}
              </NavLink>
            )}

            {component === "button-link" && (
              <ButtonNavLink to={to} variant="tertiary" mode="navbar">
                {text}
              </ButtonNavLink>
            )}

            {component === "button-anchor" && (
              <ButtonAnchor href={to} variant="tertiary" mode="navbar">
                {text}
              </ButtonAnchor>
            )}
          </li>
        )
      })}
    </>
  )
}
