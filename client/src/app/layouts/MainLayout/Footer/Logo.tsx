import React from 'react'
import { Link } from 'react-router'
import LogoIcon from '@shared/assets/icons/Logo'

export function Logo(): React.JSX.Element {
  return (
    <Link
      to="/"
      className="desktop:gap-6 inline-flex items-center gap-4 justify-self-start"
    >
      <LogoIcon className="desktop:size-22 laptop:size-21 tablet:size-19" />

      <span className="text-primary-500 laptop:text-2xl text-xl font-bold">
        Rubble
      </span>
    </Link>
  )
}
