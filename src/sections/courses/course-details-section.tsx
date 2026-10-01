'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/common/container';
import { CourseDetailsHero } from '@/components/courses/course-details-hero';
import { CourseVideoPlayer } from '@/components/courses/course-video-player';
import { CourseEnrollmentCard } from '@/components/courses/course-enrollment-card';
import { CourseAboutTab } from '@/components/courses/course-about-tab';
import { CourseLessonsTab } from '@/components/courses/course-lessons-tab';
import { CourseReviewsTab } from '@/components/courses/course-reviews-tab';
import { CourseDetailData } from '@/data/course-details';
import { cn } from '@/lib/utils';

export interface CourseDetailsSectionProps {
  course: CourseDetailData;
}

const TABS = ['about', 'lessons', 'reviews'] as const;
type Tab = (typeof TABS)[number];

export function CourseDetailsSection({ course }: CourseDetailsSectionProps) {
  const [activeTab, setActiveTab] = React.useState<Tab>('about');
  const titleRef = React.useRef<HTMLDivElement>(null);
  const [titleHeight, setTitleHeight] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      if (titleRef.current) setTitleHeight(titleRef.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    if (titleRef.current) ro.observe(titleRef.current);
    return () => ro.disconnect();
  }, []);

  const cardPaddingTop = titleHeight + 184;

  return (
    <div className="relative w-full min-h-screen">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[700px] sm:h-[740px] md:h-[780px] bg-primary z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          <div className="lg:col-span-8 pt-28 sm:pt-32 md:pt-36">
            <div ref={titleRef}>
              <CourseDetailsHero course={course} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 sm:mt-10"
            >
              <CourseVideoPlayer videoSrc={course.videoUrl} posterSrc={course.posterUrl} />
            </motion.div>

            <div className="mt-10 sm:mt-12 pb-32">
              <div className="flex items-center gap-2.5 sm:gap-3">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      'px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
                      activeTab === tab
                        ? 'bg-secondary text-secondary-foreground shadow-sm'
                        : 'bg-muted text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    {tab === 'lessons' ? 'Lesson' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
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
          </div>

          <div className="hidden lg:block lg:col-span-4 self-stretch">
            <div
              className="h-full pb-12"
              style={{ paddingTop: `${cardPaddingTop}px` }}
            >
              <div className="sticky top-20">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <CourseEnrollmentCard course={course} />
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
