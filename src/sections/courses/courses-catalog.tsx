'use client';

import * as React from 'react';
import { Container } from '@/components/common/container';
import { CourseCard } from '@/components/courses/course-card';
import { CoursesCatalogHero } from '@/components/courses/courses-catalog-hero';
import { CoursesCatalogFilters } from '@/components/courses/courses-catalog-filters';
import { CoursesPagination } from '@/components/courses/courses-pagination';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { useCoursesCatalog } from '@/hooks/use-courses-catalog';

export function CoursesCatalog() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    activeLevel,
    setActiveLevel,
    activeSort,
    setActiveSort,
    currentPage,
    setCurrentPage,
    displayedCourses,
    resetFilters,
  } = useCoursesCatalog();

  return (
    <div className="w-full bg-background min-h-screen">
      <CoursesCatalogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />

      <Container size="lg" className="pt-10 sm:pt-12 pb-20">
        <CoursesCatalogFilters
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
          activeLevel={activeLevel}
          onLevelSelect={setActiveLevel}
          activeSort={activeSort}
          onSortSelect={setActiveSort}
          onResetFilters={resetFilters}
        />

        <StaggerContainer
          key={`${activeCategory}-${activeLevel}-${activeSort}-${searchQuery}`}
          staggerDelay={0.07}
          initialDelay={0.1}
          className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {displayedCourses.map((course, index) => (
            <StaggerItem key={course.id} direction="up" distance={20} scale>
              <CourseCard course={course} priority={index < 6} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <CoursesPagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </Container>
    </div>
  );
}
