import { env } from '@/env.mjs'
import type { Metadata } from 'next'

export const APP_CONFIG = {
  name: 'amouz-boilerplate',
  creator: 'Abderrahmane MOUZOUNE',
  website: (env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000') as string,
  twitter: '@abderrahmane_js',
  authors: [
    { name: 'Abderrahmane MOUZOUNE', url: 'https://abderrahmanemouzoune.com' },
  ],
}

export const FALLBACK_SEO: Metadata = {
  metadataBase: new URL(APP_CONFIG.website),
  authors: APP_CONFIG.authors,
  creator: APP_CONFIG.creator,
  title: APP_CONFIG.name,
  openGraph: {
    title:
      'amouz-boilerplate the fastest & safest way to start an Strapi + Nextjs project',
    url: new URL(APP_CONFIG.website),
    siteName: APP_CONFIG.name,
    images: [
      {
        url: APP_CONFIG.website + '/logo.webp',
        width: 1300,
        height: 272,
        alt: `Logo of ${APP_CONFIG.name}`,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}
