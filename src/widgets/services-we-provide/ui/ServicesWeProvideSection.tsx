import Image from 'next/image'

import { Section } from '@shared/ui'
import { Card } from '@shared/ui'

import { services } from '../config/services'

export const ServicesWeProvideSection = () => {
  return (
    <Section.Root id='services-we-provide'>
      <Section.Header>
        <Section.Label>Services We Provide</Section.Label>
        <Section.Title>Complete Property Solutions</Section.Title>
        <Section.Description>
          We offer a full range of services to help you find a property, rent or
          sell as needed.
        </Section.Description>
      </Section.Header>

      <Section.Body className='lg:max-w-8xl max-w-md'>
        <ul className='grid gap-8 lg:grid-cols-3 xl:gap-12'>
          {services.map(
            ({
              key,
              image: { src, width, height, alt },
              title,
              description,
            }) => (
              <li key={key}>
                <Card className='flex flex-col gap-y-4 text-center xl:gap-y-8'>
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    sizes='(max-width: 1280px) 100vw, 33vw'
                    loading='lazy'
                    className='h-auto w-full rounded-md object-cover xl:rounded-lg'
                  />

                  <div className='flex flex-col gap-y-2 xl:gap-y-4'>
                    <h3 className='text-lg font-semibold xl:text-xl 2xl:text-2xl'>
                      {title}
                    </h3>

                    <p className='text-secondary-500 text-xs text-pretty xl:text-sm 2xl:text-base'>
                      {description}
                    </p>
                  </div>
                </Card>
              </li>
            ),
          )}
        </ul>
      </Section.Body>
    </Section.Root>
  )
}
