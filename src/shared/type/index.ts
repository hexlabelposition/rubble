import type { Key } from 'react'
import type { UrlObject } from 'url'
import type { ElementType } from 'react'
import type { ComponentPropsWithRef } from 'react'

interface NavigationItem {
  key: Key
  title: string
  href: string | UrlObject
  target?: string
  rel?: string
  isExternal?: boolean
}

export type NavigationList = Array<NavigationItem>

type NavigationSectionItem = {
  key: Key
  title: string
  list: NavigationList
}

export type NavigationSectionList = Array<NavigationSectionItem>

export type PolymorphicProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithRef<T>
