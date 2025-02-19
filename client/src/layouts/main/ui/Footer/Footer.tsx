import React from 'react'
import { Divider } from '@shared/ui/Divider'
import { Branding } from './Branding'
import { Navigation } from './Navigation'
import { Legal } from './Legal'

export function Footer(): React.JSX.Element {
  return (
    // Some basic styles for the footer tag are set in the main CSS file (@layer base)
    <footer className="desktop:pt-24 py-12">
      <div className="desktop:grid-cols-2 desktop:gap-0 desktop:mb-40 mb-20 grid gap-14">
        <Branding />
        <Navigation />
      </div>

      <div>
        <Divider className="mb-8" />
        <Legal />
      </div>
    </footer>
  )
}
