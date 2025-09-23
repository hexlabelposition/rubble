import type { UrlObject } from 'url'

export function resolveHref(href: string | UrlObject) {
  return typeof href === 'string' ? href : href.pathname
}
