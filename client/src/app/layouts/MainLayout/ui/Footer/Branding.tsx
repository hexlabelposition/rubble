import React from 'react'

// Shared UI
import Typography from '@shared/ui/Typography'

// Subcomponents
import Logo from './Logo'

export default function Branding(): React.JSX.Element {
  return (
    <div className="desktop:gap-8 grid max-w-[428px] grid-rows-[auto_1fr] gap-6">
      <Logo />

      <Typography tag="p">
        We are dedicated to helping you find the perfect property with ease. Explore a variety of
        options and let our expert team guide you to your ideal home in a efficient way.
      </Typography>
    </div>
  )
}
