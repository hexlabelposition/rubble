import React from 'react'

// Utils
import { mergeClasses } from '@shared/utils'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string
}

const BASE_CLASSES = 'text-sm font-semibold text-primary-500'
const RESPONSIVE_CLASSES = 'desktop:text-base'

export default function Label({ children, className, ...props }: LabelProps): React.JSX.Element {
  return (
    <label className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)} {...props}>
      {children}
    </label>
  )
}
