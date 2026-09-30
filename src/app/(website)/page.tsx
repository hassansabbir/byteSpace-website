import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { HeroSection } from '@/sections/home/hero-section';
import { TrustedBySection } from '@/sections/home/trusted-by-section';
import { FeaturedCoursesSection } from '@/sections/home/featured-courses-section';
import { LearningPathsSection } from '@/sections/home/learning-paths-section';
import { AdsSection } from '@/sections/home/ads-section';
import { CreatorCtaSection } from '@/sections/home/creator-cta-section';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Get Access to Hundreds of Courses Available`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturedCoursesSection />
      <LearningPathsSection />
      <AdsSection />
      <CreatorCtaSection />
    </>
  );
}
