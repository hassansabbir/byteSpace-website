import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FolderClosed,
  Video,
  Award,
  Headphones,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CourseDetailData } from '@/data/course-details';
import { ROUTES } from '@/constants/routes';

export interface CourseEnrollmentCardProps {
  course: CourseDetailData;
}

export function CourseEnrollmentCard({ course }: CourseEnrollmentCardProps) {
  return (
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
  );
}
