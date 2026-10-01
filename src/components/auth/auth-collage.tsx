'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const FOREGROUND_AVATARS = [
  '/images/Home/hero/avatars/avatar-1.jpg',
  '/images/Home/hero/avatars/avatar-2.jpg',
  '/images/Home/hero/avatars/avatar-3.jpg',
  '/images/Home/hero/avatars/avatar-4.jpg',
];

const STUDENT_AVATARS = [
  '/images/Home/hero/avatars/avatar-5.jpg',
  '/images/Home/hero/avatars/avatar-1.jpg',
  '/images/courses/avatars/student-1.jpg',
  '/images/courses/avatars/student-2.jpg',
  '/images/courses/avatars/student-3.jpg',
  '/images/courses/avatars/student-4.jpg',
  '/images/Home/hero/avatars/avatar-2.jpg',
];

export function AuthCollage() {
  return (
    <div className="relative w-full max-w-[480px] h-[520px] select-none mx-auto lg:mx-0 mt-4">
      <div className="absolute top-28 sm:top-32 left-0 w-[280px] sm:w-[300px] rounded-3xl bg-white p-3.5 sm:p-4 shadow-xl z-0">
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src="/images/courses/build-digital-asset.jpg"
            alt="Build Digital Asset"
            fill
            sizes="300px"
            className="object-cover"
          />
          <span className="absolute bottom-2.5 left-2.5 bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-3 py-1 rounded-full shadow-xs">
            17 Lessons
          </span>
        </div>
        <div className="mt-3">
          <h4 className="text-base font-bold text-slate-900 truncate">Build Digit</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            by <span className="text-[#2563EB] font-medium">purepearl studio</span>
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-0.5 rounded-md">
              <svg className="w-3 h-3 text-slate-700" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="10" width="3" height="5" rx="0.5" />
                <rect x="6.5" y="6" width="3" height="9" rx="0.5" />
                <rect x="11" y="2" width="3" height="13" rx="0.5" />
              </svg>
              Beginner
            </span>
            <div className="flex items-center -space-x-1.5">
              {FOREGROUND_AVATARS.map((src, i) => (
                <div key={i} className="relative w-5 h-5 rounded-full overflow-hidden border border-white">
                  <Image src={src} alt="" fill sizes="20px" className="object-cover" />
                </div>
              ))}
              <span className="w-5 h-5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border border-white">
                26+
              </span>
            </div>
          </div>
          <div className="mt-2.5">
            <p className="text-base font-bold text-[#2563EB]">
              $25<span className="text-xs text-slate-400 font-normal">/lifetime</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-20 sm:left-24 w-[310px] sm:w-[340px] rounded-3xl sm:rounded-[32px] bg-white p-4 sm:p-5 shadow-2xl z-10">
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950">
          <Image
            src="/images/courses/the-power-of-big-data.jpg"
            alt="the Power of Big Data"
            fill
            sizes="340px"
            priority
            className="object-cover"
          />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 overflow-hidden">
            <span className="bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
              17 Lessons
            </span>
            <span className="bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
              2 hours 16 mins
            </span>
            <span className="bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
              59 Comments
            </span>
          </div>
        </div>
        <div className="mt-3.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-1 text-sm font-bold text-slate-900 shrink-0">
              <span>4.5</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            by <span className="text-[#2563EB] font-medium">purepearl studio</span>
          </p>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">
              <svg className="w-3 h-3 text-slate-700" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="10" width="3" height="5" rx="0.5" />
                <rect x="6.5" y="6" width="3" height="9" rx="0.5" />
                <rect x="11" y="2" width="3" height="13" rx="0.5" />
              </svg>
              Beginner
            </span>
            <div className="flex items-center -space-x-1.5">
              {FOREGROUND_AVATARS.map((src, i) => (
                <div key={i} className="relative w-6 h-6 rounded-full overflow-hidden border border-white">
                  <Image src={src} alt="" fill sizes="24px" className="object-cover" />
                </div>
              ))}
              <span className="w-6 h-6 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border border-white">
                26+
              </span>
            </div>
          </div>
          <div className="mt-2.5">
            <p className="text-base sm:text-lg font-bold text-[#2563EB]">
              $25<span className="text-xs text-slate-400 font-normal">/lifetime</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-12 sm:top-12 sm:left-14 w-28 h-28 sm:w-32 sm:h-32 z-20 pointer-events-none drop-shadow-xl">
        <Image
          src="/images/Home/hero/auth-layout-circle.png"
          alt=""
          width={128}
          height={128}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 -left-6 sm:bottom-2 sm:-left-8 w-32 h-32 sm:w-36 sm:h-36 z-20 pointer-events-none drop-shadow-2xl">
        <Image
          src="/images/Home/hero/auth-layout-cone.png"
          alt=""
          width={144}
          height={144}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-2 right-0 sm:right-2 z-20 bg-secondary rounded-2xl p-3.5 sm:p-4 shadow-2xl min-w-[220px]">
        <div>
          <span className="text-sm font-bold text-slate-950 block">Happy Students</span>
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-900/90 mt-0.5">
            <span>4.5 (240)</span>
            <span className="text-[#2563EB]">★</span>
          </div>
        </div>
        <div className="flex items-center -space-x-1.5 mt-2.5">
          {STUDENT_AVATARS.map((src, i) => (
            <div key={i} className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-secondary">
              <Image src={src} alt="" fill sizes="28px" className="object-cover" />
            </div>
          ))}
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-secondary">
            2K+
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 right-2 sm:bottom-14 sm:right-4 w-28 h-28 sm:w-32 sm:h-32 z-30 pointer-events-none drop-shadow-xl">
        <Image
          src="/images/Home/hero/left-middle-elemtnt.png"
          alt=""
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
