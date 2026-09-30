import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourseDetailBySlug } from '@/data/course-details';
import { CourseDetailsSection } from '@/sections/courses/course-details-section';

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: CourseDetailPageProps): Metadata {
  const course = getCourseDetailBySlug(params.slug);

  return {
    title: `${course.title} — ByteSpace`,
    description: course.subtitle,
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = getCourseDetailBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="w-full">
      <CourseDetailsSection course={course} />
    </main>
  );
}
