'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Share2,
  BarChart2,
  Star,
  Users,
  FolderClosed,
  Video,
  Award,
  Headphones,
} from 'lucide-react';
import { Container } from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { CourseVideoPlayer } from '@/components/courses/course-video-player';
import { CourseAboutTab } from '@/components/courses/course-about-tab';
import { CourseLessonsTab } from '@/components/courses/course-lessons-tab';
import { CourseReviewsTab } from '@/components/courses/course-reviews-tab';
import { CourseDetailData } from '@/data/course-details';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

export interface CourseDetailsSectionProps {
  course: CourseDetailData;
}

export function CourseDetailsSection({ course }: CourseDetailsSectionProps) {
  const [activeTab, setActiveTab] = React.useState<'about' | 'lessons' | 'reviews'>('about');
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative w-full bg-primary pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-visible">
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
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-bold tracking-tight text-white leading-[1.14]">
                {course.title}
              </h1>

              <p className="mt-3 text-base sm:text-lg text-white/90 font-normal leading-relaxed">
                {course.subtitle}
              </p>

              <p className="mt-2.5 text-sm sm:text-base text-white/80">
                by{' '}
                <Link
                  href={ROUTES.CREATOR_PROFILE('purepearl-studio')}
                  className="text-secondary font-semibold hover:underline cursor-pointer"
                >
                  {course.instructorName}
                </Link>
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                  <BarChart2 className="h-4 w-4 text-primary stroke-[2.2]" />
                  <span>{course.level}</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>
                    {course.rating.toFixed(1)} ({course.reviewCount} reviews)
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                  <Users className="h-4 w-4 text-primary stroke-[2.2]" />
                  <span>{course.studentCountText}</span>
                </div>
              </div>
            </div>

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share course"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-all shadow-md cursor-pointer active:scale-95"
              >
                <Share2 className="h-4 w-4 stroke-[2.5]" />
                <span>{copied ? 'Copied Link!' : 'Share'}</span>
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8">
              <CourseVideoPlayer
                videoSrc={course.videoUrl}
                posterSrc={course.posterUrl}
              />
            </div>

            <div className="lg:col-span-4 relative z-30 lg:-mb-[480px]">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-7 md:p-8 text-gray-900">
                <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                  {course.lessonCountText} ({course.totalDurationText})
                </h2>

                <div className="mt-5 space-y-3.5">
                  {course.sampleLessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className="flex items-center justify-between text-sm gap-3 pb-1"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-sm font-bold text-gray-400 shrink-0">
                          {lesson.number}
                        </span>
                        <span className="font-medium text-gray-800 truncate">
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary shrink-0">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}

                  <p className="text-xs sm:text-sm text-gray-500 font-medium pt-1">
                    {course.moreVideosCountText}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mt-6">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight text-primary">
                    ${course.price}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    /{course.billingPeriod}
                  </span>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full mt-4 py-4 rounded-full text-base font-bold shadow-md hover:bg-secondary/90 transition-all"
                >
                  Enroll Now
                </Button>

                <div className="mt-7">
                  <h3 className="text-base font-bold text-gray-900">
                    This course include
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <FolderClosed className="h-5 w-5 text-primary stroke-[1.8] shrink-0" />
                      <span>Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <Video className="h-5 w-5 text-primary stroke-[1.8] shrink-0" />
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <Award className="h-5 w-5 text-primary stroke-[1.8] shrink-0" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <Headphones className="h-5 w-5 text-primary stroke-[1.8] shrink-0" />
                      <span>Private Consultation</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-100 my-6" />

                <div className="flex items-center gap-3.5">
                  <Link
                    href={ROUTES.CREATOR_PROFILE('purepearl-studio')}
                    className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-gray-200 block hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={course.instructorAvatar}
                      alt={course.instructorName}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </Link>
                  <div>
                    <Link
                      href={ROUTES.CREATOR_PROFILE('purepearl-studio')}
                      className="font-bold text-gray-900 text-sm sm:text-base capitalize hover:text-primary transition-colors block"
                    >
                      {course.instructorName}
                    </Link>
                    <p className="text-xs text-gray-500 font-medium">
                      {course.instructorRole}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mt-3.5">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <Link
                  href={ROUTES.CREATOR_PROFILE('purepearl-studio')}
                  className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
                      : 'bg-[#F1F3F5] text-gray-700 hover:bg-gray-200'
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
                      : 'bg-[#F1F3F5] text-gray-700 hover:bg-gray-200'
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
                      : 'bg-[#F1F3F5] text-gray-700 hover:bg-gray-200'
                  )}
                >
                  Reviews
                </button>
              </div>

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
            </div>

            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </Container>
      </section>
    </div>
  );
}
