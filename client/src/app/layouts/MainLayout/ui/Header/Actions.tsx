import React from 'react'

// Providers
import { useMenu } from '@app/providers/StoreProvider'

// Shared - UI
import Link from '@shared/ui/Link'
import Button from '@shared/ui/Button'

// Shared - Assets
import MenuIcon from '@shared/assets/icons/Menu'

export default function Actions(): React.JSX.Element {
  const { toogleMenu } = useMenu()

  return (
    <div className="flex justify-self-end laptop:gap-2 desktop:gap-3">
      <Link to="/login" className="hidden laptop:inline-flex" apperance="button">
        Sign In
      </Link>

      <Button className="hidden laptop:inline-flex" apperance="button">
        Book a Call
      </Button>

      <Button className="laptop:hidden" onClick={toogleMenu}>
        <MenuIcon />
      </Button>
    </div>
  )
}
