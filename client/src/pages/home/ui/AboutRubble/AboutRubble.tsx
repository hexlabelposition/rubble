import React from 'react'
import { Section } from '@shared/ui/Section'
import { Container } from '@shared/ui/Container'
import { SectionHeading } from '@shared/ui/SectionHeading'

import { PartnerForProperty } from './PartnerForProperty'
import { Statistics } from './Statistics'

export function AboutRubble(): React.JSX.Element {
  return (
    <Section>
      <Container>
        <SectionHeading
          label={'About Rubble'}
          title={'Trusted Partner for Your Journey'}
          description={
            'We manage properties efficiently, ensuring\n the best renting or selling experience.'
          }
        />
        <div className="desktop:gap-12 laptop:grid-cols-[auto_auto] grid grid-cols-1 gap-8">
          <PartnerForProperty />
          <Statistics />
        </div>
      </Container>
    </Section>
  )
}
