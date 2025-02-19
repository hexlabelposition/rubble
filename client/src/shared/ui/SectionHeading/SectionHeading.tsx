interface SectionsHeadingProps {
  label: string
  title: string
  description: string
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionsHeadingProps): JSX.Element {
  return (
    <header className="desktop:mb-20 mb-14 text-center">
      <span className="label-for-section">{label}</span>

      <h2 className="desktop:mb-6 mb-4 text-pretty">{title}</h2>

      <p className="desktop:whitespace-normal whitespace-pre-wrap">
        {description}
      </p>
    </header>
  )
}
