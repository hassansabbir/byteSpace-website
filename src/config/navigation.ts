import { ROUTES } from '@/constants/routes';
import { NavigationConfig } from '@/types/navigation';

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: 'Home',
      href: ROUTES.HOME,
    },
    {
      title: 'Courses',
      href: ROUTES.COURSES,
    },
    {
      title: 'Creators',
      href: '/creators',
    },
  ],
  authNav: {
    login: {
      title: 'Sign In',
      href: ROUTES.LOGIN,
    },
    register: {
      title: 'Join Us',
      href: ROUTES.REGISTER,
    },
  },
  footerNav: [
    {
      title: 'Explore',
      items: [
        { title: 'Featured Courses', href: ROUTES.COURSES },
        { title: 'Featured Categories', href: ROUTES.COURSES },
        { title: 'Business', href: ROUTES.COURSES },
        { title: 'IT', href: ROUTES.COURSES },
        { title: 'Design', href: ROUTES.COURSES },
      ],
    },
    {
      title: 'Categories',
      items: [
        { title: 'Development', href: ROUTES.COURSES },
        { title: 'Marketing', href: ROUTES.COURSES },
        { title: 'Photography', href: ROUTES.COURSES },
        { title: 'Finance', href: ROUTES.COURSES },
        { title: 'Sport', href: ROUTES.COURSES },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'Become a Creator', href: '/creators' },
        { title: 'Affiliate Program', href: '#' },
        { title: 'Contact', href: '#' },
        { title: 'Help', href: '#' },
        { title: 'About', href: '#' },
      ],
    },
  ],
};
