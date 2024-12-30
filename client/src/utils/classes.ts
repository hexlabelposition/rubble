import clsx, { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge<'text'>({
  // ↓ Override elements from the default config
  //   It has the same shape as the `extend` object, so we're going to skip it here.
  override: {},
  // ↓ Extend values from the default config
  extend: {
    // ↓ Add values to existing theme scale or create a new one
    theme: {},
    // ↓ Add values to existing class groups or define new ones
    classGroups: {
      text: [
        'text-xxs',
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
      ],
    },
    // ↓ Here you can define additional conflicts across class groups
    conflictingClassGroups: {},
    // ↓ Define conflicts between postfix modifiers and class groups
    conflictingClassGroupModifiers: {},
  },
})

export function mergeClasses(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
