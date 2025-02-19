import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

interface DividerProps {
  className?: string
  style?: never
}

export function Divider({ className }: DividerProps): React.JSX.Element {
  return (
    <svg
      width="1"
      height="1"
      className={mergeClasses(
        'stroke-secondary-200 desktop:h-[1.2px] w-full',
        className
      )}
    >
      <line x1="0" y1="0" x2="100%" y2="100%" strokeLinecap="round" />
    </svg>
  )
}
