'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroParticles } from '@/components/home/hero-particles';
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
      className="relative w-full bg-primary overflow-hidden pb-0 flex flex-col justify-start md:h-screen md:max-h-[100dvh] md:min-h-[600px] md:justify-between [@media(max-height:720px)]:md:justify-start"
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

      <HeroParticles />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 sm:pt-24 md:pt-24 [@media(max-height:720px)]:md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto [@media(max-height:720px)]:md:text-[38px] [@media(max-height:640px)]:md:text-[32px]"
        >
          Get Access to Hundreds
          <span className="block mt-1 sm:mt-2">Courses Available</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed [@media(max-height:720px)]:md:mt-1.5 [@media(max-height:720px)]:md:text-xs"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          onSubmit={handleSearch}
          className="mt-4 sm:mt-5 flex flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[92%] sm:max-w-lg mx-auto [@media(max-height:720px)]:md:mt-3"
        >
          <div className="flex-1 flex items-center bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3.5 shadow-lg border border-white/20 [@media(max-height:720px)]:md:py-2">
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
            className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-lg shrink-0 h-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 [@media(max-height:720px)]:md:py-2 [@media(max-height:720px)]:md:px-5"
          >
            Search
          </Button>
        </motion.form>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 sm:mt-10 md:mt-4 px-2 sm:px-4 flex items-end justify-center [@media(max-height:720px)]:md:mt-2">
        <div className="relative w-full flex items-end justify-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-[110%] md:w-[105%] max-w-[1200px] z-0 pointer-events-none select-none [@media(max-height:720px)]:md:w-[95%] [@media(max-height:720px)]:md:max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="w-full h-auto flex items-end justify-center"
            >
              <Image
                src="/images/Home/hero/center-avater-round-bg.png"
                alt=""
                width={4596}
                height={1768}
                priority
                className="w-full h-auto object-contain block"
              />
            </motion.div>
          </div>

          <div className="relative z-10 w-[85%] sm:w-[72%] md:w-[74%] lg:w-[68%] max-w-[380px] sm:max-w-[500px] md:max-w-[720px] pointer-events-none select-none [@media(max-height:720px)]:md:max-w-[480px] [@media(max-height:640px)]:md:max-w-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full h-auto"
            >
              <Image
                src="/images/Home/hero/centeredAvaterImg.png"
                alt="Student learning with laptop"
                width={1400}
                height={999}
                priority
                className="w-full h-auto object-contain block md:max-h-none [@media(max-height:720px)]:md:max-h-[44vh] [@media(max-height:640px)]:md:max-h-[38vh]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="absolute top-[16%] sm:top-[22%] left-[0%] sm:left-[4%] md:left-[10%] lg:left-[12%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/90 p-2 sm:p-3 md:p-3.5 lg:p-4 [@media(max-height:720px)]:md:p-2 [@media(max-height:720px)]:md:top-[12%]"
          >
            <p className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-900 leading-tight">UI/UX Design</p>
            <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-500 mt-0.5 sm:mt-1 whitespace-nowrap">
              200 Courses &bull; 1000+ Students
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
            className="absolute top-[12%] sm:top-[18%] right-[0%] sm:right-[4%] md:right-[10%] lg:right-[12%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/90 p-2 sm:p-3 md:p-4 lg:p-5 min-w-[105px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[190px] [@media(max-height:720px)]:md:p-2.5 [@media(max-height:720px)]:md:min-w-[110px] [@media(max-height:720px)]:md:top-[8%]"
          >
            <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-500 leading-none">Learning Progress</p>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mt-1 sm:mt-1.5 md:mt-2 leading-none tracking-tight [@media(max-height:720px)]:md:text-xl">
              55%
            </p>
            <div className="mt-1.5 md:mt-2.5 sm:mt-3 w-full h-1.5 sm:h-2 rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '55%' }}
                transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-secondary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
            className="absolute bottom-[6%] sm:bottom-[10%] left-[0%] sm:left-[2%] md:left-[8%] lg:left-[9%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/90 p-2 sm:p-3 md:p-3.5 lg:p-4 min-w-[120px] sm:min-w-[155px] md:min-w-[175px] lg:min-w-[205px] [@media(max-height:720px)]:md:p-2 [@media(max-height:720px)]:md:min-w-[120px] [@media(max-height:720px)]:md:bottom-[4%]"
          >
            <p className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-900 leading-none">Happy Students</p>
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] md:text-xs font-semibold text-gray-600">
              <span>4.5</span>
              <span className="text-gray-400 font-normal">(240)</span>
              <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-1.5 sm:mt-2 md:mt-2.5 flex items-center -space-x-1 sm:-space-x-1.5 md:-space-x-2">
              {heroAvatars.map((src, i) => (
                <div key={i} className="relative h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm">
                  <Image src={src} alt="Student avatar" fill sizes="28px" className="object-cover" />
                </div>
              ))}
              <span className="h-5 sm:h-6 md:h-7 px-1 sm:px-1.5 md:px-2 rounded-full border-2 border-white bg-secondary text-secondary-foreground text-[8px] sm:text-[9px] md:text-[10px] font-extrabold flex items-center justify-center shrink-0 shadow-sm ml-0.5">
                2K+
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
