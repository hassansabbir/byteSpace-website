import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'surface' | 'muted' | 'primary';
  as?: React.ElementType;
}

export function Section({
  className,
  spacing = 'lg',
  variant = 'default',
  as: Component = 'section',
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  const variantClasses = {
    default: 'bg-background text-foreground',
    surface: 'bg-surface text-surface-foreground',
    muted: 'bg-surface-muted text-foreground',
    primary: 'bg-primary text-primary-foreground',
  };

  return (
    <Component
      className={cn(
        'relative w-full',
        spacingClasses[spacing],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
