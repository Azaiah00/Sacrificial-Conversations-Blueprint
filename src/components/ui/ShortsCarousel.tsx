"use client";

import { useState, useRef, useEffect } from "react";

export const SHORTS_LIST = [
  { id: 1, src: "/assets/shorts/crisis-leadership.mp4", label: "Crisis Leadership: What Nashville Needs NOW!" },
  { id: 2, src: "/assets/shorts/uniting-nashville.mp4", label: "Uniting Nashville: A Vision for Inclusivity and Growth" },
  { id: 3, src: "/assets/shorts/nashville-mayor.mp4", label: "Nashville Mayor: 4 Years of Real Change & Engagement" },
  { id: 4, src: "/assets/shorts/black-woman-mayor.mp4", label: "Black Woman for Nashville Mayor: Leadership for a New Season" },
  { id: 5, src: "/assets/shorts/nashville-christmas-parade.mp4", label: "Nashville Christmas Parade: Bringing Back the Magic!" },
];

export type ShortItem = (typeof SHORTS_LIST)[number];

interface ShortsCarouselProps {
  /** Embedded inside a 9:16 viewport (e.g. Vertical Velocity cell). Click opens fullscreen via onShortClick. */
  embedded?: boolean;
  onShortClick?: (short: ShortItem) => void;
}

export default function ShortsCarousel({ embedded = false, onShortClick }: ShortsCarouselProps) {
  const [paused, setPaused] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedded || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (video) {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
              video.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const items = containerRef.current.querySelectorAll(".short-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [embedded]);

  const handleClick = (item: ShortItem) => {
    if (embedded && onShortClick) {
      onShortClick(item);
      return;
    }
    setActiveId(activeId === item.id ? null : item.id);
  };

  return (
    <div className={embedded ? "w-full h-full flex flex-col" : "w-full"}>
      {!embedded && (
        <>
          <h3 className="text-white font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            YouTube Shorts Examples
          </h3>
          <p className="text-zinc-500 text-sm mb-6">
            Hover to pause • Click a video to watch. Scroll resumes when you leave.
          </p>
        </>
      )}

      <div
        ref={containerRef}
        className={`relative rounded-xl border border-zinc-800 bg-black ${
          embedded 
            ? "flex-1 w-full max-w-[280px] sm:max-w-[320px] mx-auto overflow-y-auto snap-y snap-mandatory scrollbar-hide" 
            : "h-[420px] sm:h-[500px] overflow-hidden"
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setActiveId(null); }}
      >
        <div
          className={embedded ? "flex flex-col min-h-full" : "absolute left-0 right-0 top-0 flex flex-col"}
          style={!embedded ? {
            height: "auto",
            animation: "scrollUp 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          } : undefined}
        >
          {([...SHORTS_LIST, ...(embedded ? [] : SHORTS_LIST)]).map((item, index) => (
            <div
              key={`short-${item.id}-${index}`}
              className={`short-item flex-shrink-0 overflow-hidden bg-zinc-900 cursor-pointer border-b border-zinc-800 last:border-b-0 group w-full ${
                embedded ? "h-full snap-start" : ""
              }`}
              style={embedded ? { height: "100%", minHeight: "100%" } : undefined}
              onClick={() => handleClick(item)}
            >
              <div className={`relative w-full h-full bg-black ${embedded ? "" : "aspect-[9/16] max-h-[280px] sm:max-h-[320px] mx-auto"}`}>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay={!embedded && activeId === item.id}
                  onMouseEnter={(e) => {
                    if (!embedded) e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    if (!embedded) {
                      e.currentTarget.pause();
                      if (activeId !== item.id) e.currentTarget.currentTime = 0;
                    }
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide line-clamp-2">{item.label}</p>
                </div>
                {embedded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-mono uppercase bg-red-600/90 px-3 py-1.5 transition-opacity">
                      Tap to expand
                    </span>
                  </div>
                )}
                {!embedded && activeId === item.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="text-red-600 text-xs font-mono uppercase">Playing</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
      </div>
    </div>
  );
}
