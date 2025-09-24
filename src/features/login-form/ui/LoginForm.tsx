'use client'

import Form from 'next/form'

import { useEffect } from 'react'
import { useActionState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from '@conform-to/react'
import { getFormProps } from '@conform-to/react'
import { getInputProps } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'

import { Field } from '@shared/ui'
import { Input } from '@shared/ui'
import { Button } from '@shared/ui'

import { routes } from '@shared/config'

import { submitLoginForm } from '../model/action'
import { loginFormSchema } from '../model/schema'

export const LoginForm = () => {
  const [state, action, isPending] = useActionState(submitLoginForm, null)

  const router = useRouter()

  const [form, fields] = useForm({
    id: 'login-form',
    lastResult: state,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginFormSchema })
    },
    shouldValidate: 'onSubmit',
    defaultNoValidate: true,
  })

  // if login is successful, redirect to home
  useEffect(() => {
    if (state?.status === 'success') {
      const delay = setTimeout(() => {
        router.replace(routes.home)
      }, 1500)

      return () => clearTimeout(delay)
    }
  }, [router, state])

  return (
    <Form
      {...getFormProps(form)}
      action={action}
      className='flex flex-col gap-y-8 xl:gap-y-14'
    >
      <fieldset
        disabled={isPending}
        className='flex flex-col gap-y-8 xl:gap-y-14'
      >
        <legend className='sr-only'>Login Form</legend>

        <div className='grid gap-y-6 text-left xl:gap-y-8'>
          <Field>
            <label htmlFor={fields.email.id} className='sr-only'>
              Email
            </label>

            <Input
              autoComplete='email'
              placeholder='Email address'
              {...getInputProps(fields.email, {
                type: 'email',
                value: true,
              })}
              defaultValue={(state?.initialValue?.email as string) || ''}
            />

            {fields.email.errors && (
              <p className='text-error-500 pl-7 text-xs xl:pl-8 xl:text-base'>
                {fields.email.errors[0]}
              </p>
            )}
          </Field>

          <Field>
            <label htmlFor={fields.password.id} className='sr-only'>
              Password
            </label>

            <Input
              autoComplete='current-password'
              placeholder='Password'
              {...getInputProps(fields.password, {
                type: 'password',
                value: true,
              })}
              defaultValue={(state?.initialValue?.password as string) || ''}
            />

            {fields.password.errors && (
              <p className='text-error-500 pl-7 text-xs xl:pl-8 xl:text-base'>
                {fields.password.errors[0]}
              </p>
            )}
          </Field>
        </div>
      </fieldset>

      <Button
        type='submit'
        aria-busy={isPending}
        aria-disabled={isPending}
        disabled={isPending}
        className='text-sm xl:min-h-24 xl:text-base'
      >
        {isPending
          ? //   <LoaderCircleIcon
            //     aria-label='Loading...'
            //     width={24}
            //     height={24}
            //     className='animate-spin'
            //   />
            'Logging in...'
          : 'Login with Email'}
      </Button>
    </Form>
  )
}
