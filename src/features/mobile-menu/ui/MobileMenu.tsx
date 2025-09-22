'use client'

import { motion } from 'motion/react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'
import { FocusOn } from 'react-focus-on'

import type { ReactNode } from 'react'
import type { RefObject } from 'react'

// local imports
import { useMobileMenuStore } from '../model/useMobileMenuStore'

interface MobileMenuProps {
  children?: ReactNode
  refs?: {
    openMobileMenuButtonRef?: RefObject<HTMLButtonElement | null>
    closeMobileMenuButtonRef?: RefObject<HTMLButtonElement | null>
  }
}

export const MobileMenu = ({ children, refs }: MobileMenuProps) => {
  const isOpen = useMobileMenuStore((state) => state.isOpen)
  const closeMenu = useMobileMenuStore((state) => state.closeMenu)
  const reset = useMobileMenuStore((state) => state.reset)
  const pathname = usePathname()
  const isDesktop = useMediaQuery('(min-width: 1280px)')

  // Close the menu when the pathname changes.
  useEffect(() => {
    closeMenu()
  }, [closeMenu, pathname])

  // Reset the menu when the screen size changes to desktop.
  useEffect(() => {
    if (isDesktop) {
      reset()
    }
  }, [isDesktop, reset])

  return (
    <motion.div
      id='mobile-menu-container'
      inert={!isOpen}
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ ease: 'easeIn', duration: 0.3 }}
      className='bg-primary-0 z-mobile-menu fixed inset-0 shadow xl:hidden'
    >
      <FocusOn
        enabled={isOpen}
        onActivation={() => {
          refs?.closeMobileMenuButtonRef?.current?.focus()
        }}
        onDeactivation={() => {
          refs?.openMobileMenuButtonRef?.current?.focus()
        }}
        onEscapeKey={closeMenu}
        className='h-full'
      >
        {children}
      </FocusOn>
    </motion.div>
  )
}
