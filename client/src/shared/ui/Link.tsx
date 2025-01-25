import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { LinkProps as RouterLinkProps } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { mergeClasses } from '@shared/lib/mergeClasses'

import type { To } from 'react-router-dom'

interface LinkProps extends RouterLinkProps {
  to: To
  children: string | React.JSX.Element | React.JSX.Element[]
  apperance?: 'button' | 'navigation'
  active?: boolean
}

export default function Link({
  to,
  children,
  apperance,
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
        apperance === 'button' ? 'button-secondary' : null,
        apperance === 'navigation' ? 'navigation-link' : null,
        active && (isHomePage || isCurrentPage) ? 'text-primary-500' : null,
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
