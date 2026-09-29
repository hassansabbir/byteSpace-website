export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAILS: (slug: string) => `/courses/${slug}`,
  SEARCH: '/search',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
