import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.JSX.Element | React.JSX.Element[]
}

export default function Section({ children, ...props }: SectionProps): React.JSX.Element {
  return <section {...props}>{children}</section>
}
