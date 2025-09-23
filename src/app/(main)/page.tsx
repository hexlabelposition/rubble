import { HeroSection } from '@widgets/hero'
import { AboutRubbleStatisticsSection } from '@widgets/about-rubble/statistics'
import { ServicesWeProvideSection } from '@widgets/services-we-provide'
import { PopularPropertySection } from '@widgets/popular-property'
import { HowItWorkSection } from '@widgets/how-it-work'
import { ContactUsSection } from '@widgets/contact-us'

import { mockPopularProperties } from '@entities/property'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutRubbleStatisticsSection />
      <ServicesWeProvideSection />
      <PopularPropertySection properties={mockPopularProperties} />
      <HowItWorkSection />
      <ContactUsSection />
    </main>
  )
}
