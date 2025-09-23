import { MainHeader } from '@widgets/header/main'
import { MainFooter } from '@widgets/footer/main'

import type { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className='container flex min-h-screen flex-col'>
      <MainHeader />
      <div className='flex-1'>{children}</div>
      <MainFooter />
    </div>
  )
}
