import type { Key } from 'react'
import type { FunctionComponent } from 'react'
import type { SVGProps } from 'react'

import { BuildingsIcon } from '@shared/ui'
import { CalendarDaysIcon } from '@shared/ui'
import { MapPinCheckInsideIcon } from '@shared/ui'
import { DollarSquareIcon } from '@shared/ui'

interface ProcessItem {
  key: Key
  title: string
  description: string
  marker: number
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

type ProcessList = ProcessItem[]

export const processes: ProcessList = [
  {
    key: 'discover-property',
    title: 'Discover Property',
    description:
      'Find a wide selection of properties that perfectly suit your needs and preferences. Browse a comprehensive list of properties that offer detailed information.',
    marker: 1,
    Icon: BuildingsIcon,
  },
  {
    key: 'schedule-visit',
    title: 'Schedule Visit',
    description:
      'Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience.',
    marker: 2,
    Icon: CalendarDaysIcon,
  },
  {
    key: 'property-visit',
    title: 'Property Visit',
    description:
      'Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information.',
    marker: 3,
    Icon: MapPinCheckInsideIcon,
  },
  {
    key: 'finalize-the-deal',
    title: 'Finalize the Deal',
    description:
      "After the visit, if you're ready, we'll guide you through a secure transaction, handling everything from negotiation to paperwork until you're the official owner.",
    marker: 4,
    Icon: DollarSquareIcon,
  },
]
