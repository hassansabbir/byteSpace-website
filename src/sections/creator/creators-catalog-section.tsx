'use client';

import * as React from 'react';
import { Container } from '@/components/common/container';
import { CreatorCard } from '@/components/creator/creator-card';
import { CreatorsCatalogHero } from '@/components/creator/creators-catalog-hero';
import { CreatorsCatalogFilters } from '@/components/creator/creators-catalog-filters';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { useCreatorsCatalog } from '@/hooks/use-creators-catalog';

export function CreatorsCatalogSection() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    activeSort,
    setActiveSort,
    filteredCreators,
  } = useCreatorsCatalog();

  return (
    <div className="w-full bg-background min-h-screen">
      <CreatorsCatalogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />

      <section className="relative w-full bg-background pt-10 sm:pt-12 pb-24">
        <Container size="lg">
          <div className="flex flex-col gap-6">
            <CreatorsCatalogFilters
              activeCategory={activeCategory}
              onCategorySelect={setActiveCategory}
              activeSort={activeSort}
              onSortSelect={setActiveSort}
            />

            <StaggerContainer
              key={`${activeCategory}-${activeSort}-${searchQuery}`}
              staggerDelay={0.07}
              initialDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-4"
            >
              {filteredCreators.map((creator) => (
                <StaggerItem key={creator.id} direction="up" distance={20} scale>
                  <CreatorCard creator={creator} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>
    </div>
  );
}
