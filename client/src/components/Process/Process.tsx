import React from 'react'

// UI
import Section from '@/ui/Section'
import SectionHeading from '@/ui/SectionHeading'
import Container from '@/ui/Container'

// Subcomponents
import ProcessList from './ProcessList'

export default function Process(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="How It Works"
          title="Journey to Achieve Property Success"
          description="Explore our process from understanding your needs to finding the right property."
        />
        <ProcessList />
      </Container>
    </Section>
  )
}
