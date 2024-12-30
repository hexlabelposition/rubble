import Article from './shared/Article'

interface PropertyListItemProps {
  number: string
  icon: string
  title: string
  description: string
}

export default function PropertyListItem({
  number,
  icon,
  title,
  description,
}: PropertyListItemProps) {
  return (
    <li>
      <Article>
        <div className="mb-10 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-secondary-200">
            <img width={20} height={20} src={icon} alt="" />
          </div>
          <span className="text-lg font-semibold text-primary-500">
            {number}
          </span>
        </div>

        <div>
          <h3 className="mb-2 text-base font-semibold text-primary-500">
            {title}
          </h3>
          <p className="whitespace-pre-wrap text-xs font-medium text-secondary-500">
            {description}
          </p>
        </div>
      </Article>
    </li>
  )
}
