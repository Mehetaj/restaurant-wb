'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'
import { Footer } from './footer'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="flex-1 z-10 bg-background text-foreground">
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  )
}