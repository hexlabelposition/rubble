import React from 'react'

// UI
import Link from '@ui/Link'
import Typography from '@ui/Typography'

type MenuItem = {
  key: string
  text: string
  to: string
}

const menuItems: MenuItem[] = [
  {
    key: 'home',
    text: 'Home',
    to: '/',
  },
  {
    key: 'property',
    text: 'Property',
    to: '/property',
  },
  {
    key: 'agent',
    text: 'Agent',
    to: '/agent',
  },
  {
    key: 'blog',
    text: 'Blog',
    to: '/blog',
  },
  {
    key: 'about',
    text: 'About',
    to: '/about',
  },
  {
    key: 'join',
    text: 'Join Us',
    to: '/join',
  },
  {
    key: 'contact',
    text: 'Contact',
    to: '/contact',
  },
]

export default function HeaderMenu(): React.ReactNode {
  return (
    <ul className="hidden justify-self-center laptop:flex laptop:gap-7 desktop:gap-[34px]">
      {menuItems.map(({ key, text, to }: MenuItem) => (
        <li key={key}>
          <Link as="internal" to={to}>
            <Typography
              tag="span"
              className="text-sm font-medium text-primary-500 laptop:text-sm desktop:text-base"
            >
              {text}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  )
}
