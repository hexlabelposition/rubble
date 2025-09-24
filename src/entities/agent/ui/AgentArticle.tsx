import Link from 'next/link'
import Image from 'next/image'

// Shared
import { Card } from '@shared/ui'
import { Button } from '@shared/ui'

// Locals
import type { AgentItem } from '../model/types'

export const AgentArticle = ({
  id,
  image: { src, width, height, alt },
  name,
  listings,
}: AgentItem) => {
  return (
    <Card
      as='article'
      id={id}
      className='flex h-full flex-col gap-y-4 xl:gap-y-6'
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className='h-auto w-full rounded object-cover xl:rounded-lg'
      />

      <div className='flex flex-col gap-y-6 xl:gap-y-10'>
        <header className='flex flex-col gap-y-3 xl:gap-y-4'>
          <div className='flex justify-between font-semibold xl:text-xl'>
            <h3>{name}</h3>
            <p>{listings} Listings</p>
          </div>

          <p className='text-secondary-500 text-sm xl:text-base'>
            Real Estate Agent
          </p>
        </header>

        <Button
          as={Link}
          href={'#'}
          variant='secondary'
          className='text-sm xl:min-h-24 xl:text-base'
        >
          View Details
        </Button>
      </div>
    </Card>
  )
}
