import React from 'react'

// UI
import Form from '@/shared/ui/Form'
import FieldInput from '@/shared/ui/FieldInput'
import Button from '@/shared/ui/Button'

export default function Content(): React.ReactNode {
  return (
    <div className="grid gap-4 border border-secondary-200 p-4 laptop:grid-cols-[408px_auto] laptop:gap-6">
      <img
        src="./src/assets/images/contact-image.jpg"
        width={295}
        height={390}
        alt="Woman"
        className="h-full w-full object-cover desktop:h-[546px] desktop:w-[408px]"
      />

      <Form>
        <FieldInput
          id="name"
          name="name"
          label="Full Name"
          placeholder="Enter full name"
        />
        <FieldInput
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          typeInput="email"
        />
        <FieldInput
          id="phone"
          name="phone"
          label="Phone Number"
          placeholder="Enter phone number"
          typeInput="tel"
        />

        <div className="flex flex-col gap-3">
          <label htmlFor="name">Property Type</label>
          <input type="text" id="name" placeholder="Select type" />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name">Budget Range</label>
          <input type="text" id="name" placeholder="Select budget range" />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name">Location Preferences</label>
          <input type="text" id="name" placeholder="Select location" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Message</label>
          <textarea placeholder="Enter your message" />
        </div>

        <Button
          type="submit"
          className="h-10 rounded-[10px] border border-primary-300 bg-primary-500"
        >
          <span className="text-sm font-semibold text-primary-0">Submit</span>
        </Button>
      </Form>
    </div>
  )
}
