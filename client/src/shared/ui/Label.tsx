import React from 'react'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export default function Label({ children, ...props }: LabelProps): React.JSX.Element {
  return <label {...props}>{children}</label>
}
