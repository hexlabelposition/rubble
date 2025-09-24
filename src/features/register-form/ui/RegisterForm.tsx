'use client'

import Form from 'next/form'

import { useActionState } from 'react'
import { parseWithZod } from '@conform-to/zod/v4'
import { useForm } from '@conform-to/react'
import { getFormProps } from '@conform-to/react'
import { getInputProps } from '@conform-to/react'

// Shared
import { Field } from '@shared/ui'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'

// Locals
import { submitRegisterForm } from '../model/submit'
import { registerFormSchema } from '../model/schema'

export const RegisterForm = () => {
  const [state, actionForm] = useActionState(submitRegisterForm, null)

  const [form, fields] = useForm({
    id: 'register-form',
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: registerFormSchema })
    },
    shouldValidate: 'onInput',
  })

  return (
    <Form
      action={actionForm}
      {...getFormProps(form)}
      className='grid gap-y-8 xl:gap-y-14'
    >
      <div className='grid gap-y-6 text-left xl:gap-y-8'>
        <Field>
          <label htmlFor={fields.fullname.id} className='sr-only'>
            Full Name
          </label>

          <Input
            placeholder='Full Name'
            {...getInputProps(fields.fullname, {
              type: 'text',
            })}
          />

          {fields.fullname.errors && (
            <p id={fields.fullname.errorId} className='text-error-500 text-sm'>
              {fields.fullname.errors}
            </p>
          )}
        </Field>

        <Field>
          <label htmlFor={fields.email.id} className='sr-only'>
            Email
          </label>

          <Input
            placeholder='Email Address'
            {...getInputProps(fields.email, {
              type: 'email',
            })}
          />

          {fields.email.errors && (
            <p id={fields.email.errorId} className='text-error-500 text-sm'>
              {fields.email.errors}
            </p>
          )}
        </Field>

        <Field>
          <label htmlFor={fields.password.id} className='sr-only'>
            Password
          </label>

          <Input
            placeholder='Password'
            {...getInputProps(fields.password, {
              type: 'password',
            })}
          />

          {fields.password.errors && (
            <p id={fields.password.errorId} className='text-error-500 text-sm'>
              {fields.password.errors}
            </p>
          )}
        </Field>

        <Field>
          <label htmlFor={fields.repeatPassword.id} className='sr-only'>
            Repeat Password
          </label>

          <Input
            placeholder='Repeat Password'
            {...getInputProps(fields.repeatPassword, {
              type: 'password',
            })}
          />

          {fields.repeatPassword.errors && (
            <p
              id={fields.repeatPassword.errorId}
              className='text-error-500 text-sm'
            >
              {fields.repeatPassword.errors[0]}
            </p>
          )}
        </Field>
      </div>

      <Button type='submit' className='text-sm xl:min-h-24 xl:text-base'>
        Register with Email
      </Button>
    </Form>
  )
}
