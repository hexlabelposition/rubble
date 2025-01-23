import { mergeClasses } from '@shared/utils'
import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string | React.JSX.Element | React.JSX.Element[]
  href: string
  apperance?: 'navigation' | 'default'
}

const APPERANCE_CLASSES = {
  navigation: 'text-sm font-medium text-secondary-500',
  default: null,
}

const APPERANCE_RESPONSIVE_CLASSES = {
  navigation: 'desktop:text-base',
  default: null,
}

export default function Link({
  children,
  href,
  apperance = 'default',
  target = '_blank',
  className,
  ...props
}: LinkProps): React.JSX.Element {
  return (
    <a
      href={href}
      target={target}
      className={mergeClasses(
        APPERANCE_CLASSES[apperance],
        APPERANCE_RESPONSIVE_CLASSES[apperance],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
