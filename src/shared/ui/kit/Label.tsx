import * as PrimitiveLabel from '@radix-ui/react-label'
import { mergeClasses } from '@shared/lib'
import type { ComponentPropsWithRef } from 'react'

type LabelProps = ComponentPropsWithRef<typeof PrimitiveLabel.Root>

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <PrimitiveLabel.Root
      className={mergeClasses(
        'text-sm font-semibold xl:text-sm 2xl:text-base',
        className,
      )}
      {...props}
    />
  )
}
