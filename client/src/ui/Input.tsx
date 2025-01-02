import React from 'react'
import { mergeClasses } from '../utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
  type = 'text',
  id,
  placeholder,
  className,
  ...props
}: InputProps): React.JSX.Element {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className={mergeClasses(
        'h-10 w-full rounded-lg border border-secondary-200 px-[14px] text-xs font-medium placeholder:text-secondary-500 desktop:h-12 desktop:rounded-[10px] desktop:border-[1.2px] desktop:px-[18px] desktop:text-base',
        className
      )}
      {...props}
    />
  )
}
