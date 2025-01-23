import React from 'react'

// Subcomponents
import Hero from './Hero'
import AboutRubble from './AboutRubble'
import ServicesWeProvide from './ServicesWeProvide'
import PopularProperty from './PopularProperty'
import HowItWork from './HowItWork'
import ContactUs from './ContactUs'

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero />
      <AboutRubble />
      <ServicesWeProvide />
      <PopularProperty />
      <HowItWork />
      <ContactUs />
    </main>
  )
}
