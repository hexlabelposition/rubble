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
    <nav className="hidden justify-self-center laptop:flex">
      <ul className="flex items-center gap-7 desktop:gap-[34px]">
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
