import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Layout
import Layout from '@layout/Layout'

// Main routes
import Home from '@pages/Home'
import Property from '@pages/Property'
import Agent from '@pages/Agent'
import Blog from '@pages/Blog'
import About from '@pages/About'
import Join from '@pages/Join'
import Contact from '@pages/Contact'
import Career from '@pages/Career'

// Authorization routes
import Login from '@pages/Login'
import Register from '@pages/Register'
import NotFound from '@pages/NotFound'

// Legal routes
import Policy from '@pages/Policy'
import Copyright from '@pages/Copyright'

export default function App(): React.ReactNode {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/career" element={<Career />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
