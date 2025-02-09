import React from 'react'
import { Link } from 'react-router'

type FooterLegalLink = {
  to: string
  title: string
}

const FOOTER_LEGAL_LINKS: FooterLegalLink[] = [
  {
    to: '/copyright',
    title: '© Rubble 2024, All Rights Reserved.',
  },
  {
    to: '/policy',
    title: 'Privacy Policy & Terms Of Use',
  },
]

export function Legal(): React.JSX.Element {
  return (
    <ul className="tablet:flex-row tablet:justify-between flex flex-col-reverse justify-center gap-8">
      {FOOTER_LEGAL_LINKS.map(
        ({ to, title }: FooterLegalLink, index: number) => (
          <li key={index}>
            <Link
              to={to}
              className="desktop:text-base text-secondary-500 text-xs font-medium"
            >
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  )
}
