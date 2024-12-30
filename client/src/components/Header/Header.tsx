import React from 'react'

// UI
import Container from '@ui/Container'
import Logo from '@ui/Logo'

// Subcomponents
import HeaderMenu from './HeaderMenu'
import HeaderActions from './HeaderActions'

export default function Header(): React.ReactNode {
  return (
    <header className="py-[14px] tablet:py-5 laptop:py-6 desktop:py-7">
      <Container>
        <nav className="grid grid-cols-2 items-center laptop:grid-cols-[1fr_2fr_1fr]">
          <Logo />
          <HeaderMenu />
          <HeaderActions />
        </nav>
      </Container>
    </header>
  )
}
