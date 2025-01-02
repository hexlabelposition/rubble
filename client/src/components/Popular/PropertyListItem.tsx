import React from 'react'

// UI
import Article from '@ui/Article'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'

interface PropertyListItemProps {
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

const labelsMap = {
  beds: 'Beds',
  baths: 'Bath',
  sqft: 'sqft',
}

const iconsMap: {
  [key: string]:
    | 'bed'
    | 'bath'
    | 'maximize'
    | 'location'
    | 'buildings'
    | 'calendar'
    | 'dollarSquare'
    | 'locationTick'
    | 'logo'
    | 'menu'
    | 'top-right-arrow'
} = {
  beds: 'bed',
  baths: 'bath',
  sqft: 'maximize',
}

export default function PropertyListItem({
  image,
  title,
  price,
  location,
  labels,
}: PropertyListItemProps): React.ReactNode {
  return (
    <li>
      <Article>
        <div className="mb-3 flex flex-col gap-2">
          <img
            src={image}
            width={295}
            height={240}
            className="mb-2 w-full rounded-[10px] desktop:mb-3 desktop:rounded-xl"
            alt="Property"
          />

          <div className="flex justify-between">
            <Typography
              tag="h3"
              className="text-xl font-semibold text-primary-500"
            >
              {title}
            </Typography>
            <Typography
              tag="p"
              className="text-xl font-semibold text-primary-500"
            >
              {price}
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            <Icon
              name="location"
              width={14}
              height={14}
              alt="Location"
              className="aspect-square desktop:h-5"
            />
            <Typography
              tag="p"
              className="text-xs font-medium text-secondary-500 desktop:text-base"
            >
              {location}
            </Typography>
          </div>
        </div>

        <ul className="flex justify-between gap-4 tablet:justify-evenly desktop:justify-between">
          {Object.entries(labels).map(([key, value]) => (
            <li
              key={key}
              className="flex h-[32px] items-center gap-[6px] rounded-lg border border-secondary-200 px-2 desktop:h-10 desktop:gap-2 desktop:px-3"
            >
              <Icon
                name={iconsMap[key as keyof typeof iconsMap]}
                width={20}
                height={20}
                alt={key}
                className="aspect-square desktop:h-6"
              />

              <Typography
                tag="p"
                className="text-xs font-medium text-secondary-500 tablet:text-sm laptop:text-base"
              >
                {value} {labelsMap[key as keyof typeof labelsMap]}
              </Typography>
            </li>
          ))}
        </ul>
      </Article>
    </li>
  )
}
