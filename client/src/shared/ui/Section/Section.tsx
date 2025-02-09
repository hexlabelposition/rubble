import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses/mergeClasses'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

const BASE_CLASSES = ' py-20'
const RESPONSIVE_CLASSES = 'desktop:py-40 laptop:py-30 tablet:py-25'

export function Section({
  children,
  className,
  ...props
}: SectionProps): React.JSX.Element {
  return (
    <section
      className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
      {...props}
    >
      {children}
    </section>
  )
}
