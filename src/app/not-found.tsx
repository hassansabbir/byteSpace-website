import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NotFoundHero } from '@/sections/not-found/not-found-hero';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <NotFoundHero />
      </main>
      <Footer />
    </div>
  );
}
