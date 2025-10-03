import { Section } from '@shared/ui'
import { Card } from '@shared/ui'

import { processes } from '../config/processes'

export const HowItWorkSection = () => {
  return (
    <Section.Root id='how-it-work'>
      <Section.Header>
        <Section.Label>How It Work</Section.Label>
        <Section.Title>Journey to Achieve Property Success</Section.Title>
        <Section.Description>
          Explore our process from understanding your needs to finding the right
          property.
        </Section.Description>
      </Section.Header>

      <Section.Body>
        <ol className='grid gap-8 lg:grid-cols-2 xl:gap-12'>
          {processes.map(({ key, title, description, marker, Icon }) => (
            <li key={key}>
              <Card className='flex h-full flex-col gap-y-20 xl:gap-y-25'>
                <div
                  aria-hidden={true}
                  className='flex items-center justify-between select-none'
                >
                  <div className='border-secondary-200 hover:bg-primary-500 hover:text-primary-0 flex aspect-square min-h-20 items-center justify-center rounded-sm border p-2 transition-colors duration-300 xl:min-h-24 xl:rounded-md xl:border-2'>
                    <Icon width={20} height={20} className='xl:size-12' />
                  </div>
                  <span className='text-lg font-semibold 2xl:text-2xl'>
                    {marker.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className='flex flex-col gap-y-4 text-pretty'>
                  <h3 className='font-semibold 2xl:text-2xl'>{title}</h3>

                  <p className='text-secondary-500 text-xs 2xl:text-base'>
                    {description}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section.Body>
    </Section.Root>
  )
}
