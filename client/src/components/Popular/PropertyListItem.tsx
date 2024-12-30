import Article from './shared/Article'

import locationIcon from '../assets/icons/location.svg'
import bedIcon from '../assets/icons/bed.svg'
import bathIcon from '../assets/icons/bath.svg'
import maximizeIcon from '../assets/icons/maximize.svg'

interface PropertyListItemProps {
  image: string
  title: string
  price: string
  location: string
  beds: string
  baths: string
  sqft: string
}

export default function PropertyListItem({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
}: PropertyListItemProps) {
  return (
    <li>
      <Article>
        <img
          src={image}
          width={295}
          height={240}
          className="mb-2"
          alt="Property"
        />
        <div className="mb-2 flex justify-between text-base font-semibold text-primary-500">
          <h3 className="">{title}</h3>
          <p>{price}</p>
        </div>
        <div className="mb-3 flex items-center">
          <img
            width={14}
            height={14}
            src={locationIcon}
            className="mr-1"
            alt="Location"
          />
          <p className="text-xs font-medium text-secondary-500">{location}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex h-[32px] items-center rounded-lg border border-secondary-200 px-2">
            <img
              className="mr-[6px]"
              width={20}
              height={20}
              src={bedIcon}
              alt="Beds"
            />
            <p className="text-xs font-medium text-secondary-500">
              {beds} Beds
            </p>
          </div>

          <div className="flex h-[32px] items-center rounded-lg border border-secondary-200 px-2">
            <img
              className="mr-[6px]"
              width={20}
              height={20}
              src={bathIcon}
              alt="Baths"
            />
            <p className="text-xs font-medium text-secondary-500">
              {baths} Baths
            </p>
          </div>

          <div className="flex h-[32px] items-center rounded-lg border border-secondary-200 px-2">
            <img
              className="mr-[6px]"
              width={20}
              height={20}
              src={maximizeIcon}
              alt="Sqft"
            />
            <p className="text-xs font-medium text-secondary-500">
              {sqft} sqft
            </p>
          </div>
        </div>
      </Article>
    </li>
  )
}
