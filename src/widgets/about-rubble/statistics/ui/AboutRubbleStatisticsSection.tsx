import Image from 'next/image'

import { Section } from '@shared/ui'
import { Card } from '@shared/ui'
import { MoveUpRightIcon } from '@shared/ui'

// local imports
import { statistics } from '../config/statistics'

export const AboutRubbleStatisticsSection = () => {
  return (
    <Section.Root id='about-rubble-statistics'>
      <Section.Header>
        <Section.Label>About Rubble</Section.Label>
        <Section.Title>Trusted Partner for Your Journey</Section.Title>
        <Section.Description>
          We manage properties efficiently, ensuring the best renting or selling
          experience.
        </Section.Description>
      </Section.Header>

      <Section.Body>
        <div className='grid gap-8 lg:grid-cols-[5fr_3fr] xl:gap-12'>
          <Card>
            <h3 className='mb-4 font-semibold 2xl:text-2xl'>
              Partner for Every Property Need
            </h3>

            <p className='text-secondary-500 mb-6 text-xs xl:mb-8 2xl:text-base'>
              As a leading property platform, we provide full-service solutions
              to meet your needs. With top properties and dedicated experts, we
              ensure a seamless experience for buying, selling, or renting.
            </p>

            <div className='relative aspect-[295/220] w-full md:aspect-[768/388]'>
              <Image
                fill
                src='/complete-property.webp'
                alt=''
                sizes='(max-width: 1280px) 100vw, 50vw'
                loading='lazy'
                className='rounded object-cover xl:rounded-lg'
              />
            </div>
          </Card>

          <section>
            <h3 className='sr-only'>Our Statistics</h3>

            <dl className='grid h-full grid-cols-2 gap-8 xl:gap-10 2xl:gap-12'>
              {statistics.map(({ key, title, count }) => (
                <Card
                  key={key}
                  className='flex h-full flex-col justify-between gap-y-20'
                >
                  <div className='border-secondary-200 flex aspect-square min-h-18 items-center justify-center self-end rounded-full border p-2 xl:min-h-22 xl:border-2'>
                    <MoveUpRightIcon
                      width={16}
                      height={16}
                      className='xl:size-12'
                    />
                  </div>

                  <div className='flex flex-col-reverse gap-y-6 xl:gap-y-10'>
                    <dt className='text-xs xl:text-sm 2xl:text-base'>
                      {title}
                    </dt>
                    <dd className='text-2xl font-medium xl:text-4xl 2xl:text-5xl'>
                      {count
                        .toString()
                        .padEnd(count.toString().length + 1, '+')}
                    </dd>
                  </div>
                </Card>
              ))}
            </dl>
          </section>
        </div>
      </Section.Body>
    </Section.Root>
  )
}
