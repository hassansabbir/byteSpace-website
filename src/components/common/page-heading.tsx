import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PageHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeading({
  className,
  title,
  description,
  badge,
  actions,
  children,
  ...props
}: PageHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 md:py-12 border-b border-border mb-8',
        className
      )}
      {...props}
    >
      <div className="space-y-2">
        {badge && <div className="mb-2">{badge}</div>}
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}
