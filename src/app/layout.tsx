import type { ReactNode } from 'react'

import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
