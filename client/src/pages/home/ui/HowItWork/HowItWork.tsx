import React from 'react'

// UI
import Section from '@shared/ui/Section'
import Container from '@shared/ui/Container'
import SectionHeading from '@shared/ui/SectionHeading'

export default function Process(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="How It Works"
          title="Journey to Achieve Property Success"
          description="Explore our process from understanding your needs to finding the right property."
        />
      </Container>
    </Section>
  )
}
