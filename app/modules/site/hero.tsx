import { cn } from "~/utils/cn"

interface SiteHeroProps extends React.ComponentProps<"section"> {
  backgroundImage?: string
  overlayColor?: string
}

export function SiteHero({
  backgroundImage,
  overlayColor,
  children,
}: SiteHeroProps) {
  return (
    <section id="hero" className="p-2">
      <div
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
        }}
        className={cn(
          "rounded-3xl px-4 pb-8 pt-20 sm:pb-16 sm:pt-24 md:pb-24 md:pt-28 lg:pb-28 lg:pt-36",
          !backgroundImage
            ? overlayColor || "bg-gradient-to-b from-amber-700 to-amber-900"
            : "bg-transparent bg-center",
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function SiteHeroCenter({ children }: React.ComponentProps<"div">) {
  return (
    <div className="flex w-full max-w-4xl flex-col items-start space-y-6 text-left md:items-center md:text-center">
      {children}
    </div>
  )
}

export function SiteHeroHeading({ children }: React.ComponentProps<"h1">) {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-amber-50 sm:text-balance sm:text-4xl md:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}

export function SiteHeroDescription({ children }: React.ComponentProps<"p">) {
  return (
    <p className="max-w-lg text-sm tracking-tight text-white sm:max-w-xl sm:text-sm md:text-balance md:text-base lg:text-lg">
      {children}
    </p>
  )
}
