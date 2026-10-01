import { Course } from '@/types/course';
import { COURSES } from '@/data/courses';

export interface CreatorProfileData {
  id: string;
  slug: string;
  name: string;
  badge: string;
  title: string;
  category: string;
  avatarUrl: string;
  bioParagraphs: string[];
  productCount: number;
  followersCount: number;
  rating: number;
  reviewCount: number;
  courses: Course[];
}

export const CREATOR_PROFILE: CreatorProfileData = {
  id: 'purepearl-studio',
  slug: 'purepearl-studio',
  name: 'PurePearl Studio',
  badge: 'Creator',
  title: 'Passionate UI/UX, Web designer',
  category: 'Design',
  avatarUrl: '/images/creators/purepearl-studio.jpg',
  bioParagraphs: [
    "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  productCount: 3,
  followersCount: 12,
  rating: 4.9,
  reviewCount: 172,
  courses: COURSES,
};

export const CREATORS_LIST: CreatorProfileData[] = [
  CREATOR_PROFILE,
  {
    id: 'marcus-vance',
    slug: 'marcus-vance',
    name: 'Marcus Vance',
    badge: 'Growth Specialist',
    title: 'Growth Marketing Lead & Venture Advisor',
    category: 'Marketing',
    avatarUrl: '/images/Home/hero/avatars/avatar-5.jpg',
    bioParagraphs: [
      'Helping founders and creators scale user acquisition, monetization funnels, and organic brand traction.',
      'Master data-backed marketing strategies and customer journey optimization.',
    ],
    productCount: 6,
    followersCount: 3100,
    rating: 4.8,
    reviewCount: 512,
    courses: [COURSES[5], COURSES[4]],
  },
  {
    id: 'sarah-jenkins',
    slug: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    badge: 'Design Lead',
    title: 'Principal Product Designer & Design System Specialist',
    category: 'Design',
    avatarUrl: '/images/creators/sarah-jenkins.jpg',
    bioParagraphs: [
      'Guiding designers and engineers to create cohesive, accessible, and user-delighting digital experiences across web and mobile platforms.',
      'Through my courses, learn how to build production-ready design systems and conduct impactful user research.',
    ],
    productCount: 4,
    followersCount: 2420,
    rating: 4.8,
    reviewCount: 428,
    courses: [COURSES[1], COURSES[3]],
  },
  {
    id: 'sophia-chen',
    slug: 'sophia-chen',
    name: 'Sophia Chen',
    badge: 'Mobile Specialist',
    title: 'Mobile UX Architect & Flutter Developer',
    category: 'Development',
    avatarUrl: '/images/Home/hero/avatars/avatar-1.jpg',
    bioParagraphs: [
      'Crafting frictionless mobile user experiences and cross-platform applications used by millions globally.',
      'Explore mobile-first design patterns, micro-interactions, and reactive mobile architectures.',
    ],
    productCount: 4,
    followersCount: 2150,
    rating: 4.9,
    reviewCount: 340,
    courses: [COURSES[0], COURSES[1]],
  },
  {
    id: 'alex-morgan',
    slug: 'alex-morgan',
    name: 'Alex Morgan',
    badge: 'Top Educator',
    title: 'Senior Frontend Architect & Next.js Core Contributor',
    category: 'Development',
    avatarUrl: '/images/creators/alex-morgan.jpg',
    bioParagraphs: [
      'Passionate software engineer with over 10 years of experience building scalable web applications. Dedicated to teaching cutting-edge web technologies and performance optimization.',
      'Join my in-depth courses to master modern frontend architectures, clean code patterns, and enterprise-grade application design.',
    ],
    productCount: 5,
    followersCount: 1840,
    rating: 4.9,
    reviewCount: 310,
    courses: [COURSES[0], COURSES[2]],
  },
  {
    id: 'james-wilson',
    slug: 'james-wilson',
    name: 'James Wilson',
    badge: 'Data Expert',
    title: 'Staff Data Scientist & Big Data Analytics Consultant',
    category: 'Data Science',
    avatarUrl: '/images/Home/hero/avatars/avatar-3.jpg',
    bioParagraphs: [
      'Empowering creators and organizations with actionable analytics, machine learning pipelines, and executive dashboards.',
      'Discover how to turn complex datasets into clear, compelling strategic insights.',
    ],
    productCount: 4,
    followersCount: 1530,
    rating: 4.9,
    reviewCount: 265,
    courses: [COURSES[2], COURSES[4]],
  },
  {
    id: 'david-kim',
    slug: 'david-kim',
    name: 'David Kim',
    badge: 'Finance Mentor',
    title: 'Fintech Founder & Startup Financial Strategist',
    category: 'Business',
    avatarUrl: '/images/Home/hero/avatars/avatar-2.jpg',
    bioParagraphs: [
      'Bridging practical business finance, fundraising strategy, and financial modeling for digital creators and tech startups.',
      'Build sustainable, highly profitable businesses with rigorous financial management.',
    ],
    productCount: 3,
    followersCount: 1250,
    rating: 4.8,
    reviewCount: 198,
    courses: [COURSES[4], COURSES[1]],
  },
  {
    id: 'elena-rostova',
    slug: 'elena-rostova',
    name: 'Elena Rostova',
    badge: 'Brand Strategist',
    title: 'Creative Director & Brand Identity Consultant',
    category: 'Marketing',
    avatarUrl: '/images/Home/hero/avatars/avatar-4.jpg',
    bioParagraphs: [
      'Specializing in unforgettable visual storytelling, identity design, and commercial brand positioning.',
      'Learn how to establish market leadership with iconic visual design and cohesive brand campaigns.',
    ],
    productCount: 3,
    followersCount: 980,
    rating: 4.7,
    reviewCount: 142,
    courses: [COURSES[5], COURSES[0]],
  },
];

export const CREATOR_CATEGORIES = [
  'All',
  'Design',
  'Development',
  'Marketing',
  'Data Science',
  'Business',
] as const;

export function getCreatorBySlug(slug?: string): CreatorProfileData {
  if (!slug) return CREATOR_PROFILE;
  const found = CREATORS_LIST.find((c) => c.slug === slug);
  return found || CREATOR_PROFILE;
}
