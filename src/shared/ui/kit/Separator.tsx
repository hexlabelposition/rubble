import { tv } from 'tailwind-variants'
import { Separator as SeparatorPrimitive } from '@radix-ui/react-separator'

import type { ComponentPropsWithRef } from 'react'

const separatorVariants = tv({
  base: 'bg-secondary-200 rounded',
  variants: {
    orientation: {
      horizontal: 'h-px w-full xl:h-[2px]',
      vertical: 'h-full w-px xl:w-[2px]',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

type SeparatorProps = Omit<
  ComponentPropsWithRef<typeof SeparatorPrimitive>,
  'children'
>

export const Separator = ({
  decorative = true,
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive
      decorative={decorative}
      orientation={orientation}
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  )
}
