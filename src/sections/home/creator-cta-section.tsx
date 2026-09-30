import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/container';

export function CreatorCtaSection() {
  return (
    <section className="relative w-full bg-primary overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute left-0 top-0 bottom-0 pointer-events-none z-10 w-[130px] sm:w-[170px] md:w-[220px] lg:w-[270px] xl:w-[320px]">
        <Image
          src="/images/Home/creator-cta-left.webp"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain object-left"
          sizes="(max-width: 768px) 170px, (max-width: 1280px) 270px, 320px"
          priority
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 pointer-events-none z-10 w-[130px] sm:w-[170px] md:w-[220px] lg:w-[270px] xl:w-[320px]">
        <Image
          src="/images/Home/creator-cta-right.webp"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain object-right"
          sizes="(max-width: 768px) 170px, (max-width: 1280px) 270px, 320px"
          priority
        />
      </div>

      <Container size="lg" className="relative z-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
            Unlock Your Potential as a
            <span className="block mt-1">Creator with ByteSpace</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[14.5px] text-white/80 leading-relaxed max-w-[760px] mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and international
            creators. Utilize our Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link
              href="/creators"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-secondary text-secondary-foreground text-sm sm:text-[15px] font-bold tracking-tight shadow-md hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
