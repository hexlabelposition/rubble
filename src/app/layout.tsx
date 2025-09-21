import { Manrope } from 'next/font/google'
import type { ReactNode } from 'react'
import './global.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: ['Inter', 'Rubik', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en' data-scroll-behavior='smooth' className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}
