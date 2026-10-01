'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/common/container';
import { CourseDetailsHero } from '@/components/courses/course-details-hero';
import { CourseAboutTab } from '@/components/courses/course-about-tab';
import { CourseLessonsTab } from '@/components/courses/course-lessons-tab';
import { CourseReviewsTab } from '@/components/courses/course-reviews-tab';
import { CourseDetailData } from '@/data/course-details';
import { cn } from '@/lib/utils';

export interface CourseDetailsSectionProps {
  course: CourseDetailData;
}

export function CourseDetailsSection({ course }: CourseDetailsSectionProps) {
  const [activeTab, setActiveTab] = React.useState<'about' | 'lessons' | 'reviews'>('about');

  return (
    <div className="w-full bg-background min-h-screen">
      <CourseDetailsHero course={course} />

      <section className="relative w-full bg-background pt-10 sm:pt-12 pb-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('about')}
                  className={cn(
                    'px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
                    activeTab === 'about'
                      ? 'bg-secondary text-secondary-foreground shadow-sm'
                      : 'bg-muted text-gray-700 hover:bg-gray-200'
                  )}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('lessons')}
                  className={cn(
                    'px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
                    activeTab === 'lessons'
                      ? 'bg-secondary text-secondary-foreground shadow-sm'
                      : 'bg-muted text-gray-700 hover:bg-gray-200'
                  )}
                >
                  Lesson
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reviews')}
                  className={cn(
                    'px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
                    activeTab === 'reviews'
                      ? 'bg-secondary text-secondary-foreground shadow-sm'
                      : 'bg-muted text-gray-700 hover:bg-gray-200'
                  )}
                >
                  Reviews
                </button>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    {activeTab === 'about' && (
                      <CourseAboutTab
                        paragraphs={course.descriptionParagraphs}
                        sneakPeekImages={course.sneakPeekImages}
                        keyPoints={course.keyPoints}
                      />
                    )}

                    {activeTab === 'lessons' && (
                      <CourseLessonsTab
                        modules={course.modules}
                        progressPercentage={course.progressPercentage}
                      />
                    )}

                    {activeTab === 'reviews' && (
                      <CourseReviewsTab
                        overallRating={course.overallRating}
                        ratingBreakdown={course.ratingBreakdown}
                        reviews={course.reviews}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </Container>
      </section>
    </div>
  );
}
