import { Logo } from "~/components/shared/logo"
import { NavLink } from "~/components/ui/remix-link"

type NavLink = {
  text: string
  to: string
  mode?: "button"
}

const leftNavLinks: NavLink[] = [
  { text: "Mentors", to: "/mentors" },
  { text: "Members", to: "/members" },
  { text: "Projects", to: "/projects" },
]

const rightNavLinks: NavLink[] = [
  { text: "Private Mentorship", to: "/mentorship" },
  { text: "Join Bootcamp", to: "/bootcamp", mode: "button" },
]

export function SiteNavbarLarge() {
  return (
    <div className="fixed hidden w-full items-center justify-center px-0 py-4 md:flex">
      <nav className="rounded-full border border-border bg-background bg-gradient-to-b from-amber-50 to-amber-100 px-6 py-1 shadow lg:px-8 lg:py-2">
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
    </div>
  )
}

export function NavLinks({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <>
      {navLinks.map(({ text, to }) => (
        <li key={to}>
          <NavLink
            to={to}
            className="hover-opacity font-semibold tracking-tighter"
          >
            {text}
          </NavLink>
        </li>
      ))}
    </>
  )
}
