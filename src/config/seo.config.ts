import { Metadata } from 'next'
import { APP_CONFIG } from './app.config'
import { env } from '@/env.mjs'

export const FALLBACK_SEO: Metadata = {
  metadataBase: new URL(APP_CONFIG.website),
  authors: [...APP_CONFIG.authors],
  creator: APP_CONFIG.creator,
  title:
    env.NODE_ENV !== 'production'
      ? `[${env.NODE_ENV.substring(0, 3)}] - ${APP_CONFIG.name}`
      : APP_CONFIG.name,
  description: `${APP_CONFIG.name} the fastest & safest way to start an Strapi + Nextjs project`,
  alternates: {
    canonical: new URL(APP_CONFIG.website),
  },
  openGraph: {
    title: `${APP_CONFIG.name} my fastest way to start a project`,
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
    description:
      'amouz-boilerplate the fastest & safest way to start an Strapi + Nextjs project',
  },
  twitter: {
    card: 'summary_large_image',
    site: APP_CONFIG.website,
    title: 'Amouz-boilerplate my fastest way to start a project',
    description:
      'amouz-boilerplate the fastest & safest way to start an Strapi + Nextjs project',
    images: [
      {
        url: APP_CONFIG.website + '/logo.webp',
        width: 1300,
        height: 272,
        alt: `Logo of ${APP_CONFIG.name}`,
      },
    ],
  },
}
