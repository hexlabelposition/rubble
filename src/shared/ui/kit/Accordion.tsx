import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { PlusIcon } from '@shared/ui'
import { MinusIcon } from '@shared/ui'

import { mergeClasses } from '@shared/lib'

import type { ComponentPropsWithRef } from 'react'

// === === === === === === === === === === === Root === === === === === === === === === === === //

const Root = AccordionPrimitive.Root

// === === === === === === === === === === === Item === === === === === === === === === === === //

type ItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item>

const Item = ({ className, ...props }: ItemProps) => {
  return (
    <AccordionPrimitive.Item
      className={mergeClasses(
        'bg-primary-0 p-8 data-[state=closed]:gap-0 xl:p-12',
        'flex flex-col gap-y-6 xl:gap-y-10',
        'border-secondary-200 border xl:border-2',
        'rounded-lg xl:rounded-xl',
        'transition-colors duration-300',
        'has-focus-visible:border-primary-500',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Trigger === === === === === === === === === === === //

type TriggerProps = ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>

const Trigger = ({ children, className, ...props }: TriggerProps) => {
  return (
    <AccordionPrimitive.Trigger
      className={mergeClasses(
        'group flex justify-between gap-x-30',
        'text-left text-sm font-semibold xl:text-lg 2xl:text-xl',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      {children}
      <div aria-hidden={true}>
        <MinusIcon
          width={20}
          height={20}
          className='hidden self-start group-data-[state=open]:inline md:self-auto xl:size-12'
        />
        <PlusIcon
          width={20}
          height={20}
          className='inline self-start group-data-[state=open]:hidden md:self-auto xl:size-12'
        />
      </div>
    </AccordionPrimitive.Trigger>
  )
}

// === === === === === === === === === === === Content === === === === === === === === === === === //

type ContentProps = ComponentPropsWithRef<typeof AccordionPrimitive.Content>

const Content = ({ className, ...props }: ContentProps) => {
  return (
    <AccordionPrimitive.Content
      className={mergeClasses(
        'text-secondary-500 text-xs xl:text-sm 2xl:text-base',
        className,
      )}
      {...props}
    />
  )
}

// === === === === === === === === === === === Export === === === === === === === === === === === //

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
}
