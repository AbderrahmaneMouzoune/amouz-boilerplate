import { badgeVariants } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Headline } from '@/components/ui/headline'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-5 px-3">
      <article className="mx-auto max-w-screen-lg">
        <div className="text-center">
          <Link
            href="https://twitter.com/abderrahmane_js"
            target="_blank"
            className={badgeVariants()}
          >
            <TwitterLogoIcon className="mr-1 size-4" /> Suivez @abderrahmane_js
          </Link>
        </div>

        <div className="mt-3 text-center">
          <Headline variant={'h1'}>
            Le <span className="text-primary">template</span> que j&apos;utilise
            pour tout mes projets
          </Headline>

          <p className="mt-2">
            Un boilerplate gratuit et open-source fait avec Next.js, TypeScript,
            Next Theme, Shadcn UI et Tailwind CSS.
          </p>
        </div>

        <div className="mt-5 flex gap-5 justify-center max-sm:flex-col">
          <Button size={'lg'} variant={'outline'} asChild>
            <Link
              href={'https://github.com/AbderrahmaneMouzoune/amouz-boilerplate'}
            >
              <GitHubLogoIcon className="size-5 mr-2" /> Mettre une ⭐ sur
              Github
            </Link>
          </Button>
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
        </div>
      </article>
    </main>
  )
}
