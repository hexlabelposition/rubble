import Section from './shared/Section'
import Container from './shared/Container'
import Label from './shared/Label'
import Article from './shared/Article'

import buyProperty from '../assets/images/buy-property-service.jpg'
import rentProperty from '../assets/images/rent-property-service.png'
import sellProperty from '../assets/images/sell-property-service.png'

export default function Services() {
  return (
    <Section>
      <Container>
        <header className="mb-7 text-center">
          <div className="mb-3">
            <Label>Services We Provide</Label>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-primary-500">
              Complete Property Solutions
            </p>
            <p className="text-sm font-medium text-secondary-500">
              We offer a full range of services to help you find a property,
              rent or sell as needed.
            </p>
          </div>
        </header>

        <div className="grid gap-4">
          <Article>
            <img
              width={295}
              height={262}
              src={buyProperty}
              className="mb-2"
              alt=""
            />
            <div className="text-center">
              <h3 className="mb-1 text-lg font-semibold text-primary-500">
                Buy Property
              </h3>
              <p className="text-xs font-medium text-secondary-500">
                Find your property with a vast selection of options tailored to
                idealy match your unique preferences.
              </p>
            </div>
          </Article>

          <Article>
            <img
              width={295}
              height={262}
              src={rentProperty}
              className="mb-2"
              alt=""
            />
            <div className="text-center">
              <h3 className="mb-1 text-lg font-semibold text-primary-500">
                Rent Property
              </h3>
              <p className="text-xs font-medium text-secondary-500">
                Discover the perfect housing solution, whether you need a
                convenient and temporary stay.
              </p>
            </div>
          </Article>

          <Article>
            <img
              width={295}
              height={262}
              src={sellProperty}
              className="mb-2"
              alt=""
            />
            <div className="text-center">
              <h3 className="mb-1 text-lg font-semibold text-primary-500">
                Rent Property
              </h3>
              <p className="text-xs font-medium text-secondary-500">
                Sell your property with maximum visibility, easily connect with
                a broad audience of buyers.
              </p>
            </div>
          </Article>
        </div>
      </Container>
    </Section>
  )
}
