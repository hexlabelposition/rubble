import React from 'react'
import { mergeClasses } from '@shared/utils'

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

const BASE_CLASSES = 'rounded border border-secondary-200 p-4'
const RESPONSIVE_CLASSES = 'desktop:rounded-xl desktop:p-6'

export default function Article({
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
