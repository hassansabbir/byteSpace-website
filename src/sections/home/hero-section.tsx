'use client';

import * as React from 'react';
import Image from 'next/image';
import { Search, Star } from 'lucide-react';
import { heroAvatars, decorativeElements } from '@/data/hero';

const DOME_BLUR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAE/gH/5mZ3GQAAAABJRU5ErkJggg==';
const AVATAR_BLUR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

export function HeroSection() {
  const [query, setQuery] = React.useState('');

  return (
    <section
      id="hero"
      className="relative w-full bg-primary overflow-hidden"
      style={{ height: 'calc(100dvh - 4rem)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {decorativeElements.map((item, index) => (
        <div key={index} className="absolute pointer-events-none" style={{ ...item.style, zIndex: 2 }}>
          <Image
            src={item.src}
            alt=""
            width={item.w}
            height={item.h}
            loading="lazy"
            className="w-full h-auto object-contain block opacity-95 transition-opacity duration-300"
          />
        </div>
      ))}

      <div
        className="relative flex flex-col items-center text-center px-4"
        style={{ zIndex: 10, paddingTop: 'clamp(1.75rem,5vh,3.5rem)' }}
      >
        <h1
          className="font-bold text-white tracking-tight leading-[1.12] max-w-[900px]"
          style={{ fontSize: 'clamp(1.8rem,4.6vw,4rem)' }}
        >
          Get Access to Hundreds
          <span className="block">Courses Available</span>
        </h1>

        <p
          className="mt-3 text-white/80 max-w-lg leading-relaxed"
          style={{ fontSize: 'clamp(0.78rem,1.1vw,0.95rem)' }}
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-[22px] bg-white rounded-full flex items-center shadow-xl border border-white/20 focus-within:ring-4 focus-within:ring-secondary/40"
          style={{ width: 'clamp(280px,42vw,540px)', padding: '8px 8px 8px 20px' }}
        >
          <Search className="h-4 w-4 text-gray-400 mr-3 shrink-0 stroke-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Course, topic, creator"
            aria-label="Search courses"
            className="w-full bg-transparent text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-secondary text-secondary-foreground font-semibold text-[13.5px] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ padding: '9px 26px' }}
          >
            Search
          </button>
        </form>
      </div>

      <div
        className="absolute"
        style={{
          zIndex: 20,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(540px,76vw,1100px)',
        }}
      >
        <div className="relative w-full">
          <Image
            src="/images/Home/hero/center-avater-round-bg.png"
            alt=""
            width={4596}
            height={1768}
            priority
            placeholder="blur"
            blurDataURL={DOME_BLUR}
            className="w-full h-auto object-contain object-bottom block"
          />

          <div
            className="absolute pointer-events-none"
            style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '50%', zIndex: 5 }}
          >
            <Image
              src="/images/Home/hero/centeredAvaterImg.png"
              alt="Student with headphones and laptop"
              width={1400}
              height={999}
              priority
              placeholder="blur"
              blurDataURL={AVATAR_BLUR}
              className="w-full h-auto object-contain object-bottom block"
            />
          </div>

          <div
            className="absolute bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,.16)] border border-white/60"
            style={{ zIndex: 30, top: '30%', left: '4%', padding: '13px 18px', minWidth: 'clamp(140px,14vw,195px)' }}
          >
            <p className="text-sm font-bold text-gray-900 leading-none">UI/UX Design</p>
            <p className="mt-[5px] text-[11.5px] font-medium text-gray-500 whitespace-nowrap">
              200 Courses&nbsp;&bull;&nbsp;1000+ Students
            </p>
          </div>

          <div
            className="absolute bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,.16)] border border-white/60"
            style={{ zIndex: 30, top: '26%', right: '3%', padding: '14px 20px', minWidth: 'clamp(145px,14vw,195px)' }}
          >
            <p className="text-[11.5px] font-medium text-gray-500 leading-none">Learning Progress</p>
            <p
              className="font-extrabold text-gray-900 leading-none tracking-tight mt-[5px]"
              style={{ fontSize: 'clamp(1.5rem,2.2vw,2rem)' }}
            >
              55%
            </p>
            <div className="mt-3 w-full rounded-full overflow-hidden bg-gray-100" style={{ height: 6 }}>
              <div className="h-full rounded-full bg-secondary" style={{ width: '55%' }} />
            </div>
          </div>

          <div
            className="absolute bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,.16)] border border-white/60"
            style={{ zIndex: 30, top: '60%', left: '5%', padding: '12px 16px', minWidth: 'clamp(160px,16vw,220px)' }}
          >
            <p className="text-sm font-bold text-gray-900 leading-none">Happy Students</p>
            <div className="mt-1 flex items-center gap-[5px] text-[11.5px] font-medium text-gray-500">
              <span>4.5</span>
              <span className="text-gray-400">(240)</span>
              <Star className="h-[13px] w-[13px] fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-2 flex items-center -space-x-[7px]">
              {heroAvatars.map((src, i) => (
                <div key={i} className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden shrink-0">
                  <Image src={src} alt="Student avatar" fill sizes="28px" className="object-cover" />
                </div>
              ))}
              <div className="h-7 px-2 ml-1 rounded-full bg-secondary text-secondary-foreground border-2 border-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
