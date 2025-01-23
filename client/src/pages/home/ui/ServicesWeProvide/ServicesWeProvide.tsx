import React from 'react'

// Shared - UI
import Section from '@shared/ui/Section'
import Container from '@shared/ui/Container'
import SectionHeading from '@shared/ui/SectionHeading'

// Subcomponents
// import Content from './Content.tsx'

export default function Services(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Services We Provide"
          title="Complete Property Solutions"
          description="We offer a full range of services to help you find a property, rent or sell as needed."
        />
        {/* <Content /> */}
      </Container>
    </Section>
  )
}
