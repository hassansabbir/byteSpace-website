import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'muted';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center font-medium transition-colors select-none';

  const variants = {
    default:
      'bg-muted text-foreground hover:bg-muted/80',
    primary:
      'bg-primary/10 text-primary hover:bg-primary/20',
    secondary:
      'bg-secondary text-secondary-foreground font-semibold',
    outline:
      'border border-border text-foreground hover:bg-muted/50',
    muted:
      'bg-surface-muted text-muted-foreground border border-border/50',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5 rounded-full',
    md: 'text-xs px-3 py-1 rounded-full',
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
