'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CourseVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

export function CourseVideoPlayer({
  videoSrc,
  posterSrc,
  className,
}: CourseVideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;
    try {
      setHasStarted(true);
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={cn(
        'group relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-white/20',
        className
      )}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        controls={hasStarted}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setHasStarted(false);
        }}
        className="w-full h-full object-cover block"
      />

      {!hasStarted && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 z-10 cursor-pointer"
        >
          <Image
            src={posterSrc}
            alt="Course preview"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            aria-label="Play course preview video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_10px_35px_rgba(0,0,0,0.35)] cursor-pointer z-20 group-hover:scale-110"
          >
            <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-primary text-primary ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}
