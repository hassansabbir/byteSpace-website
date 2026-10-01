import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, BookOpen } from 'lucide-react';
import { CreatorProfileData } from '@/data/creator';
import { ROUTES } from '@/constants/routes';

export interface CreatorCardProps {
  creator: CreatorProfileData;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <Link
      href={ROUTES.CREATOR_PROFILE(creator.slug)}
      className="rounded-[28px] border border-gray-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="relative h-18 w-18 sm:h-20 sm:w-20 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-gray-100 group-hover:scale-105 transition-transform duration-300 bg-gray-50 shrink-0">
            <Image
              src={creator.avatarUrl}
              alt={creator.name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-bold text-xs shadow-sm">
            {creator.badge}
          </span>
        </div>

        <h3 className="mt-4 font-bold text-gray-900 text-lg group-hover:text-primary transition-colors leading-tight">
          {creator.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500 font-medium line-clamp-1">
          {creator.title}
        </p>

        <p className="mt-3 text-xs text-gray-600 line-clamp-2 leading-relaxed">
          {creator.bioParagraphs[0]}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-600">
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5 text-primary" />
          <span>{creator.productCount} Courses</span>
        </span>

        <span className="inline-flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 text-primary" />
          <span>{creator.followersCount} Followers</span>
        </span>

        <span className="inline-flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>{creator.rating.toFixed(1)}</span>
        </span>
      </div>
    </Link>
  );
}
