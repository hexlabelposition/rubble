import ProcessListItem from './ProcessListItem'

type Processes = {
  id: number
  number: string
  icon: string
  title: string
  description: string
}

interface ProcessListProps {
  processes: Processes[]
}

export default function ProcessList({ processes }: ProcessListProps) {
  return (
    <ul className="grid gap-4">
      {processes.map((process: Processes) => (
        <ProcessListItem {...process} key={process.id} />
      ))}
    </ul>
  )
}
