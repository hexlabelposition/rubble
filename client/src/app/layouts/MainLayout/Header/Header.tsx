import React from 'react'
import { Container } from '@shared/ui/Container'

import { Logo } from './Logo'
import { DesktopNavigation } from './DesktopNavigation'
import { Actions } from './Actions'

export function Header(): React.JSX.Element {
  return (
    <header className="desktop:py-13 laptop:py-11 tablet:py-9 py-7">
      <Container>
        <div className="laptop:grid-cols-[1fr_2fr_1fr] grid grid-cols-2 items-center">
          <Logo />
          <DesktopNavigation />
          <Actions />
        </div>
      </Container>
    </header>
  )
}
