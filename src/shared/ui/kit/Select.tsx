import * as SelectPrimitive from '@radix-ui/react-select'
import { mergeClasses } from '@shared/lib'
import type { ComponentPropsWithRef } from 'react'

import { ChevronDownIcon } from '@shared/ui'

// === === === === === === === === === === === Root === === === === === === === === === === === //

type RootProps = ComponentPropsWithRef<typeof SelectPrimitive.Root>

const Root = ({ ...props }: RootProps) => {
  return <SelectPrimitive.Root {...props} />
}

// === === === === === === === === === === === Trigger === === === === === === === === === === === //

type TriggerProps = ComponentPropsWithRef<typeof SelectPrimitive.Trigger>

const Trigger = ({ children, className, ...props }: TriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      className={mergeClasses(
        'border-secondary-200 data-[placeholder]:text-secondary-500 aria-invalid:border-error-400 aria-invalid:focus-visible:border-error-500 focus-visible:border-primary-500 inline-flex min-h-20 items-center justify-between rounded-sm border px-7 text-xs font-medium focus:outline-none xl:min-h-24 xl:rounded xl:border-2 xl:px-8 xl:text-base [&>span]:line-clamp-1',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon
          width={20}
          height={20}
          className='text-primary-500 xl:size-12'
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

// === === === === === === === === === === === Value === === === === === === === === === === === //

type ValueProps = ComponentPropsWithRef<typeof SelectPrimitive.Value>

const Value = ({ ...props }: ValueProps) => {
  return <SelectPrimitive.Value {...props} />
}

// === === === === === === === === === === === Content === === === === === === === === === === === //

type ContentProps = ComponentPropsWithRef<typeof SelectPrimitive.Content>

const Content = ({
  position = 'popper',
  className,
  children,
  ...props
}: ContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        className={mergeClasses(
          'bg-primary-0 border-secondary-200 z-50 min-w-[var(--radix-select-trigger-width)] origin-[--radix-select-content-transform-origin] rounded-sm border px-4 py-4 xl:rounded xl:border-2 xl:px-3',
          className,
        )}
        {...props}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

// === === === === === === === === === === === Item === === === === === === === === === === === //

type ItemProps = ComponentPropsWithRef<typeof SelectPrimitive.Item>

const Item = ({ children, className, ...props }: ItemProps) => {
  return (
    <SelectPrimitive.Item
      className={mergeClasses(
        'hover:bg-secondary-100 focus:bg-secondary-100 cursor-default rounded-sm px-4 py-4 text-xs outline-none select-none xl:rounded xl:px-3 xl:py-5 xl:text-base',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

// === === === === === === === === === === === Export === === === === === === === === === === === //

export const Select = {
  Root,
  Trigger,
  Value,
  Content,
  Item,
}
