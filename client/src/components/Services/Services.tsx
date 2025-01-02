import React from 'react'

// UI
import Section from '@/ui/Section'
import SectionHeading from '@/ui/SectionHeading'
import Container from '@/ui/Container'

// Subcomponents
import ServicesList from './ServicesList'

export default function Services(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Services We Provide"
          title="Complete Property Solutions"
          description="We offer a full range of services to help you find a property, rent or sell as needed."
        />
        <ServicesList />
      </Container>
    </Section>
  )
}
