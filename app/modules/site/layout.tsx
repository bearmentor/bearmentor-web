import { SiteFloatingButton } from "~/modules/site/floating-button"
import { SiteFooter } from "~/modules/site/footer"
import { SiteNavbar } from "~/modules/site/navbar"

export function SiteLayout({ children }: React.ComponentProps<"main">) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbar />

      <SiteFloatingButton />

      <main className="flex-[1]">{children}</main>

      <SiteFooter />
    </div>
  )
}
