'use client';

import * as React from 'react';
import { ArrowDownUp, Check } from 'lucide-react';
import { CREATOR_CATEGORIES } from '@/data/creator';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';

export interface CreatorsCatalogFiltersProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
  activeSort: string;
  onSortSelect: (sort: string) => void;
}

export function CreatorsCatalogFilters({
  activeCategory,
  onCategorySelect,
  activeSort,
  onSortSelect,
}: CreatorsCatalogFiltersProps) {
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);
  const sortDropdownRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(
    sortDropdownRef,
    () => setSortDropdownOpen(false),
    sortDropdownOpen
  );

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        {CREATOR_CATEGORIES.map((category) => {
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
              {category === 'All' ? 'All Categories' : category}
            </button>
          );
        })}
      </div>

      <div ref={sortDropdownRef} className="relative shrink-0">
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
              {['Most Popular', 'Highest Rated', 'Most Courses', 'Most Followers'].map((sortOpt) => (
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
                  {activeSort === sortOpt && (
                    <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
