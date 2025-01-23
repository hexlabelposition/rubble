import React from 'react'

// Utils
import { mergeClasses } from '@shared/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.JSX.Element | React.JSX.Element[]
  apperance?: 'button' | 'default'
}

const APPERANCE_CLASSES = {
  button:
    'inline-flex h-9 items-center rounded border border-primary-300 bg-primary-500 font-semibold px-4 text-primary-0 text-sm',
  default: null,
}

const APPERANCE_RESPONSIVE_CLASSES = {
  button: 'laptop:border-lg desktop:h-12 laptop:h-10 desktop:px-5 laptop:px-4 desktop:text-base',
  default: null,
}

export default function Button({
  children,
  apperance = 'default',
  type = 'button',
  onClick,
  className,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={mergeClasses(
        APPERANCE_CLASSES[apperance],
        APPERANCE_RESPONSIVE_CLASSES[apperance],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
