import { mergeClasses } from '@shared/lib'
import type { ComponentPropsWithRef } from 'react'

// === === === === === === === === === === === Root === === === === === === === === === === === //

const Root = ({ className, ...props }: ComponentPropsWithRef<'section'>) => {
  return (
    <section
      className={mergeClasses(
        'grid gap-y-14 py-20 xl:gap-y-20 xl:py-40',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Header === === === === === === === === === === === //

const Header = ({ className, ...props }: ComponentPropsWithRef<'header'>) => {
  return (
    <header
      className={mergeClasses(
        'flex flex-col items-center text-center',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Label === === === === === === === === === === === //

const Label = ({ className, ...props }: ComponentPropsWithRef<'p'>) => {
  return (
    <p
      className={mergeClasses(
        'inline-flex items-center',
        'min-h-12 px-4 xl:min-h-16 xl:px-6',
        'text-secondary-500 text-2xs xl:text-sm',
        'rounded-xs xl:rounded-sm',
        'border-secondary-200 border xl:border-2',
        'mb-6 xl:mb-8',
        'select-none',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Title === === === === === === === === === === === //

const Title = ({ className, ...props }: ComponentPropsWithRef<'h2'>) => {
  return (
    <h2
      className={mergeClasses(
        'text-xl font-semibold 2xl:text-6xl',
        'mb-4 xl:mb-6',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Description === === === === === === === === === === //

const Description = ({ className, ...props }: ComponentPropsWithRef<'p'>) => {
  return (
    <p
      className={mergeClasses(
        'text-secondary-500 text-xs text-balance 2xl:text-base',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Body === === === === === === === === === === === //

const Body = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
  return (
    <div className={mergeClasses('max-w-8xl mx-auto', className)} {...props} />
  )
}

// === === === === === === === === === === === Export === === === === === === === === === === === //

export const Section = {
  Root,
  Header,
  Label,
  Title,
  Description,
  Body,
}
