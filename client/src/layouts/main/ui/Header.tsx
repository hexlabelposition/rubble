import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

import { Link } from 'react-router'
import { NavLink } from 'react-router'
import { useLocation } from 'react-router'
import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'

import LogoIcon from '@shared/assets/icons/logo.svg'
import MenuIcon from '@shared/assets/icons/menu.svg'
import CloseIcon from '@shared/assets/icons/close.svg'

import { mergeClasses } from '@shared/lib/mergeClasses'

interface NavigationLink {
  title: string
  to: string
}

const HEADER_NAVIGATION_LINKS: NavigationLink[] = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Property',
    to: '/property',
  },
  {
    title: 'Agent',
    to: '/agent',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Join Us',
    to: '/join-us',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]

export function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const openMenuRef = useRef<HTMLButtonElement>(null)
  const closeMenuRef = useRef<HTMLButtonElement>(null)

  const handleOpenMenu = () => {
    setIsOpen(true)
    setTimeout(() => closeMenuRef.current?.focus(), 300)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
    setTimeout(() => openMenuRef.current?.focus(), 300)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: 1024px)`)

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  return (
    <header className="laptop:grid-cols-[1fr_2fr_1fr] desktop:py-13 grid grid-cols-2 items-center py-7">
      {/* Logo */}
      <Link
        to="/"
        className="desktop:gap-6 laptop:gap-5 flex items-center gap-4 justify-self-start"
      >
        <img
          src={LogoIcon}
          alt="Rubble logo"
          className="desktop:size-22 laptop:size-21"
        />

        <span className="text-primary-500 laptop:text-2xl text-xl font-bold">
          Rubble
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="laptop:flex hidden justify-self-center" id="desktop-menu">
        <ul className="desktop:gap-17 flex items-center gap-15">
          {HEADER_NAVIGATION_LINKS.map(
            ({ to, title }: NavigationLink, index: number) => (
              <li key={index}>
                <NavLink
                  to={to}
                  className={mergeClasses(
                    ({ isActive }: { isActive: boolean }) =>
                      isActive || isHomePage
                        ? 'text-primary-500'
                        : 'text-secondary-500',
                    'desktop:text-base text-sm font-medium'
                  )}
                >
                  {title}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-primary-0 laptop:hidden fixed top-0 left-0 z-10 h-screen w-screen"
          >
            <div className="container grid h-full py-7">
              <div className="flex justify-end">
                <button
                  ref={closeMenuRef}
                  className="h-18"
                  onClick={handleCloseMenu}
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <img src={CloseIcon} alt="" />
                </button>
              </div>

              <ul className="desktop:gap-17 flex flex-col items-center gap-15">
                {HEADER_NAVIGATION_LINKS.map(
                  ({ to, title }: NavigationLink, index: number) => (
                    <li key={index}>
                      <Link
                        to={to}
                        className="desktop:text-base text-primary-500 text-sm font-medium"
                      >
                        {title}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              <div className="flex justify-center gap-4">
                <Link
                  to="/login"
                  className="bg-primary-0 border-secondary-200 text-primary-500 desktop:text-base desktop:rounded desktop:px-10 laptop:p-9 inline-flex h-18 items-center rounded-sm border px-8 text-sm font-semibold"
                >
                  Sign In
                </Link>

                <button className="bg-primary-500 border-secondary-300 text-primary-0 desktop:text-base desktop:rounded desktop:px-10 laptop:p-9 laptop:h-23 inline-flex h-18 items-center rounded-sm border px-8 text-sm font-semibold">
                  Book a Call
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="desktop:gap-6 laptop:gap-5 flex gap-4 justify-self-end">
        <Link
          className="bg-primary-0 border-secondary-200 text-primary-500 desktop:text-base desktop:rounded desktop:px-10 laptop:p-9 desktop:h-24 laptop:inline-flex laptop:h-23 hidden h-18 items-center rounded-sm border px-8 text-sm font-semibold"
          to="/login"
        >
          Sign In
        </Link>

        <button className="bg-primary-500 border-secondary-300 text-primary-0 desktop:text-base desktop:rounded desktop:px-10 laptop:p-9 desktop:h-24 laptop:inline-flex laptop:h-23 hidden h-18 items-center rounded-sm border px-8 text-sm font-semibold">
          Book a Call
        </button>

        <button
          ref={openMenuRef}
          className="laptop:hidden"
          onClick={handleOpenMenu}
          aria-label="Menu"
        >
          <img src={MenuIcon} alt="" />
        </button>
      </div>
    </header>
  )
}
