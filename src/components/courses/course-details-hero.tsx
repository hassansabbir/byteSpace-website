'use client';

import * as React from 'react';
import Link from 'next/link';
import { Share2, BarChart2, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
    >
      <div className="max-w-2xl">
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
            <span>{course.rating.toFixed(1)} ({course.reviewCount} reviews)</span>
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
  );
}
