import React from 'react'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export default function Typography({
  children,
  tag,
  className,
  ...props
}: TypographyProps): React.ReactNode {
  const Tag = tag
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  )
}
