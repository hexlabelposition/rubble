import React from 'react'
import { Typography } from '@shared/ui/Typography'

import { Logo } from './Logo'

export function Branding(): React.JSX.Element {
  return (
    <div className="desktop:gap-8 desktop:max-w-[428px] laptop:max-w-[360px] grid grid-rows-[auto_1fr] gap-6">
      <Logo />

      <Typography tag="p" className="text-balance">
        We are dedicated to helping you find the perfect property with ease.
        Explore a variety of options and let our expert team guide you to your
        ideal home in a efficient way.
      </Typography>
    </div>
  )
}
