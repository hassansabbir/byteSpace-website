'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

export function NotFoundHero() {
  return (
    <section className="relative w-full bg-primary overflow-hidden flex flex-col justify-center items-center min-h-[calc(100vh-64px)] py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container size="lg" className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto"
        >
          <div
            aria-hidden="true"
            className="relative z-20 pointer-events-none select-none font-extrabold tracking-tight leading-none text-[140px] xs:text-[180px] sm:text-[230px] md:text-[280px] lg:text-[330px] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(180deg, #CCFF00 0%, rgba(204, 255, 0, 0.85) 45%, rgba(204, 255, 0, 0.4) 80%, rgba(204, 255, 0, 0.1) 100%)',
            }}
          >
            404
          </div>

          <div className="-mt-4 xs:-mt-5 sm:-mt-6 md:-mt-8 lg:-mt-9 relative z-10 flex flex-col items-center text-center px-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.12]">
              The page you are looking
              <br />
              for doesn&apos;t exist
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto font-normal">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="mt-6 sm:mt-8 relative z-30">
              <Link href={ROUTES.HOME}>
                <Button
                  variant="secondary"
                  rounded="full"
                  className="h-11 sm:h-12 px-8 text-sm sm:text-base font-bold shadow-md hover:bg-secondary/90 transition-all hover:scale-105"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
