import React from 'react'
import { mergeClasses } from '../utils'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string
}

export default function Label({
  children,
  className,
  htmlFor,
  form,
  ...props
}: LabelProps): React.JSX.Element {
  return (
    <label
      form={form}
      htmlFor={htmlFor}
      className={mergeClasses(
        'text-sm font-semibold text-primary-500 desktop:text-base',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}
