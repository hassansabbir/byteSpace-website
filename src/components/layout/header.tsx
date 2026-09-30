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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    requestAnimationFrame(() => setHasMounted(true));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full',
        hasMounted && 'transition-[background-color,border-color,box-shadow] duration-300 ease-in-out',
        mobileMenuOpen
          ? 'bg-primary border-b border-white/10 shadow-md'
          : isScrolled
          ? 'bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-md'
          : 'bg-transparent border-b border-transparent shadow-none'
      )}
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center shrink-0">
            <Logo inverse size="md" />
          </div>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navigationConfig.mainNav.map((item) => {
              const isActive = item.href === ROUTES.HOME ? pathname === ROUTES.HOME : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1',
                    isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.title}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />}
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
            <Link href={ROUTES.COURSES} aria-label="Shopping Cart" className="p-1.5 text-white/90 hover:text-white">
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
              {mobileMenuOpen ? <X className="h-6 w-6 stroke-[2]" /> : <Menu className="h-6 w-6 stroke-[2]" />}
            </Button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-primary z-50 flex flex-col justify-between p-6 overflow-y-auto border-t border-white/10">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navigationConfig.mainNav.map((item) => {
                const isActive = item.href === ROUTES.HOME ? pathname === ROUTES.HOME : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-base font-semibold py-3 border-b border-white/10 flex items-center justify-between transition-colors',
                      isActive ? 'text-secondary' : 'text-white/90 hover:text-white'
                    )}
                  >
                    <span>{item.title}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-secondary" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 pb-2 border-t border-white/10 flex flex-col gap-3 shrink-0">
            <Link href={navigationConfig.authNav.login.href} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="lg" className="w-full text-white border-white/20 hover:bg-white/10 hover:text-white">
                {navigationConfig.authNav.login.title}
              </Button>
            </Link>
            <Link href={navigationConfig.authNav.register.href} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" size="lg" className="w-full font-semibold">
                {navigationConfig.authNav.register.title}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
