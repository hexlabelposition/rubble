'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LogoIcon } from '@shared/ui'
import { Button } from '@shared/ui'

import { NavigationLink } from '@shared/lib'
import { mergeClasses } from '@shared/lib'

import { routes } from '@shared/config'

import { navigation } from '../config/navigation'

export const MainHeader = () => {
  const pathname = usePathname()
  const isHomePage = pathname === routes.home

  return (
    <header className='flex items-center justify-between gap-x-10 py-7 xl:py-14'>
      {/* Logo */}
      <div className='flex flex-1 items-center'>
        <Link
          aria-label='Go to home page'
          href={routes.home}
          className='inline-flex items-center gap-x-4 xl:gap-x-6'
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
      {/* <div className='flex items-center xl:hidden'></div> */}
    </header>
  )
}
