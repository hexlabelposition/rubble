import classNames from 'classnames'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className = undefined,
}: ContainerProps) {
  return <div className={classNames('container', className)}>{children}</div>
}
