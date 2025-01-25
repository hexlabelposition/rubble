import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string | React.JSX.Element | React.JSX.Element[]
  href: string
  apperance?: 'navigation'
}

export default function Link({
  children,
  apperance,
  target = '_blank',
  className,
  ...props
}: LinkProps): React.JSX.Element {
  return (
    <a
      target={target}
      className={mergeClasses(apperance === 'navigation' ? 'navigation-link' : null, className)}
      {...props}
    >
      {children}
    </a>
  )
}
