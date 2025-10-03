import { tv } from 'tailwind-variants'

import type { ElementType } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { PolymorphicProps } from '@shared/type'

const buttonVariants = tv({
  base: [
    'inline-flex shrink-0 items-center justify-center px-8',
    'whitespace-nowrap',
    'border xl:border-2',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  variants: {
    variant: {
      primary: 'text-primary-0 bg-primary-500 border-primary-300',
      secondary: 'text-primary-500 bg-primary-0 border-secondary-200',
    },
    size: {
      'extra-small': 'min-h-16 rounded-sm text-sm font-medium',
      small: 'min-h-18 rounded-sm text-sm font-medium',
      medium: 'min-h-20 rounded-md text-base font-semibold',
      large: 'min-h-24 rounded-md text-base font-semibold',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<T> &
  VariantProps<typeof buttonVariants>

export const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button'
  return (
    <Component
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}
