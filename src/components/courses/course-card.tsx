import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Course } from '@/types/course';
import { ROUTES } from '@/constants/routes';

export interface CourseCardProps extends React.HTMLAttributes<HTMLElement> {
  course: Course;
  href?: string;
  priority?: boolean;
  showInstructor?: boolean;
  showMetrics?: boolean;
  showRating?: boolean;
  showLevel?: boolean;
  showAvatars?: boolean;
  showPrice?: boolean;
  actionSlot?: React.ReactNode;
}

function LevelIndicator({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <rect x="2" y="10" width="2.5" height="5" rx="1" />
      <rect x="6.75" y="6" width="2.5" height="9" rx="1" />
      <rect x="11.5" y="2" width="2.5" height="13" rx="1" />
    </svg>
  );
}

export function CourseCard({
  course,
  href,
  priority = false,
  showInstructor = true,
  showMetrics = true,
  showRating = true,
  showLevel = true,
  showAvatars = true,
  showPrice = true,
  actionSlot,
  className,
  ...props
}: CourseCardProps) {
  const targetHref = href || ROUTES.COURSE_DETAILS(course.slug);

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-[28px] border border-border/80 bg-surface p-4 sm:p-5 pb-6 sm:pb-7 transition-all duration-300 hover:shadow-lg hover:border-border-hover',
        className
      )}
      {...props}
    >
      <div className="relative w-full aspect-[1.62/1] overflow-hidden rounded-2xl bg-muted">
        <Link href={targetHref} tabIndex={-1} aria-hidden="true" className="block w-full h-full">
          <Image
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {showMetrics && (
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-1.5 pointer-events-none">
            <span className="rounded-full bg-white/70 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-medium text-slate-800 shadow-sm whitespace-nowrap">
              {course.lessonCount} Lessons
            </span>
            <span className="rounded-full bg-white/70 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-medium text-slate-800 shadow-sm whitespace-nowrap">
              {course.durationText || `${course.durationHours} hours`}
            </span>
            <span className="rounded-full bg-white/70 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-medium text-slate-800 shadow-sm whitespace-nowrap">
              {course.commentsCount || course.reviewCount || 0} Comments
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 pt-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            <Link href={targetHref} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              {course.title}
            </Link>
          </h3>
          {showRating && (
            <div className="flex items-center gap-1.5 shrink-0 pt-0.5 text-muted-foreground">
              <span className="text-lg sm:text-[20px] font-normal">{course.rating.toFixed(1)}</span>
              <Star className="h-5 w-5 fill-slate-300 text-slate-300" aria-hidden="true" />
            </div>
          )}
        </div>

        {showInstructor && (
          <p className="mt-1.5 text-sm text-muted-foreground">
            by{' '}
            <span className="text-primary font-medium hover:underline cursor-pointer">
              {course.instructor.name}
            </span>
          </p>
        )}

        {(showLevel || showAvatars) && (
          <div className="mt-5 flex items-center
           gap-2">
            {showLevel ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f1f3f5] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700">
                <LevelIndicator className="h-3.5 w-3.5 text-slate-700" />
                <span>{course.level}</span>
              </div>
            ) : <div />}

            {showAvatars && (
              <div className="flex items-center -space-x-2" aria-label={`${course.enrolledCountText || '26+'} enrolled students`}>
                {(course.enrolledAvatars || []).slice(0, 4).map((avatarSrc, i) => (
                  <div key={i} className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shrink-0">
                    <Image src={avatarSrc} alt="" fill sizes="32px" className="object-cover" />
                  </div>
                ))}
                <div className="relative h-8 w-8 rounded-full bg-secondary text-secondary-foreground font-bold text-xs flex items-center justify-center border-2 border-white shrink-0">
                  {course.enrolledCountText || '26+'}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex items-baseline justify-between">
          {showPrice && (
            <div>
              <span className="text-2xl font-bold tracking-tight text-primary">${course.price}</span>
              <span className="text-sm font-normal text-muted-foreground ml-0.5">
                /{course.billingPeriod || 'lifetime'}
              </span>
            </div>
          )}
          {actionSlot && <div className="shrink-0">{actionSlot}</div>}
        </div>
      </div>
    </article>
  );
}
