import Image from 'next/image'

import { ContactForm } from '@features/contact-form'

import { Section } from '@shared/ui'
import { Card } from '@shared/ui'

export const ContactUsSection = () => {
  return (
    <Section.Root id='contact-us'>
      <Section.Header>
        <Section.Label>Contact Us</Section.Label>
        <Section.Title>Connect to Find Your Property</Section.Title>
        <Section.Description>
          Contact our team, and we&apos;ll guide you every step of the way.
        </Section.Description>
      </Section.Header>

      <Section.Body>
        <Card className='grid w-full gap-8 xl:grid-cols-[minmax(0,408px)_1fr] xl:gap-12'>
          <Image
            src='/contact.webp'
            alt='Support agent assisting customers online'
            width={295}
            height={390}
            loading='lazy'
            className='h-auto w-full rounded object-cover xl:rounded-lg'
          />

          <ContactForm />
        </Card>
      </Section.Body>
    </Section.Root>
  )
}
