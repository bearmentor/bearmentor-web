import { useState } from "react"

import { IconMenu } from "~/components/icons/iconify"
import { Logo } from "~/components/shared/logo"
import { Button } from "~/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import { NavLink } from "~/components/ui/remix-link"
import { NavLinks, type NavLinkItem } from "~/modules/site/navlinks"

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
    <div className="fixed z-50 w-full select-none items-center justify-center px-0 py-2 md:flex md:py-4">
      <SiteNavbarLarge />
      <SiteNavbarSmall />
    </div>
  )
}

export function SiteNavbarLarge() {
  return (
    <nav className="hidden rounded-full border border-border bg-background bg-gradient-to-b from-amber-50 to-amber-100 py-1 pl-6 pr-1 shadow md:flex">
      <ul className="flex flex-wrap items-center justify-between gap-5 lg:gap-10">
        <NavLinks navLinks={leftNavLinks} />
        <li>
          <NavLink
            to="/"
            className="focus-ring block transition hover:scale-105"
          >
            <Logo />
          </NavLink>
        </li>
        <NavLinks navLinks={rightNavLinks} />
      </ul>
    </nav>
  )
}

export function SiteNavbarSmall() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="px-2">
      <div className="rounded-3xl border border-border bg-background bg-gradient-to-b from-amber-50 to-amber-100 p-1 pr-2 shadow md:hidden">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="focus-ring block"
            onClick={handleLinkClick}
          >
            <Logo />
          </NavLink>

          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IconMenu />
              <span className="sr-only">Menu</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent>
        <ul className="mt-2 flex flex-col items-end gap-4 rounded-3xl border border-border bg-amber-100 bg-background p-4 shadow md:hidden">
          <NavLinks navLinks={leftNavLinks} onClick={handleLinkClick} />
          <NavLinks navLinks={rightNavLinks} onClick={handleLinkClick} />
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
