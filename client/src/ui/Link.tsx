import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { LinkProps as ReactRouterLinkProps } from 'react-router-dom'

type InternalLinkProps = {
  as: 'internal'
} & ReactRouterLinkProps

type ExternalLinkProps = {
  as: 'external'
  href: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'to'>

type LinkProps = InternalLinkProps | ExternalLinkProps

/**
 * Universal Link component that handles both internal routing and external links
 * @example
 * // Internal link
 * <Link as="internal" to="/dashboard">Dashboard</Link>
 *
 * // External link
 * <Link as="external" href="https://example.com">External Site</Link>
 */
export default function Link({
  as,
  children,
  className,
  ...props
}: LinkProps): React.ReactNode {
  if (as === 'internal') {
    const { to, ...restProps } = props as InternalLinkProps
    return (
      <ReactRouterLink to={to} className={className} {...restProps}>
        {children}
      </ReactRouterLink>
    )
  }

  if (as === 'external') {
    const { href, ...restProps } = props as ExternalLinkProps
    return (
      <a href={href} className={className} {...restProps}>
        {children}
      </a>
    )
  }
}
