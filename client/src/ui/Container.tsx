import React from 'react'
import { mergeClasses } from '../utils'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export default function Container({
  children,
  className,
  ...props
}: ContainerProps): React.ReactNode {
  return (
    <div className={mergeClasses('container', className)} {...props}>
      {children}
    </div>
  )
}
