import React from 'react'
import { Typography } from '@shared/ui/Typography'

interface SectionsHeadingProps {
  label: string
  title: string
  description: string
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionsHeadingProps): React.JSX.Element {
  return (
    <header className="desktop:mb-20 mb-14 text-center">
      <span className="border-secondary-200 desktop:mb-8 desktop:h-16 desktop:px-6 text-xxs text-secondary-500 desktop:text-sm mb-6 inline-flex h-18 items-center justify-center rounded-xs border px-4 font-medium">
        {label}
      </span>

      <Typography tag="h2" className="desktop:mb-6 mb-4 text-pretty">
        {title}
      </Typography>

      <Typography
        tag="p"
        className="desktop:whitespace-normal whitespace-pre-wrap"
      >
        {description}
      </Typography>
    </header>
  )
}
