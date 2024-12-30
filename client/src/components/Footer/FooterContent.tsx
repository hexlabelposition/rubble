import React from 'react'

// Subcomponents
import FooterBranding from './FooterBranding'
import FooterNavigation from './FooterNavigation'

export default function FooterContent(): React.ReactNode {
  return (
    <div className="grid-rows-auto mb-10 grid gap-7 laptop:mb-15 laptop:grid-cols-2 laptop:grid-rows-1 laptop:gap-0 desktop:mb-20">
      <FooterBranding />
      <FooterNavigation />
    </div>
  )
}
