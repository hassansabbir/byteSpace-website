import type { Metadata } from 'next';
import { CoursesCatalog } from '@/sections/courses/courses-catalog';

export const metadata: Metadata = {
  title: 'Explore Courses - ByteSpace',
  description: 'Find your next course. Browse professional courses across UI/UX Design, Development, Marketing, Business, and more on ByteSpace.',
};

export default function CoursesPage() {
  return (
    <main className="w-full">
      <CoursesCatalog />
    </main>
  );
}
