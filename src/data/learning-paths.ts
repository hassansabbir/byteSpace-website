export interface LearningPath {
  id: string;
  name: string;
  slug: string;
  iconSrc: string;
  href: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    iconSrc: '/icons/categories/design.png',
    href: '/courses?category=design',
  },
  {
    id: 'development',
    name: 'Development',
    slug: 'development',
    iconSrc: '/icons/categories/development.png',
    href: '/courses?category=development',
  },
  {
    id: 'it-software',
    name: 'IT & Software',
    slug: 'it-software',
    iconSrc: '/icons/categories/itAndSoftware.png',
    href: '/courses?category=it-software',
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    iconSrc: '/icons/categories/business.png',
    href: '/courses?category=business',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    slug: 'marketing',
    iconSrc: '/icons/categories/marketing.png',
    href: '/courses?category=marketing',
  },
  {
    id: 'photography',
    name: 'Photography',
    slug: 'photography',
    iconSrc: '/icons/categories/photography.png',
    href: '/courses?category=photography',
  },
];
