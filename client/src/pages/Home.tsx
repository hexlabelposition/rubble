import { Fragment } from 'react/jsx-runtime'
import Header from '../components/Header'
import Main from '../components/shared/Main'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Popular from '../components/Popular'
import HowItWork from '../components/HowItWork'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Hero />
        <About />
        <Services />
        <Popular />
        <HowItWork />
        <Contact />
      </Main>
      <Footer />
    </Fragment>
  )
}
