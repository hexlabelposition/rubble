import Link from 'next/link'

import { Card } from '@shared/ui'
import { routes } from '@shared/config'

import type { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <div className='bg-auth grid min-h-svh grid-rows-[1fr_auto_1fr] gap-y-12 p-12 xl:p-24'>
      {/* use `row-start-2` and `justify-self-center` for positioning card on center. */}
      <div className='row-start-2 flex items-center justify-center'>
        <Card className='bg-primary-0 w-full max-w-254 overflow-hidden'>
          {children}
        </Card>
      </div>

      {/* use `row-start-3` and `self-end` for positioning footer on bottom. */}
      <footer className='row-start-3 flex items-center justify-between gap-x-8 self-end xl:gap-x-12'>
        <p className='text-xs xl:text-base'>&copy; Copyright Rubble 2024</p>

        <div className='contents gap-x-8 text-xs sm:flex md:text-sm xl:gap-x-12 2xl:text-base'>
          <Link href={routes.privacyPolicy}>Privacy Policy</Link>
          <Link href={routes.termsOfUse}>Terms Of Use</Link>
        </div>
      </footer>
    </div>
  )
}
