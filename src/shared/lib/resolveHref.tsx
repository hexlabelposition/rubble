import type { UrlObject } from 'url'

export function resolveHref(href: string | UrlObject | undefined) {
  return typeof href === 'string' ? href : (href?.pathname ?? undefined)
}
