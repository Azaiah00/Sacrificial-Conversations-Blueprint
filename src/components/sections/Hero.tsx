"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("../3d/HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black z-0 opacity-50" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-60">
        <HeroScene />
      </div>

      {/* Red Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-red-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[128px] animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">
              Service Introduction · Capability Showcase
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-5 sm:mb-8 leading-tight tracking-tighter uppercase relative px-1">
            The Digital <br />
            <span className="text-red-600 relative inline-block">
              Paradigm Shift
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-2 bg-red-600/30 -z-10"
              />
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0">
            A forensic diagnostic and capability showcase: we demonstrate how <span className="text-white font-semibold">Sacrificial Conversations</span> can be positioned from an invisible archive toward a dominant digital authority—no guarantees, only infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-lg tracking-wide uppercase transition-all shadow-[0_0_30px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_-10px_rgba(220,38,38,0.7)] transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Start The Diagnostic
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Begin</span>
        <ArrowDown className="w-6 h-6 animate-bounce text-red-600" />
      </motion.div>
    </section>
  );
}
