'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  ChevronDown,
  Star,
  Users,
  BookOpen,
  SlidersHorizontal,
  ArrowDownUp,
  Check,
} from 'lucide-react';
import { Container } from '@/components/common/container';
import {
  CREATORS_LIST,
  CREATOR_CATEGORIES,
  CreatorProfileData,
} from '@/data/creator';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

export function CreatorsCatalogSection() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeSort, setActiveSort] = React.useState('Most Popular');

  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);

  const categoryDropdownRef = React.useRef<HTMLDivElement>(null);
  const sortDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
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

  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative z-20 w-full bg-primary pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20 overflow-visible">
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
              Meet Our Expert Creators
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
              Learn directly from top industry leaders, creative professionals, and world-class educators on ByteSpace.
            </p>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto">
              <div className="relative w-full sm:flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 stroke-2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search creators by name, topic, or role"
                  aria-label="Search creators"
                  className="w-full h-12 pl-12 pr-5 rounded-full bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-md border-0"
                />
              </div>

              <div ref={categoryDropdownRef} className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm shadow-md hover:bg-secondary/90 transition-all cursor-pointer"
                  aria-expanded={categoryDropdownOpen}
                >
                  <span>Category</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 stroke-[2.5] transition-transform duration-200',
                      categoryDropdownOpen && 'rotate-180'
                    )}
                  />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-white shadow-2xl border border-gray-200 ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                    <div className="py-0.5 space-y-0.5">
                      {CREATOR_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setActiveCategory(cat);
                            setCategoryDropdownOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl flex items-center justify-between transition-colors"
                        >
                          <span>{cat === 'All' ? 'All Categories' : cat}</span>
                          {activeCategory === cat && (
                            <Check className="h-4 w-4 text-primary stroke-[2.5] shrink-0" />
                          )}
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

      <section className="relative w-full bg-background pt-10 sm:pt-12 pb-24">
        <Container size="xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                {CREATOR_CATEGORIES.map((category) => {
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
                            setActiveSort(sortOpt);
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-4">
              {filteredCreators.map((creator) => (
                <Link
                  key={creator.id}
                  href={ROUTES.CREATOR_PROFILE(creator.slug)}
                  className="rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="relative h-18 w-18 sm:h-20 sm:w-20 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-gray-100 group-hover:scale-105 transition-transform duration-300 bg-gray-50 shrink-0">
                        <Image
                          src={creator.avatarUrl}
                          alt={creator.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-bold text-xs shadow-sm">
                        {creator.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-bold text-gray-900 text-lg group-hover:text-primary transition-colors leading-tight">
                      {creator.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 font-medium line-clamp-1">
                      {creator.title}
                    </p>

                    <p className="mt-3 text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {creator.bioParagraphs[0]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-600">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-primary" />
                      <span>{creator.productCount} Courses</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      <span>{creator.followersCount} Followers</span>
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{creator.rating.toFixed(1)}</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
