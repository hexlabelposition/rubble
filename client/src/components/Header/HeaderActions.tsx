import React from 'react'

// UI
import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Link from '@ui/Link'
import Typography from '@ui/Typography'

export default function HeaderActions(): React.ReactNode {
  return (
    <div className="flex items-center justify-self-end laptop:gap-2 desktop:gap-3">
      <Link
        as="internal"
        to="/login"
        className="hidden items-center rounded-[10px] border border-secondary-200 bg-primary-0 laptop:flex laptop:h-10 laptop:px-4 desktop:h-12 desktop:px-5"
      >
        <Typography
          tag="span"
          className="font-semibold text-primary-500 laptop:text-sm desktop:text-base"
        >
          Sign In
        </Typography>
      </Link>

      <Link
        as="internal"
        to="/contact"
        className="hidden items-center rounded-[10px] border border-primary-300 bg-primary-500 laptop:flex laptop:h-10 laptop:px-4 desktop:h-12 desktop:px-5"
      >
        <Typography
          tag="span"
          className="font-semibold text-primary-0 laptop:text-sm desktop:text-base"
        >
          Book a Call
        </Typography>
      </Link>

      <Button className="flex items-center laptop:hidden">
        <Icon name="menu" width={24} height={24} alt="Menu" />
      </Button>
    </div>
  )
}
