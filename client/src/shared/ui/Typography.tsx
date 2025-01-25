import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: string
  tag: Tag
  apperance?: 'logo' | 'label' | 'divider'
}

export default function Typography({
  children,
  tag,
  apperance,
  className,
  ...props
}: TypographyProps): React.JSX.Element {
  const Element = tag
  return (
    <Element
      className={mergeClasses(
        apperance === 'logo' ? 'logo-text' : null,
        apperance === 'label' ? 'label-text' : null,
        apperance === 'divider' ? 'divider-text' : null,
        className
      )}
      {...props}
    >
      {children}
    </Element>
  )
}
