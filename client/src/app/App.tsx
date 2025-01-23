import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Layouts
import MainLayout from '@app/layouts/MainLayout'
import AuthLayout from '@app/layouts/AuthLayout'

// Pages
import Home from '@pages/home'
import Property from '@pages/property'
import Agent from '@pages/agent'
import Blog from '@pages/blog'
import About from '@pages/about'
import JoinUs from '@pages/join-us'
import Contact from '@pages/contact'
import Login from '@pages/login'
import Register from '@pages/register'
import NotFound from '@pages/not-found'

export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
