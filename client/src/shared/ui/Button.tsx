import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.JSX.Element | React.JSX.Element[]
  apperance?: 'button'
}

export default function Button({
  children,
  apperance,
  type = 'button',
  onClick,
  className,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={mergeClasses(apperance === 'button' ? 'button-primary' : null, className)}
      {...props}
    >
      {children}
    </button>
  )
}
