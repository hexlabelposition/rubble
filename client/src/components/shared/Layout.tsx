import { Fragment } from 'react/jsx-runtime'
import Header from '../Header'
import Main from './Main'
import Footer from '../Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}
