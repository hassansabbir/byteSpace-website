'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { companyLogos } from '@/data/company-logos';

export function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      aria-label="Trusted by leading companies"
      className="w-full bg-muted/40 border-t border-border"
    >
      <Container size="lg" className="py-10 sm:py-12">
        <StaggerContainer
          staggerDelay={0.06}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-20"
        >
          {companyLogos.map((logo) => (
            <StaggerItem key={logo.id} direction="up" distance={16} scale>
              <div className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  className="h-9 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                  sizes="(max-width: 640px) 120px, 160px"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
