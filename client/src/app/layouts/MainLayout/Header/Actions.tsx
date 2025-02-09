import React from 'react'
import { Link } from 'react-router'
import MenuIcon from '@shared/assets/icons/Menu'

export function Actions(): React.JSX.Element {
  return (
    <div className="flex justify-self-end">
      <div className="laptop:flex desktop:gap-6 hidden gap-4">
        <Link
          to="/login"
          className="bg-primary-0 desktop:px-10 desktop:h-24 laptop:h-22 desktop:rounded desktop:border-[1.2px] border-secondary-200 inline-flex h-18 items-center rounded-sm border px-8"
        >
          <span className="text-primary-500 desktop:text-base text-sm font-semibold">
            Sign In
          </span>
        </Link>

        <button className="bg-primary-500 desktop:px-10 laptop:h-22 desktop:h-24 desktop:rounded desktop:border-[1.2px] border-primary-300 inline-flex h-18 items-center rounded-sm border px-8">
          <span className="text-primary-0 desktop:text-base text-sm font-semibold">
            Book a Call
          </span>
        </button>
      </div>

      <button className="laptop:hidden">
        <MenuIcon />
      </button>
    </div>
  )
}
