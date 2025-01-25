import React from 'react'

// Providers
import { useMenu } from '@app/providers/StoreProvider'

// Shared - UI
import Link from '@shared/ui/Link'
import Button from '@shared/ui/Button'
import MenuIcon from '@shared/assets/icons/Menu'

export default function Actions(): React.JSX.Element {
  const { toogleMenu } = useMenu()

  return (
    <div className="desktop:gap-6 flex justify-self-end">
      <Link to="/login" className="desktop:inline-flex hidden" apperance="button">
        Sign In
      </Link>

      <Button className="desktop:inline-flex hidden" apperance="button">
        Book a Call
      </Button>

      <Button className="desktop:hidden" onClick={toogleMenu}>
        <MenuIcon />
      </Button>
    </div>
  )
}
