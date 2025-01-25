import React from 'react'

// Shared - UI
import Typography from '@shared/ui/Typography'

interface SectionsHeadingProps {
  label: string
  title: string
  description: string
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionsHeadingProps): React.JSX.Element {
  return (
    <header className="desktop:mb-20 mb-14 text-center">
      <Typography tag="span" apperance="label" className="label-section">
        {label}
      </Typography>

      <Typography tag="h2" className="desktop:mb-6 mb-4 text-pretty">
        {title}
      </Typography>

      <Typography tag="p" className="line-clamp-2 text-balance">
        {description}
      </Typography>
    </header>
  )
}
