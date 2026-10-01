'use client';

import * as React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/common/container';
import { MotionViewport } from '@/components/animations/motion-viewport';
import { GROWTH_STATS, CREATOR_BENEFITS } from '@/data/ads';

const BLUR_OVERLAY =
  'data:image/webp;base64,UklGRhYBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSJYAAAANuS5E9D80cCRJUu38L2a6/wVlM7PuUBuyO9oTTLT8B67Wj5iACdi/tOXJjVMXHq3b9LdqDTw4o6zIfEIC7iGMzWe5t8hqwv+DnKGVgyvDraF1SByQq1cb5FYJUSqdwXJvAUWIaoUSABH9MijiQ/E1UCXrjQjxEEWAIDIK7wpRZiBKeCukDJEBlEKBIryNEqssPgxNYQBWUDggWgAAABACAJ0BKhAAEAAFQHwlsAJ0ME3BCJhv0AAA/sTSyQlWDc+PHTOXQYRcsAktMSYW4GuFtvEfhv8h/hBq/PZlAtjzPpLLhkG8/waLN0K/b+1Z2yfDmKSHhDAAAA==';

const BLUR_TOP_RIGHT =
  'data:image/webp;base64,UklGRhoBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSJUAAAABgFvb1rLoft+Pu8cOubtFtKAdEHroIbHTAFThMPpPARO5Ze5uLUTEBBTefz7Bz81f7sl/HnW02P3Ti8syv9T+5TVhGx+X//Jj91/9f7WBzN7+L2+TZZYCGP7y/n4ZkxIwV39o2RUUqGze/nCQi+uFBJC4F7ssy7KjoEFKAVCJ0RMKhUIBk4TBd8KTqb5LGPxK6HcCAABWUDggXgAAANABAJ0BKhAAEAAFQHwlkAACOto8J5+gAPaYCV6YYJ9/oFQwhQitkFg0iugmmx5pJD6gxu78pwg82CfcK9QYK1egVfDcmB98Z2SyeJ8Z4koeNcV4p1F7q+1T/BQAAAA=';

const BLUR_BOTTOM_LEFT =
  'data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAADAAADwAAQUxQSKAAAAABgGNt2zHnGRuVXXmmnAlLZwWs3Ka1UdsbsN1lDanM0nae4Js9RMQE4L9VDuHlw8PDA/c9kn8Uj2glAKYWF3dJntS35ANDk33FJG/2LrMB8nWMJD+2Vf/EjwkpUFaxJ/jMVAKQPwtYZ5AAORRf7KwBnSnIb6A8xff3E6BZ+fc0WxvRAJJkb19/f19R3KIAoLAHQqGQ36yUAIBcrdFoVDIAVlA4IFwAAADwAQCdASoNABAABUB8JbACw7EO/BgEVWAA/rk5LRIK9keCqeCngMHQq/vohKm9DQmlqEy9VWvcW1aTN6G7j6CXpYlBhH3bTPrcfyU6xaE//UnLuRumNYpDNQAAAA==';

export function AdsSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/ads/adsSection-bg-gradient-overlayer.webp"
          alt=""
          aria-hidden="true"
          fill
          placeholder="blur"
          blurDataURL={BLUR_OVERLAY}
          className="object-cover object-center w-full h-full pointer-events-none"
        />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <MotionViewport direction="right" distance={40}>
            <div className="flex flex-col justify-center max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-foreground leading-[1.15]">
                Your Path to Professional
                <span className="block mt-1">Growth Starts Here!</span>
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className="flex items-center gap-8 sm:gap-12 mt-7 sm:mt-9">
                {GROWTH_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionViewport>

          <MotionViewport direction="left" distance={40} delay={0.15}>
            <div className="relative w-full max-w-[460px] lg:max-w-[490px] mx-auto lg:mr-0 flex items-center justify-center">
              <Image
                src="/images/ads/top-right-image.webp"
                alt="Student learning with Figma course"
                width={700}
                height={694}
                placeholder="blur"
                blurDataURL={BLUR_TOP_RIGHT}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionViewport>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <MotionViewport direction="right" distance={40} className="order-2 lg:order-1">
            <div className="relative w-full max-w-[420px] lg:max-w-[450px] mx-auto lg:ml-0 flex items-center justify-center">
              <Image
                src="/images/ads/bottom-left-image.webp"
                alt="Creator managing online courses"
                width={600}
                height={736}
                placeholder="blur"
                blurDataURL={BLUR_BOTTOM_LEFT}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionViewport>

          <MotionViewport direction="left" distance={40} delay={0.15} className="order-1 lg:order-2">
            <div className="flex flex-col justify-center max-w-xl lg:pl-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-foreground leading-[1.15]">
                Create &amp; Manage
                <span className="block mt-1">Courses Easily.</span>
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">ByteSpace</span> supports individuals
                or entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="mt-6 sm:mt-8 space-y-3.5">
                {CREATOR_BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionViewport>
        </div>
      </Container>
    </section>
  );
}
