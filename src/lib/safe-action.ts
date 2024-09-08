import { env } from '@/env.mjs'
import { rateLimitByKey } from '@lib/limiter'
import { createServerActionProcedure } from 'zsa'
import { PublicError } from '@use-cases/error'

function shapeErrors({ err }: any) {
  const isAllowedError = err instanceof PublicError
  // let's all errors pass through to the UI so debugging locally is easier
  const isDev = env.NODE_ENV === 'development'

  if (isAllowedError || isDev) {
    console.error(err)
    return {
      code: err.code ?? 'ERROR',
      message: `${!isAllowedError && isDev ? 'DEV ONLY ENABLED - ' : ''}${
        err.message
      }`,
    }
  } else {
    return {
      code: 'ERROR',
      message: 'Something went wrong',
    }
  }
}

export const middlewareAction = createServerActionProcedure()
  .experimental_shapeError(shapeErrors)
  .handler(async () => {
    await rateLimitByKey({
      key: `unauthenticated-global`,
      limit: 10,
      window: 10000,
    })
  })

export { createServerActionProcedure }
