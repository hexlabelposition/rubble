import React from 'react'
import { mergeClasses } from '../utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  className,
  type = 'button',
  onClick,
  ...props
}: ButtonProps): React.ReactNode {
  return (
    <button
      type={type}
      onClick={onClick}
      className={mergeClasses(className)}
      {...props}
    >
      {children}
    </button>
  )
}
