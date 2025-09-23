import { mergeClasses } from '@shared/lib'
import type { ComponentPropsWithRef } from 'react'

type InputProps = ComponentPropsWithRef<'input'>

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={mergeClasses(
        'border-secondary-200 aria-invalid:border-error-400 aria-invalid:focus-visible:border-error-500 placeholder:text-secondary-500 focus-visible:border-primary-500 min-h-20 rounded-sm border px-7 text-xs font-medium outline-none xl:min-h-24 xl:rounded xl:border-2 xl:px-8 xl:text-base',
        className,
      )}
      {...props}
    />
  )
}
