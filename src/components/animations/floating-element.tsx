'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  delay?: number;
  className?: string;
}

export function FloatingElement({
  children,
  duration = 4,
  yOffset = 8,
  xOffset = 0,
  delay = 0,
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        x: xOffset !== 0 ? [-xOffset, xOffset, -xOffset] : 0,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
