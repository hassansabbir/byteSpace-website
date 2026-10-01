'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Share2,
  BarChart2,
  Star,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';
import { CourseVideoPlayer } from '@/components/courses/course-video-player';
import { CourseEnrollmentCard } from '@/components/courses/course-enrollment-card';
import { CourseDetailData } from '@/data/course-details';
import { ROUTES } from '@/constants/routes';

export interface CourseDetailsHeroProps {
  course: CourseDetailData;
}

export function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
        >
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
        </motion.div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-8"
          >
            <CourseVideoPlayer
              videoSrc={course.videoUrl}
              posterSrc={course.posterUrl}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-4 relative z-30 lg:-mb-[480px]"
          >
            <CourseEnrollmentCard course={course} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
