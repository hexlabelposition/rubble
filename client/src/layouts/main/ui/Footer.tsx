import React from 'react'

import { Link } from 'react-router'

import LogoIcon from '@shared/assets/icons/logo.svg'

interface NavigationLink {
  title: string
  to?: string
  href?: string
}

interface NavigationSection {
  title: string
  links: NavigationLink[]
}

const COMPANY_LINKS: NavigationLink[] = [
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: 'Career',
    to: '/career',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
  {
    title: 'About Us',
    to: '/about',
  },
]

const SOCIAL_MEDIA_LINKS: NavigationLink[] = [
  {
    title: 'Twitter',
    href: 'https://www.twitter.com',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com',
  },
]

const SERVICES_LINKS: NavigationLink[] = [
  {
    title: 'Buy Property',
    to: '/property',
  },
  {
    title: 'Sell Property',
    to: '/property',
  },
  {
    title: 'Rent Property',
    to: '/property',
  },
  {
    title: 'Property Agent',
    to: '/agent',
  },
]

const CONTACT_LINKS: NavigationLink[] = [
  {
    title: 'Chat Our Support',
    to: '/support',
  },
  {
    title: 'rubble@gmail.com',
    href: 'mailto:rubble@gmail.com',
  },
  {
    title: '+1 814 637 1529',
    href: 'tel:+18146371529',
  },
]

const FOOTER_NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    title: 'Company',
    links: COMPANY_LINKS,
  },
  {
    title: 'Social Media',
    links: SOCIAL_MEDIA_LINKS,
  },
  {
    title: 'Services',
    links: SERVICES_LINKS,
  },
  {
    title: 'Contact',
    links: CONTACT_LINKS,
  },
]

export function Footer(): React.JSX.Element {
  return (
    <footer className="desktop:pt-24 desktop:gap-40 grid gap-20 py-12">
      <div className="laptop:grid-cols-2 laptop:gap-0 grid gap-14">
        <div className="tablet:max-w-[90%] laptop:max-w-[75%] desktop:max-w-[65%] grid-rows-auto-fr grid gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="desktop:gap-6 laptop:gap-5 flex items-center gap-4 justify-self-start"
          >
            <img
              src={LogoIcon}
              alt="Rubble logo"
              className="desktop:size-22 laptop:size-21"
            />

            <span className="text-primary-500 laptop:text-2xl text-xl font-bold">
              Rubble
            </span>
          </Link>

          {/* Description */}
          <p className="text-secondary-500 desktop:text-base text-xs font-medium">
            We are dedicated to helping you find the perfect property with ease.
            Explore a variety of options and let our expert team guide you to
            your ideal home in a efficient way.
          </p>
        </div>

        {/* Navigation */}
        <div className="laptop:grid-cols-auto-4 desktop:gap-40 grid grid-cols-2 gap-y-12">
          {FOOTER_NAVIGATION_SECTIONS.map(
            ({ title, links }: NavigationSection, index: number) => (
              <div key={index}>
                <h3 className="text-primary-500 desktop:text-base desktop:mb-12 mb-10 text-xs font-semibold">
                  {title}
                </h3>
                <ul className="grid gap-8">
                  {links.map(
                    ({ title, to, href }: NavigationLink, index: number) => (
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
              </div>
            )
          )}
        </div>
      </div>

      <div className="desktop:gap-12 grid gap-8">
        {/* Visually divider */}
        <svg width="1" height="1" className="desktop:h-[1.2px] w-full">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            strokeWidth="1"
            className="desktop:stroke-[1.2] stroke-secondary-200 stroke-round stroke-1"
          />
        </svg>

        {/* Legals (Copyright & Privacy Policy & Terms of Use) */}
        <div className="tablet:flex-row-reverse tablet:justify-between flex flex-col justify-center gap-8">
          <Link
            className="text-secondary-500 desktop:text-base text-xs font-medium"
            to="/policy"
          >
            Privacy Policy & Terms of Use
          </Link>
          <p className="text-secondary-500 desktop:text-base text-xs font-medium">
            © Rubble 2024, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
