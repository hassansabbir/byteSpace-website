'use client';

import * as React from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';
import { COURSE_PAGE_CATEGORIES } from '@/data/courses-catalog';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';

export interface CoursesCatalogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

export function CoursesCatalogHero({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategorySelect,
}: CoursesCatalogHeroProps) {
  const [coursesDropdownOpen, setCoursesDropdownOpen] = React.useState(false);
  const coursesDropdownRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(coursesDropdownRef, () => setCoursesDropdownOpen(false), coursesDropdownOpen);

  return (
    <section className="relative z-20 w-full bg-primary pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Find Your Next Course
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto"
          >
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 stroke-2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search"
                aria-label="Search courses"
                className="w-full h-12 pl-12 pr-5 rounded-full bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-md border-0"
              />
            </div>

            <div ref={coursesDropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm shadow-md hover:bg-secondary/90 transition-all cursor-pointer"
                aria-expanded={coursesDropdownOpen}
              >
                <span>Courses</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 stroke-[2.5] transition-transform duration-200',
                    coursesDropdownOpen && 'rotate-180'
                  )}
                />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                  <div className="max-h-72 overflow-y-auto dropdown-scroll py-0.5 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        onCategorySelect('Featured');
                        setCoursesDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span>All Courses</span>
                      {activeCategory === 'Featured' && (
                        <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />
                      )}
                    </button>
                    {COURSE_PAGE_CATEGORIES.filter((c) => c !== 'Featured').map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          onCategorySelect(cat);
                          setCoursesDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                      >
                        <span>{cat}</span>
                        {activeCategory === cat && (
                          <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
