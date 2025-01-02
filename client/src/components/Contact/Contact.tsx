import React from 'react'

// UI
import Section from '@ui/Section'
import SectionHeading from '@ui/SectionHeading'
import Container from '@ui/Container'
import Input from '@ui/Input'
import Label from '@ui/Label'
import Button from '@/ui/Button'
import Typography from '@ui/Typography'
import Textarea from '@/ui/Textarea'

export default function Contact(): React.ReactNode {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Contact Us"
          title="Connect to Find Your Property"
          description="Contact our team, and we’ll guide you every step of the way."
        />

        <div className="grid gap-4 border border-secondary-200 p-4 laptop:grid-cols-[408px_auto] laptop:gap-6">
          <img
            src="./src/assets/images/contact-image.jpg"
            width={295}
            height={390}
            alt="Woman"
            className="h-full w-full object-cover desktop:h-[546px] desktop:w-[408px]"
          />

          <form className="grid gap-4 laptop:gap-6">
            <div className="grid gap-4 laptop:grid-cols-2 laptop:gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="Enter full name" />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Phone Number</Label>
                <Input type="text" id="name" placeholder="Enter phone number" />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Property Type</Label>
                <Input type="text" id="name" placeholder="Select type" />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Budget Range</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Select budget range"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Location Preferences</Label>
                <Input type="text" id="name" placeholder="Select location" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Message</Label>
              <Textarea placeholder="Enter your message" />
            </div>

            <Button
              type="submit"
              className="h-10 w-full rounded-[10px] border border-primary-300 bg-primary-500"
            >
              <Typography
                tag="span"
                className="text-sm font-semibold text-primary-0"
              >
                Submit
              </Typography>
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
