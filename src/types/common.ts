import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

export type Alignment = 'left' | 'center' | 'right';

export type ComponentSize = 'sm' | 'md' | 'lg';

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'muted';
