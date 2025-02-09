import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

interface TypographyProps {
  children: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'none'
  className?: string
}

const APPEARANCE_CLASSES = {
  h1: 'text-primary-0 text-4xl font-semibold',
  h2: 'text-primary-500 text-xl font-semibold',
  h3: 'text-primary-500 text-lg font-semibold',
  h4: '',
  p: 'text-secondary-500 text-xs font-medium',
  none: null,
}

const APPEARANCE_RESPONSIVE_CLASSES = {
  h1: 'desktop:text-8xl ',
  h2: 'desktop:text-6xl laptop:text-5xl tablet:text-2xl',
  h3: 'desktop:text-2xl',
  h4: '',
  p: 'desktop:text-base laptop:text-base tablet:text-sm',
  none: null,
}

export function Typography({
  children,
  tag,
  appearance = tag,
  className,
}: TypographyProps): React.JSX.Element {
  const Element = tag
  return (
    <Element
      className={mergeClasses(
        APPEARANCE_CLASSES[appearance],
        APPEARANCE_RESPONSIVE_CLASSES[appearance],
        className
      )}
    >
      {children}
    </Element>
  )
}
