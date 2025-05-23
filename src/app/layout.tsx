import Footer from '@components/shared/footer'
import Header from '@components/shared/header'

import type { Metadata, Viewport } from 'next'
import { Providers } from '@lib/providers/providers'
import { inter, lexend } from '@app/fonts'
import { cn } from '@lib/utils'
import '@styles/globals.css'
import { FALLBACK_SEO } from '@/config/seo.config'

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
          'scrollbar-thin scrollbar-track-background scrollbar-thumb-accent flex min-h-screen flex-col',
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
