import Section from './shared/Section'
import Container from './shared/Container'
import Label from './shared/Label'
import about from '../assets/images/about.jpg'
import topLeftArrow from '../assets/icons/top-right-arrow.svg'
import Article from './shared/Article'

export default function About() {
  return (
    <Section>
      <Container>
        <header className="mb-7 text-center">
          <div className="mb-3">
            <Label>About Rubble</Label>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-semibold text-primary-500">
              Trusted Partner for Your Journey
            </p>
            <p className="text-sm font-medium text-secondary-500">
              We manage properties efficiently, ensuring the best renting or
              selling experience.
            </p>
          </div>
        </header>

        <div className="grid gap-4">
          <Article>
            <p className="mb-2 text-base font-semibold text-primary-500">
              Partner for Every Property Need
            </p>
            <p className="mb-3 text-xs font-medium text-secondary-500">
              As a leading property platform, we provide full-service solutions
              to meet your needs. With top properties and dedicated experts, we
              ensure a seamless experience for buying, selling, or renting.
            </p>
            <img
              src={about}
              width={295}
              height={220}
              alt="Completed Property"
            />
          </Article>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex flex-col gap-10 rounded-xl border border-secondary-200 p-4">
              <div className="flex h-[36px] w-[36px] items-center justify-center self-end rounded-full border border-secondary-200">
                <img
                  src={topLeftArrow}
                  width={16}
                  height={16}
                  alt="Top left arrow icon"
                />
              </div>
              <div className="font-medium text-primary-500">
                <p className="mb-3 text-2xl">800+</p>
                <p className="text-xs">Properties Available</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 rounded-xl border border-secondary-200 p-4">
              <div className="flex h-[36px] w-[36px] items-center justify-center self-end rounded-full border border-secondary-200">
                <img
                  src={topLeftArrow}
                  width={16}
                  height={16}
                  alt="Top left arrow icon"
                />
              </div>
              <div className="font-medium text-primary-500">
                <p className="mb-3 text-2xl">460+</p>
                <p className="text-xs">Satisfied Customer</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 rounded-xl border border-secondary-200 p-4">
              <div className="flex h-[36px] w-[36px] items-center justify-center self-end rounded-full border border-secondary-200">
                <img
                  src={topLeftArrow}
                  width={16}
                  height={16}
                  alt="Top left arrow icon"
                />
              </div>
              <div className="font-medium text-primary-500">
                <p className="mb-3 text-2xl">280+</p>
                <p className="text-xs">Total Partners</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 rounded-xl border border-secondary-200 p-4">
              <div className="flex h-[36px] w-[36px] items-center justify-center self-end rounded-full border border-secondary-200">
                <img
                  src={topLeftArrow}
                  width={16}
                  height={16}
                  alt="Top left arrow icon"
                />
              </div>
              <div className="font-medium text-primary-500">
                <p className="mb-3 text-2xl">120+</p>
                <p className="text-xs">Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
