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
    <header className="mb-7 text-center desktop:mb-10">
      <div className="mb-3 inline-flex h-6 items-center rounded-md border border-secondary-200 px-2 laptop:mb-4 desktop:h-8 desktop:px-3">
        <Typography tag="span" className="text-xxs font-medium text-secondary-500 desktop:text-sm">
          {label}
        </Typography>
      </div>

      <Typography tag="h2" className="mb-2 text-pretty">
        {title}
      </Typography>

      <Typography tag="p" className="line-clamp-2 text-balance">
        {description}
      </Typography>
    </header>
  )
}
