'use client'

import Link from 'next/link'

import { match } from 'path-to-regexp'
import { usePathname } from 'next/navigation'
import { resolveHref } from './resolveHref'

import type { ComponentPropsWithRef } from 'react'

type NavigationLinkProps = Omit<
  ComponentPropsWithRef<typeof Link>,
  'className'
> & {
  className?: string | ((args: { isActive: boolean }) => string | undefined)
  exact?: boolean
  sensitive?: boolean
}

export const NavigationLink = ({
  'aria-current': ariaCurrentProps = 'page',
  href,
  className: classNameProp = '',
  exact = false,
  sensitive = false,
  ...props
}: NavigationLinkProps) => {
  const pathname = usePathname()
  const hrefString = resolveHref(href)

  const isActive = Boolean(
    hrefString &&
      match(hrefString, {
        decode: decodeURIComponent,
        end: exact,
        sensitive: sensitive,
      })(pathname),
  )

  const ariaCurrent = isActive ? ariaCurrentProps : undefined

  const className =
    typeof classNameProp === 'function'
      ? classNameProp({ isActive })
      : classNameProp

  return (
    <Link
      aria-current={ariaCurrent}
      href={href}
      className={className}
      {...props}
    />
  )
}
