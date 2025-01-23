import React from 'react'

// Shared UI
import Divider from '@shared/ui/Divider'
import Container from '@shared/ui/Container'

//Subcomponents
import Branding from './Branding'
import Navigation from './Navigation'
import Legal from './Legal'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="py-6 laptop:pt-8 desktop:pt-12">
      <Container>
        <div className="grid gap-10 laptop:gap-20">
          <div className="grid gap-7 laptop:grid-cols-2 laptop:gap-0">
            <Branding />
            <Navigation />
          </div>

          <div className="grid gap-4 laptop:gap-6">
            <Divider />
            <Legal />
          </div>
        </div>
      </Container>
    </footer>
  )
}
