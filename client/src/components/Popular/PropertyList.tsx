import PropertyListItem from './PropertyListItem'

type Property = {
  id: number
  image: string
  title: string
  price: string
  location: string
  labels: {
    beds: string
    baths: string
    sqft: string
  }
}

const properties = [
  {
    id: 1,
    image: './src/assets/images/property-1.png',
    title: 'Classic Damara',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    labels: {
      beds: '5',
      baths: '3',
      sqft: '2,500',
    },
  },
  {
    id: 2,
    image: './src/assets/images/property-2.png',
    title: 'Manstret Haven',
    location: 'New York, United States',
    price: '$425.000',
    labels: {
      beds: '3',
      baths: '2',
      sqft: '1,500',
    },
  },
  {
    id: 3,
    image: './src/assets/images/property-3.png',
    title: 'Garden View',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    labels: {
      beds: '5',
      baths: '3',
      sqft: '2,500',
    },
  },
  {
    id: 4,
    image: './src/assets/images/property-4.png',
    title: 'Classic Damara',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    labels: {
      beds: '5',
      baths: '3',
      sqft: '2,500',
    },
  },
  {
    id: 5,
    image: './src/assets/images/property-5.png',
    title: 'Manstret Haven',
    location: 'New York, United States',
    price: '$425.000',
    labels: {
      beds: '3',
      baths: '2',
      sqft: '1,500',
    },
  },
  {
    id: 6,
    image: './src/assets/images/property-6.png',
    title: 'Garden View',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    labels: {
      beds: '5',
      baths: '3',
      sqft: '2,500',
    },
  },
]

export default function PropertyList(): React.ReactNode {
  return (
    <ul className="grid gap-4 laptop:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
      {properties.map((property: Property) => (
        <PropertyListItem {...property} key={property.id} />
      ))}
    </ul>
  )
}
