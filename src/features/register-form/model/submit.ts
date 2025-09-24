'use server'

import { registerFormSchema } from './schema'
import { parseWithZod } from '@conform-to/zod/v4'
import type { SubmissionResult } from '@conform-to/react'

export async function submitRegisterForm(
  _: unknown,
  formData: FormData,
): Promise<SubmissionResult<string[]> | null | undefined> {
  const submission = parseWithZod(formData, {
    schema: registerFormSchema,
  })

  if (submission.status === 'success') {
    console.log('Form submission successful:', submission.value)
  }

  if (submission.status === 'error') {
    console.error('Form submission error:', submission.error)
  }

  return submission.reply()
}
