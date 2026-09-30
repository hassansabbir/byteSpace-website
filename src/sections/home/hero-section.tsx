'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroAvatars } from '@/data/hero';
import { ROUTES } from '@/constants/routes';

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`${ROUTES.COURSES}?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push(ROUTES.COURSES);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-primary overflow-hidden min-h-[600px] h-screen max-h-[100dvh] flex flex-col justify-between"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Decorative side particles — unified across all breakpoints */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Top-left lime hand */}
        <div className="absolute top-40 -left-2 lg:left-0 w-20 sm:w-28 lg:w-44 xl:w-60 opacity-95">
          <Image src="/images/Home/hero/left-top-elemtnt.png" alt="" width={500} height={724} quality={80} className="w-full h-auto" />
        </div>
        {/* Top-right lime cone */}
        <div className="absolute top-40 -right-2 lg:right-0 w-20 sm:w-28 lg:w-44 xl:w-48 opacity-95">
          <Image src="/images/Home/hero/right-top-element.png" alt="" width={852} height={1488} quality={80} className="w-full h-auto" />
        </div>
        {/* Middle-left white squiggle */}
        <div className="absolute top-[45%] left-4 sm:left-6 lg:left-8 xl:left-40 w-14 sm:w-20 lg:w-24 xl:w-60 opacity-90">
          <Image src="/images/Home/hero/left-middle-elemtnt.png" alt="" width={707} height={704} quality={80} className="w-full h-auto" />
        </div>
        {/* Middle-right white triangle */}
        <div className="absolute top-[45%] right-4 sm:right-6 lg:right-8 xl:right-40 w-14 sm:w-20 lg:w-24 xl:w-52 opacity-90">
          <Image src="/images/Home/hero/right-middle-element.png" alt="" width={756} height={756} quality={80} className="w-full h-auto" />
        </div>
        {/* Bottom-left white donut */}
        <div className="absolute bottom-10 -left-4 lg:left-10 w-24 sm:w-32 lg:w-44 xl:w-60 opacity-95">
          <Image src="/images/Home/hero/left-bottom-elemtnt.png" alt="" width={1375} height={1371} quality={80} className="w-full h-auto" />
        </div>
        {/* Bottom-right white squiggle */}
        <div className="absolute bottom-10 -right-4 lg:right-10 w-24 sm:w-28 lg:w-40 xl:w-52 opacity-95">
          <Image src="/images/Home/hero/right-bottom-element.png" alt="" width={1265} height={1327} quality={80} className="w-full h-auto" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 sm:pt-24 md:pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Get Access to Hundreds
          <span className="block mt-1 sm:mt-2">Courses Available</span>
        </h1>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-4 sm:mt-5 flex flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[92%] sm:max-w-lg mx-auto"
        >
          <div className="flex-1 flex items-center bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3.5 shadow-lg border border-white/20">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2.5 sm:mr-3 shrink-0 stroke-[2.2]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              aria-label="Search courses"
            />
          </div>
          <Button
            type="submit"
            variant="secondary"
            className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold bg-[#C6F226] text-gray-950 hover:bg-[#b5e01f] shadow-lg shrink-0 h-auto cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            Search
          </Button>
        </form>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto mt-3 sm:mt-4 md:mt-5 px-2 sm:px-4 flex items-end justify-center">
        <div className="relative w-full flex items-end justify-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-[110%] md:w-[105%] max-w-[1200px] z-0 pointer-events-none select-none">
            <Image
              src="/images/Home/hero/center-avater-round-bg.png"
              alt=""
              width={4596}
              height={1768}
              priority
              className="w-full h-auto object-contain block"
            />
          </div>

          <div className="relative z-10 w-[100%] sm:w-[88%] md:w-[74%] lg:w-[68%] max-w-[720px] pointer-events-none select-none">
            <Image
              src="/images/Home/hero/centeredAvaterImg.png"
              alt="Student learning with laptop"
              width={1400}
              height={999}
              priority
              className="w-full h-auto object-contain block"
            />
          </div>

          <div className="absolute top-[16%] sm:top-[22%] left-[1%] sm:left-[6%] md:left-[10%] lg:left-[12%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/90 p-2.5 sm:p-3.5 md:p-4">
            <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">UI/UX Design</p>
            <p className="text-[10px] sm:text-xs font-medium text-gray-500 mt-1 whitespace-nowrap">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          <div className="absolute top-[12%] sm:top-[18%] right-[1%] sm:right-[6%] md:right-[10%] lg:right-[12%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/90 p-3 sm:p-4 md:p-5 min-w-[125px] sm:min-w-[160px] md:min-w-[190px]">
            <p className="text-[10px] sm:text-xs font-medium text-gray-500 leading-none">Learning Progress</p>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 mt-1.5 sm:mt-2 leading-none tracking-tight">
              55%
            </p>
            <div className="mt-2.5 sm:mt-3 w-full h-1.5 sm:h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-[#C6F226] w-[55%]" />
            </div>
          </div>

          <div className="absolute bottom-[6%] sm:bottom-[10%] left-[1%] sm:left-[4%] md:left-[8%] lg:left-[9%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/90 p-2.5 sm:p-3.5 md:p-4 min-w-[140px] sm:min-w-[175px] md:min-w-[205px]">
            <p className="text-xs sm:text-sm font-bold text-gray-900 leading-none">Happy Students</p>
            <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 text-[11px] sm:text-xs font-semibold text-gray-600">
              <span>4.5</span>
              <span className="text-gray-400 font-normal">(240)</span>
              <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-2 sm:mt-2.5 flex items-center -space-x-1.5 sm:-space-x-2">
              {heroAvatars.map((src, i) => (
                <div key={i} className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm">
                  <Image src={src} alt="Student avatar" fill sizes="28px" className="object-cover" />
                </div>
              ))}
              <span className="h-6 sm:h-7 px-1.5 sm:px-2 rounded-full border-2 border-white bg-[#C6F226] text-gray-950 text-[9px] sm:text-[10px] font-extrabold flex items-center justify-center shrink-0 shadow-sm ml-0.5">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
