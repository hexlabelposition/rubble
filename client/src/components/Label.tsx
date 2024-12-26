import classNames from 'classnames'

interface LabelProps {
  children: React.ReactNode
  className?: string
}

export default function Label({ children, className }: LabelProps) {
  return (
    <p
      className={classNames(
        'inline-flex min-h-[24px] items-center rounded-md border border-secondary-200 bg-primary-0 px-2 text-xxs font-medium text-secondary-500',
        className
      )}
    >
      {children}
    </p>
  )
}
