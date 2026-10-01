export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Instructor {
  id: string;
  name: string;
  role?: string;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description?: string;
  instructor: Instructor;
  price: number;
  originalPrice?: number;
  billingPeriod?: string;
  rating: number;
  reviewCount?: number;
  commentsCount?: number;
  studentCount?: number;
  enrolledAvatars?: string[];
  enrolledCountText?: string;
  lessonCount: number;
  durationHours?: number;
  durationText?: string;
  thumbnailUrl: string;
  level: CourseLevel;
  category: string;
  isFeatured?: boolean;
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
}
