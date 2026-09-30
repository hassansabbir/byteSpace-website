'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { CourseCategory } from '@/types/course';
import { COURSE_CATEGORIES } from '@/data/course-categories';

export interface CourseCategoryFilterProps {
  activeSlug: string;
  onSelectCategory: (slug: string) => void;
  categories?: CourseCategory[];
  className?: string;
  onMoreClick?: () => void;
}

export function CourseCategoryFilter({
  activeSlug,
  onSelectCategory,
  categories = COURSE_CATEGORIES,
  className,
  onMoreClick,
}: CourseCategoryFilterProps) {
  const [showAll, setShowAll] = React.useState(false);

  const row1 = categories.slice(0, 8);
  const row2 = categories.slice(8, 14);
  const row3 = categories.slice(14, 18);
  const extra = categories.slice(18);

  const renderPill = (cat: CourseCategory) => {
    const isActive = activeSlug === cat.slug;
    return (
      <button
        key={cat.id}
        type="button"
        onClick={() => onSelectCategory(cat.slug)}
        aria-pressed={isActive}
        className={cn(
          'inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap',
          isActive
            ? 'bg-secondary text-secondary-foreground font-semibold px-5 py-2 shadow-sm'
            : 'bg-surface-muted hover:bg-muted text-foreground/80 hover:text-foreground border border-border/50 px-4 py-2'
        )}
      >
        {cat.name}
      </button>
    );
  };

  return (
    <div className={cn('flex flex-col items-center gap-3 w-full max-w-5xl mx-auto', className)}>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {row1.map(renderPill)}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {row2.map(renderPill)}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {row3.map(renderPill)}
        {extra.length > 0 && !showAll && (
          <button
            type="button"
            onClick={() => {
              setShowAll(true);
              onMoreClick?.();
            }}
            className="text-primary hover:text-primary-hover font-medium text-xs sm:text-sm px-3 py-2 transition-colors cursor-pointer"
          >
            + More
          </button>
        )}
        {showAll && extra.map(renderPill)}
        {extra.length === 0 && (
          <button
            type="button"
            onClick={onMoreClick}
            className="text-primary hover:text-primary-hover font-medium text-xs sm:text-sm px-3 py-2 transition-colors cursor-pointer"
          >
            + More
          </button>
        )}
      </div>
    </div>
  );
}
