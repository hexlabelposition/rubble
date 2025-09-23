'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'

import { MobileMenu } from '@features/mobile-menu'
import { MobileMenuButton } from '@features/mobile-menu'

import { NavigationLink } from '@shared/lib'
import { mergeClasses } from '@shared/lib'
import { LogoIcon } from '@shared/ui'
import { Button } from '@shared/ui'
import { routes } from '@shared/config'

// local imports
import { navigation } from '../config/navigation'

export const MainHeader = () => {
  const pathname = usePathname()
  const isHomePage = pathname === routes.home
  const openMobileMenuButtonRef = useRef<HTMLButtonElement | null>(null)
  const closeMobileMenuButtonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <header className='flex items-center justify-between gap-x-10 py-7 xl:py-14'>
      {/* Logo */}
      <div className='flex flex-1 items-center'>
        <Link
          aria-label='Go to home page'
          href={routes.home}
          className='inline-flex items-center gap-x-4 lg:gap-x-6'
        >
          <LogoIcon
            aria-hidden={true}
            width={36}
            height={36}
            className='xl:size-22'
          />
          <span className='text-xl font-bold 2xl:text-2xl'>Rubble</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden flex-auto xl:block'>
        <ul className='flex items-center justify-center gap-x-17 text-sm 2xl:text-base'>
          {navigation.map(({ key, title, href }) => {
            return (
              <li key={key}>
                <NavigationLink
                  href={href}
                  className={({ isActive }) =>
                    mergeClasses(
                      isActive || isHomePage
                        ? 'text-primary-500'
                        : 'text-secondary-500 hover:text-primary-500',
                      'transition-colors duration-300',
                    )
                  }
                >
                  {title}
                </NavigationLink>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Desktop Actions */}
      <div className='hidden flex-1 items-center justify-end gap-x-6 xl:flex'>
        <Button
          as={Link}
          href={routes.login}
          variant='secondary'
          size='large'
          className='px-10 xl:min-h-22 2xl:min-h-24'
        >
          Sign In
        </Button>

        <Button
          as={Link}
          href={routes.contact}
          size='large'
          className='px-10 xl:min-h-22 2xl:min-h-24'
        >
          Book a Call
        </Button>
      </div>

      {/* Mobile Actions */}
      <div className='flex items-center xl:hidden'>
        <MobileMenuButton ref={openMobileMenuButtonRef} mode='open' />
      </div>

      {/* Mobile Navigation */}
      <MobileMenu refs={{ openMobileMenuButtonRef, closeMobileMenuButtonRef }}>
        <div className='container flex h-full flex-col justify-between gap-20 py-7'>
          <div className='flex min-h-18 items-center justify-end'>
            <MobileMenuButton ref={closeMobileMenuButtonRef} mode='close' />
          </div>

          <nav>
            <ul className='flex flex-col gap-y-14 text-center md:gap-y-17'>
              {navigation.map(({ key, title, href }) => {
                return (
                  <li key={key}>
                    <NavigationLink
                      href={href}
                      className={({ isActive }) =>
                        mergeClasses(
                          isActive || isHomePage
                            ? 'text-primary-500'
                            : 'text-secondary-500 hover:text-primary-500 transition-colors duration-300',
                        )
                      }
                    >
                      {title}
                    </NavigationLink>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className='flex items-center justify-center gap-x-6 pb-30'>
            <Button
              as={Link}
              href={routes.login}
              variant='secondary'
              size='large'
              className='px-10'
            >
              Sign In
            </Button>

            <Button
              as={Link}
              href={routes.contact}
              size='large'
              className='px-10'
            >
              Book a Call
            </Button>
          </div>
        </div>
      </MobileMenu>
    </header>
  )
}
