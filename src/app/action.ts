'use server'

import { middlewareAction } from '@lib/safe-action'
import { revalidatePath } from 'next/cache'

// sample example action
// export const createArticleAction = middlewareAction
//   .createServerAction()
//   .input(articleCreateSchema)
//   .handler(async ({ input }) => {
//     await createArticleUseCase({
//       title: input.title,
//       description: input.description,
//       author: input.author,
//     })
//     revalidatePath('/articles/create')
//   })
