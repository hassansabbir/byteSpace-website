'use client';

import * as React from 'react';
import { CATALOG_COURSES } from '@/data/courses-catalog';
import { Course } from '@/types/course';

export interface UseCoursesCatalogReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeLevel: string;
  setActiveLevel: (level: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  displayedCourses: Course[];
  resetFilters: () => void;
}

export function useCoursesCatalog(): UseCoursesCatalogReturn {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<string>('Featured');
  const [activeLevel, setActiveLevel] = React.useState<string>('All');
  const [activeSort, setActiveSort] = React.useState<string>('Most relevant');
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredCourses = React.useMemo(() => {
    return CATALOG_COURSES.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === 'Featured' ||
        course.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesLevel =
        activeLevel === 'All' ||
        course.level.toLowerCase() === activeLevel.toLowerCase();

      return matchesSearch && matchesCategory && matchesLevel;
    }).sort((a, b) => {
      if (activeSort === 'Highest Rated') return b.rating - a.rating;
      if (activeSort === 'Price: Low to High') return a.price - b.price;
      if (activeSort === 'Price: High to Low') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, activeCategory, activeLevel, activeSort]);

  const displayedCourses = React.useMemo(() => {
    if (activeCategory === 'Featured' && searchQuery === '' && activeLevel === 'All') {
      return CATALOG_COURSES;
    }
    return filteredCourses.length > 0 ? filteredCourses : CATALOG_COURSES.slice(0, 6);
  }, [activeCategory, searchQuery, activeLevel, filteredCourses]);

  const resetFilters = React.useCallback(() => {
    setActiveCategory('Featured');
    setActiveLevel('All');
    setSearchQuery('');
  }, []);

  return {
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
  };
}
