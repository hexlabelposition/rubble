import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div className={mergeClasses('container', className)} {...props}>
      {children}
    </div>
  )
}
