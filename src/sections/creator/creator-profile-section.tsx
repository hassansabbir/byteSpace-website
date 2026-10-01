'use client';

import * as React from 'react';
import { Container } from '@/components/common/container';
import { CourseCard } from '@/components/courses/course-card';
import { CreatorProfileHero } from '@/components/creator/creator-profile-hero';
import { CreatorProfileFilters } from '@/components/creator/creator-profile-filters';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { CreatorProfileData } from '@/data/creator';
import { useCreatorCourses } from '@/hooks/use-creator-courses';

export interface CreatorProfileSectionProps {
  creator: CreatorProfileData;
}

export function CreatorProfileSection({ creator }: CreatorProfileSectionProps) {
  const [isFollowing, setIsFollowing] = React.useState(false);
  const {
    activeCategory,
    setActiveCategory,
    activeLevel,
    setActiveLevel,
    activeSort,
    setActiveSort,
    displayedCourses,
    resetFilters,
  } = useCreatorCourses(creator.courses);

  return (
    <div className="w-full bg-background min-h-screen">
      <CreatorProfileHero
        creator={creator}
        isFollowing={isFollowing}
        onToggleFollow={() => setIsFollowing(!isFollowing)}
      />

      <section className="relative w-full bg-background pt-10 sm:pt-12 pb-24">
        <Container size="xl">
          <CreatorProfileFilters
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
            activeLevel={activeLevel}
            onLevelSelect={setActiveLevel}
            activeSort={activeSort}
            onSortSelect={setActiveSort}
            onResetFilters={resetFilters}
          />

          <StaggerContainer
            key={`${activeCategory}-${activeLevel}-${activeSort}`}
            staggerDelay={0.07}
            initialDelay={0.1}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {displayedCourses.map((course, index) => (
              <StaggerItem key={course.id} direction="up" distance={20} scale>
                <CourseCard course={course} priority={index < 3} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
