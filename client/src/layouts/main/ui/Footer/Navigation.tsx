import React from 'react'
import { Link } from '@shared/ui/Link'
import { Anchor } from '@shared/ui/Anchor'
import { FOOTER_NAVIGATION_SECTIONS } from '../ui.constants'
import type { NavigationLink } from '../ui.types'
import type { NavigationSection } from '../ui.types'

export function Navigation(): React.JSX.Element {
  return (
    <div className="desktop:grid-cols-auto-4 desktop:gap-40 grid grid-cols-2 gap-y-12">
      {FOOTER_NAVIGATION_SECTIONS.map(
        ({ title, links }: NavigationSection, index: number) => (
          <div key={index}>
            <span className="text-primary-500 desktop:text-base desktop:mb-12 mb-10 text-xs font-semibold">
              {title}
            </span>
            <ul>
              {links.map(
                ({ title, to, href }: NavigationLink, index: number) => (
                  <li key={index}>
                    {to ? (
                      <Link
                        to={to}
                        className="desktop:text-base text-secondary-500 text-xs font-medium"
                      >
                        {title}
                      </Link>
                    ) : href ? (
                      <Anchor
                        href={href}
                        className="desktop:text-base text-secondary-500 text-xs font-medium"
                      >
                        {title}
                      </Anchor>
                    ) : null}
                  </li>
                )
              )}
            </ul>
          </div>
        )
      )}
    </div>
  )
}
