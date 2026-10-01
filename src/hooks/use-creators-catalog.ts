'use client';

import * as React from 'react';
import { CREATORS_LIST, CreatorProfileData } from '@/data/creator';

export interface UseCreatorsCatalogReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
  filteredCreators: CreatorProfileData[];
}

export function useCreatorsCatalog(): UseCreatorsCatalogReturn {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeSort, setActiveSort] = React.useState('Most Popular');

  const filteredCreators = React.useMemo(() => {
    return CREATORS_LIST.filter((creator) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === 'All' ||
        creator.category.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (activeSort === 'Highest Rated') return b.rating - a.rating;
      if (activeSort === 'Most Courses') return b.productCount - a.productCount;
      if (activeSort === 'Most Followers') return b.followersCount - a.followersCount;
      return b.followersCount - a.followersCount;
    });
  }, [searchQuery, activeCategory, activeSort]);

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    activeSort,
    setActiveSort,
    filteredCreators,
  };
}
