import { Fragment } from 'react/jsx-runtime'
import Header from './components/Header'
import Main from './components/Main'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'

export default function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Hero />
        <About />
        <Services />
      </Main>
      <Footer />
    </Fragment>
  )
}
