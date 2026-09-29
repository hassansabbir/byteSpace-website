import type { Metadata } from 'next';

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: CourseDetailPageProps): Metadata {
  const formattedTitle = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: formattedTitle || 'Course Details',
    description: 'Learn in-depth skills with this comprehensive course on ByteSpace.',
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return (
    <main>
    </main>
  );
}
