import React from 'react'
import { NavLink } from 'react-router'
import { useLocation } from 'react-router'
import { mergeClasses } from '@shared/lib/mergeClasses'

type HeaderLink = {
  to: string
  title: string
}

const HEADER_NAV_LINKS: HeaderLink[] = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/property',
    title: 'Property',
  },
  {
    to: '/agent',
    title: 'Agent',
  },
  {
    to: '/blog',
    title: 'Blog',
  },
  {
    to: '/about',
    title: 'About',
  },
  {
    to: '/join-us',
    title: 'Join Us',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
]

export function DesktopNavigation(): React.JSX.Element {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <nav className="laptop:flex hidden justify-self-center">
      <ul className="desktop:gap-17 laptop:gap-14 flex items-center">
        {HEADER_NAV_LINKS.map(({ to, title }: HeaderLink, index: number) => (
          <li key={index}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                mergeClasses(
                  'desktop:text-base text-sm font-medium',
                  isActive || isHomePage
                    ? 'text-primary-500'
                    : 'text-secondary-500'
                )
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
