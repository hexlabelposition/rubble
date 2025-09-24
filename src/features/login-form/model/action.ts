'use server'

import { parseWithZod } from '@conform-to/zod/v4'
import { loginFormSchema } from './schema'
import type { SubmissionResult } from '@conform-to/react'

export async function submitLoginForm(
  _: unknown,
  formData: FormData,
): Promise<SubmissionResult<string[] | null | undefined>> {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // zod validation
  const submission = parseWithZod(formData, { schema: loginFormSchema })
  if (submission.status === 'error') return submission.reply()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/auth/callback/credentials`,
    {
      method: 'POST',
      body: new URLSearchParams({ email, password }),
    },
  )

  if (!res.ok) {
    return submission.reply({
      formErrors: ['Invalid email or password'],
    })
  }

  return submission.reply({ hideFields: ['email', 'password'] })
}
