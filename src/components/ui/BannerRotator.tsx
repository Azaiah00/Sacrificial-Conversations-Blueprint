"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BANNER_IMAGES = [
  "/assets/yt-banner-1.jpeg",
  "/assets/yt-banner-2.jpeg",
  "/assets/yt-banner-3.jpeg",
  "/assets/yt-banner-4.jpeg",
];

const ROTATE_INTERVAL_MS = 4000;

interface BannerRotatorProps {
  onCurrentChange?: (src: string) => void;
  className?: string;
}

export default function BannerRotator({ onCurrentChange, className = "" }: BannerRotatorProps) {
  const [index, setIndex] = useState(0);
  const currentSrc = BANNER_IMAGES[index];

  useEffect(() => {
    onCurrentChange?.(currentSrc);
  }, [currentSrc, onCurrentChange]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % BANNER_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {BANNER_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Banner ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
