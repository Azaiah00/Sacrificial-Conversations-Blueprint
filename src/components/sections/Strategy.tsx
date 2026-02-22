"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Users, ChevronRight, FileText, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Title Engineering: Before vs After options for interactive display
const titleBefore = "Conversation with Joy Styles | Ep. 67";
const titleAfterOptions = [
  { label: "News", title: "Joy Styles Exposes NES Power Outage Failures & 2027 Mayoral Run | Ep. 67" },
  { label: "Community", title: "New Chinatown & Super Target Coming to Antioch? Joy Styles Reveals All" },
  { label: "Leadership", title: "\"Nashville Is Ready\": Why Joy Styles is Running for Mayor 2027 | Sacrificial Conversations" },
];

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
        content: "title-engineering-interactive"
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
  },
  {
    id: "tiktok",
    title: "TikTok Growth Engine",
    subtitle: "Hero-to-Micro & Hook Engineering",
    icon: Smartphone,
    description: "A complete supply chain for short-form video. We don't just edit—we engineer virality with hooks, pacing, and a proven AI tech stack.",
    modules: [
      {
        title: "Hero-to-Micro Supply Chain",
        content: (
          <div className="space-y-4 text-sm text-zinc-400">
            <p className="leading-relaxed">Long-form (Hero) content is mined for high-impact moments and repackaged into Shorts/TikToks (Micro). One episode becomes multiple clips, each with a single clear hook.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="bg-zinc-950 p-3 border-l-2 border-red-600">
                <span className="text-red-500 font-bold block mb-1">HERO</span>
                <span className="text-white">Full episode (e.g. Joy Styles Ep. 67)</span>
              </div>
              <div className="bg-zinc-950 p-3 border-l-2 border-zinc-600">
                <span className="text-zinc-500 font-bold block mb-1">EXTRACT</span>
                <span className="text-white">Timestamp clips (22:42, 47:52, 51:28)</span>
              </div>
              <div className="bg-zinc-950 p-3 border-l-2 border-zinc-600">
                <span className="text-zinc-500 font-bold block mb-1">MICRO</span>
                <span className="text-white">Vertical Shorts with hook + CTA</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Hook Engineering",
        content: (
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="border-l-2 border-red-600 pl-4">
              <span className="text-white font-bold">Specificity Effect:</span> &quot;Why Nashville Lost Power for 11 Days&quot; beats &quot;What Happened with the Storm.&quot;
            </li>
            <li className="border-l-2 border-zinc-700 pl-4">
              <span className="text-white font-bold">POV:</span> First-person or authority framing—&quot;Councilwoman Joy Styles Speaks Out&quot;—drives credibility.
            </li>
            <li className="border-l-2 border-zinc-700 pl-4">
              <span className="text-white font-bold">Timeframe Tension:</span> &quot;Coming to Antioch&quot; or &quot;2027 Mayoral Run&quot; creates urgency and curiosity.
            </li>
          </ul>
        )
      }
    ]
  }
];

// Interactive Before/After title selector for YouTube Title Engineering
function TitleEngineeringInteractive() {
  const [showAfter, setShowAfter] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${!showAfter ? "bg-red-600 border-red-600 text-white" : "border-zinc-700 text-zinc-500 hover:text-white"}`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${showAfter ? "bg-red-600 border-red-600 text-white" : "border-zinc-700 text-zinc-500 hover:text-white"}`}
        >
          After
        </button>
      </div>
      {!showAfter ? (
        <div className="bg-zinc-950 p-4 border border-zinc-700 rounded-lg">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 block">Current (Passive)</span>
          <p className="text-white font-bold text-lg">{titleBefore}</p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-3">
            {titleAfterOptions.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setSelectedOption(i)}
                className={`px-3 py-1.5 text-xs font-bold uppercase border transition-colors ${selectedOption === i ? "bg-red-600 border-red-600 text-white" : "border-zinc-700 text-zinc-500 hover:border-red-600/50"}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="bg-zinc-950 p-4 border border-red-900/30 rounded-lg">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">Recommended: {titleAfterOptions[selectedOption].label}</span>
            <p className="text-white font-bold text-lg">{titleAfterOptions[selectedOption].title}</p>
          </div>
        </>
      )}
    </div>
  );
}

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
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 bg-black">
      <div className="strategy-header mb-8 sm:mb-16 border-l-4 border-red-600 pl-4 sm:pl-6 opacity-0">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Phase II: The Solution</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">The Algorithmic <br />Imperative</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Navigation Rail: full-width on mobile, sticky sidebar on lg */}
        <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24 self-start">
          {strategies.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`w-full text-left p-4 sm:p-6 border-l-2 transition-all duration-300 group min-h-[48px] sm:min-h-0 ${
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
        <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden min-h-[280px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
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
                  <h3 className="text-xl sm:text-3xl font-bold text-white uppercase tracking-tight">{activeStrategy.title}</h3>
                  <p className="text-red-500 font-mono text-sm uppercase tracking-widest">{activeStrategy.subtitle}</p>
                </div>
              </div>

              <p className="text-base sm:text-xl text-zinc-300 mb-8 sm:mb-10 font-light leading-relaxed border-l-2 border-zinc-700 pl-4 sm:pl-6">
                {activeStrategy.description}
              </p>

              <div className="grid grid-cols-1 gap-6">
                {activeStrategy.modules.map((module, idx) => (
                  <div key={idx} className="bg-black p-6 border border-zinc-800 hover:border-red-900/50 transition-colors group">
                    <h4 className="text-white font-bold uppercase tracking-wide mb-4 group-hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-zinc-600" /> {module.title}
                    </h4>
                    {typeof module.content === "string" && module.content === "title-engineering-interactive"
                      ? <TitleEngineeringInteractive />
                      : module.content}
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
