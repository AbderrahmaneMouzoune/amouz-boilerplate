import Footer from '@app/_layouts/footer'
import Header from '@app/_layouts/header'

import type { Metadata, Viewport } from 'next'
import { Providers } from '@lib/providers/providers'
import { inter, lexend } from '@app/fonts'
import { cn } from '@lib/utils'
import '@styles/globals.css'
import { FALLBACK_SEO } from '@/app.config'

export const metadata: Metadata = {
  ...FALLBACK_SEO,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          lexend.variable,
          'scrollbar-thin scrollbar-track-background scrollbar-thumb-accent min-h-screen flex flex-col'
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
