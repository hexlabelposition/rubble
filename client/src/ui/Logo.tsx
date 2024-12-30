import React from 'react'
import Link from '../ui/Link'
import Icon from '../ui/Icon'
import Typography from '../ui/Typography'

export default function Logo(): React.ReactNode {
  return (
    <Link
      as="internal"
      to="/"
      className="inline-flex items-center gap-2 desktop:gap-3"
    >
      <Icon
        name="logo"
        width={36}
        height={36}
        alt="Logo Rubble"
        className="aspect-square desktop:w-11"
      />

      <Typography
        tag="span"
        className="text-xl font-bold text-primary-500 desktop:text-2xl"
      >
        Rubble
      </Typography>
    </Link>
  )
}
