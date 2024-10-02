import { configSite } from "~/configs/site"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <section id="footer" className="mt-96 p-2">
      <footer className="rounded-xl bg-emerald-950 p-10">
        <p className="text-center text-xs text-emerald-100">
          &copy; {currentYear} {configSite.name}
        </p>
      </footer>
    </section>
  )
}
