import Section from './shared/Section'
import Container from './shared/Container'
import Label from './shared/Label'
import ProcessList from './ProcessList'

import buildings from '../assets/icons/buildings.svg'
import calendar from '../assets/icons/calendar.svg'
import locationTick from '../assets/icons/location-tick.svg'
import dollarSquare from '../assets/icons/dollar-square.svg'

const processes = [
  {
    id: 1,
    number: '01',
    icon: buildings,
    title: 'Discover Property',
    description:
      'Find a wide selection of properties that perfectly suit your needs and preferences. \nBrowse a comprehensive list of properties that offer detailed information.',
  },
  {
    id: 2,
    number: '02',
    icon: calendar,
    title: 'Schedule Visit',
    description:
      'Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience.',
  },
  {
    id: 3,
    number: '03',
    icon: locationTick,
    title: 'Property Visit',
    description:
      'Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information.',
  },
  {
    id: 4,
    number: '04',
    icon: dollarSquare,
    title: 'Finalize The Deal',
    description:
      "After the visit, if you're ready, we'll guide you through a secure transaction, handling everything from negotiation to paperwork until you're the official owner.",
  },
]

export default function HowItWork() {
  return (
    <Section>
      <Container>
        <header className="mb-7 text-center">
          <div className="mb-3">
            <Label>How It Works</Label>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-primary-500">
              Journey to Achieve Property Success
            </p>
            <p className="text-sm font-medium text-secondary-500">
              Explore our process from understanding your needs to finding the
              right property.
            </p>
          </div>
        </header>

        <ProcessList processes={processes} />
      </Container>
    </Section>
  )
}
