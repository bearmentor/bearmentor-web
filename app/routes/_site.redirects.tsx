import { json, type MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { Anchor } from "~/components/ui/anchor"
import { Link } from "~/components/ui/remix-link"
import { configRedirects } from "~/configs/redirects"
import { SiteHero, SiteHeroHeading } from "~/modules/site/hero"
import { createMeta } from "~/utils/meta"
import { createSitemap } from "~/utils/sitemap"
import { pluralizeWord } from "~/utils/string"

export const handle = createSitemap("/redirects", 0.1)

export const meta: MetaFunction = () =>
  createMeta({
    title: "Redirects",
    description: "List of redirects.",
  })

export const loader = () => {
  const redirects = configRedirects
  return json({ redirects })
}

export default function RedirectsRoute() {
  return (
    <>
      <Hero />
      <Detail />
    </>
  )
}

function Hero() {
  return (
    <SiteHero overlayColor="bg-gradient-to-b from-stone-700 to-stone-900">
      <aside className="flex w-full flex-col items-center">
        <SiteHeroHeading>Redirects</SiteHeroHeading>
      </aside>
    </SiteHero>
  )
}

function Detail() {
  const { redirects } = useLoaderData<typeof loader>()

  return (
    <section className="site-section prose-config">
      <p>
        {pluralizeWord("path", redirects.length)} redirect paths to URLs and
        other pages.
      </p>

      <ul>
        {redirects.map(redirectItem => (
          <li key={redirectItem.path}>
            <Link to={redirectItem.path}>
              <code>{redirectItem.path}</code>
            </Link>

            <span className="text-muted-foreground"> &rarr; </span>

            {redirectItem.url && (
              <Anchor href={redirectItem.url}>
                <code>{redirectItem.url}</code>
              </Anchor>
            )}

            {redirectItem.to && (
              <Link to={redirectItem.to}>
                <code>{redirectItem.to}</code>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
