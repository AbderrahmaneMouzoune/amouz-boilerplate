import { SOCIALS } from '@/config/app.config'
import { Button } from '@components/ui/button'
import { ExternalLink } from '@components/ui/external-link'
import { Reveal } from '@components/ui/reveal'

export default function Footer() {
  return (
    <footer className="bg-background mt-auto py-5 text-sm">
      <section className="container flex flex-col items-center justify-between gap-5 md:flex-row">
        <Reveal animations={['fade-in', 'slide-in-right']} asChild={false}>
          <span>© {new Date().getFullYear()} Built by </span>
          <Button variant={'link'} className="px-0" asChild>
            <ExternalLink
              href={'https://abderrahmanemouzoune.com'}
              target="_blank"
            >
              Abderrahmane Mouzoune.
            </ExternalLink>
          </Button>
          <span className="ml-1">Powered by </span>
          <Button variant={'link'} className="px-0" asChild>
            <ExternalLink href={'https://www.youzoune.com'} target="_blank">
              youzoune.com
            </ExternalLink>
          </Button>
        </Reveal>

        <div className="flex items-center gap-5 md:gap-2">
          {SOCIALS.map((social) => {
            const { Icon, link, text } = social
            return (
              <Button key={link} variant={'ghost'} asChild size={'icon'}>
                <ExternalLink href={link} target="_blank">
                  <Icon className="size-4" />
                  <span className="sr-only">{text}</span>
                </ExternalLink>
              </Button>
            )
          })}
        </div>
      </section>
    </footer>
  )
}
