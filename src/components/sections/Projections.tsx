"use client";

import { motion } from "framer-motion";
import GrowthChart from "../charts/LineChart";
import { TrendingUp, BarChart3, Target } from "lucide-react";

export default function Projections() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Promise</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-8">Projected Growth <br />Trajectory</h2>
          <p className="text-zinc-400 text-xl leading-relaxed font-light mb-8">
            By executing the "Hero-to-Micro" strategy and optimizing metadata, we project a <span className="text-white font-semibold">350% increase</span> in organic reach within the first 6 months.
          </p>
          
          <div className="flex items-center gap-8">
            <div>
              <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Current Trend</span>
              <span className="text-2xl font-mono text-zinc-400">Flatline</span>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Projected ROI</span>
              <span className="text-4xl font-mono text-green-500 font-bold">+350%</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-zinc-800 p-8 relative">
          <div className="absolute top-0 right-0 p-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-500 uppercase">Live Projection</span>
          </div>
          <GrowthChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-zinc-900/50 p-8 border-t-2 border-red-600">
          <Target className="w-8 h-8 text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">10k Subscribers</h3>
          <p className="text-zinc-500 text-sm uppercase tracking-widest">Q3 Target</p>
        </div>
        <div className="bg-zinc-900/50 p-8 border-t-2 border-zinc-700">
          <BarChart3 className="w-8 h-8 text-white mb-4" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">50k Monthly Views</h3>
          <p className="text-zinc-500 text-sm uppercase tracking-widest">Q4 Target</p>
        </div>
        <div className="bg-zinc-900/50 p-8 border-t-2 border-zinc-700">
          <TrendingUp className="w-8 h-8 text-white mb-4" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Top 5% Authority</h3>
          <p className="text-zinc-500 text-sm uppercase tracking-widest">Niche Dominance</p>
        </div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden text-center py-32 px-6 bg-red-600"
      >
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter">Ready to Elevate?</h2>
          <p className="text-white/80 text-2xl mb-12 font-light max-w-2xl mx-auto">
            The content is there. The heart is there. Now let's get the audience there.
          </p>
          <button className="bg-black text-white hover:bg-zinc-900 font-bold py-6 px-12 text-xl uppercase tracking-widest transition-all shadow-2xl hover:scale-105 border border-zinc-800">
            Initialize Partnership
          </button>
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs uppercase tracking-widest font-mono">
        <p>© 2026 Couture House Co.</p>
        <p>Confidential Strategy Document // Sacrificial Conversations</p>
      </footer>
    </section>
  );
}
