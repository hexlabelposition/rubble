import classNames from 'classnames'

interface ArticleProps {
  children: React.ReactNode
  className?: string
}

export default function Article({ children, className }: ArticleProps) {
  return (
    <article
      className={classNames(
        'rounded-xl border border-secondary-200 p-4',
        className
      )}
    >
      {children}
    </article>
  )
}
