import { env } from '@/env.mjs'
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
} as const

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
