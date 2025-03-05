'use client'

import { Toaster } from '@components/ui/sonner'
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toaster />
    </NextThemesProvider>
  )
}
