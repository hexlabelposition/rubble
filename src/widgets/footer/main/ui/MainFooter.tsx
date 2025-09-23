import Link from 'next/link'

import { Anchor } from '@shared/lib'
import { LogoIcon } from '@shared/ui'
import { Separator } from '@shared/ui'
import { routes } from '@shared/config'

// local imports
import { navigation } from '../config/navigation'

export const MainFooter = () => {
  return (
    <footer className='flex flex-col py-12 xl:pt-24'>
      <div className='mb-20 grid gap-y-14 lg:grid-cols-2 lg:gap-y-0 xl:mb-40'>
        <div className='flex flex-col items-start gap-y-6'>
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

          <p className='text-secondary-500 text-left text-xs text-balance md:max-w-md xl:text-base'>
            We are dedicated to helping you find the perfect property with ease.
            Explore a variety of options and let our expert team guide you to
            your ideal home in a efficient way.
          </p>
        </div>

        <nav className='md:grid-cols-auto-4 grid grid-cols-2 gap-12 lg:gap-x-14 xl:gap-x-40'>
          {navigation.map(({ key, title, list }) => (
            <section key={key} className='flex flex-col gap-y-10 lg:gap-y-12'>
              <h4 className='text-xs font-semibold 2xl:text-base'>{title}</h4>

              <ul className='flex flex-col gap-y-8 text-xs font-medium 2xl:text-base'>
                {list.map(({ key, title, href, target, rel, isExternal }) => {
                  const Component = isExternal ? Anchor : Link
                  return (
                    <li key={key}>
                      <Component
                        href={href}
                        target={target}
                        rel={rel}
                        className='hover:text-primary-500 text-secondary-500 transition-colors duration-300'
                      >
                        {title}
                      </Component>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <Separator className='mb-8 xl:mb-12' />

      <div className='text-secondary-500 flex flex-col gap-y-8 text-xs font-medium sm:flex-row-reverse sm:justify-between 2xl:text-base'>
        <p>
          <Link href={routes.termsOfUse}>Terms Of Use</Link>
          {' & '}
          <Link href={routes.privacyPolicy}>Privacy Policy</Link>
        </p>

        <p>&#169; Rubble 2024, All Rights Reserved.</p>
      </div>
    </footer>
  )
}
