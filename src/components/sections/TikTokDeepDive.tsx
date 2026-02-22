"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TikTokAuditRadar from "../tiktok/TikTokAuditRadar";
import ContentMixChart from "../tiktok/ContentMixChart";
import ViralClipTimeline from "../tiktok/ViralClipTimeline";

export default function TikTokDeepDive() {
  const [activeTab, setActiveTab] = useState("audit");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-8 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-1 block">Interactive Module</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">TikTok Growth Engine</h3>
            </div>
            <div className="flex space-x-1 bg-black p-1 rounded-lg border border-zinc-800 w-full sm:w-auto">
              {['audit', 'strategy', 'execution'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
                    activeTab === tab
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'audit' && (
              <motion.div
                key="audit"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Current Channel Health</h4>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    We&apos;ve analyzed the &quot;Sacrificial Conversations&quot; page against top-performing podcast accounts.
                    While the source material is rich, the packaging on TikTok is limiting reach.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-zinc-900 border-l-4 border-red-600 rounded-r-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-white font-bold">Hook Quality</span>
                        <span className="text-red-500 font-mono">3/10</span>
                      </div>
                      <p className="text-xs text-zinc-500">First 3 seconds are often slow intros. Needs immediate disruption.</p>
                    </div>
                    <div className="p-4 bg-zinc-900 border-l-4 border-zinc-700 rounded-r-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-white font-bold">SEO &amp; Discoverability</span>
                        <span className="text-zinc-400 font-mono">4/10</span>
                      </div>
                      <p className="text-xs text-zinc-500">Captions lack keyword density. Hashtags are too generic.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black p-6 rounded-xl border border-zinc-800">
                  <TikTokAuditRadar />
                </div>
              </motion.div>
            )}

            {activeTab === 'strategy' && (
              <motion.div
                key="strategy"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="bg-black p-6 rounded-xl border border-zinc-800">
                  <ContentMixChart />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Optimal Content Mix</h4>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    To fix the issues identified, we don&apos;t just &quot;post more.&quot; We implement a rigorous content structure
                    designed for retention and community building.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      <span className="text-white font-bold">60% High-Value Clips</span>
                      <span className="text-zinc-500 text-sm ml-auto">Viral Engine</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white font-bold">20% Community Reply</span>
                      <span className="text-zinc-500 text-sm ml-auto">Loyalty</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
                      <span className="text-white font-bold">10% Trending/Skits</span>
                      <span className="text-zinc-500 text-sm ml-auto">Reach</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'execution' && (
              <motion.div
                key="execution"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Anatomy of a High-Retention Post</h4>
                  <ViralClipTimeline />
                </div>

                <div className="pt-12 border-t border-zinc-800">
                  <h4 className="text-2xl font-bold text-white mb-4 text-center">The Profile Grid Effect</h4>
                  <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
                    TikTok thumbnails are critical for your profile&apos;s overall aesthetic. A cohesive visual identity not only signals authority but captivates viewers the moment they visit your page, turning casual scrollers into binge-watchers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col items-center">
                      <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Standalone Thumbnail</span>
                      <div className="relative w-full aspect-[9/16] max-w-[300px] shadow-2xl rounded-lg overflow-hidden border border-zinc-800">
                        <Image 
                          src="/assets/unnamed.webp" 
                          alt="Standalone TikTok Thumbnail" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col items-center">
                      <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4">Visual Authority</span>
                      <div className="relative w-full aspect-[9/16] max-w-[300px] shadow-2xl rounded-lg overflow-hidden border border-red-900/30">
                        <Image 
                          src="/assets/unnamed.png" 
                          alt="Optimized TikTok Profile Grid Example" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
