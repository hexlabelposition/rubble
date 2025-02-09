import React from 'react'
import { Link } from 'react-router'

type FooterLink = {
  title: string
  links: FooterItemLink[]
}

type FooterItemLink = {
  to?: string
  href?: string
  title: string
}

const FOOTER_NAV_LINKS: FooterLink[] = [
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

export function Navigation(): React.JSX.Element {
  return (
    <nav>
      <ul className="tablet:grid-cols-[auto_auto_auto_auto] desktop:gap-40 grid grid-cols-2 gap-12">
        {FOOTER_NAV_LINKS.map(({ title, links }: FooterLink, index: number) => (
          <li
            key={index}
            className="desktop:gap-12 grid grid-rows-[auto_1fr] gap-10"
          >
            <span>{title}</span>

            <ul className="grid grid-rows-4 gap-8">
              {links.map(
                ({ to, href, title }: FooterItemLink, index: number) => (
                  <li key={index}>
                    {to ? (
                      <Link
                        to={to}
                        className="desktop:text-base text-secondary-500 text-xs font-medium"
                      >
                        {title}
                      </Link>
                    ) : href ? (
                      <a
                        href={href}
                        className="desktop:text-base text-secondary-500 text-xs font-medium"
                      >
                        {title}
                      </a>
                    ) : null}
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
