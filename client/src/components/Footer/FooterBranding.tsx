import React from 'react'

//UI
import Logo from '@ui/Logo'
import Typography from '@ui/Typography'

export default function FooterBranding(): React.ReactNode {
  return (
    <div className="flex max-w-[428px] flex-col gap-3 desktop:gap-4">
      <Logo />
      <Typography
        tag="p"
        className="text-xs font-medium text-secondary-500 desktop:text-base"
      >
        We are dedicated to helping you find the perfect property with ease.
        Explore a variety of options and let our expert team guide you to your
        ideal home in a efficient way.
      </Typography>
    </div>
  )
}
