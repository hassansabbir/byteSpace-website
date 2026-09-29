export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: Instructor;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  lessonCount: number;
  durationHours: number;
  thumbnailUrl: string;
  level: CourseLevel;
  category: string;
  isFeatured?: boolean;
}
