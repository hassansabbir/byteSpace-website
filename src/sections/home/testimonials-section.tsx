import * as React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import { TESTIMONIALS } from '@/data/testimonials';

const BLUR_FRAME =
  'data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoQAAkABUB8JQAAXJ2IRAAA/u+8C6s0RKPqfaMAAAA=';

export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/testimonials/Testimonials_Frame.webp"
          alt=""
          aria-hidden="true"
          fill
          placeholder="blur"
          blurDataURL={BLUR_FRAME}
          className="object-cover object-center w-full h-full pointer-events-none"
        />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-foreground leading-[1.15]">
              Discover What Our
              <span className="block mt-1">Community Is Saying</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-xs sm:text-sm md:text-[14.5px] text-muted-foreground leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
              Hear directly from those who have experienced the transformative journey of learning and
              creating on our platform. Explore testimonials that reflect the diverse perspectives of
              enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between p-6 sm:p-7 lg:p-8 bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5 sm:mt-6">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-none">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-primary mt-1.5 leading-none">
                    {testimonial.role}
                  </p>
                </div>

                <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-[14px] text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
