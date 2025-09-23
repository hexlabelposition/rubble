import type { Key } from 'react'
import type { SVGProps } from 'react'
import type { FunctionComponent } from 'react'

// local imports
import type { PropertyType } from './enums'
import type { LocationPreferenceType } from './enums'
import type { BudgetRangeType } from './enums'

export interface PropertyItem {
  id: string
  title: string
  price: number
  location: string
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  beds: number
  baths: number
  sqft: number
}

export type PropertyList = Array<PropertyItem>

interface PropertyDetailItem {
  key: Key
  descriptionTerm: string
  descriptionDetails: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export type PropertyDetailList = Array<PropertyDetailItem>

interface PropertyTypeItem {
  key: Key
  value: PropertyType
  title: string
}

export type PropertyTypeList = PropertyTypeItem[]

interface LocationPreferenceItem {
  key: Key
  value: LocationPreferenceType
  title: string
}

export type LocationPreferenceList = Array<LocationPreferenceItem>

interface BudgetRangeItem {
  key: Key
  value: BudgetRangeType
  title: string
}

export type BudgetRangeList = Array<BudgetRangeItem>
