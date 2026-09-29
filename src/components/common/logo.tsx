import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/constants/routes';

export interface LogoProps {
  className?: string;
  inverse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
}

export function Logo({
  className,
  inverse = false,
  size = 'md',
  asLink = true,
}: LogoProps) {
  const logoDimensions = {
    sm: { width: 120, height: 28 },
    md: { width: 145, height: 34 },
    lg: { width: 175, height: 40 },
  };

  const currentDim = logoDimensions[size];
  const src = inverse ? '/logos/Header_Logo.png' : '/logos/Footer_Logo.png';
  const alt = 'ByteSpace Logo';

  const content = (
    <div
      className={cn(
        'inline-flex items-center select-none transition-opacity hover:opacity-90',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={currentDim.width}
        height={currentDim.height}
        priority
        className="h-auto w-auto max-h-8 sm:max-h-9 object-contain"
      />
    </div>
  );

  if (asLink) {
    return (
      <Link href={ROUTES.HOME} aria-label="ByteSpace Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
