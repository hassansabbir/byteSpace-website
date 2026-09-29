import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { HeroSection } from '@/sections/home/hero-section';
import { TrustedBySection } from '@/sections/home/trusted-by-section';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Get Access to Hundreds of Courses Available`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
    </>
  );
}
