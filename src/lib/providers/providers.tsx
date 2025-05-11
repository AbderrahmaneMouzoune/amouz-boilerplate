'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@components/ui/sonner'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
