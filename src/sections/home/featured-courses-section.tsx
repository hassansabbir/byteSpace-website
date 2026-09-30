'use client';

import * as React from 'react';
import { Container } from '@/components/common/container';
import { CourseCategoryFilter } from '@/components/courses/course-category-filter';
import { CourseCard } from '@/components/courses/course-card';
import { COURSES } from '@/data/courses';

export function FeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = React.useState('featured');

  const filteredCourses = React.useMemo(() => {
    if (activeCategory === 'featured') {
      return COURSES;
    }
    const filtered = COURSES.filter((c) => c.category === activeCategory);
    return filtered.length > 0 ? filtered : COURSES;
  }, [activeCategory]);

  return (
    <section
      id="courses"
      aria-label="Discover courses"
      className="w-full bg-background py-16 md:py-24"
    >
      <Container size="lg">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
            Discover Your Passion,
            <span className="block mt-1">Build Your Skills</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <CourseCategoryFilter
            activeSlug={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              priority={index < 3}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
