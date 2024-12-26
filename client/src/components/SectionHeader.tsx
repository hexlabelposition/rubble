import Label from './Label'

interface SectionHeaderProps {
  label: string
  title: string
  description: string
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-7 text-center">
      <div className="mb-3">
        <Label>{label}</Label>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl font-semibold text-primary-500">{title}</p>
        <p className="text-sm font-medium text-secondary-500">{description}</p>
      </div>
    </div>
  )
}
