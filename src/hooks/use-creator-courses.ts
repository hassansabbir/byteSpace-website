'use client';

import * as React from 'react';
import { Course } from '@/types/course';

export interface UseCreatorCoursesReturn {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeLevel: string;
  setActiveLevel: (level: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
  displayedCourses: Course[];
  resetFilters: () => void;
}

export function useCreatorCourses(courses: Course[]): UseCreatorCoursesReturn {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [activeLevel, setActiveLevel] = React.useState<string>('All');
  const [activeSort, setActiveSort] = React.useState<string>('Most relevant');

  const filteredCourses = React.useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === 'All' ||
        activeCategory === 'Featured' ||
        course.category.toLowerCase().includes(activeCategory.toLowerCase());

      const matchesLevel =
        activeLevel === 'All' ||
        course.level.toLowerCase() === activeLevel.toLowerCase();

      return matchesCategory && matchesLevel;
    }).sort((a, b) => {
      if (activeSort === 'Highest Rated') return b.rating - a.rating;
      if (activeSort === 'Price: Low to High') return a.price - b.price;
      if (activeSort === 'Price: High to Low') return b.price - a.price;
      return 0;
    });
  }, [courses, activeCategory, activeLevel, activeSort]);

  const displayedCourses = filteredCourses.length > 0 ? filteredCourses : courses;

  const resetFilters = React.useCallback(() => {
    setActiveCategory('All');
    setActiveLevel('All');
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    activeLevel,
    setActiveLevel,
    activeSort,
    setActiveSort,
    displayedCourses,
    resetFilters,
  };
}
