import Section from './Section'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function Services() {
  return (
    <Section>
      <Container>
        <SectionHeader
          label="Services We Provide"
          title="Complete Property Solutions"
          description="We offer a full range of services to help you find
a property, rent or sell as needed."
        />
        <div className="text-center">Services</div>
      </Container>
    </Section>
  )
}
