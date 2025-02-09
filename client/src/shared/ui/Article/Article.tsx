import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

const BASE_CLASSES = 'border-secondary-200 rounded border p-8'
const RESPONSIVE_CLASSES =
  'desktop:border-[1.2px] desktop:p-12 desktop:rounded-xl '

export function Article({
  children,
  className,
  ...props
}: ArticleProps): React.JSX.Element {
  return (
    <article
      className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
      {...props}
    >
      {children}
    </article>
  )
}
