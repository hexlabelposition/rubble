interface BlogDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params
  console.log('Slug [id] blog:', id)

  return <div>Blog Detail Page</div>
}
