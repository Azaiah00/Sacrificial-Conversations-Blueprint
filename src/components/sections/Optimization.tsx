"use client";

import Image from "next/image";
import { Zap, Shield, Target, TrendingUp } from "lucide-react";

const valuePillars = [
  {
    id: 1,
    title: "Retention Engineering",
    icon: Zap,
    description: "We don't just edit; we manipulate the viewer's dopamine loop to ensure they stay until the CTA.",
    metrics: ["90%+ Retention Rate", "High-Velocity Cuts"]
  },
  {
    id: 2,
    title: "Algorithmic Indexing",
    icon: Target,
    description: "Every title and description is architected to be indexed by YouTube's recommendation engine.",
    metrics: ["SEO-Optimized Metadata", "Curiosity Gap Titles"]
  },
  {
    id: 3,
    title: "Brand Sovereignty",
    icon: Shield,
    description: "Protecting the integrity of your message while maximizing its reach across all digital frontiers.",
    metrics: ["Consistent Visual ID", "Quality Over Quantity"]
  },
  {
    id: 4,
    title: "Conversion Funnels",
    icon: TrendingUp,
    description: "Turning passive viewers into active community members and subscribers through strategic bridges.",
    metrics: ["High CTR Thumbnails", "Shorts-to-Longform Funnel"]
  }
];

export default function Optimization() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Value Proposition / The Couture House Edge */}
        <div className="bg-black p-6 sm:p-10 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[64px]" />
          
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-2 block">Our Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">The Couture House <br />Value Engine</h2>
            </div>
            <div className="hidden sm:block">
               <div className="relative w-12 h-12 opacity-80">
                 <Image 
                   src="/assets/silvre-logo.png" 
                   alt="Couture House Logo" 
                   fill 
                   className="object-contain"
                 />
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {valuePillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-red-600/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black border border-zinc-800 group-hover:border-red-600 transition-colors">
                    <pillar.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide mb-2 group-hover:text-red-500 transition-colors">{pillar.id}. {pillar.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{pillar.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.metrics.map((metric, idx) => (
                        <span key={idx} className="text-[10px] font-mono uppercase tracking-wider bg-black px-2 py-1 text-zinc-500 border border-zinc-800">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Viral Anatomy */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">The Viral Short <br />Anatomy</h2>
             <p className="text-zinc-400 font-light leading-relaxed border-l-2 border-red-600 pl-4">
               Shorts are not just shorter videos. They are a distinct neurological experience. We engineer them for <span className="text-white font-semibold">retention velocity</span>.
             </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-600 font-bold text-lg sm:text-xl group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">01</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide mb-1">The 3-Second Ultimatum</h4>
                <p className="text-zinc-500 text-sm">Must begin in media res. No intros. No "Hello." Start with the most provocative statement.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-600 font-bold text-lg sm:text-xl group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">02</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide mb-1">Dynamic Subtitling</h4>
                <p className="text-zinc-500 text-sm">Bold, high-contrast, flashing captions. Highlight 1-3 words at a time to lock eyes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-600 font-bold text-lg sm:text-xl group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">03</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide mb-1">The Conversion Bridge</h4>
                <p className="text-zinc-500 text-sm">Hard-coded "Related Video" link funneling traffic to the long-form archive.</p>
              </div>
            </div>
          </div>

          {/* New Shorts Strategy Section */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <h4 className="text-white font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              Joy Styles Shorts Strategy
            </h4>
            <div className="space-y-3">
              <div className="bg-zinc-900/50 p-3 border-l-2 border-red-600">
                <span className="text-xs text-zinc-500 uppercase block mb-1">Clip 1: Ice Storm Rant (22:42)</span>
                <p className="text-white text-sm font-medium">"Why Nashville Lost Power for 11 Days"</p>
              </div>
              <div className="bg-zinc-900/50 p-3 border-l-2 border-zinc-700">
                <span className="text-xs text-zinc-500 uppercase block mb-1">Clip 2: Chinatown Details (47:52)</span>
                <p className="text-white text-sm font-medium">"Nashville is finally getting a Chinatown!"</p>
              </div>
              <div className="bg-zinc-900/50 p-3 border-l-2 border-zinc-700">
                <span className="text-xs text-zinc-500 uppercase block mb-1">Clip 3: Super Target (51:28)</span>
                <p className="text-white text-sm font-medium">"Super Target coming to Antioch!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
