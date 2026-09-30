'use client';

import * as React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { SneakPeekImageItem } from '@/data/course-details';

export interface CourseAboutTabProps {
  paragraphs: string[];
  sneakPeekImages: SneakPeekImageItem[];
  keyPoints: string[];
}

export function CourseAboutTab({
  paragraphs,
  sneakPeekImages,
  keyPoints,
}: CourseAboutTabProps) {
  return (
    <div className="mt-8 animate-in fade-in duration-200">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        Description
      </h3>

      <div className="mt-4 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-9">
        <h4 className="text-xl font-bold text-gray-900 tracking-tight mb-4">
          Sneak Peak
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {sneakPeekImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9">
        <h4 className="text-xl font-bold text-gray-900 tracking-tight mb-4">
          Key Points
        </h4>

        <ul className="space-y-3.5">
          {keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm sm:text-base font-medium text-gray-800"
            >
              <CheckCircle2 className="h-5 w-5 fill-primary text-white shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
