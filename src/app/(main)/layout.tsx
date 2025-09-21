import type { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='container'>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  )
}
