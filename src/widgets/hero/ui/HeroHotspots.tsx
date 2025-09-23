'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@shared/ui'
import { Hotspot } from '@shared/ui'

// local imports
import { hotspots } from '../config/hotspots'

export const HeroHotspots = () => {
  return (
    <div
      role='region'
      aria-label='quick actions'
      className='relative min-h-75 lg:min-h-2/5'
    >
      {hotspots.map(({ key, title, href, ariaLabel, className, placement }) => (
        <Link
          key={key}
          href={href}
          className={className}
          aria-label={ariaLabel}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Hotspot.Root>
              <Hotspot.Anchor>
                <div className='relative rounded-full'>
                  <div className='bg-primary-500/24 3xl:size-10 relative size-6 animate-ping rounded-full backdrop-blur lg:size-8'></div>
                  <div className='bg-primary-0 3xl:size-5 absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full lg:size-4'></div>
                </div>
              </Hotspot.Anchor>
              <Hotspot.Content placement={placement}>
                <Button
                  as='div'
                  size='extra-small'
                  variant='blur'
                  className='text-2xs 3xl:min-h-20 3xl:px-8 3xl:text-sm min-h-14 px-4 lg:min-h-17 lg:rounded lg:px-6 lg:text-xs'
                >
                  {title}
                </Button>
              </Hotspot.Content>
            </Hotspot.Root>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
