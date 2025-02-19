import React from 'react'
import { Route, Routes } from 'react-router'

// Layouts
import { MainLayout } from '@layouts/main'

// Pages
import { HomePage } from '@pages/home'

export function App(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
