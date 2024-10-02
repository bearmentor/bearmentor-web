import { NavLinkProps } from "@remix-run/react"
import { type VariantProps } from "class-variance-authority"

import { Button, buttonVariants } from "~/components/ui/button"
import { Link, NavLink, type LinkProps } from "~/components/ui/remix-link"
import { cn } from "~/utils/cn"

interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
}

const ButtonLink = ({
  variant,
  size,
  mode,
  className,
  children,
  disabled,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size, mode, className }),
        disabled && "pointer-events-none opacity-50",
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
ButtonLink.displayName = "ButtonLink"

interface ButtonNavLinkProps
  extends NavLinkProps,
    VariantProps<typeof buttonVariants> {}

const ButtonNavLink = ({
  variant,
  size,
  mode,
  className,
  children,
  ...props
}: ButtonNavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={cn(buttonVariants({ variant, size, mode, className }))}
    >
      {children}
    </NavLink>
  )
}
ButtonNavLink.displayName = "ButtonNavLink"

interface ButtonLinkIconProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {}

function ButtonChildLink({ ...props }: ButtonLinkIconProps) {
  return (
    <Button asChild>
      <Link {...props}>Back to Home</Link>
    </Button>
  )
}

export { ButtonLink, ButtonNavLink, ButtonChildLink }
