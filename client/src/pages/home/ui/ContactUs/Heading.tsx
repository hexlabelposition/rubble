import React from 'react'

interface HeadingProps {
  label: string
  title: string
  description: string
}

export default function Heading({
  label,
  title,
  description,
}: HeadingProps): React.ReactNode {
  return (
    <header className="mb-7 flex flex-col items-center text-center desktop:mb-10">
      <span className="mb-3 inline-flex h-6 items-center rounded-md border border-secondary-200 px-2 text-xxs font-medium text-secondary-500 laptop:mb-4 desktop:h-8 desktop:px-3 desktop:text-sm">
        {label}
      </span>
      <h2 className="mb-2">{title}</h2>
      <p className="line-clamp-2">{description}</p>
    </header>
  )
}
