import React from 'react'
import { mergeClasses } from '../utils'

type ArticleProps = React.HTMLAttributes<HTMLElement>

export default function Article({
  children,
  className,
  ...props
}: ArticleProps): React.ReactNode {
  return (
    <article
      className={mergeClasses(
        'rounded-xl border border-secondary-200 p-4',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}
