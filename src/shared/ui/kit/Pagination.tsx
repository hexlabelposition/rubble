import NextLink from 'next/link'
import { mergeClasses } from '@shared/lib'
import type { ComponentPropsWithRef } from 'react'

// === === === === === === === === === === === Root === === === === === === === === === === === //

type PaginationProps = ComponentPropsWithRef<'nav'>

const Root = ({ className, ...props }: PaginationProps) => {
  return (
    <nav
      className={mergeClasses('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

// === === === === === === === === === === === List === === === === === === === === === === === //

type ListProps = ComponentPropsWithRef<'ul'>

const List = ({ className, ...props }: ListProps) => {
  return (
    <ul
      className={mergeClasses(
        'flex items-center gap-x-4 xl:gap-x-6',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Item === === === === === === === === === === === //

type ItemProps = ComponentPropsWithRef<'li'>

const Item = ({ ...props }: ItemProps) => {
  return <li {...props} />
}

// === === === === === === === === === === === Link === === === === === === === === === === === //

type LinkProps = ComponentPropsWithRef<typeof NextLink> & {
  isActive?: boolean
  isDisabled?: boolean
}

const Link = ({
  isActive = false,
  isDisabled = false,
  className,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={isDisabled ? true : undefined}
      tabIndex={isDisabled ? -1 : undefined}
      className={mergeClasses(
        'bg-primary-0 aspect-square min-h-18 xl:min-h-22',
        'inline-flex items-center justify-center',
        'text-primary-500 text-sm 2xl:text-base',
        'border-secondary-200 border xl:border-2',
        'transition-colors duration-300',
        'rounded-sm xl:rounded',
        !isActive &&
          'hover:bg-primary-500 hover:text-primary-0 hover:border-primary-300',
        isActive && 'bg-primary-500 text-primary-0 border-primary-300',
        isDisabled && 'text-secondary-500 pointer-events-none',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Ellipsis === === === === === === === === === === === //

type EllipsisProps = ComponentPropsWithRef<'div'>

const Ellipsis = ({ className, ...props }: EllipsisProps) => {
  return (
    <div
      aria-hidden={true}
      className={mergeClasses(
        'text-primary-500 border-secondary-200 pointer-events-none inline-flex size-18 items-center justify-center rounded-sm border text-sm xl:size-22 xl:rounded xl:border-2 xl:text-base',
        className,
      )}
      {...props}
    >
      {'...'}
    </div>
  )
}

// === === === === === === === === === === === Previous === === === === === === === === === === === //

type PreviousProps = ComponentPropsWithRef<typeof Link>

const Previous = ({ ...props }: PreviousProps) => {
  return <Link aria-label='Go to previous page' {...props} />
}

// === === === === === === === === === === === Next === === === === === === === === === === === //

type NextProps = ComponentPropsWithRef<typeof Link>

const Next = ({ ...props }: NextProps) => {
  return <Link aria-label='Go to next page' {...props} />
}

// === === === === === === === === === === === Export === === === === === === === === === === === //

export const Pagination = {
  Root,
  List,
  Item,
  Link,
  Ellipsis,
  Previous,
  Next,
}
