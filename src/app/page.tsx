import { Reveal } from '@components/ui/reveal'
import { badgeVariants } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Headline } from '@components/ui/headline'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="my-auto flex flex-col items-center justify-center px-3 py-5">
      <article className="mx-auto max-w-(--breakpoint-lg)">
        <div className="text-center">
          <Reveal animations={['zoom-in', 'fade-in']} asChild={false}>
            <Link
              href="https://twitter.com/abderrahmane_js"
              target="_blank"
              className={badgeVariants()}
            >
              <TwitterLogoIcon className="mr-1 size-4" /> Suivez
              @abderrahmane_js
            </Link>
          </Reveal>
        </div>

        <div className="mt-3 text-center">
          <Reveal delay={150}>
            <Headline variant={'h1'}>
              Le <span className="text-secondary">template</span> que
              j&apos;utilise pour tout mes projets
            </Headline>
          </Reveal>

          <Reveal delay={175}>
            <p className="mt-2">
              Un boilerplate gratuit et open-source fait avec Next.js,
              TypeScript, Next Theme, Shadcn UI et Tailwind CSS.
            </p>
          </Reveal>
        </div>

        <div className="mt-5 flex justify-center gap-2 max-sm:flex-col">
          <Reveal animations={['zoom-in', 'fade-in']} asChild={false}>
            <Button size={'lg'} variant={'outline'} asChild>
              <Link
                href={
                  'https://github.com/AbderrahmaneMouzoune/amouz-boilerplate'
                }
                className="group"
              >
                <GitHubLogoIcon className="mr-2 size-5" /> Mettre une{' '}
                <span className="mx-1 transition-transform group-hover:-translate-y-0.5">
                  ⭐
                </span>{' '}
                sur Github
              </Link>
            </Button>
          </Reveal>

          <Reveal animations={['zoom-in', 'fade-in']} asChild={false}>
            <Button size={'lg'} asChild>
              <Link
                href="https://github.com/new?template_name=amouz-boilerplate&template_owner=AbderrahmaneMouzoune"
                target="_blank"
                className="group"
              >
                Démarrer
                <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </article>
    </main>
  )
}
