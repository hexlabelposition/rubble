import React from 'react'

// UI
import Image from '@shared/ui/Image'
import Link from '@shared/ui/Link'
import Article from '@shared/ui/Article'

// Assets
import BuyPropertyImage from '@shared/assets/images/buy-property.jpg'
import RentPropertyImage from '@shared/assets/images/rent-property.jpg'
import SellPropertyImage from '@shared/assets/images/sell-property.jpg'

interface ServiceCard {
  image: string
  title: string
  description: string
}

const serviceCards: ServiceCard[] = [
  {
    image: BuyPropertyImage,
    title: 'Buy Property',
    description:
      'Find your property with a vast selection of options tailored to idealy match your unique preferences.',
  },
  {
    image: RentPropertyImage,
    title: 'Rent Property',
    description:
      'Discover the perfect housing solution, whether you need a convenient and temporary stay.',
  },
  {
    image: SellPropertyImage,
    title: 'Sell Property',
    description:
      'Sell your property with maximum visibility, easily connect with a broad audience of buyers.',
  },
]

export default function Content(): React.JSX.Element {
  return (
    <ul className="grid gap-4 laptop:grid-cols-3 desktop:gap-6">
      {serviceCards.map(({ image, title, description }: ServiceCard, index: number) => (
        <li key={index}>
          <Link to="/property">
            <Article>
              <Image
                src={image}
                width={295}
                height={262}
                className="mb-2 w-full desktop:mb-4"
                alt="Image"
              />
              <div className="align-center flex flex-col gap-1 text-center desktop:gap-2">
                <h3 className="text-lg font-semibold text-primary-500 desktop:text-2xl">{title}</h3>
                <p className="line-clamp-2 text-balance text-xs font-medium text-secondary-500 desktop:text-base">
                  {description}
                </p>
              </div>
            </Article>
          </Link>
        </li>
      ))}
    </ul>
  )
}
