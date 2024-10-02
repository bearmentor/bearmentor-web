export function SectionExplain({
  flair = "🐻",
  heading = "Heading",
  description = "Description",
  children,
}: React.ComponentProps<"section"> & {
  flair?: React.ReactNode
  heading?: React.ReactNode
  description?: React.ReactNode
}) {
  return (
    <section className="site-section space-y-10">
      <header className="space-y-2">
        <span className="text-3xl">{flair}</span>
        <h2>{heading}</h2>
        <p className="max-w-lg text-balance">{description}</p>
      </header>

      {children}
    </section>
  )
}
