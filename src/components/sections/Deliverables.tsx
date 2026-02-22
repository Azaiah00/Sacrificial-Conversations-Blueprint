"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import ShortsCarousel, { SHORTS_LIST, type ShortItem } from "@/components/ui/ShortsCarousel";
import BannerRotator from "@/components/ui/BannerRotator";
import LogoRotator from "@/components/ui/LogoRotator";

const deliverables = [
  { id: 1, title: "The New Standard", subtitle: "Banner Architecture", type: "Branding", image: "/assets/new-banner-concept.png", colSpan: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "High-Emotion Trigger", subtitle: "Thumbnail Variant A", type: "Packaging", image: "/assets/high-emotion-trigger-sc-thumbail-variation.jpeg", colSpan: "" },
  { id: 3, title: "Social Disruptor", subtitle: "Instagram/FB Ad", type: "Marketing", image: "/assets/social-disruptor.jpeg", colSpan: "" },
  { id: 4, title: "Vertical Velocity", subtitle: "Shorts Template", type: "Production", image: "/assets/shorts-mockup.png", colSpan: "md:row-span-2" },
  { id: 5, title: "Video trailer", subtitle: "Video Trailer", type: "Advertising", image: "/assets/video-poster.png", video: "/assets/demo-SC-intro-vid.mp4", colSpan: "md:row-span-2" },
  { id: 6, title: "Event Activation", subtitle: "Flyer Design", type: "Print/Digital", image: "/assets/event-activation.jpeg", colSpan: "" },
  { id: 7, title: "Brand Identity", subtitle: "Logo System", type: "Branding", image: "/assets/new-logo-concept.png", colSpan: "" },
];

export default function Deliverables() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentBannerImage, setCurrentBannerImage] = useState("/assets/yt-banner-1.jpeg");
  const [currentLogoImage, setCurrentLogoImage] = useState("/assets/new-logo-concept.png");
  const [selectedShort, setSelectedShort] = useState<ShortItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-16 border-b border-zinc-800 pb-4 sm:pb-8">
        <div>
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Phase III: The Execution</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">Visual Authority <br />Architecture</h2>
        </div>
        <div className="text-right mt-8 md:mt-0">
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-mono">
            Status: <span className="text-green-500">Ready for Deployment</span>
          </p>
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-mono mt-1">
            Assets Generated: 07
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-1 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]">
        {deliverables.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`relative group cursor-pointer overflow-hidden bg-black border border-zinc-900 ${item.colSpan} ${item.id === 4 ? "flex flex-col items-center justify-start p-0" : ""} ${item.id === 5 ? "flex flex-col items-center justify-center p-2 sm:p-3" : ""}`}
            onClick={(e) => {
              if (item.id === 4) return;
              if (item.id === 5 && "video" in item && item.video) {
                setSelectedVideo(item.video);
                return;
              }
              if (item.id === 1) setSelectedImage(currentBannerImage);
              else if (item.id === 7) setSelectedImage(currentLogoImage);
              else setSelectedImage(item.image);
            }}
          >
            {item.id === 1 ? (
              <BannerRotator
                onCurrentChange={setCurrentBannerImage}
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transition-transform duration-700"
              />
            ) : item.id === 7 ? (
              <LogoRotator
                onCurrentChange={setCurrentLogoImage}
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transition-transform duration-700"
              />
            ) : item.id === 4 ? (
              <div className="w-full h-full min-h-[200px] sm:min-h-[250px] flex flex-col items-center justify-center p-2 sm:p-3 pointer-events-none">
                <div className="pointer-events-auto w-full h-full min-h-0 flex flex-col items-center">
                  <ShortsCarousel embedded onShortClick={setSelectedShort} />
                </div>
              </div>
            ) : item.id === 5 && "video" in item && item.video ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[180px] sm:max-w-[220px] aspect-[9/16] overflow-hidden bg-black">
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                </div>
              </div>
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none" />
            
            {item.id !== 4 && (
              <>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 sm:mb-2 block">{item.type}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide mb-0.5 sm:mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-mono group-hover:text-zinc-300 transition-colors">{item.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 p-2.5 sm:p-2 rounded-none min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </>
            )}
            {item.id === 4 && (
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] block">{item.type}</span>
                <h3 className="text-white font-bold text-sm sm:text-xl uppercase tracking-wide">{item.title}</h3>
                <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-mono">{item.subtitle}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox for images */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4" onClick={() => setSelectedImage(null)}>
          <button type="button" className="absolute top-4 right-4 sm:top-8 sm:right-8 text-zinc-500 hover:text-white transition-colors group z-10 min-w-[44px] min-h-[44px] flex items-center justify-center p-2" onClick={() => setSelectedImage(null)} aria-label="Close">
            <X className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="relative max-w-7xl w-full max-h-[85vh] aspect-video border border-zinc-800 bg-zinc-900" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 border-t border-zinc-800">
              <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Preview</span>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Shorts modal: 9:16 video, prev/next arrows to view all one by one */}
      {selectedShort && (() => {
        const currentIndex = SHORTS_LIST.findIndex((s) => s.id === selectedShort.id);
        const hasPrev = currentIndex > 0;
        const hasNext = currentIndex < SHORTS_LIST.length - 1 && currentIndex >= 0;
        return (
          <div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-0 sm:p-4"
            onClick={() => setSelectedShort(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 p-2 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-white transition-colors"
              onClick={() => setSelectedShort(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Previous short */}
            {hasPrev && (
              <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedShort(SHORTS_LIST[currentIndex - 1]);
                }}
                aria-label="Previous short"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}

            {/* Next short */}
            {hasNext && (
              <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedShort(SHORTS_LIST[currentIndex + 1]);
                }}
                aria-label="Next short"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}

            <div
              className="w-full h-full sm:h-auto sm:max-h-[90vh] flex flex-col items-center justify-center"
              style={{ aspectRatio: "9/16", maxWidth: "min(100vw, calc(90vh * 9 / 16))" }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={selectedShort.id}
                src={selectedShort.src}
                className="w-full h-full object-contain bg-black rounded-none sm:rounded-xl border-0 sm:border border-zinc-800"
                controls
                autoPlay
                playsInline
                muted={false}
              />
              <p className="text-white text-xs sm:text-sm font-mono uppercase tracking-widest mt-3 px-4 text-center line-clamp-2">
                {selectedShort.label}
              </p>
              <p className="text-zinc-500 text-[10px] sm:text-xs font-mono mt-1">
                {currentIndex + 1} / {SHORTS_LIST.length}
              </p>
            </div>
          </div>
        );
      })()}

      {/* Fullscreen Video trailer modal: 9:16, plays when cell is clicked */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-0 sm:p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 p-2 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-white transition-colors"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <div
            className="w-full h-full sm:h-auto sm:max-h-[90vh] flex flex-col items-center justify-center"
            style={{ aspectRatio: "9/16", maxWidth: "min(100vw, calc(90vh * 9 / 16))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              className="w-full h-full object-contain bg-black rounded-none sm:rounded-xl border-0 sm:border border-zinc-800"
              controls
              autoPlay
              playsInline
              muted={false}
            />
          </div>
        </div>
      )}
    </section>
  );
}
