import React from 'react'

// UI
import Main from '@ui/Main'

// Components
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Popular from '@/components/Popular'
import Process from '@/components/Process'
import Contact from '@/components/Contact'

export default function Home(): React.ReactNode {
  return (
    <Main>
      <Hero />
      <About />
      <Services />
      <Popular />
      <Process />
      <Contact />
    </Main>
  )
}
