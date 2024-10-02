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
          "rounded-xl p-8 sm:p-16 md:p-24 lg:p-32",
          !backgroundImage ? overlayColor || "bg-amber-950" : "bg-transparent",
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function SiteHeroCenter({ children }: React.ComponentProps<"div">) {
  return (
    <div className="flex max-w-3xl flex-col items-center space-y-6">
      {children}
    </div>
  )
}

export function SiteHeroHeading({ children }: React.ComponentProps<"h1">) {
  return (
    <h1 className="text-4xl font-bold text-amber-50 sm:text-5xl md:text-6xl">
      {children}
    </h1>
  )
}

export function SiteHeroDescription({ children }: React.ComponentProps<"p">) {
  return (
    <p className="max-w-xl text-sm text-white sm:text-base md:text-lg">
      {children}
    </p>
  )
}
