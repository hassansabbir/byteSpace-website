'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { AuthCollage } from '@/components/auth/auth-collage';

export function AuthBranding() {
  const pathname = usePathname();
  const isRegister = pathname.includes('register');

  return (
    <div className="w-full max-w-[500px] text-white flex flex-col justify-center">
      <div className="max-w-[440px]">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
          {isRegister ? 'Sign up and come in' : 'Sign in with ease'}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
          {isRegister
            ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.'
            : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
        </p>
      </div>

      <div className="mt-4 sm:mt-6">
        <AuthCollage />
      </div>
    </div>
  );
}
