import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

// Subcomponents
import Header from './Header'
import Footer from './Footer'

export default function MainLayout(): React.JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
