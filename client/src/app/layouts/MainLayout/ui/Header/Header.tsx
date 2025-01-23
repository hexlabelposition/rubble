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
    <header className="py-3.5 tablet:py-4.5 laptop:py-5.5 desktop:py-6.5">
      <Container>
        <div className="grid grid-cols-2 items-center laptop:grid-cols-1/2/1">
          <Logo />
          <DesktopNavigation />
          <MobileNavigation />
          <Actions />
        </div>
      </Container>
    </header>
  )
}
