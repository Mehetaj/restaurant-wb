import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Providers } from './providers'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { ToastManager } from '@/components/ui/toast-manager'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Ruya- Futuristic Fine Dining Experience',
  description: 'Experience the future of culinary arts at RuyaRestaurant. Featuring molecular gastronomy, immersive dining environments, and cutting-edge flavor profiles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <Providers>
          <ToastManager>
            <div className="relative min-h-screen flex flex-col">
              <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0" />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </div>
          </ToastManager>
        </Providers>
      </body>
    </html>
  )
}