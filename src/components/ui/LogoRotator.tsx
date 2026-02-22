"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Brand Identity logos: existing concept + two examples, shown in order repeatedly.
const LOGO_IMAGES = [
  "/assets/new-logo-concept.png",
  "/assets/logo-example-1.jpeg",
  "/assets/logo-example-2.jpeg",
];

const ROTATE_INTERVAL_MS = 4000;

interface LogoRotatorProps {
  onCurrentChange?: (src: string) => void;
  className?: string;
}

export default function LogoRotator({ onCurrentChange, className = "" }: LogoRotatorProps) {
  const [index, setIndex] = useState(0);
  const currentSrc = LOGO_IMAGES[index];

  useEffect(() => {
    onCurrentChange?.(currentSrc);
  }, [currentSrc, onCurrentChange]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % LOGO_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {LOGO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Logo ${i + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
