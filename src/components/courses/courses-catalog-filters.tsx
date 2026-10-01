'use client';

import * as React from 'react';
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowDownUp,
  Check,
} from 'lucide-react';
import { COURSE_PAGE_CATEGORIES } from '@/data/courses-catalog';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';

export interface CoursesCatalogFiltersProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
  activeLevel: string;
  onLevelSelect: (level: string) => void;
  activeSort: string;
  onSortSelect: (sort: string) => void;
  onResetFilters: () => void;
}

export function CoursesCatalogFilters({
  activeCategory,
  onCategorySelect,
  activeLevel,
  onLevelSelect,
  activeSort,
  onSortSelect,
  onResetFilters,
}: CoursesCatalogFiltersProps) {
  const [levelDropdownOpen, setLevelDropdownOpen] = React.useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);

  const levelDropdownRef = React.useRef<HTMLDivElement>(null);
  const categoryDropdownRef = React.useRef<HTMLDivElement>(null);
  const sortDropdownRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(levelDropdownRef, () => setLevelDropdownOpen(false), levelDropdownOpen);
  useClickOutside(categoryDropdownRef, () => setCategoryDropdownOpen(false), categoryDropdownOpen);
  useClickOutside(sortDropdownRef, () => setSortDropdownOpen(false), sortDropdownOpen);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-700 shadow-sm transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-gray-600" />
            <span>Filter</span>
          </button>

          <div ref={levelDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-700 shadow-sm transition-colors cursor-pointer"
            >
              <BarChart2 className="h-3.5 w-3.5 text-gray-600" />
              <span>{activeLevel === 'All' ? 'Level' : activeLevel}</span>
            </button>

            {levelDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                <div className="py-0.5 space-y-0.5">
                  {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        onLevelSelect(lvl);
                        setLevelDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span>{lvl === 'All' ? 'All Levels' : lvl}</span>
                      {activeLevel === lvl && <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div ref={categoryDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-700 shadow-sm transition-colors cursor-pointer"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-gray-600" />
              <span>{activeCategory === 'Featured' ? 'Category' : activeCategory}</span>
            </button>

            {categoryDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                <div className="max-h-72 overflow-y-auto dropdown-scroll py-0.5 space-y-0.5">
                  {COURSE_PAGE_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        onCategorySelect(cat);
                        setCategoryDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span>{cat}</span>
                      {activeCategory === cat && <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div ref={sortDropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-700 shadow-sm transition-colors cursor-pointer"
          >
            <ArrowDownUp className="h-3.5 w-3.5 text-gray-600" />
            <span>{activeSort}</span>
          </button>

          {sortDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
              <div className="py-0.5 space-y-0.5">
                {['Most relevant', 'Highest Rated', 'Price: Low to High', 'Price: High to Low'].map((sortOpt) => (
                  <button
                    key={sortOpt}
                    type="button"
                    onClick={() => {
                      onSortSelect(sortOpt);
                      setSortDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <span>{sortOpt}</span>
                    {activeSort === sortOpt && <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        {COURSE_PAGE_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategorySelect(category)}
              className={cn(
                'px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer',
                isActive
                  ? 'bg-secondary text-secondary-foreground font-semibold shadow-sm'
                  : 'bg-muted text-gray-700 hover:bg-gray-200'
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
