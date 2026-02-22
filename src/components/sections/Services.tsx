"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Smartphone, Users, ArrowRight, BarChart3, PenTool, ChevronDown } from "lucide-react";
import TikTokAuditRadar from "../tiktok/TikTokAuditRadar";
import ContentMixChart from "../tiktok/ContentMixChart";
import ViralClipTimeline from "../tiktok/ViralClipTimeline";

const services = [
  {
    id: "youtube",
    title: "YouTube Newsroom",
    icon: Youtube,
    description: "We transform your channel from a passive archive into an active newsroom.",
    features: [
      "Title Engineering & Curiosity Gaps",
      "Thumbnail A/B Testing Infrastructure",
      "SEO Description Architecture",
      "Manual Captioning for Algorithm Indexing"
    ]
  },
  {
    id: "tiktok",
    title: "TikTok Growth Engine",
    icon: Smartphone,
    description: "A complete supply chain for short-form video. We don't just edit; we engineer virality.",
    features: [
      "Hero-to-Micro Content Extraction",
      "Hook Psychology (Specificity & POV)",
      "Dynamic Subtitling & Visual Pacing",
      "Community Management & Video Replies"
    ],
    interactive: true // Flag to show the deep dive module
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    icon: Users,
    description: "High-level guidance to ensure your content ecosystem scales sustainably.",
    features: [
      "Guest Affiliate Distribution Kits",
      "Content Calendar & Production Planning",
      "Cross-Platform Funnel Optimization",
      "Quarterly Growth & ROI Reporting"
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("audit");
  const [postsPerWeek, setPostsPerWeek] = useState(3);

  const calculateGrowth = (posts: number) => {
    let base = 2000;
    const growthRate = 1.1 + (posts * 0.05);
    let total = 0;
    for (let i = 0; i < 6; i++) {
      base = base * growthRate;
      total = base;
    }
    return Math.round(total).toLocaleString();
  };

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-black border-t border-zinc-900">
      <div className="mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Our Capabilities</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">Service Architecture</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-600/50 transition-colors group relative overflow-hidden ${service.interactive ? 'ring-2 ring-red-900/20' : ''}`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <service.icon className="w-24 h-24 text-red-600" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-red-600 transition-colors">
                <service.icon className="w-6 h-6 text-white group-hover:text-red-600 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed h-20">{service.description}</p>
              
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TikTok Deep Dive Module */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-1 block">Interactive Module</span>
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight">TikTok Growth Engine</h3>
            </div>
            <div className="flex space-x-1 bg-black p-1 rounded-lg border border-zinc-800">
              {['audit', 'strategy', 'execution'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
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

        <div className="p-8 md:p-12 min-h-[500px]">
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
                    We've analyzed the "Sacrificial Conversations" page against top-performing podcast accounts. 
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
                        <span className="text-white font-bold">SEO & Discoverability</span>
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
                    To fix the issues identified, we don't just "post more." We implement a rigorous content structure designed for retention and community building.
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
                  <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                    <h5 className="text-red-500 font-bold uppercase tracking-widest mb-4">Projected Impact</h5>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs text-zinc-500 uppercase mb-2">Posting Consistency</label>
                        <input 
                          type="range" 
                          min="1" 
                          max="7" 
                          value={postsPerWeek} 
                          onChange={(e) => setPostsPerWeek(parseInt(e.target.value))}
                          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                        />
                        <div className="flex justify-between text-xs text-zinc-400 mt-2">
                          <span>1 Post/Week</span>
                          <span className="text-white font-bold">{postsPerWeek} Posts/Week</span>
                          <span>Daily</span>
                        </div>
                      </div>
                      <div className="p-4 bg-black border border-zinc-800 rounded-lg text-center">
                        <span className="text-zinc-500 text-xs uppercase block mb-1">Proj. Monthly Views (Month 6)</span>
                        <span className="text-4xl font-mono text-green-500 font-bold">{calculateGrowth(postsPerWeek)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      "I have the editing skills, the strategic insight, and the drive to make Sacrificial Conversations a leader in the niche. Let's start building."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden text-center py-32 px-6 bg-red-600 mt-24"
      >
        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter">Partner With Us</h2>
          <p className="text-white/80 text-2xl mb-12 font-light max-w-2xl mx-auto">
            We don't just promise growth. We build the infrastructure that makes it inevitable.
          </p>
          <button className="bg-black text-white hover:bg-zinc-900 font-bold py-6 px-12 text-xl uppercase tracking-widest transition-all shadow-2xl hover:scale-105 border border-zinc-800">
            Initialize Partnership
          </button>
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs uppercase tracking-widest font-mono">
        <p>© 2026 Couture House Co.</p>
        <p>Confidential Service Blueprint // Sacrificial Conversations</p>
      </footer>
    </section>
  );
}
