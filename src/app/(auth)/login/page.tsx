'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AuthSocialButtons } from '@/components/auth/auth-social-buttons';
import { ROUTES } from '@/constants/routes';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-[480px] bg-white rounded-[32px] sm:rounded-[38px] shadow-2xl p-7 sm:p-10 md:p-12"
    >
      <div className="mb-6 sm:mb-8">
        <span className="text-primary text-sm sm:text-base font-medium">
          Sign In
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mt-1">
          Welcome Back
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-slate-900 mb-1.5"
          >
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            className="w-full h-12 px-4 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-slate-900 mb-1.5"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full h-12 px-4 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
          />
        </div>

        <div className="flex justify-end pt-2 sm:pt-3">
          <Button
            type="submit"
            variant="secondary"
            rounded="full"
            className="px-8 py-2.5 h-auto text-sm sm:text-base font-semibold shadow-sm"
          >
            Sign In
          </Button>
        </div>
      </form>

      <AuthSocialButtons />

      <div className="text-center">
        <p className="text-xs sm:text-sm text-slate-600">
          New user?{' '}
          <Link
            href={ROUTES.REGISTER}
            className="text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Create an account
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
