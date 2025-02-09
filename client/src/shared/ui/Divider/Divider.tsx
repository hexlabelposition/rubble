import React from 'react'
import { Fragment } from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses/mergeClasses'

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  children?: string
}

const BASE_CLASSES = 'border-secondary-200 h-px rounded'
const RESPONSIVE_CLASSES = 'desktop:h-[1.2px]'

export function Divider({
  children,
  className,
  ...props
}: DividerProps): React.JSX.Element {
  return (
    <Fragment>
      {children ? (
        <div className="flex w-full items-center">
          <hr
            className={mergeClasses(
              BASE_CLASSES,
              RESPONSIVE_CLASSES,
              'flex-grow',
              className
            )}
            {...props}
          />

          <span className="desktop:px-8 text-secondary-500 desktop:text-base px-4 text-xs font-medium">
            {children}
          </span>

          <hr
            className={mergeClasses(
              BASE_CLASSES,
              RESPONSIVE_CLASSES,
              'flex-grow',
              className
            )}
            {...props}
          />
        </div>
      ) : (
        <hr
          className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
          {...props}
        />
      )}
    </Fragment>
  )
}
