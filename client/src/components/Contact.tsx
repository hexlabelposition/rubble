import Section from './shared/Section'
import Container from './shared/Container'
import Label from './shared/Label'
import Form from './shared/Form'

import contactImage from '../assets/images/contact-image.jpg'

export default function HowItWork() {
  return (
    <Section>
      <Container>
        <header className="mb-7 text-center">
          <div className="mb-3">
            <Label>Contact Us</Label>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-primary-500">
              Connect to Find Your Property
            </p>
            <p className="text-sm font-medium text-secondary-500">
              Contact our team, and we’ll guide you every step of the way.
            </p>
          </div>
        </header>

        <div className="border border-secondary-200 p-4">
          <img src={contactImage} alt="" className="mb-4" />
          <Form />
        </div>
      </Container>
    </Section>
  )
}
