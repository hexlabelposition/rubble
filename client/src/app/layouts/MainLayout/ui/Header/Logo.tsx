import React from 'react'

// Shared - UI
import Link from '@shared/ui/Link'
import Typography from '@shared/ui/Typography'

// Shared - Assets
import LogoIcon from '@shared/assets/icons/Logo'

export default function Logo(): React.JSX.Element {
  return (
    <Link to="/" className="desktop:gap-6 inline-flex items-center gap-4">
      <LogoIcon className="desktop:size-22" />

      <Typography tag="span" apperance="logo">
        Rubble
      </Typography>
    </Link>
  )
}
