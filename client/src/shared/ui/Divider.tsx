import React from 'react'
import { Fragment } from 'react'
import Typography from '@shared/ui/Typography'

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  children?: string
}

export default function Divider({ children }: DividerProps): React.JSX.Element {
  return (
    <Fragment>
      {children ? (
        <div className="flex w-full items-center">
          <hr className="flex-grow" />
          <Typography tag="span" apperance="divider" className="desktop:px-8 px-4">
            {children}
          </Typography>
          <hr className="flex-grow" />
        </div>
      ) : (
        <hr />
      )}
    </Fragment>
  )
}
