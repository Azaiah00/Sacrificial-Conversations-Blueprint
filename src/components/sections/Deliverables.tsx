"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, Download } from "lucide-react";

const deliverables = [
  { id: 1, title: "The New Standard", subtitle: "Banner Architecture", type: "Branding", image: "/assets/new-banner-concept.png", colSpan: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "High-Emotion Trigger", subtitle: "Thumbnail Variant A", type: "Packaging", image: "/assets/thumbnail-concepts.png", colSpan: "" },
  { id: 3, title: "Social Disruptor", subtitle: "Instagram/FB Ad", type: "Marketing", image: "/assets/social-ad-concept.png", colSpan: "" },
  { id: 4, title: "Vertical Velocity", subtitle: "Shorts Template", type: "Production", image: "/assets/shorts-mockup.png", colSpan: "" },
  { id: 5, title: "Cinematic Poster", subtitle: "Video Trailer", type: "Advertising", image: "/assets/video-poster.png", colSpan: "" },
  { id: 6, title: "Event Activation", subtitle: "Flyer Design", type: "Print/Digital", image: "/assets/marketing-flyer.png", colSpan: "" },
  { id: 7, title: "Brand Identity", subtitle: "Logo System", type: "Branding", image: "/assets/new-logo-concept.png", colSpan: "" },
];

export default function Deliverables() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 border-b border-zinc-800 pb-6 sm:pb-8">
        <div>
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Phase III: The Execution</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">Visual Authority <br />Architecture</h2>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-1 auto-rows-[200px] sm:auto-rows-[250px]">
        {deliverables.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`relative group cursor-pointer overflow-hidden bg-black border border-zinc-900 ${item.colSpan}`}
            onClick={() => setSelectedImage(item.image)}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{item.type}</span>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-mono group-hover:text-zinc-300 transition-colors">{item.subtitle}</p>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-red-600 p-2 rounded-none">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors group">
            <X className="w-10 h-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="relative max-w-7xl w-full max-h-[85vh] aspect-video border border-zinc-800 bg-zinc-900" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 flex justify-between items-center border-t border-zinc-800">
              <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">High-Resolution Preview</span>
              <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
                <Download className="w-4 h-4" /> Download Asset
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
