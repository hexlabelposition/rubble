import { mergeClasses } from '@shared/lib'
import type { ComponentPropsWithoutRef } from 'react'

type TextareaProps = ComponentPropsWithoutRef<'textarea'>

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={mergeClasses(
        'text-primary-500 aria-invalid:border-error-400 aria-invalid:focus-visible:border-error-500 border-secondary-200 focus-visible:border-primary-500 h-full min-h-40 resize-none overflow-hidden rounded-sm border px-7 py-5 text-xs outline-none xl:min-h-49 xl:rounded xl:border-2 xl:px-8 xl:py-6 xl:text-base',
        className,
      )}
      {...props}
    />
  )
}
