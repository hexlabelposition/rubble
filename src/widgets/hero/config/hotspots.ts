import { routes } from '@shared/config'
import type { Placement } from '@floating-ui/react'

import type { Key } from 'react'
import type { UrlObject } from 'url'

interface HotspotItem {
  key: Key
  title: string
  href: string | UrlObject
  ariaLabel?: string
  className?: string
  placement?: Placement
}

type HotspotList = Array<HotspotItem>

export const hotspots: HotspotList = [
  {
    key: 'buy',
    title: 'Buy Property',
    href: {
      pathname: routes.property,
      query: { propertyStatus: 'buy' },
    },
    ariaLabel: 'Buy Property',
    className: 'absolute left-[27%] lg:left-[16%] lg:top-[18%]',
    placement: 'left-end',
  },
  {
    key: 'rent',
    title: 'Rent Property',
    href: {
      pathname: routes.property,
      query: { propertyStatus: 'rent' },
    },
    ariaLabel: 'Rent Property',
    className: 'absolute bottom-[35%] right-[40%] lg:right-[50%]',
    placement: 'left-end',
  },
  {
    key: 'sell',
    title: 'Sell Property',
    href: {
      pathname: routes.property,
      query: { propertyStatus: 'sell' },
    },
    ariaLabel: 'Sell Property',
    className: 'absolute top-[8%] right-[26%] lg:top-[30%] lg:right-[21%]',
    placement: 'right-end',
  },
]
