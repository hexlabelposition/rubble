import type { FunctionComponent } from 'react'
import type { SVGProps } from 'react'

import { routes } from '@shared/config'
import { socials } from '@shared/config'

import { GroupIcon } from '@shared/ui'
import { MessageIcon } from '@shared/ui'
import { MapPinIcon } from '@shared/ui'
import { CallIcon } from '@shared/ui'

interface ContactItem {
  key: string
  title: string
  description: string
  link: {
    label: string
    href: string
    isExternal?: boolean
  }
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

type ContactList = Array<ContactItem>

export const contacts: ContactList = [
  {
    key: 'chat-our-agent',
    title: 'Chat Our Agents',
    description: 'Speak to our friendly agent.',
    link: {
      label: 'Chat Now',
      href: routes.chatSupport,
    },
    Icon: GroupIcon,
  },
  {
    key: 'chat-our-support',
    title: 'Chat Our Support',
    description: "We're here to help.",
    link: {
      label: 'Chat Now',
      href: routes.chatSupport,
    },
    Icon: MessageIcon,
  },
  {
    key: 'visit-us',
    title: 'Visit Us',
    description: 'Visit our office HQ.',
    link: {
      label: 'Get Directions',
      href: socials.googleMaps,
      isExternal: true,
    },
    Icon: MapPinIcon,
  },
  {
    key: 'call-us',
    title: 'Call Us',
    description: 'Mon - Fri from 9am to 5pm.',
    link: {
      label: 'Call Now',
      href: socials.phone,
      isExternal: true,
    },
    Icon: CallIcon,
  },
]
