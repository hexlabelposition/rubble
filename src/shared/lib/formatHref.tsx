import { format } from 'url'
import type { UrlObject } from 'url'

export function formatHref(href: string | UrlObject | undefined) {
  return typeof href === 'string' ? href : href && format(href)
}
