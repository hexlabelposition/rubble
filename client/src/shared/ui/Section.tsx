import React from 'react'

// Utils
import { mergeClasses } from '@shared/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

const BASE_CLASSES = 'py-10'
const RESPONSIVE_CLASSES = 'desktop:px-20'

export default function Section({
  children,
  className,
  ...props
}: SectionProps): React.JSX.Element {
  return (
    <section className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)} {...props}>
      {children}
    </section>
  )
}
