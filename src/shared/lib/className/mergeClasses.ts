import { clsx } from 'clsx/lite'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function mergeClasses(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}
