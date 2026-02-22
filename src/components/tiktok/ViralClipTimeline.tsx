"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const segments = [
  { 
    id: "hook", 
    label: "HOOK (0-3s)", 
    width: "15%", 
    color: "bg-red-600", 
    hoverColor: "hover:bg-red-500",
    title: "The Hook (0-3 Seconds)",
    desc: "Stop starting with 'Welcome back'. Start with the most controversial, shocking, or high-value sentence. Visuals must change every 1 second here."
  },
  { 
    id: "context", 
    label: "CONTEXT", 
    width: "25%", 
    color: "bg-zinc-700", 
    hoverColor: "hover:bg-zinc-600",
    title: "Context / Setup",
    desc: "Briefly explain who is talking. Use a lower-third text graphic: 'POV: Struggling with Faith' to anchor the viewer immediately."
  },
  { 
    id: "value", 
    label: "CORE VALUE", 
    width: "40%", 
    color: "bg-white", 
    textColor: "text-black",
    hoverColor: "hover:bg-zinc-200",
    title: "Core Value / Story",
    desc: "The 'meat' of the clip. Use B-roll overlays to illustrate points. Zoom in slightly on emotional beats to maintain retention."
  },
  { 
    id: "cta", 
    label: "CTA", 
    width: "20%", 
    color: "bg-green-600", 
    hoverColor: "hover:bg-green-500",
    title: "Call To Action (CTA)",
    desc: "Don't just say 'subscribe'. Give a reason. 'If you need to hear more truth like this, check the link in bio.' Point visually to the button."
  }
];

export default function ViralClipTimeline() {
  const [activeSegment, setActiveSegment] = useState(segments[0]);

  return (
    <div className="w-full">
      {/* Desktop: horizontal bar */}
      <div className="hidden sm:flex w-full h-16 rounded-lg overflow-hidden mb-6 shadow-lg border border-zinc-800">
        {segments.map((seg) => (
          <div
            key={seg.id}
            style={{ width: seg.width }}
            className={`${seg.color} ${seg.textColor || 'text-white'} ${seg.hoverColor} flex items-center justify-center cursor-pointer transition-colors font-bold text-xs sm:text-sm tracking-widest`}
            onMouseEnter={() => setActiveSegment(seg)}
            onClick={() => setActiveSegment(seg)}
          >
            {seg.label}
          </div>
        ))}
      </div>

      {/* Mobile: stacked buttons */}
      <div className="sm:hidden grid grid-cols-2 gap-2 mb-6">
        {segments.map((seg) => (
          <button
            key={seg.id}
            onClick={() => setActiveSegment(seg)}
            className={`${activeSegment.id === seg.id ? seg.color : 'bg-zinc-800'} ${activeSegment.id === seg.id ? (seg.textColor || 'text-white') : 'text-zinc-400'} p-3 text-xs font-bold uppercase tracking-widest transition-colors rounded-md border border-zinc-700`}
          >
            {seg.label}
          </button>
        ))}
      </div>

      <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl border border-zinc-800 min-h-[120px] sm:min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className={`font-bold text-lg mb-2 uppercase tracking-wide ${activeSegment.id === 'hook' ? 'text-red-500' : activeSegment.id === 'cta' ? 'text-green-500' : 'text-white'}`}>
              {activeSegment.title}
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {activeSegment.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
