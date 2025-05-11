'use client'

import * as React from 'react'
const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  },
)
import dynamic from 'next/dynamic'
import { ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  )
}
