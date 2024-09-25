'use client'

import { PublicError } from '@/use-cases/error'
import { Button } from '@components/ui/button'
import { Headline } from '@components/ui/headline'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="container mx-auto space-y-8">
      <Headline variant={'h1'}>Oops... Sorry, Something went wrong!</Headline>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </section>
  )
}
