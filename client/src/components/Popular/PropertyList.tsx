import PropertyListItem from './PropertyListItem'

type Property = {
  id: number
  image: string
  title: string
  price: string
  location: string
  beds: string
  baths: string
  sqft: string
}

interface PropertyListProps {
  properties: Property[]
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <ul className="grid gap-4">
      {properties.map((property) => (
        <PropertyListItem {...property} key={property.id} />
      ))}
    </ul>
  )
}
