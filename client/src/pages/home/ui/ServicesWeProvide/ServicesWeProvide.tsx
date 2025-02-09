import React from 'react'
import { Section } from '@shared/ui/Section'
import { Container } from '@shared/ui/Container'
import { SectionHeading } from '@shared/ui/SectionHeading'

export function ServicesWeProvide(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label={'Services We Provide'}
          title={'Complete Property Solutions'}
          description={
            'We offer a full range of services to help you find\n a property, rent or sell as needed.'
          }
        />
      </Container>
    </Section>
  )
}
