import Image from 'next/image'

import { Card } from '@shared/ui'
import { MapPinIcon } from '@shared/ui'

// local imports
import { formatPriceUSD } from '../lib/formatPriceUSD'
import { getPropertyDetails } from '../model/mappers'
import type { PropertyItem } from '../model/types'

export const PropertyArticle = ({
  id,
  title,
  image: { src, width, height, alt },
  price,
  location,
  beds,
  baths,
  sqft,
}: PropertyItem) => {
  const details = getPropertyDetails({ beds, baths, sqft })

  return (
    <Card
      as='article'
      id={id}
      itemScope
      itemType='http://schema.org/Property'
      className='flex flex-col gap-y-4 xl:gap-y-6'
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className='h-auto w-full rounded xl:rounded-lg'
      />

      <div className='flex flex-col gap-y-6 xl:gap-y-10'>
        <header className='flex flex-col gap-y-4 xl:gap-y-6'>
          <div className='flex items-center justify-between font-semibold xl:text-lg 2xl:text-xl'>
            <h3 itemProp='name'>{title}</h3>
            <p itemProp='price'>{formatPriceUSD(price)}</p>
          </div>

          <p className='text-secondary-500 flex items-center gap-x-2 text-xs xl:text-sm 2xl:text-base'>
            <MapPinIcon
              aria-hidden={true}
              width={16}
              height={16}
              className='xl:size-10'
            />
            {location}
          </p>
        </header>

        <dl className='flex items-center justify-between'>
          {details.map(({ key, descriptionTerm, descriptionDetails, Icon }) => (
            <div
              key={key}
              className='text-secondary-500 border-secondary-200 flex min-h-16 items-center gap-x-3 rounded-sm border px-4 xl:min-h-20 xl:gap-x-4 xl:rounded xl:border-2 xl:px-6'
            >
              <Icon aria-hidden width={20} height={20} className='xl:size-12' />

              <dt className='sr-only'>{descriptionTerm}</dt>
              <dd className='text-xs 2xl:text-base'>{descriptionDetails}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Card>
  )
}
