import { BedIcon } from '@shared/ui'
import { BathIcon } from '@shared/ui'
import { SqftIcon } from '@shared/ui'

// local imports
import { formatNumberDotSeparator } from '../lib/formatNumberDotSeparator'
import type { PropertyDetailList } from './types'

interface PropertyDetailsProps {
  beds: number
  baths: number
  sqft: number
}

export const getPropertyDetails = ({
  beds,
  baths,
  sqft,
}: PropertyDetailsProps): PropertyDetailList => [
  {
    key: 'beds',
    descriptionTerm: 'Bedrooms',
    descriptionDetails: `${beds} ${beds === 1 ? 'Bed' : 'Beds'}`,
    Icon: BedIcon,
  },
  {
    key: 'baths',
    descriptionTerm: 'Bathrooms',
    descriptionDetails: `${baths} ${baths === 1 ? 'Bath' : 'Baths'}`,
    Icon: BathIcon,
  },
  {
    key: 'sqft',
    descriptionTerm: 'Square feet',
    descriptionDetails: `${formatNumberDotSeparator(sqft)} sqft`,
    Icon: SqftIcon,
  },
]
