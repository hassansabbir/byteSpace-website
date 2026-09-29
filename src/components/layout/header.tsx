'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Logo } from '@/components/common/logo';
import { Container } from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { navigationConfig } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/constants/routes';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary border-b border-white/10 transition-colors">
      <Container size="xl">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          <div className="flex items-center shrink-0">
            <Logo inverse size="md" />
          </div>

          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navigationConfig.mainNav.map((item) => {
              const isActive =
                item.href === ROUTES.HOME
                  ? pathname === ROUTES.HOME
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1',
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href={navigationConfig.authNav.login.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {navigationConfig.authNav.login.title}
            </Link>

            <Link
              href={navigationConfig.authNav.register.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {navigationConfig.authNav.register.title}
            </Link>

            <Link
              href={ROUTES.COURSES}
              aria-label="Shopping Cart"
              className="relative p-2 text-white/90 hover:text-white transition-transform hover:scale-105"
            >
              <ShoppingBag className="h-5 w-5 stroke-[1.8]" />
              <span className="sr-only">Cart</span>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <Link
              href={ROUTES.COURSES}
              aria-label="Shopping Cart"
              className="p-1.5 text-white/90 hover:text-white"
            >
              <ShoppingBag className="h-5 w-5 stroke-[1.8]" />
            </Link>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10 hover:text-white border-0"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 stroke-[2]" />
              ) : (
                <Menu className="h-6 w-6 stroke-[2]" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-primary/98 backdrop-blur-md z-40 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200 border-t border-white/10">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navigationConfig.mainNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-lg font-semibold text-white/90 hover:text-white py-2 border-b border-white/10"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link href={navigationConfig.authNav.login.href} className="w-full">
              <Button variant="outline" size="lg" className="w-full text-white border-white/20 hover:bg-white/10">
                {navigationConfig.authNav.login.title}
              </Button>
            </Link>
            <Link href={navigationConfig.authNav.register.href} className="w-full">
              <Button variant="secondary" size="lg" className="w-full">
                {navigationConfig.authNav.register.title}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
