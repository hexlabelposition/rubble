import React from 'react'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string
  href: string
  style?: never
}

export function Anchor({
  children,
  href,
  rel = 'noopener noreferrer',
  target = '_blank',
  ...props
}: AnchorProps): React.JSX.Element {
  return (
    <a href={href} rel={rel} target={target} {...props}>
      {children}
    </a>
  )
}
