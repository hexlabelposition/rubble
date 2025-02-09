import React from 'react'
import { Section } from '@shared/ui/Section'
import { Container } from '@shared/ui/Container'
import { SectionHeading } from '@shared/ui/SectionHeading'

export function HowItWork(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label={'How It Works'}
          title={'Journey to Achieve Property Success'}
          description={
            'Explore our process from understanding\n your needs to finding the right property.'
          }
        />
      </Container>
    </Section>
  )
}
