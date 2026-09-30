import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import { LEARNING_PATHS, type LearningPath } from '@/data/learning-paths';

export function LearningPathsSection() {
  return (
    <section
      id="learning-paths"
      aria-label="Explore diverse learning paths"
      className="w-full bg-background py-16 sm:py-20 md:py-24"
    >
      <Container size="lg">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-foreground leading-[1.2] md:whitespace-nowrap">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[880px] mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various{' '}
            <br className="hidden md:inline" />
            fields, ensuring there&apos;s something for everyone. Unleash your potential and explore
            our carefully curated categories.
          </p>
        </div>

        <div className="mt-10 md:mt-14 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {LEARNING_PATHS.map((category: LearningPath) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative flex flex-col items-center justify-center py-7 sm:py-8 px-3 sm:px-4 bg-white border border-[#E1E1E4] rounded-2xl hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
                <Image
                  src={category.iconSrc}
                  alt=""
                  aria-hidden="true"
                  width={26}
                  height={26}
                  className="w-6 h-6 sm:w-6.5 sm:h-6.5 object-contain"
                />
              </div>

              <span className="mt-3.5 sm:mt-4 text-sm sm:text-[15px] font-semibold text-foreground tracking-tight text-center leading-tight whitespace-nowrap">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { LearningPathsSection as CategoriesSection };
