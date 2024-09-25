import { Headline } from '@components/ui/headline'

export default function NotFound() {
  return (
    <section className="container mx-auto space-y-8">
      <Headline variant={'h1'} className="text-center">
        404 Page not found :(
      </Headline>
    </section>
  )
}
