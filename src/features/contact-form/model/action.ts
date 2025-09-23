'use server'

import { parseWithZod } from '@conform-to/zod/v4'
import type { SubmissionResult } from '@conform-to/react'

// local imports
import { contactFormSchema } from './schema'

export async function submitContactForm(
  _: unknown,
  formData: FormData,
): Promise<SubmissionResult<string[] | null | undefined>> {
  const submission = parseWithZod(formData, {
    schema: contactFormSchema,
  })

  await new Promise((resolve) => setTimeout(resolve, 2000))

  console.log(submission)

  return submission.reply()
}
