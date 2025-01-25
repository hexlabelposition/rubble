import React from 'react'

// Shared - UI
import Link from '@shared/ui/Link'

interface NavigationLink {
  to: string
  title: string
}

const navigationLinks: NavigationLink[] = [
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

export default function DesktopNavigation(): React.JSX.Element {
  return (
    <nav className="desktop:flex hidden justify-self-center">
      <ul className="desktop:gap-17 flex items-center">
        {navigationLinks.map(({ to, title }: NavigationLink, index: number) => (
          <li key={index}>
            <Link to={to} apperance="navigation" active>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
