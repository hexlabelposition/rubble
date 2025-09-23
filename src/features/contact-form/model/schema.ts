import { z } from 'zod/v4'
import { PROPERTY_TYPES } from '@entities/property'
import { BUDGET_RANGES } from '@entities/property'
import { LOCATION_PREFERENCES } from '@entities/property'

export const contactFormSchema = z.object({
  fullname: z
    .string({ error: 'Full name is required' })
    .trim()
    .min(2, { error: 'Full name must be at least 2 characters long' })
    .max(60, { error: 'Full name must be at most 60 characters long' }),
  email: z
    .string({ error: 'Email is required' })
    .trim()
    .min(6, { message: 'Email must be at least 6 characters long' })
    .max(254, { message: 'Email must be at most 254 characters long' }),
  phone: z
    .string({ error: 'Phone number is required' })
    .trim()
    .regex(/^\d{10}$/, {
      message: 'Phone number must be a valid 10-digit number',
    }),
  propertyType: z
    .enum(PROPERTY_TYPES, {
      error: 'Property type is required',
    })
    .optional(),
  budgetRange: z
    .enum(BUDGET_RANGES, {
      error: 'Budget range is required',
    })
    .optional(),
  locationPreference: z
    .enum(LOCATION_PREFERENCES, {
      error: 'Location preference is required',
    })
    .optional(),
  message: z
    .string({ error: 'Message is required' })
    .trim()
    .max(200, { message: 'Message must be at most 200 characters' })
    .optional(),
})
