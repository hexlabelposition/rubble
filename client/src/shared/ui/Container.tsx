import React from 'react'
import { mergeClasses } from '@shared/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

const BASE_CLASSES = 'container'
const RESPONSIVE_CLASSES =
  'tablet:max-w-[768px] laptop:max-w-[1280px] desktop:max-w-[1600px]'

export default function Container({
  children,
  className,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div
      className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
      {...props}
    >
      {children}
    </div>
  )
}
