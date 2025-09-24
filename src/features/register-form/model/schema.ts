import { z } from 'zod/v4'

export const registerFormSchema = z
  .object({
    fullname: z
      .string({ error: 'Name is required' })
      .trim()
      .max(30, { message: 'Name must be at most 30 characters' })
      .nonempty({ message: 'Name is required' }),

    email: z
      .string({ error: 'Email is required' })
      .trim()
      .nonempty({ message: 'Email is required' })
      .max(50, { message: 'Email must be at most 50 characters' }),

    password: z
      .string({ error: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(50, { message: 'Password must be at most 50 characters long' }),

    repeatPassword: z.string({ error: 'Repeat password is required' }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  })
