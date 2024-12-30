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
      className={mergeClasses(className)}
      {...props}
    />
  )
}
