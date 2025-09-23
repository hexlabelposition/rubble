'use client'

import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useFloating } from '@floating-ui/react'
import { autoUpdate } from '@floating-ui/react'
import { offset } from '@floating-ui/react'

import type { ReactNode } from 'react'
import type { Dispatch } from 'react'
import type { SetStateAction } from 'react'
import type { Placement } from '@floating-ui/react'

// === === === === === === === === === === === Context === === === === === === === === === === === //

interface HotspotOptions {
  placement?: Placement
}

interface HotspotContextType {
  floating: ReturnType<typeof useFloating>
  setOptions: Dispatch<SetStateAction<HotspotOptions>>
}

const HotspotContext = createContext<HotspotContextType | null>(null)

// === === === === === === === === === === === Root === === === === === === === === === === === //

interface HotspotRootProps {
  children: ReactNode
}

const Root = ({ children }: HotspotRootProps) => {
  const [options, setOptions] = useState<HotspotOptions>({
    placement: 'top',
  })

  const middleware = [
    offset(({ rects }) => ({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: -rects.floating.height,
    })),
  ]

  const floating = useFloating({
    placement: options.placement,
    middleware,
    whileElementsMounted: autoUpdate,
    strategy: 'absolute',
  })

  return (
    <HotspotContext value={{ floating, setOptions }}>{children}</HotspotContext>
  )
}

// === === === === === === === === === === === Anchor === === === === === === === === === === === //

interface HotspotAnchorProps {
  children: ReactNode
}

const Anchor = ({ children }: HotspotAnchorProps) => {
  const context = useContext(HotspotContext)
  if (!context) return null
  const { floating } = context

  return (
    <div aria-hidden={true} ref={floating.refs.setReference}>
      {children}
    </div>
  )
}

// === === === === === === === === === === === Content === === === === === === === === === === === //

interface HotspotContentProps {
  children: ReactNode
  placement?: Placement
}

const Content = ({ children, placement }: HotspotContentProps) => {
  const context = useContext(HotspotContext)
  const setOptions = context?.setOptions
  const floating = context?.floating

  useEffect(() => {
    if (!setOptions) return
    setOptions({ placement })
  }, [placement, setOptions])

  if (!context) return null

  return (
    <div ref={floating?.refs.setFloating} style={floating?.floatingStyles}>
      {children}
    </div>
  )
}

// === === === === === === === === === === === Export === === === === === === === === === === === //

export const Hotspot = {
  Root,
  Anchor,
  Content,
}
