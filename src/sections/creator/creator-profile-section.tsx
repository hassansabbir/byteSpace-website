'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowDownUp,
  Check,
} from 'lucide-react';
import { Container } from '@/components/common/container';
import { CourseCard } from '@/components/courses/course-card';
import { CreatorProfileData } from '@/data/creator';
import { COURSE_PAGE_CATEGORIES } from '@/data/courses-catalog';
import { cn } from '@/lib/utils';

export interface CreatorProfileSectionProps {
  creator: CreatorProfileData;
}

export function CreatorProfileSection({ creator }: CreatorProfileSectionProps) {
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [activeLevel, setActiveLevel] = React.useState<string>('All');
  const [activeSort, setActiveSort] = React.useState<string>('Most relevant');

  const [levelDropdownOpen, setLevelDropdownOpen] = React.useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);

  const levelDropdownRef = React.useRef<HTMLDivElement>(null);
  const categoryDropdownRef = React.useRef<HTMLDivElement>(null);
  const sortDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
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
    return creator.courses.filter((course) => {
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
  }, [creator.courses, activeCategory, activeLevel, activeSort]);

  const displayedCourses = filteredCourses.length > 0 ? filteredCourses : creator.courses;

  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative z-20 w-full bg-primary pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 overflow-visible">
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden shadow-xl border-2 border-white ring-2 ring-white/30 shrink-0 bg-white">
              <Image
                src={creator.avatarUrl}
                alt={creator.name}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {creator.name}
                </h1>
                <span className="px-3.5 py-1 rounded-full bg-secondary text-secondary-foreground font-bold text-xs sm:text-sm shadow-sm">
                  {creator.badge}
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-normal mt-1.5">
                {creator.title}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm sm:text-base text-white/85 leading-relaxed max-w-4xl font-normal">
            {creator.bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-gray-800 text-xs sm:text-sm font-semibold shadow-sm">
                <span className="text-primary font-bold">{creator.productCount}</span>
                <span>Products</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-gray-800 text-xs sm:text-sm font-semibold shadow-sm">
                <span className="text-primary font-bold">
                  {isFollowing ? creator.followersCount + 1 : creator.followersCount}
                </span>
                <span>Followers</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className={cn(
                  'px-8 py-2.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95',
                  isFollowing
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                )}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative w-full bg-background pt-10 sm:pt-12 pb-24">
        <Container size="xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setActiveLevel('All');
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
                  <span>{activeCategory === 'All' ? 'Category' : activeCategory}</span>
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                    <div className="max-h-72 overflow-y-auto dropdown-scroll py-0.5 space-y-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory('All');
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                      >
                        <span>All Categories</span>
                        {activeCategory === 'All' && <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />}
                      </button>
                      {COURSE_PAGE_CATEGORIES.filter((c) => c !== 'Featured').map((cat) => (
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                priority={index < 3}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
