import Link from 'next/link';
import { Logo } from '@/components/common/logo';
import { Container } from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary text-white flex flex-col justify-between">
      <header className="py-6 border-b border-white/10">
        <Container>
          <Logo inverse />
        </Container>
      </header>

      <Container className="py-20 text-center flex flex-col items-center justify-center flex-1">
        <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-secondary mb-4 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          The page you are looking for doesn&apos;t exist
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto mb-8">
          Try to use a correct URL or go back to the homepage to start again.
        </p>
        <Link href={ROUTES.HOME}>
          <Button variant="secondary" size="lg">
            Back to Home
          </Button>
        </Link>
      </Container>

      <footer className="py-6 border-t border-white/10 text-center text-xs text-white/60">
        <Container>
          &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
        </Container>
      </footer>
    </main>
  );
}
