import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses/mergeClasses'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

const BASE_CLASSES = 'container mx-auto px-12 max-w-mobile'
const RESPONSIVE_CLASSES =
  'desktop:px-24 tablet:max-w-tablet laptop:max-w-laptop desktop:max-w-desktop'

export function Container({
  children,
  className,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div
      className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
      {...props}
    >
      {children}
    </div>
  )
}
