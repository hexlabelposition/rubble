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
    <footer className="desktop:pt-24 py-12">
      <Container>
        <div className="desktop:gap-40 grid gap-20">
          <div className="desktop:grid-cols-2 desktop:gap-0 grid gap-14">
            <Branding />
            <Navigation />
          </div>

          <div className="desktop:gap-12 grid gap-8">
            <Divider />
            <Legal />
          </div>
        </div>
      </Container>
    </footer>
  )
}
