import React from 'react'

// Shared - UI
import Link from '@shared/ui/Link'
import Anchor from '@shared/ui/Anchor'
import Typography from '@shared/ui/Typography'

interface NavigationLink {
  to?: string
  href?: string
  title: string
}

interface NavigationLinks {
  title: string
  links: NavigationLink[]
}

const navigationLinks: NavigationLinks[] = [
  {
    title: 'Company',
    links: [
      {
        to: '/blog',
        title: 'Blog',
      },
      {
        to: '/career',
        title: 'Career',
      },
      {
        to: '/contact',
        title: 'Contact',
      },
      {
        to: '/about',
        title: 'About Us',
      },
    ],
  },
  {
    title: 'Social Media',
    links: [
      {
        href: 'https://twitter.com',
        title: 'Twitter',
      },
      {
        href: 'https://linkedin.com',
        title: 'LinkedIn',
      },
      {
        href: 'https://facebook.com',
        title: 'Facebook',
      },
      {
        href: 'https://instagram.com',
        title: 'Instagram',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        to: '/property',
        title: 'Buy Property',
      },
      {
        to: '/property',
        title: 'Sell Property',
      },
      {
        to: '/property',
        title: 'Rent Property',
      },
      {
        to: '/agent',
        title: 'Property Agent',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        to: '/contact',
        title: 'Chat Our Support',
      },
      {
        href: 'mailto:rubble@gmail.com',
        title: 'rubble@gmail.com',
      },
      {
        href: 'tel:+18146371529',
        title: '+1 841 637 1529',
      },
    ],
  },
]

export default function Navigation(): React.JSX.Element {
  return (
    <nav>
      <ul className="desktop:grid-cols-[auto_auto_auto_auto] desktop:gap-40 grid grid-cols-2 gap-12">
        {navigationLinks.map(({ title, links }: NavigationLinks, index: number) => (
          <li key={index} className="desktop:gap-12 grid grid-rows-[auto_1fr] gap-10">
            <Typography tag="span">{title}</Typography>

            <ul className="grid grid-rows-4 gap-8">
              {links.map(({ to, href, title }: NavigationLink, index: number) => (
                <li key={index}>
                  {to ? (
                    <Link to={to} apperance="navigation">
                      {title}
                    </Link>
                  ) : href ? (
                    <Anchor href={href} apperance="navigation">
                      {title}
                    </Anchor>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
