import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { AuthBranding } from '@/components/auth/auth-branding';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Sign in or create an account on ByteSpace.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-primary relative flex flex-col justify-between overflow-x-hidden selection:bg-secondary selection:text-secondary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.16) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,.16) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <header className="relative z-20 w-full px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8">
        <div className="max-w-6xl mx-auto w-full">
          <Link
            href={ROUTES.HOME}
            aria-label="ByteSpace Home"
            className="inline-block transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
          >
            <div className="w-10 h-10 overflow-hidden relative">
              <Image
                src="/logos/Header_Logo.png"
                alt="ByteSpace"
                width={160}
                height={40}
                priority
                className="max-w-none h-full w-auto object-cover object-left"
              />
            </div>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-6 sm:py-10">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 justify-center xl:justify-start">
            <AuthBranding />
          </div>
          <div className="w-full lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            {children}
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full py-4" />
    </div>
  );
}
