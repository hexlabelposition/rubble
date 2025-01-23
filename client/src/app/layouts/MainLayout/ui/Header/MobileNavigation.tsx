import React from 'react'

// Shared - UI
import Link from '@shared/ui/Link'
import Button from '@shared/ui/Button'
import Container from '@shared/ui/Container'

// Shared - Assets
import CloseIcon from '@shared/assets/icons/Close'

// Providers
import { useMenu } from '@app/providers/StoreProvider'

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

export default function MobileNavigation(): React.JSX.Element {
  const { isOpenMenu, toogleMenu } = useMenu()
  return (
    <nav
      className={`fixed inset-0 flex flex-col bg-primary-0 py-3.5 transition-transform duration-300 ease-in-out laptop:hidden ${
        isOpenMenu ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Container>
        <div className="mb-8 flex justify-end py-1.5">
          <Button onClick={toogleMenu}>
            <CloseIcon />
          </Button>
        </div>
        <ul className="grid gap-7 text-center">
          {navigationLinks.map(({ to, title }: NavigationLink, index: number) => (
            <li key={index}>
              <Link to={to} apperance="navigation" active>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
