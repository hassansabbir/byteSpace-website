import type { Metadata } from 'next';
import { CreatorsCatalogSection } from '@/sections/creator/creators-catalog-section';

export const metadata: Metadata = {
  title: 'Expert Creators & Educators — ByteSpace',
  description: 'Explore top creative professionals, tech leaders, and expert educators teaching on ByteSpace.',
};

export default function CreatorsPage() {
  return (
    <main className="w-full">
      <CreatorsCatalogSection />
    </main>
  );
}
