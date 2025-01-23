import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { LinkProps as RouterLinkProps } from 'react-router-dom'
import { To } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Utils
import { mergeClasses } from '@shared/utils'

interface LinkProps extends RouterLinkProps {
  to: To
  children: string | React.JSX.Element | React.JSX.Element[]
  apperance?: 'button' | 'navigation' | 'default'
  active?: boolean
}

const APPERANCE_CLASSES = {
  button:
    'inline-flex h-9 items-center rounded border border-secondary-200 bg-primary-0 font-semibold px-4 text-primary-500 text-sm',
  navigation: 'text-sm font-medium text-secondary-500',
  default: null,
}

const APPERANCE_RESPONSIVE_CLASSES = {
  button: 'laptop:border-lg desktop:h-12 laptop:h-10 desktop:px-5 laptop:px-4 desktop:text-base',
  navigation: 'desktop:text-base',
  default: null,
}

export default function Link({
  to,
  children,
  apperance = 'default',
  active = false,
  className,
  ...props
}: LinkProps): React.JSX.Element {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isCurrentPage = location.pathname === to

  return (
    <RouterLink
      to={to}
      className={mergeClasses(
        APPERANCE_CLASSES[apperance],
        APPERANCE_RESPONSIVE_CLASSES[apperance],
        className,
        active && (isHomePage || isCurrentPage) ? 'text-primary-500' : null
      )}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
