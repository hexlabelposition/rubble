import type { ComponentPropsWithRef } from 'react'
import type { UrlObject } from 'url'

import { formatHref } from './formatHref'

type AnchorProps = Omit<ComponentPropsWithRef<'a'>, 'href'> & {
  href: string | UrlObject | undefined
}

export const Anchor = ({ href, ...props }: AnchorProps) => {
  return <a href={formatHref(href)} {...props}></a>
}
