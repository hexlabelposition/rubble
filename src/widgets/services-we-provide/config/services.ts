import type { Key } from 'react'

interface ServiceItem {
  key: Key
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  title: string
  description: string
}

type ServiceList = Array<ServiceItem>

export const services: ServiceList = [
  {
    key: 'buy-property',
    image: {
      src: '/buy-property.webp',
      width: 295,
      height: 262,
      alt: 'Real estate agent showing floor plans to a client in a modern apartment',
    },
    title: 'Buy Property',
    description:
      'Find your property with a vast selection of options tailored to ideally match your unique preferences.',
  },
  {
    key: 'rent-property',
    image: {
      src: '/rent-property.webp',
      width: 295,
      height: 262,
      alt: 'Hand receiving apartment keys from another person',
    },
    title: 'Rent Property',
    description:
      'Discover the perfect housing solution, whether you need a convenient and temporary stay.',
  },
  {
    key: 'sell-property',
    image: {
      src: '/sell-property.webp',
      width: 295,
      height: 262,
      alt: 'Business meeting with three people discussing property documents and contracts',
    },
    title: 'Sell Property',
    description:
      'Sell your property with maximum visibility, easily connect with a broad audience of buyers.',
  },
]
