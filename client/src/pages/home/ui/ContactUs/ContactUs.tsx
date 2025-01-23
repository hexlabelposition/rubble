import React from 'react'

// Shared - UI
import Section from '@shared/ui/Section'
import Container from '@shared/ui/Container'
import SectionHeading from '@shared/ui/SectionHeading'

export default function ContactUs(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Contact Us"
          title="Connect to Find Your Property"
          description="Contact our team, and we’ll guide you every step of the way."
        />
      </Container>
    </Section>
  )
}
