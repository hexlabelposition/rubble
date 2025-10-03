import { routes } from '@shared/config'
import { socials } from '@shared/config'

import type { NavigationList } from '@shared/type'
import type { NavigationSectionList } from '@shared/type'

const company: NavigationList = [
  {
    key: 'blog',
    title: 'Blog',
    href: routes.blog,
  },
  {
    key: 'career',
    title: 'Career',
    href: routes.career,
  },
  {
    key: 'contact',
    title: 'Contact',
    href: routes.contact,
  },
  {
    key: 'about-us',
    title: 'About Us',
    href: routes.about,
  },
]

const socialMedia: NavigationList = [
  {
    key: 'twitter',
    title: 'Twitter',
    href: socials.twitter,
    target: '_blank',
    rel: 'noopener noreferrer',
    isExternal: true,
  },
  {
    key: 'linkedin',
    title: 'LinkedIn',
    href: socials.linkedin,
    target: '_blank',
    rel: 'noopener noreferrer',
    isExternal: true,
  },
  {
    key: 'facebook',
    title: 'Facebook',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: socials.facebook,
    isExternal: true,
  },
  {
    key: 'instagram',
    title: 'Instagram',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: socials.instagram,
    isExternal: true,
  },
]

const services: NavigationList = [
  {
    key: 'buy-property',
    title: 'Buy Property',
    href: {
      pathname: routes.property,
      query: { propertyStatus: 'buy' },
    },
  },
  {
    key: 'sell-property',
    title: 'Sell Property',
    href: {
      pathname: routes.property,
      query: { propertyStatus: 'sell' },
    },
  },
  {
    key: 'rent-property',
    title: 'Rent Property',
    href: {
      pathname: routes.property,
      query: { propertyStatus: 'rent' },
    },
  },
  {
    key: 'property-agent',
    title: 'Property Agent',
    href: routes.agent,
  },
]

const contact: NavigationList = [
  {
    key: 'chat-our-support',
    title: 'Chat Our Support',
    href: routes.contact,
  },
  {
    key: 'email',
    title: 'rubble@gmail.com',
    href: socials.email,
    isExternal: true,
  },
  {
    key: 'phone',
    title: '+1 814 637 1529',
    href: socials.phone,
    isExternal: true,
  },
]

export const navigation: NavigationSectionList = [
  {
    key: 'company',
    title: 'Company',
    list: company,
  },
  {
    key: 'social-media',
    title: 'Social Media',
    list: socialMedia,
  },
  {
    key: 'services',
    title: 'Services',
    list: services,
  },
  {
    key: 'contact',
    title: 'Contact',
    list: contact,
  },
]
