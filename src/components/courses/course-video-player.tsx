'use client';

import * as React from 'react';
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

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div
      className={cn(
        'group relative w-full aspect-[16/10] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-white/20',
        className
      )}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        controls={isPlaying}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover block"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlayToggle}
          aria-label="Play course preview video"
          className="absolute inset-0 m-auto h-18 w-18 sm:h-20 sm:w-20 md:h-22 md:w-22 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_10px_35px_rgba(0,0,0,0.3)] cursor-pointer z-10 border border-white/40 group-hover:bg-white/50"
        >
          <Play className="h-8 w-8 sm:h-9 sm:w-9 fill-white text-white ml-1 drop-shadow-sm" />
        </button>
      )}
    </div>
  );
}
