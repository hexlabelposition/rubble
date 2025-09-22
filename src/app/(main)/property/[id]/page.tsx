interface PropertyDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { id } = await params
  console.log('Slug [id] property:', id)

  return <div>Property Detail Page</div>
}
