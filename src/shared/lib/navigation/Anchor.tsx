import { format } from 'url'

import type { ComponentPropsWithRef } from 'react'
import type { UrlObject } from 'url'

type AnchorProps = Omit<ComponentPropsWithRef<'a'>, 'href'> & {
  href: string | UrlObject | undefined
}

export const Anchor = ({ href, ...props }: AnchorProps) => {
  const hrefString = typeof href === 'string' ? href : href && format(href)

  return <a href={hrefString} {...props}></a>
}
