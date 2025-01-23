import React from 'react'
import { Fragment } from 'react'

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  children?: string
}

export default function Divider({ children }: DividerProps): React.JSX.Element {
  return (
    <Fragment>
      {children ? (
        <div className="flex w-full items-center">
          <hr className="h-divider flex-grow rounded border-secondary-200 desktop:h-divider-lg" />
          <span className="px-4 text-xs font-medium text-secondary-500 desktop:text-base">
            {children}
          </span>
          <hr className="h-divider flex-grow rounded border-secondary-200 desktop:h-divider-lg" />
        </div>
      ) : (
        <hr className="h-divider w-full rounded border-secondary-200 desktop:h-divider-lg" />
      )}
    </Fragment>
  )
}
