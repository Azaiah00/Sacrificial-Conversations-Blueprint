"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Zap, Users, ChevronRight, FileText, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const strategies = [
  {
    id: "youtube",
    title: "YouTube Newsroom",
    subtitle: "Title Engineering & SEO",
    icon: Youtube,
    description: "We pivot your packaging from 'Podcast Episode' to 'Breaking Local News'. YouTube audiences click on conflict and exclusive insight.",
    modules: [
      {
        title: "Title Engineering",
        content: (
          <div className="space-y-4">
            <div className="bg-zinc-950 p-4 border border-red-900/30 rounded-lg">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">Option 1: News/Controversy</span>
              <p className="text-white font-bold text-lg">"Joy Styles Exposes NES Power Outage Failures & 2027 Mayoral Run | Ep. 67"</p>
            </div>
            <div className="bg-zinc-950 p-4 border border-red-900/30 rounded-lg">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">Option 2: Community Focused</span>
              <p className="text-white font-bold text-lg">"New Chinatown & Super Target Coming to Antioch? Joy Styles Reveals All"</p>
            </div>
            <div className="bg-zinc-950 p-4 border border-red-900/30 rounded-lg">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">Option 3: Leadership/Inspirational</span>
              <p className="text-white font-bold text-lg">"\"Nashville Is Ready\": Why Joy Styles is Running for Mayor 2027 | Sacrificial Conversations"</p>
            </div>
            <div className="bg-zinc-950 p-4 border border-red-900/30 rounded-lg">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">Option 4: The \"Question\" Hook</span>
              <p className="text-white font-bold text-lg">"Who is to Blame for the Nashville Ice Storm Blackout? Councilwoman Joy Styles Speaks Out"</p>
            </div>
          </div>
        )
      },
      {
        title: "SEO Description Architecture",
        content: (
          <div className="space-y-6 text-sm text-zinc-400">
            <div>
              <h5 className="text-white font-bold mb-2">01. The Hook & Summary</h5>
              <p className="italic border-l-2 border-red-600 pl-3">"In this explosive episode... we sit down with District 32 Councilwoman... Joy Styles. She gives us the exclusive scoop on what really went wrong during the recent Nashville ice storm..."</p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-2">02. Key Topics/Timestamps</h5>
              <ul className="space-y-1 font-mono text-xs">
                <li>0:00 - Intro: Joy Styles Returns!</li>
                <li>2:26 - ANNOUNCEMENT: Running for Nashville Mayor 2027</li>
                <li>22:00 - THE TRUTH: What happened with the Ice Storm & NES Power Outages?</li>
                <li>47:46 - Chinatown in Antioch: Food, Culture & Business</li>
                <li>51:28 - Super Target Coming to Century Farms!</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-2">03. Links & Call to Action</h5>
              <p className="mb-2">🗳️ Support Joy Styles for Mayor: [ActBlue Link]</p>
              <p>🎧 Listen to Sacrificial Conversations: [Spotify/Apple Links]</p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-2">04. Tags & Hashtags</h5>
              <p className="text-red-500">#NashvilleMayor2027 #JoyStyles #AntiochTN #NashvillePolitics</p>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "tiktok",
    title: "TikTok Growth Engine",
    subtitle: "Hero-to-Micro Supply Chain",
    icon: Smartphone,
    description: "The modern consumer does not search for podcasts; the podcast must intercept them. We treat your creative output as a highly engineered supply chain.",
    modules: [
      {
        title: "Hook Engineering",
        content: (
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-zinc-950 p-3 border-l-2 border-red-600">
              <p className="text-xs text-zinc-500 uppercase mb-1">The Specificity Effect</p>
              <p className="text-white text-sm">"If you are a Nashville creative tired of sacrificing your master ownership..."</p>
            </div>
            <div className="bg-zinc-950 p-3 border-l-2 border-zinc-700">
              <p className="text-xs text-zinc-500 uppercase mb-1">POV Framework</p>
              <p className="text-white text-sm">"POV: You finally stopped asking for a seat at the table and bought the building."</p>
            </div>
            <div className="bg-zinc-950 p-3 border-l-2 border-zinc-700">
              <p className="text-xs text-zinc-500 uppercase mb-1">Timeframe Tension</p>
              <p className="text-white text-sm">"He lost everything in 2024. What he built in the next 6 months will completely shock you."</p>
            </div>
          </div>
        )
      },
      {
        title: "AI Technology Stack",
        content: (
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-full border border-zinc-700">OpusClip (Extraction)</span>
            <span className="px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-full border border-zinc-700">Choppity (Nuance)</span>
            <span className="px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-full border border-zinc-700">Submagic (Visuals)</span>
            <span className="px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-full border border-zinc-700">CapCut Pro (Polish)</span>
          </div>
        )
      }
    ]
  },
  {
    id: "community",
    title: "Community Engineering",
    subtitle: "Omnichannel Ecosystem",
    icon: Users,
    description: "Transforming passive consumption into active algorithmic participation. We digitize your profound real-world synergy.",
    modules: [
      {
        title: "Engineered CTAs",
        content: (
          <p className="text-zinc-400 text-sm leading-relaxed">
            Instead of "Like and Subscribe," we use specific prompts: <span className="text-white italic">"What is one small action you can take this week to improve equity in Antioch? Let us know in the comments."</span> This drives comment velocity.
          </p>
        )
      },
      {
        title: "Affiliate Distribution Kits",
        content: (
          <p className="text-zinc-400 text-sm leading-relaxed">
            We provide guests like <span className="text-white">Joy Styles</span> with a pre-packaged digital kit: Raw YouTube link, 3 vertical Shorts, and custom thumbnails. Minimizing friction for them to share.
          </p>
        )
      }
    ]
  }
];

export default function Strategy() {
  const [activeId, setActiveId] = useState("youtube");
  const activeStrategy = strategies.find(s => s.id === activeId)!;
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".strategy-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".strategy-header",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-black">
      <div className="strategy-header mb-16 border-l-4 border-red-600 pl-6 opacity-0">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Phase II: The Solution</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">The Algorithmic <br />Imperative</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Rail */}
        <div className="lg:col-span-4 space-y-2 sticky top-24 self-start">
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

              <div className="grid grid-cols-1 gap-6">
                {activeStrategy.modules.map((module, idx) => (
                  <div key={idx} className="bg-black p-6 border border-zinc-800 hover:border-red-900/50 transition-colors group">
                    <h4 className="text-white font-bold uppercase tracking-wide mb-4 group-hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-zinc-600" /> {module.title}
                    </h4>
                    {module.content}
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
