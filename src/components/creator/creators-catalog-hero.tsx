'use client';

import * as React from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';
import { CREATOR_CATEGORIES } from '@/data/creator';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';

export interface CreatorsCatalogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

export function CreatorsCatalogHero({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategorySelect,
}: CreatorsCatalogHeroProps) {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const categoryDropdownRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(
    categoryDropdownRef,
    () => setCategoryDropdownOpen(false),
    categoryDropdownOpen
  );

  return (
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Meet Our Expert Creators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-3.5 text-sm sm:text-base text-white/90 max-w-xl leading-relaxed"
          >
            Learn directly from top industry leaders, creative professionals, and world-class educators on ByteSpace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto"
          >
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 stroke-2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
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
                          onCategorySelect(cat);
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
