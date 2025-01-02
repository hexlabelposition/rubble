import React from 'react'

// UI
import Article from '@ui/Article'

const services = [
  {
    key: 1,
    image: './src/assets/images/buy-property-service.jpg',
    title: 'Buy Property',
    description:
      'Find your property with a vast selection of options tailored to idealy match your unique preferences.',
  },
  {
    key: 2,
    image: './src/assets/images/rent-property-service.png',
    title: 'Rent Property',
    description:
      'Discover the perfect housing solution, whether you need a convenient and temporary stay.',
  },
  {
    key: 3,
    image: './src/assets/images/sell-property-service.png',
    title: 'Sell Property',
    description:
      'Sell your property with maximum visibility, easily connect with a broad audience of buyers.',
  },
]

export default function ServicesList(): React.ReactNode {
  return (
    <ul className="grid gap-4 laptop:grid-cols-3 desktop:gap-6">
      {services.map(
        (service: {
          key: number
          image: string
          title: string
          description: string
        }) => (
          <li key={service.key}>
            <Article>
              <img
                width={295}
                height={262}
                src={service.image}
                className="mb-2 w-full rounded-[10px] desktop:mb-4"
                alt="Image"
              />
              <div className="align-center flex flex-col gap-1 text-center desktop:gap-2">
                <h3 className="text-lg font-semibold text-primary-500 desktop:text-2xl">
                  {service.title}
                </h3>
                <p className="line-clamp-2 text-xs font-medium text-secondary-500 desktop:text-base">
                  {service.description}
                </p>
              </div>
            </Article>
          </li>
        )
      )}
    </ul>
  )
}
