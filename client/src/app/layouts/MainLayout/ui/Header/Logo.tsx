import React from 'react'

// Shared - UI
import Link from '@shared/ui/Link'
import Typography from '@shared/ui/Typography'

// Shared - Assets
import LogoIcon from '@shared/assets/icons/Logo'

export default function Logo(): React.JSX.Element {
  return (
    <Link to="/" className="inline-flex items-center gap-2 desktop:gap-3">
      <LogoIcon className="desktop:h-11 desktop:w-11" />

      <Typography tag="span" className="text-xl font-bold text-primary-500 desktop:text-2xl">
        Rubble
      </Typography>
    </Link>
  )
}
