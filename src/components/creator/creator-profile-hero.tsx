'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';
import { CreatorProfileData } from '@/data/creator';
import { cn } from '@/lib/utils';

export interface CreatorProfileHeroProps {
  creator: CreatorProfileData;
  isFollowing: boolean;
  onToggleFollow: () => void;
}

export function CreatorProfileHero({
  creator,
  isFollowing,
  onToggleFollow,
}: CreatorProfileHeroProps) {
  return (
    <section className="relative z-20 w-full bg-primary pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 overflow-visible">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden shadow-xl border-2 border-white ring-2 ring-white/30 shrink-0 bg-white"
          >
            <Image
              src={creator.avatarUrl}
              alt={creator.name}
              fill
              sizes="(max-width: 640px) 80px, 96px"
              className="object-cover"
              priority
            />
          </motion.div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {creator.name}
              </h1>
              <span className="px-3.5 py-1 rounded-full bg-secondary text-secondary-foreground font-bold text-xs sm:text-sm shadow-sm">
                {creator.badge}
              </span>
            </div>
            <p className="text-sm sm:text-base text-white/90 font-normal mt-1.5">
              {creator.title}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 space-y-2 text-sm sm:text-base text-white/85 leading-relaxed max-w-4xl font-normal"
        >
          {creator.bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-gray-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="text-primary font-bold">{creator.productCount}</span>
              <span>Products</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-gray-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="text-primary font-bold">
                {isFollowing ? creator.followersCount + 1 : creator.followersCount}
              </span>
              <span>Followers</span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onToggleFollow}
              className={cn(
                'px-8 py-2.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95 hover:scale-105',
                isFollowing
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
              )}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
