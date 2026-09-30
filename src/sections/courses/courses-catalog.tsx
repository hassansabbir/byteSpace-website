'use client';

import * as React from 'react';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowDownUp,
  Check,
} from 'lucide-react';
import { Container } from '@/components/common/container';
import { CourseCard } from '@/components/courses/course-card';
import { CATALOG_COURSES, COURSE_PAGE_CATEGORIES, CoursePageCategory } from '@/data/courses-catalog';
import { cn } from '@/lib/utils';

export function CoursesCatalog() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<string>('Featured');
  const [activeLevel, setActiveLevel] = React.useState<string>('All');
  const [activeSort, setActiveSort] = React.useState<string>('Most relevant');
  const [currentPage, setCurrentPage] = React.useState(1);

  const [coursesDropdownOpen, setCoursesDropdownOpen] = React.useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = React.useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);

  const coursesDropdownRef = React.useRef<HTMLDivElement>(null);
  const levelDropdownRef = React.useRef<HTMLDivElement>(null);
  const categoryDropdownRef = React.useRef<HTMLDivElement>(null);
  const sortDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
      if (levelDropdownRef.current && !levelDropdownRef.current.contains(event.target as Node)) {
        setLevelDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  return (
    <div className="w-full bg-background min-h-screen">
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

        <Container size="xl" className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Find Your Next Course
            </h1>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto">
              <div className="relative w-full sm:flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 stroke-2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  <ChevronDown className={cn('h-4 w-4 stroke-[2.5] transition-transform duration-200', coursesDropdownOpen && 'rotate-180')} />
                </button>

                {coursesDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                    <div className="max-h-72 overflow-y-auto dropdown-scroll py-0.5 space-y-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory('Featured');
                          setCoursesDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                      >
                        <span>All Courses</span>
                        {activeCategory === 'Featured' && <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />}
                      </button>
                      {COURSE_PAGE_CATEGORIES.filter((c) => c !== 'Featured').map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setActiveCategory(cat);
                            setCoursesDropdownOpen(false);
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
          </div>
        </Container>
      </section>

      <Container size="xl" className="pt-10 sm:pt-12 pb-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('Featured');
                  setActiveLevel('All');
                  setSearchQuery('');
                }}
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
                            setActiveLevel(lvl);
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
                            setActiveCategory(cat);
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
                          setActiveSort(sortOpt);
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
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-secondary text-secondary-foreground font-semibold shadow-sm'
                      : 'bg-[#F1F3F5] text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              priority={index < 6}
            />
          ))}
        </div>

        <div className="mt-14 sm:mt-16 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => setCurrentPage(pageNum)}
              aria-label={`Page ${pageNum}`}
              className={cn(
                'h-10 w-10 flex items-center justify-center text-sm font-semibold rounded-full transition-colors',
                currentPage === pageNum
                  ? 'text-gray-900 bg-gray-100 font-bold'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              )}
            >
              {pageNum}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            aria-label="Next page"
            className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </div>
  );
}
