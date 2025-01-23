import React from 'react'

// Shared - UI
import Section from '@shared/ui/Section'
import Container from '@shared/ui/Container'
import SectionHeading from '@shared/ui/SectionHeading'

export default function AboutRubble(): React.JSX.Element {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="About Rubble"
          title="Trusted Partner for Your Journey"
          description="We manage properties efficiently, ensuring the best renting or selling experience."
        />
        {/* <div className="grid gap-4 laptop:grid-cols-[minmax(auto,816px)_auto] desktop:gap-6">
          <CompleteSolution />
          <Statistics />
        </div> */}
      </Container>
    </Section>
  )
}
