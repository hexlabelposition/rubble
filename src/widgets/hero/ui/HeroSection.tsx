import Link from 'next/link'
import { Button } from '@shared/ui'
import { routes } from '@shared/config'

// local imports
import { HeroHotspots } from './HeroHotspots'

export const HeroSection = () => {
  return (
    <section id='hero' className='overflow-hidden py-14 xl:pt-0 xl:pb-24'>
      <div className='bg-hero 3xl:py-80 flex min-h-284 flex-col justify-between rounded px-6 py-30 lg:aspect-[1344/876] xl:rounded-xl xl:py-50'>
        <div className='flex flex-col items-center gap-y-10 xl:gap-y-20'>
          <header className='flex flex-col items-center gap-y-4 text-center text-balance xl:gap-y-10'>
            <h1 className='text-primary-0 3xl:text-9xl max-w-5xl text-4xl font-semibold lg:text-6xl 2xl:text-8xl'>
              Discover Your Dream Home Right at Your Fingertips
            </h1>

            <p className='text-primary-0 text-2xs 3xl:text-lg max-w-sm lg:max-w-2xl lg:text-sm 2xl:text-base'>
              With customized searches, we help you find properties that match
              your desired location, price and type.
              <br className='sm:hidden' />
              Start the journey to your ideal property!
            </p>
          </header>

          <div className='3xl:gap-x-10 flex items-center justify-center gap-x-4 xl:gap-x-6'>
            <Button
              as={Link}
              href={routes.login}
              size='small'
              variant='primary'
              className='3xl:text-lg 3xl:min-h-26 xl:min-h-24 xl:rounded xl:px-10 xl:text-base'
            >
              Get Started
            </Button>

            <Button
              as={Link}
              href={routes.contact}
              size='small'
              variant='secondary'
              className='3xl:text-lg 3xl:min-h-26 xl:min-h-24 xl:rounded xl:px-10 xl:text-base'
            >
              Watch Demo
            </Button>
          </div>
        </div>

        <HeroHotspots />
      </div>
    </section>
  )
}
