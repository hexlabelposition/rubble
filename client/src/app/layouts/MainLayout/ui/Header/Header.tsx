import React from 'react'

// Shared - UI
import Container from '@shared/ui/Container'

// Subcomponents
import Logo from './Logo'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Actions from './Actions'

export default function Header(): React.JSX.Element {
  return (
    <header className="desktop:py-14 py-7">
      <Container>
        <div className="desktop:grid-cols-[1fr_2fr_1fr] grid grid-cols-2 items-center">
          <Logo />
          <DesktopNavigation />
          <MobileNavigation />
          <Actions />
        </div>
      </Container>
    </header>
  )
}
