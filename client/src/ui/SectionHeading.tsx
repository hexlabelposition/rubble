import React from 'react'

// UI
import Typography from './Typography'

interface SectionHeadingProps {
  label: string
  title: string
  description: string
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps): React.ReactNode {
  return (
    <header className="mb-7 flex flex-col items-center text-center desktop:mb-10">
      <Typography
        tag="span"
        className="mb-3 inline-flex h-6 items-center rounded-md border border-secondary-200 px-2 text-xxs font-medium text-secondary-500 laptop:mb-4 desktop:h-8 desktop:px-3 desktop:text-sm"
      >
        {label}
      </Typography>
      <Typography
        tag="h2"
        className="mb-2 text-xl font-semibold text-primary-500 tablet:text-2xl laptop:mb-3 laptop:text-5xl desktop:text-6xl"
      >
        {title}
      </Typography>
      <Typography
        tag="p"
        className="labtop:text-sm line-clamp-2 text-xs font-medium text-secondary-500 desktop:text-base"
      >
        {description}
      </Typography>
    </header>
  )
}
