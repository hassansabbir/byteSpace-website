'use client';

import * as React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/logo';
import { Container } from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { navigationConfig } from '@/config/navigation';

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-surface border-t border-border pt-16 pb-12 transition-colors">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16">
          <div className="flex flex-col space-y-5">
            <div>
              <Logo inverse={false} size="md" />
            </div>

            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-3.5">
              <div className="flex items-center gap-3.5">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for newsletter"
                  className="h-11 sm:h-12 w-full max-w-[360px] sm:max-w-[380px] px-5 rounded-full border border-gray-300 dark:border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-foreground shadow-none"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  rounded="full"
                  className="h-11 sm:h-12 px-7 sm:px-8 text-sm font-semibold text-secondary-foreground shadow-none shrink-0 hover:bg-secondary/90"
                >
                  {subscribed ? 'Joined!' : 'Search'}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground leading-normal max-w-md">
                By subscribing, you agree to our{' '}
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>{' '}
                and consent to receive updates from our company.
              </p>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            {navigationConfig.footerNav.map((column, idx) => (
              <div key={idx}>
                <ul className="space-y-4">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="text-sm text-foreground/80 hover:text-primary transition-colors block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&reg; 2023 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
