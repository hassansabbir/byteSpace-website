import { Course } from '@/types/course';
import { COURSES } from '@/data/courses';

export const COURSE_PAGE_CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
] as const;

export type CoursePageCategory = (typeof COURSE_PAGE_CATEGORIES)[number];

const CATEGORY_MAP: Record<number, CoursePageCategory> = {
  0: 'UI/UX Design',
  1: 'Drawing & Painting',
  2: 'Marketing',
  3: 'Creative Marketing',
  4: 'Marketing',
  5: 'Creative Marketing',
};

export const CATALOG_COURSES: Course[] = Array.from({ length: 18 }).map((_, index) => {
  const base = COURSES[index % COURSES.length];
  const assignedCategory = CATEGORY_MAP[index % COURSES.length] || 'Featured';
  return {
    ...base,
    id: `catalog-course-${index + 1}`,
    category: assignedCategory,
    isFeatured: true,
  };
});
