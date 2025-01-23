import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Shared - UI
import Container from '@shared/ui/Container'
import Typography from '@shared/ui/Typography'

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

export default function Footer(): React.JSX.Element {
  return (
    <footer>
      <Container>
        <ul className="flex flex-col-reverse justify-center gap-4 tablet:flex-row tablet:justify-between">
          {legalLinks.map(({ to, title }: LegalLink, index: number) => (
            <li key={index}>
              <Link to={to}>
                <Typography
                  tag="span"
                  className="text-xs font-medium text-primary-500 desktop:text-base"
                >
                  {title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}
