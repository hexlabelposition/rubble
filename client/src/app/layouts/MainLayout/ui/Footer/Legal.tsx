import React from 'react'

// Shared - UI
import Link from '@shared/ui/Link'

interface LegalLink {
  to: string
  title: string
}

const legalLinks: LegalLink[] = [
  {
    to: '/copyright',
    title: '© Rubble 2024, All Rights Reserved.',
  },
  {
    to: '/policy',
    title: 'Privacy Policy & Terms Of Use',
  },
]

export default function Legal(): React.JSX.Element {
  return (
    <ul className="desktop:flex-row desktop:justify-between flex flex-col-reverse justify-center gap-8">
      {legalLinks.map(({ to, title }: LegalLink, index: number) => (
        <li key={index}>
          <Link to={to} apperance="navigation">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
