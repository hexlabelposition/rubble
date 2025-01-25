import React from 'react'

// Shared
import Container from '@shared/ui/Container.tsx'

// Subcomponents
import Heading from './Heading'
import Actions from './Actions'

export default function Hero(): React.JSX.Element {
  return (
    <div className="laptop:pt-0 desktop:pb-12 py-6">
      <Container>
        <div className="bg-hero tablet:h-[668px] tablet:rounded-md laptop:h-[720px] laptop:rounded-lg desktop:h-[867px] desktop:rounded-xl desktop:py-26 h-[568px] rounded px-3 py-15">
          <Heading />
          <Actions />
        </div>
      </Container>
    </div>
  )
}
