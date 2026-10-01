'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { CourseReviewItem, RatingBreakdownItem } from '@/data/course-details';
import { cn } from '@/lib/utils';

export interface CourseReviewsTabProps {
  overallRating?: number;
  ratingBreakdown: RatingBreakdownItem[];
  reviews: CourseReviewItem[];
}

export function CourseReviewsTab({
  overallRating = 4.7,
  ratingBreakdown,
  reviews,
}: CourseReviewsTabProps) {
  const [selectedRating, setSelectedRating] = React.useState<'all' | number>('all');

  const filteredReviews = React.useMemo(() => {
    if (selectedRating === 'all') return reviews;
    const matched = reviews.filter((r) => Math.round(r.rating) === selectedRating);
    return matched.length > 0 ? matched : reviews;
  }, [selectedRating, reviews]);

  return (
    <div className="mt-8 animate-in fade-in duration-200">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        What Learners Are Saying
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
        Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
      </p>

      <div className="my-6 rounded-3xl border border-gray-200/90 p-6 sm:p-7 bg-white max-w-xl shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <div className="h-28 w-28 rounded-2xl bg-secondary flex flex-col items-center justify-center shrink-0 shadow-sm">
          <span className="text-xs font-bold text-secondary-foreground/80">Ratings</span>
          <span className="text-4xl font-extrabold text-secondary-foreground tracking-tight mt-0.5">
            {overallRating.toFixed(1)}
          </span>
        </div>

        <div className="w-full space-y-2.5">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-secondary"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="flex items-center gap-0.5 shrink-0">
                {[1, 2, 3, 4, 5].map((starIdx) => (
                  <Star
                    key={starIdx}
                    className="h-3.5 w-3.5 fill-gray-900 text-gray-900"
                  />
                ))}
              </div>

              <span className="text-xs font-semibold text-gray-600 min-w-[28px] text-right shrink-0">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-4">
          Individual Reviews:
        </h4>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={() => setSelectedRating('all')}
            className={cn(
              'px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
              selectedRating === 'all'
                ? 'bg-secondary text-secondary-foreground shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            All rating
          </button>

          {[5, 4, 3, 2, 1].map((ratingNum) => (
            <button
              key={ratingNum}
              type="button"
              onClick={() => setSelectedRating(ratingNum)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
                selectedRating === ratingNum
                  ? 'bg-secondary text-secondary-foreground shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              <Star className="h-3 w-3 fill-current text-current" />
              <span>{ratingNum}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl border border-gray-200/90 p-6 bg-white space-y-3 shadow-sm hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0 border border-gray-100">
                    <Image
                      src={rev.avatar}
                      alt={rev.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                      {rev.author}
                    </h5>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                </div>

                <span className="text-xs text-gray-400 font-medium">{rev.date}</span>
              </div>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((starIdx) => (
                  <Star
                    key={starIdx}
                    className="h-4 w-4 fill-gray-900 text-gray-900"
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
