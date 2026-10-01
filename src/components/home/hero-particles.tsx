'use client';

import * as React from 'react';
import Image from 'next/image';
import { FloatingElement } from '@/components/animations/floating-element';

export function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <FloatingElement duration={4.5} yOffset={10} className="absolute top-40 -left-2 lg:left-0 w-20 sm:w-28 lg:w-44 xl:w-60 opacity-95">
        <Image src="/images/Home/hero/left-top-elemtnt.png" alt="" width={500} height={724} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={4} yOffset={12} delay={0.5} className="absolute top-40 -right-2 lg:right-0 w-20 sm:w-28 lg:w-44 xl:w-48 opacity-95">
        <Image src="/images/Home/hero/right-top-element.png" alt="" width={852} height={1488} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={5} yOffset={8} delay={1} className="absolute top-[45%] left-4 sm:left-6 lg:left-8 xl:left-40 w-14 sm:w-20 lg:w-24 xl:w-60 opacity-90">
        <Image src="/images/Home/hero/left-middle-elemtnt.png" alt="" width={707} height={704} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={4.8} yOffset={9} delay={0.3} className="absolute top-[45%] right-4 sm:right-6 lg:right-8 xl:right-40 w-14 sm:w-20 lg:w-24 xl:w-52 opacity-90">
        <Image src="/images/Home/hero/right-middle-element.png" alt="" width={756} height={756} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={5.5} yOffset={11} delay={0.8} className="absolute bottom-10 -left-4 lg:left-10 w-24 sm:w-32 lg:w-44 xl:w-60 opacity-95">
        <Image src="/images/Home/hero/left-bottom-elemtnt.png" alt="" width={1375} height={1371} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={5.2} yOffset={10} delay={0.4} className="absolute bottom-10 -right-4 lg:right-10 w-24 sm:w-28 lg:w-40 xl:w-52 opacity-95">
        <Image src="/images/Home/hero/right-bottom-element.png" alt="" width={1265} height={1327} quality={80} className="w-full h-auto" />
      </FloatingElement>
    </div>
  );
}
