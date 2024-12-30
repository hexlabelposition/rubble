import React from 'react'

type MainProps = React.HTMLAttributes<HTMLElement>

export default function Main({
  children,
  className,
}: MainProps): React.ReactNode {
  return <main className={className}>{children}</main>
}
