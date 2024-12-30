import React from 'react'
import { mergeClasses } from '../utils'

type SectionProps = React.HTMLAttributes<HTMLElement>

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={mergeClasses('py-10', className)}>{children}</section>
  )
}
