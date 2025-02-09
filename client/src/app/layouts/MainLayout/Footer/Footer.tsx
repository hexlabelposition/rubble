import React from 'react'
import { Container } from '@shared/ui/Container'

import { Branding } from './Branding'
import { Navigation } from './Navigation'
import { Legal } from './Legal'

export function Footer(): React.JSX.Element {
  return (
    <footer className="desktop:pt-24 py-12">
      <Container>
        <div className="desktop:gap-40 grid gap-20">
          <div className="laptop:grid-cols-2 desktop:gap-0 grid gap-14">
            <Branding />
            <Navigation />
          </div>

          <div className="desktop:gap-12 grid gap-8">
            <hr className="border-secondary-200 desktop:h-[1.2px] h-px rounded" />
            <Legal />
          </div>
        </div>
      </Container>
    </footer>
  )
}
