import { Manrope } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Figtree } from 'next/font/google'

import type { ReactNode } from 'react'

import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
})

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${manrope.variable} ${inter.variable} ${figtree.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
