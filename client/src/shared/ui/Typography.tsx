import React from 'react'

// Utils
import { mergeClasses } from '@shared/utils'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  children: string | React.JSX.Element
}

const TAG_CLASSES = {
  h1: 'text-4xl font-semibold text-primary-0',
  h2: 'text-xl font-semibold text-primary-500',
  h3: 'text-lg font-semibold text-primary-500',
  p: 'text-xs font-medium text-secondary-500',
  span: null,
}

const TAG_RESPONSIVE_CLASSES = {
  h1: 'desktop:text-8xl laptop:text-7xl tablet:text-5xl',
  h2: 'desktop:text-6xl',
  h3: 'desktop:text-2xl',
  p: 'desktop:text-base',
  span: null,
}

export default function Typography({
  tag,
  children,
  className,
}: TypographyProps): React.JSX.Element {
  const Tag = tag
  return (
    <Tag className={mergeClasses(TAG_CLASSES[tag], TAG_RESPONSIVE_CLASSES[tag], className)}>
      {children}
    </Tag>
  )
}
