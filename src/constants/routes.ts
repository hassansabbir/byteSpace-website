export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAILS: (slug: string) => `/courses/${slug}`,
  CREATORS: '/creators',
  CREATOR_PROFILE: (slug?: string) => (slug ? `/creators/${slug}` : '/creators'),
  SEARCH: '/search',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
