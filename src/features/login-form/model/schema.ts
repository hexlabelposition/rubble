import { z } from 'zod/v4'

export const loginFormSchema = z.object({
  email: z
    .string({ error: 'Email is required' })
    .trim()
    .min(6, { message: 'Email must be at least 6 characters long' })
    .max(254, { message: 'Email must be at most 254 characters long' }),

  password: z
    .string({ error: 'Password is required' })
    .trim()
    .min(8, { error: 'Password must be at least 8 characters long.' })
    .max(50, { error: 'Password must be at most 50 characters long.' }),
})
