'use client';

import * as React from 'react';
import { Video } from 'lucide-react';
import { CourseModuleItem } from '@/data/course-details';

export interface CourseLessonsTabProps {
  modules: CourseModuleItem[];
  progressPercentage?: number;
}

export function CourseLessonsTab({
  modules,
  progressPercentage = 55,
}: CourseLessonsTabProps) {
  return (
    <div className="mt-8 animate-in fade-in duration-200">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        Explore the Modules
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
      </p>

      <div className="mt-7">
        <h4 className="text-lg font-bold text-gray-900 tracking-tight mb-4">
          Lesson List
        </h4>

        <div className="space-y-4">
          {modules.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <Video className="h-5 w-5 fill-secondary-foreground text-secondary-foreground" />
              </div>

              <div>
                <h5 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9">
        <h4 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
          Lesson Content
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      <div className="mt-9">
        <h4 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
          Lesson Progress Tracking
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        <div className="rounded-2xl border border-gray-200/90 p-5 bg-white max-w-lg shadow-sm">
          <p className="text-xs font-semibold text-gray-600 leading-none">Learning Progress</p>
          <p className="text-3xl font-extrabold text-gray-900 mt-2 mb-3 tracking-tight">
            {progressPercentage}%
          </p>
          <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-secondary"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
