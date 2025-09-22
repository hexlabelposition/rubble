'use client'

import { MenuIcon } from '@shared/ui'
import { CloseIcon } from '@shared/ui'

import type { RefObject } from 'react'

// local imports
import { useMobileMenuStore } from '../model/useMobileMenuStore'

interface MobileMenuButtonProps {
  mode: 'open' | 'close'
  ref?: RefObject<HTMLButtonElement | null>
}

export const MobileMenuButton = ({ ref, mode }: MobileMenuButtonProps) => {
  const isOpen = useMobileMenuStore((state) => state.isOpen)
  const openMenu = useMobileMenuStore((state) => state.openMenu)
  const closeMenu = useMobileMenuStore((state) => state.closeMenu)

  const ariaLabel = mode === 'open' ? 'Open mobile menu' : 'Close mobile menu'
  const onClick = mode === 'open' ? openMenu : closeMenu
  const Icon = mode === 'open' ? MenuIcon : CloseIcon

  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls='mobile-menu-container'
    >
      <Icon aria-hidden='true' width={24} height={24} />
    </button>
  )
}
