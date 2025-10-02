import { Manrope } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Figtree } from 'next/font/google'

import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Rubble — A Modern Real Estate Platform',
  description:
    'Rubble is an innovative platform for buying, selling, and renting real estate. Find properties easily, explore up-to-date listings, and use simple tools for both owners and buyers.',
  keywords: [
    'real estate',
    'buy property',
    'sell property',
    'rent property',
    'property listings',
    'modern platform',
  ],
  robots: 'index, follow',
}

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
