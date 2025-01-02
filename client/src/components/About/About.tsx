import React from 'react'

// UI
import Container from '@ui/Container'
import Section from '@ui/Section'
import SectionHeading from '@ui/SectionHeading'

// Subcomponents
import AboutContent from './AboutContent'

export default function About(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="About Rubble"
          title="Trusted Partner for Your Journey"
          description="We manage properties efficiently, ensuring the best renting or selling experience."
        />
        <AboutContent />
      </Container>
    </Section>
  )
}
