import { mergeClasses } from '@shared/lib'

import type { ElementType } from 'react'
import type { PolymorphicProps } from '@shared/type'

type CardProps<T extends ElementType = 'div'> = PolymorphicProps<T>

export const Card = <T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: CardProps<T>) => {
  const Component = as || 'div'
  return (
    <Component
      className={mergeClasses(
        'p-8 xl:p-12',
        'rounded-lg xl:rounded-xl',
        'border-secondary-200 border xl:border-2',
        className,
      )}
      {...props}
    />
  )
}
