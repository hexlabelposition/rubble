import React from 'react'
import { Route, Routes } from 'react-router'

// Layouts
import { MainLayout } from '@app/layouts'

// Pages
import { Home } from '@pages/home'

export function App(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
