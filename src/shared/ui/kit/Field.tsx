import { mergeClasses } from '@shared/lib'

import type { ElementType } from 'react'
import type { PolymorphicProps } from '@shared/type'

type FieldProps<T extends ElementType = 'div'> = PolymorphicProps<T>

export const Field = <T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: FieldProps<T>) => {
  const Component = as || 'div'
  return (
    <Component
      className={mergeClasses(
        '3xl:gap-y-10 flex flex-col gap-y-6 xl:gap-y-8',
        className,
      )}
      {...props}
    />
  )
}
