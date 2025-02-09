import React from 'react'
import { Section } from '@shared/ui/Section'
import { Container } from '@shared/ui/Container'
import { SectionHeading } from '@shared/ui/SectionHeading'

export function ContactUs(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label={'Contact Us'}
          title={'Connect to Find Your Property'}
          description={
            'Contact our team, and we’ll guide\n you every step of the way.'
          }
        />
      </Container>
    </Section>
  )
}
