import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Shared - UI
import Typography from '@shared/ui/Typography'

// Shared - Assets
import LogoIcon from '@shared/assets/icons/Logo'

export default function LoginHeading(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <Link to="/" className="mb-6">
        <LogoIcon className="desktop:h-14 desktop:w-14" />
      </Link>

      <Typography tag="h2" className="mb-3 desktop:text-3xl">
        Hey, Welcome Back!
      </Typography>

      <Typography tag="p">
        Please enter your information to log in to your account.
      </Typography>
    </div>
  )
}
