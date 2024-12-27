import Container from './shared/Container'
import Section from './shared/Section'
import Label from './shared/Label'
import PropertyList from './PropertyList'

import property1 from '../assets/images/property-1.png'
import property2 from '../assets/images/property-2.png'
import property3 from '../assets/images/property-3.png'
import property4 from '../assets/images/property-4.png'
import property5 from '../assets/images/property-5.png'
import property6 from '../assets/images/property-6.png'

const properties = [
  {
    id: 1,
    image: property1,
    title: 'Classic Damara',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    beds: '5',
    baths: '3',
    sqft: '2,500',
  },
  {
    id: 2,
    image: property2,
    title: 'Manstret Haven',
    location: 'New York, United States',
    price: '$425.000',
    beds: '3',
    baths: '2',
    sqft: '1,500',
  },
  {
    id: 3,
    image: property3,
    title: 'Garden View',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    beds: '5',
    baths: '3',
    sqft: '2,500',
  },
  {
    id: 4,
    image: property4,
    title: 'Classic Damara',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    beds: '5',
    baths: '3',
    sqft: '2,500',
  },
  {
    id: 5,
    image: property5,
    title: 'Manstret Haven',
    location: 'New York, United States',
    price: '$425.000',
    beds: '3',
    baths: '2',
    sqft: '1,500',
  },
  {
    id: 6,
    image: property6,
    title: 'Garden View',
    location: 'Dhaka, Bangladesh',
    price: '$480.500',
    beds: '5',
    baths: '3',
    sqft: '2,500',
  },
]

export default function Popular() {
  return (
    <Section>
      <Container>
        <header className="mb-7 text-center">
          <div className="mb-3">
            <Label>Popular Property</Label>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-primary-500">
              Explore Diverse Property Listings
            </p>
            <p className="text-sm font-medium text-secondary-500">
              Discover properties for every need, from cozy homes to luxury
              estates.
            </p>
          </div>
        </header>

        <PropertyList properties={properties} />
      </Container>
    </Section>
  )
}
