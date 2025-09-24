'use client'

import { useState } from 'react'

import { Section } from '@shared/ui'
import { Accordion } from '@shared/ui'

import { mergeClasses } from '@shared/lib'

// local imports
import { faq } from '../config/faq'

export const FaqSection = () => {
  const [accordionValue, setAccordionValue] = useState<string | undefined>('')

  const mid = faq.length / 2
  const leftList = faq.slice(0, mid)
  const rightList = faq.slice(mid)

  return (
    <Section.Root id='faq'>
      <Section.Header>
        <Section.Label>FAQ</Section.Label>
        <Section.Title>Frequently Asked Questions</Section.Title>
        <Section.Description>
          Get answers about services, buying, leasing, and property.
        </Section.Description>
      </Section.Header>

      <Section.Body>
        <Accordion.Root
          type='single'
          collapsible={true}
          value={accordionValue}
          onValueChange={setAccordionValue}
          className='grid gap-8 lg:grid-cols-2 lg:gap-10'
        >
          <div
            className={mergeClasses(
              'grid gap-[inherit]',
              accordionValue ? 'lg:grid-rows-5' : 'lg:grid-rows-4',
            )}
          >
            {leftList.map(({ id, question, answer }) => (
              <Accordion.Item
                key={id}
                value={id}
                className='group data-[state=open]:row-span-2'
              >
                <Accordion.Trigger className='group flex w-full items-center justify-between gap-x-30'>
                  {question}
                </Accordion.Trigger>
                <Accordion.Content>{answer}</Accordion.Content>
              </Accordion.Item>
            ))}
          </div>

          <div
            className={mergeClasses(
              'grid gap-[inherit]',
              accordionValue ? 'lg:grid-rows-5' : 'lg:grid-rows-4',
            )}
          >
            {rightList.map(({ id, question, answer }) => (
              <Accordion.Item
                key={id}
                value={id}
                className='group data-[state=open]:row-span-2'
              >
                <Accordion.Trigger className='group flex w-full items-center justify-between gap-x-30'>
                  {question}
                </Accordion.Trigger>
                <Accordion.Content>{answer}</Accordion.Content>
              </Accordion.Item>
            ))}
          </div>
        </Accordion.Root>
      </Section.Body>
    </Section.Root>
  )
}
