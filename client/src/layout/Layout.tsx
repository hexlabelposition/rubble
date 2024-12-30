import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Layout(): React.ReactNode {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
