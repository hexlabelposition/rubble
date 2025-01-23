import React from 'react'
import { Outlet } from 'react-router-dom'

// Subcomponents
import Footer from './Footer'

export default function AuthLayout(): React.JSX.Element {
  return (
    <div className="bg-auth h-screen w-screen py-12 flex flex-col justify-end">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-secondary-200 bg-primary-0 p-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
