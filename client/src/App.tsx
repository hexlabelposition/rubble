import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Layout
import Layout from '@layout/Layout'

// Pages
import Home from '@pages/Home'
import Property from '@pages/Property'

export default function App(): React.ReactNode {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Route>
    </Routes>
  )
}
