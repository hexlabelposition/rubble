'use client'

import Form from 'next/form'

import { useState } from 'react'
import { useEffect } from 'react'
import { useActionState } from 'react'
import { useForm } from '@conform-to/react'

import { getFormProps } from '@conform-to/react'
import { getInputProps } from '@conform-to/react'
import { getTextareaProps } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'

import { propertyTypeOptions } from '@entities/property'
import { budgetRangeOptions } from '@entities/property'
import { locationPreferenceOptions } from '@entities/property'

import { Field } from '@shared/ui'
import { Label } from '@shared/ui'
import { Input } from '@shared/ui'
import { Select } from '@shared/ui'
import { Textarea } from '@shared/ui'
import { Button } from '@shared/ui'

// local imports
import { submitContactForm } from '../model/action'
import { contactFormSchema } from '../model/schema'

export const ContactForm = () => {
  const [state, action, pending] = useActionState(submitContactForm, null)

  const [form, fields] = useForm({
    id: 'contact-form',
    lastResult: state,
    onValidate: ({ formData }) =>
      parseWithZod(formData, { schema: contactFormSchema }),
    shouldRevalidate: 'onInput',
  })

  const [propertyType, setPropertyType] = useState<string | undefined>(
    fields.propertyType.value,
  )
  const [budgetRange, setBudgetRange] = useState<string | undefined>(
    fields.budgetRange.value,
  )
  const [locationPreference, setLocationPreference] = useState<
    string | undefined
  >(fields.locationPreference.value)

  const handlePropertyTypeChange = (value: string) => {
    form.update({ value: { ...form.value, propertyType: value } })
    setPropertyType(value)
  }

  const handleBudgetRangeChange = (value: string) => {
    form.update({ value: { ...form.value, budgetRange: value } })
    setBudgetRange(value)
  }

  const handleLocationPreferenceChange = (value: string) => {
    form.update({ value: { ...form.value, locationPreference: value } })
    setLocationPreference(value)
  }

  useEffect(() => {
    if (state?.status === 'success') {
      setPropertyType('')
      setBudgetRange('')
      setLocationPreference('')
    }
  }, [state?.status])

  return (
    <Form
      action={action}
      {...getFormProps(form)}
      className='grid items-start gap-8 xl:grid-cols-2 xl:gap-12'
    >
      <Field>
        <Label htmlFor={fields.fullname.id}>Full Name</Label>
        <Input
          placeholder='Enter full name'
          autoComplete='name'
          {...getInputProps(fields.fullname, { type: 'text' })}
        />

        {fields.fullname.errors && (
          <p
            id={fields.fullname.errorId}
            className='text-error-500 px-7 text-xs xl:px-8'
          >
            {fields.fullname.errors[0]}
          </p>
        )}
      </Field>

      <Field>
        <Label htmlFor={fields.email.id}>Email Address</Label>
        <Input
          placeholder='Enter email address'
          autoComplete='email'
          {...getInputProps(fields.email, { type: 'email' })}
        />

        {fields.email.errors && (
          <p
            id={fields.email.errorId}
            className='text-error-500 px-7 text-xs xl:px-8'
          >
            {fields.email.errors[0]}
          </p>
        )}
      </Field>

      <Field>
        <Label htmlFor={fields.phone.id}>Phone Number</Label>
        <Input
          placeholder='Enter phone number'
          autoComplete='tel'
          {...getInputProps(fields.phone, { type: 'tel' })}
        />

        {fields.phone.errors && (
          <p
            id={fields.phone.errorId}
            className='text-error-500 px-7 text-xs xl:px-8'
          >
            {fields.phone.errors[0]}
          </p>
        )}
      </Field>

      <Field>
        <Label htmlFor={fields.propertyType.id}>Property Type</Label>

        <Select.Root
          value={propertyType}
          onValueChange={handlePropertyTypeChange}
          name={fields.propertyType.name}
          required={fields.propertyType.required}
        >
          <Select.Trigger
            id={fields.propertyType.id}
            aria-invalid={!fields.propertyType.valid || undefined}
            aria-describedby={
              !fields.propertyType.valid
                ? fields.propertyType.errorId
                : undefined
            }
          >
            <Select.Value placeholder='Select property type' />
          </Select.Trigger>

          <Select.Content>
            {propertyTypeOptions.map(({ key, value, title }) => (
              <Select.Item key={key} value={value}>
                {title}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        {fields.propertyType.errors && (
          <p
            id={fields.propertyType.errorId}
            className='text-error-500 px-7 text-xs xl:px-8'
          >
            {fields.propertyType.errors[0]}
          </p>
        )}
      </Field>

      <Field>
        <Label htmlFor={fields.budgetRange.id}>Budget Range</Label>

        <Select.Root
          value={budgetRange}
          onValueChange={handleBudgetRangeChange}
          name={fields.budgetRange.name}
          required={fields.budgetRange.required}
        >
          <Select.Trigger
            id={fields.budgetRange.id}
            aria-invalid={!fields.budgetRange.valid || undefined}
            aria-describedby={
              !fields.budgetRange.valid ? fields.budgetRange.errorId : undefined
            }
          >
            <Select.Value placeholder='Select budget range' />
          </Select.Trigger>

          <Select.Content>
            {budgetRangeOptions.map(({ key, value, title }) => (
              <Select.Item key={key} value={value}>
                {title}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        {fields.budgetRange.errors && (
          <p
            id={fields.budgetRange.errorId}
            className='text-error-500 px-7 text-xs xl:px-8'
          >
            {fields.budgetRange.errors[0]}
          </p>
        )}
      </Field>

      <Field>
        <Label htmlFor={fields.locationPreference.id}>
          Location Preference
        </Label>

        <Select.Root
          value={locationPreference}
          onValueChange={handleLocationPreferenceChange}
          name={fields.locationPreference.name}
          required={fields.locationPreference.required}
        >
          <Select.Trigger
            id={fields.locationPreference.id}
            aria-invalid={!fields.locationPreference.valid || undefined}
            aria-describedby={
              !fields.locationPreference.valid
                ? fields.locationPreference.errorId
                : undefined
            }
          >
            <Select.Value placeholder='Select location preference' />
          </Select.Trigger>

          <Select.Content>
            {locationPreferenceOptions.map(({ key, value, title }) => (
              <Select.Item key={key} value={value}>
                {title}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        {fields.locationPreference.errors && (
          <p
            id={fields.locationPreference.errorId}
            className='text-error-500 px-7 text-xs xl:px-8'
          >
            {fields.locationPreference.errors[0]}
          </p>
        )}
      </Field>

      <Field className='xl:col-span-2'>
        <Label htmlFor={fields.message.id}>Message</Label>
        <Textarea
          placeholder='Write message'
          {...getTextareaProps(fields.message)}
        />

        {fields.message.errors && (
          <p id={fields.message.errorId} className='text-error-500 text-xs'>
            {fields.message.errors[0]}
          </p>
        )}
      </Field>

      <Button
        type='submit'
        variant='primary'
        size='medium'
        className='self-end text-sm xl:col-span-2 xl:min-h-24 xl:text-base'
      >
        {pending ? 'Submitting...' : 'Submit'}
      </Button>
    </Form>
  )
}
