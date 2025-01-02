import React from 'react'

// UI
import Section from '@ui/Section'
import SectionHeading from '@/ui/SectionHeading'
import Container from '@ui/Container'

// Subcomponents
import PropertyList from './PropertyList'

export default function Popular(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Popular Property"
          title="Explore Diverse Property Listings"
          description="Discover properties for every need, from cozy homes to luxury
              estates."
        />
        <PropertyList />
      </Container>
    </Section>
  )
}
