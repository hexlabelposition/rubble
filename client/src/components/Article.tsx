import classNames from 'classnames'

interface ArticleProps {
  children: React.ReactNode
  className?: string
}

export default function Article({
  children,
  className = undefined,
}: ArticleProps) {
  return (
    <article
      className={classNames(
        'rounded-[10px] border border-secondary-200 p-4',
        className
      )}
    >
      {children}
    </article>
  )
}
