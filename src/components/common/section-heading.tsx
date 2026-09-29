import * as React from 'react';
import { cn } from '@/lib/utils';
import { Alignment } from '@/types/common';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Alignment;
  inverse?: boolean;
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = 'center',
  inverse = false,
  ...props
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div
      className={cn('flex flex-col max-w-3xl mb-10 md:mb-14', alignClasses[align], className)}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-semibold uppercase tracking-wider mb-2.5',
            inverse ? 'text-secondary' : 'text-primary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight',
          inverse ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3.5 text-base sm:text-lg leading-relaxed max-w-2xl',
            inverse ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
