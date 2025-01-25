import React from 'react'

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

export default function Article({ children, ...props }: ArticleProps): React.JSX.Element {
  return <article {...props}>{children}</article>
}
