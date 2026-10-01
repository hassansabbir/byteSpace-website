import type { Metadata } from 'next';
import { getCreatorBySlug } from '@/data/creator';
import { CreatorProfileSection } from '@/sections/creator/creator-profile-section';

interface CreatorDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: CreatorDetailPageProps): Metadata {
  const creator = getCreatorBySlug(params.slug);

  return {
    title: `${creator.name} — Creator Profile | ByteSpace`,
    description: creator.title,
  };
}

export default function CreatorDetailPage({ params }: CreatorDetailPageProps) {
  const creator = getCreatorBySlug(params.slug);

  return (
    <main className="w-full">
      <CreatorProfileSection creator={creator} />
    </main>
  );
}
