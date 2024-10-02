import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "~/utils/cn"

const buttonVariants = cva(
  "select-none tracking-tight inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/75",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/75",
        tertiary: "bg-amber-900 text-amber-50 hover:bg-amber-800",
        contact: "bg-cyan-600 text-cyan-50 hover:bg-cyan-700",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/75",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        md: "h-10 px-4 py-2 rounded-full",
        sm: "h-9 px-3 rounded-full",
        lg: "h-11 px-8 rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
      mode: {
        navbar: "font-semibold px-5 py-4",
        cta: "text-base px-5 py-2 sm:px-7 sm:py-4 md:px-8 md:py-6",
      },
      display: {
        "with-icon": "gap-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, mode, display, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, mode, display, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
