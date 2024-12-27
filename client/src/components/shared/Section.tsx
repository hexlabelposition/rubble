import classNames from 'classnames'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={classNames('py-10', className)}>{children}</section>
  )
}
