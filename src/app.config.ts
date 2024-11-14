import { env } from '@/env.mjs'
import type { Metadata } from 'next'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

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
  title:
    env.NODE_ENV !== 'production'
      ? `[${env.NODE_ENV.substring(0, 3)}] - ${APP_CONFIG.name}`
      : APP_CONFIG.name,
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

export const SOCIALS = [
  {
    Icon: GitHubLogoIcon,
    link: 'https://github.com/AbderrahmaneMouzoune',
    text: 'Github',
  },
  {
    Icon: LinkedInLogoIcon,
    link: 'https://www.linkedin.com/in/abderrahmane-mouzoune/',
    text: 'LinkedIn',
  },
  {
    Icon: TwitterLogoIcon,
    link: 'https://twitter.com/abderrahmane_js',
    text: 'X',
  },
]
