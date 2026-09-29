import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none';

    const variants = {
      primary:
        'bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary-hover font-semibold shadow-sm',
      outline:
        'border border-border bg-transparent hover:bg-muted text-foreground',
      ghost:
        'hover:bg-muted text-foreground',
      icon:
        'border border-border bg-surface hover:bg-muted text-foreground rounded-full',
    };

    const sizes = {
      sm: variant === 'icon' ? 'h-8 w-8 p-0 rounded-full' : 'h-8 px-3 text-xs rounded-md gap-1.5',
      md: variant === 'icon' ? 'h-10 w-10 p-0 rounded-full' : 'h-10 px-4 text-sm rounded-md gap-2',
      lg: variant === 'icon' ? 'h-12 w-12 p-0 rounded-full' : 'h-12 px-6 text-base rounded-lg gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
