import Image from 'next/image';
import { companyLogos } from '@/data/company-logos';

export function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      aria-label="Trusted by leading companies"
      className="w-full bg-[#F5F5F5] border-t border-[#E8E8E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <ul
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-20"
          role="list"
          aria-label="Partner logos"
        >
          {companyLogos.map((logo) => (
            <li key={logo.id} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                className="h-9 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-200 grayscale"
                sizes="(max-width: 640px) 120px, 160px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
