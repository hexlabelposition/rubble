import React from 'react'

// UI
import Container from '../../ui/Container'

// Subcomponents
import FooterContent from './FooterContent'
import FooterLegal from './FooterLegal'

export default function Footer(): React.ReactNode {
  return (
    <footer className="py-6 laptop:pt-8 desktop:pt-12">
      <Container>
        <nav>
          <FooterContent />
          <hr className="desktop:h[1.2px] mb-4 h-[1px] rounded border-secondary-200 desktop:mb-6" />
          <FooterLegal />
        </nav>
      </Container>
    </footer>
  )
}
