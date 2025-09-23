import type { Key } from 'react'
import type { SVGProps } from 'react'
import type { FunctionComponent } from 'react'

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
