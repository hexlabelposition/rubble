import React from 'react'

import { Outlet } from 'react-router'

import { Header } from './Header'
import { Footer } from './Footer'

export function Layout(): React.JSX.Element {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
