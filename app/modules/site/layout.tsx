import { SiteFooter } from "~/modules/site/footer"
import { SiteNavbarLarge } from "~/modules/site/navbar"

export function SiteLayout({ children }: React.ComponentProps<"main">) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbarLarge />

      <main className="flex-[1]">{children}</main>

      <SiteFooter />
    </div>
  )
}
