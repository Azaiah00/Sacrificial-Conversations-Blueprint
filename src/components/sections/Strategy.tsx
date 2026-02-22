"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Search, Zap, Users, ChevronRight } from "lucide-react";

const strategies = [
  {
    id: "packaging",
    title: "Visual Packaging",
    subtitle: "The 0.3-Second Rule",
    icon: Eye,
    description: "The thumbnail is the primary psychological trigger. If it fails, the content is invisible.",
    tactics: [
      { title: "High-Emotion Faces", desc: "Faces must occupy 40-50% of the canvas. Expressions must be intense (shock, joy, concern) to trigger mirror neurons." },
      { title: "Contrast Theory", desc: "Backgrounds must be manipulated to force the subject to 'pop'. No dark-on-dark." },
      { title: "Minimalist Typography", desc: "Max 3-5 words. Sans-serif, heavy weight. Never duplicate the title." },
      { title: "A/B Testing Infrastructure", desc: "Simultaneous deployment of 3 thumbnail variations per episode to let data dictate design." }
    ]
  },
  {
    id: "seo",
    title: "Semantic Indexing",
    subtitle: "SEO & Metadata Architecture",
    icon: Search,
    description: "We must feed the algorithm exactly what it needs to categorize the content perfectly.",
    tactics: [
      { title: "The Curiosity Gap", desc: "Titles must invoke a question. 'Ep 63' is dead. Use 'The Hidden Truth About City Equity'." },
      { title: "Timestamp Navigation", desc: "Non-negotiable. Increases AVD and indexes as individual Google search results." },
      { title: "Manual Captions", desc: "A dense text file for the algorithm to read. Auto-captions are insufficient for complex topics." },
      { title: "Hashtag Clusters", desc: "3-5 hyper-relevant tags (e.g., #NashvillePolitics) to avoid spam penalties." }
    ]
  },
  {
    id: "shorts",
    title: "Short-Form Velocity",
    subtitle: "The Hero-to-Micro Engine",
    icon: Zap,
    description: "Shorts are the top-of-funnel discovery engine. We will implement a 'Hero-to-Micro' workflow.",
    tactics: [
      { title: "5 Shorts Per Episode", desc: "Extract 3-5 distinct micro-narratives from every long-form recording." },
      { title: "Vertical Engineering", desc: "Stacked split-screen for dialogue. Active speaker tracking. No lazy cropping." },
      { title: "Dynamic Captioning", desc: "Bold, high-contrast, flashing captions to lock attention in muted environments." },
      { title: "The Conversion Bridge", desc: "Hard-coded 'Related Video' links funneling viewers back to the long-form episode." }
    ]
  },
  {
    id: "community",
    title: "Community Engineering",
    subtitle: "Omnichannel Ecosystem",
    icon: Users,
    description: "Transforming passive consumption into active algorithmic participation.",
    tactics: [
      { title: "Engineered CTAs", desc: "Specific prompts ('What is one action you can take?') to drive comment velocity." },
      { title: "Community Tab Weaponization", desc: "Daily polls and behind-the-scenes content to maintain relevance between uploads." },
      { title: "Affiliate Distribution Kits", desc: "Pre-packaged assets for guests (Joy Styles, T.R.A.N.E.) to share effortlessly." },
      { title: "Live Integration", desc: "Leveraging UMC events for digital premieres to merge physical and digital audiences." }
    ]
  }
];

export default function Strategy() {
  const [activeId, setActiveId] = useState("packaging");
  const activeStrategy = strategies.find(s => s.id === activeId)!;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-black">
      <div className="mb-16 border-l-4 border-red-600 pl-6">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Phase II: The Solution</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">The Algorithmic <br />Imperative</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Rail */}
        <div className="lg:col-span-4 space-y-2">
          {strategies.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`w-full text-left p-6 border-l-2 transition-all duration-300 group ${
                activeId === s.id 
                  ? "bg-zinc-900 border-red-600" 
                  : "bg-black border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-600"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <s.icon className={`w-6 h-6 ${activeId === s.id ? "text-red-600" : "text-zinc-500 group-hover:text-white"}`} />
                {activeId === s.id && <ChevronRight className="w-4 h-4 text-red-600 animate-pulse" />}
              </div>
              <h3 className={`text-lg font-bold uppercase tracking-wide mb-1 ${activeId === s.id ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
                {s.title}
              </h3>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{s.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 p-8 md:p-12 relative overflow-hidden min-h-[600px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px]" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStrategy.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-6">
                <div className="p-3 bg-black border border-zinc-800 rounded-none">
                  <activeStrategy.icon className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tight">{activeStrategy.title}</h3>
                  <p className="text-red-500 font-mono text-sm uppercase tracking-widest">{activeStrategy.subtitle}</p>
                </div>
              </div>

              <p className="text-xl text-zinc-300 mb-10 font-light leading-relaxed border-l-2 border-zinc-700 pl-6">
                {activeStrategy.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeStrategy.tactics.map((tactic, idx) => (
                  <div key={idx} className="bg-black p-6 border border-zinc-800 hover:border-red-900/50 transition-colors group">
                    <h4 className="text-white font-bold uppercase tracking-wide mb-3 group-hover:text-red-500 transition-colors text-sm">
                      <span className="text-zinc-600 mr-2">0{idx + 1}.</span> {tactic.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {tactic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
