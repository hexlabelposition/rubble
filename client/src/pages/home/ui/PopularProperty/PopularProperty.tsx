import React from 'react'

// Shared - UI
import Section from '@shared/ui/Section'
import Container from '@shared/ui/Container'
import SectionHeading from '@shared/ui/SectionHeading'

export default function PopularProperty(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Popular Property"
          title="Explore Diverse Property Listings"
          description="Discover properties for every need, from cozy homes to luxury estates."
        />
      </Container>
    </Section>
  )
}
