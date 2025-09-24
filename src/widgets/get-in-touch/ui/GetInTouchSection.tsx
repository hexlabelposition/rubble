import Link from 'next/link'

import { Section } from '@shared/ui'
import { Card } from '@shared/ui'
import { Button } from '@shared/ui'

// local imports
import { contacts } from '../config/contacts'

export const GetInTouchSection = () => {
  return (
    <Section.Root id='get-in-touch'>
      <Section.Header>
        <Section.Label>Get In Touch</Section.Label>
        <Section.Title>Contact Us for Your Dream Home</Section.Title>
        <Section.Description>
          Our team is ready to help you find, buy or rent the right property.
        </Section.Description>
      </Section.Header>

      <Section.Body>
        <ul className='grid gap-8 lg:grid-cols-2 xl:grid-cols-4'>
          {contacts.map(({ key, title, description, link, Icon }) => (
            <li key={key}>
              <Card className='3xl:gap-60 flex h-full flex-col justify-between gap-y-20 xl:gap-40'>
                <div className='border-secondary-200 hover:bg-primary-500 hover:text-primary-0 3xl:min-h-26 flex aspect-square min-h-22 items-center justify-center self-start rounded-sm border p-2 transition-colors duration-300 xl:min-h-24 xl:rounded xl:border-2'>
                  <Icon
                    aria-hidden={true}
                    width={20}
                    height={20}
                    className='3xl:size-14 xl:size-12'
                  />
                </div>

                <div className='flex h-full flex-col justify-between gap-y-8 xl:gap-y-12'>
                  <div className='flex flex-col gap-y-3 xl:gap-y-4'>
                    <h3 className='3xl:text-2xl text-lg font-semibold xl:text-xl'>
                      {title}
                    </h3>

                    <p className='text-secondary-500 3xl:text-lg text-sm xl:text-sm 2xl:text-base'>
                      {description}
                    </p>
                  </div>

                  <Button
                    as={link.isExternal ? 'a' : Link}
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    size='medium'
                    variant='secondary'
                    className='3xl:text-lg 3xl:min-h-28 hover:bg-primary-500 hover:text-primary-0 text-sm transition-colors duration-300 xl:min-h-24 xl:rounded xl:text-base'
                  >
                    {link.label}
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section.Body>
    </Section.Root>
  )
}
