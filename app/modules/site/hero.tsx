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
    <div
      className={cn(
        "flex max-w-3xl flex-col items-start space-y-6 md:items-center",
        "text-left md:text-center",
      )}
    >
      {children}
    </div>
  )
}

export function SiteHeroHeading({ children }: React.ComponentProps<"h1">) {
  return (
    <h1 className="text-balance text-3xl font-bold text-amber-50 sm:text-4xl md:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}

export function SiteHeroDescription({ children }: React.ComponentProps<"p">) {
  return (
    <p className="max-w-2xl text-balance text-sm text-white sm:text-sm md:text-base lg:text-lg">
      {children}
    </p>
  )
}
