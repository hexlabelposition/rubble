import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router'

import { Header } from './Header'
import { Footer } from './Footer'

export function MainLayout(): React.JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
