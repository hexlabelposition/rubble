interface AgentDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function AgentDetailPage({
  params,
}: AgentDetailPageProps) {
  const { id } = await params
  console.log('Slug [id] agent:', id)

  return <div>Agent Detail Page</div>
}
