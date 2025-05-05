export const ROUTER = {
  HOME: '/',
  TODOS: '/todos',
  CREATE_TODO: '/todos/create',
  EDIT_TODO: (id: number) => `/todos/${id}`,
} as const
