'use client';

import * as React from 'react';
import Image from 'next/image';
import { FloatingElement } from '@/components/animations/floating-element';

export function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <FloatingElement duration={4.5} yOffset={10} className="absolute top-28 sm:top-32 lg:top-32 xl:top-40 -left-2 lg:left-0 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-48 2xl:w-60 opacity-95 [@media(max-height:720px)]:w-14 [@media(max-height:720px)]:top-20">
        <Image src="/images/Home/hero/left-top-elemtnt.png" alt="" width={500} height={724} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={4} yOffset={12} delay={0.5} className="absolute top-28 sm:top-32 lg:top-32 xl:top-40 -right-2 lg:right-0 w-14 sm:w-18 md:w-22 lg:w-28 xl:w-40 2xl:w-48 opacity-95 [@media(max-height:720px)]:w-12 [@media(max-height:720px)]:top-20">
        <Image src="/images/Home/hero/right-top-element.png" alt="" width={852} height={1488} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={5} yOffset={8} delay={1} className="absolute top-[44%] lg:top-[45%] left-2 sm:left-4 lg:left-6 xl:left-24 2xl:left-40 w-10 sm:w-14 md:w-16 lg:w-20 xl:w-40 2xl:w-60 opacity-90 [@media(max-height:720px)]:w-10 [@media(max-height:720px)]:left-2">
        <Image src="/images/Home/hero/left-middle-elemtnt.png" alt="" width={707} height={704} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={4.8} yOffset={9} delay={0.3} className="absolute top-[44%] lg:top-[45%] right-2 sm:right-4 lg:right-6 xl:right-24 2xl:right-40 w-10 sm:w-14 md:w-16 lg:w-20 xl:w-36 2xl:w-52 opacity-90 [@media(max-height:720px)]:w-10 [@media(max-height:720px)]:right-2">
        <Image src="/images/Home/hero/right-middle-element.png" alt="" width={756} height={756} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={5.5} yOffset={11} delay={0.8} className="absolute bottom-4 sm:bottom-6 lg:bottom-6 xl:bottom-10 -left-4 sm:-left-2 lg:left-4 xl:left-10 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-48 2xl:w-60 opacity-95 [@media(max-height:720px)]:w-14 [@media(max-height:720px)]:bottom-2">
        <Image src="/images/Home/hero/left-bottom-elemtnt.png" alt="" width={1375} height={1371} quality={80} className="w-full h-auto" />
      </FloatingElement>
      <FloatingElement duration={5.2} yOffset={10} delay={0.4} className="absolute bottom-4 sm:bottom-6 lg:bottom-6 xl:bottom-10 -right-4 sm:-right-2 lg:right-4 xl:right-10 w-14 sm:w-18 md:w-22 lg:w-28 xl:w-40 2xl:w-52 opacity-95 [@media(max-height:720px)]:w-12 [@media(max-height:720px)]:bottom-2">
        <Image src="/images/Home/hero/right-bottom-element.png" alt="" width={1265} height={1327} quality={80} className="w-full h-auto" />
      </FloatingElement>
    </div>
  );
}
