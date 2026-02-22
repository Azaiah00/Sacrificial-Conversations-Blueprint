"use client";

import { motion } from "framer-motion";
import { CheckSquare, Calendar, Rocket, Activity, Globe } from "lucide-react";

const phases = [
  {
    id: "phase1",
    title: "Phase I: Infrastructure Audit",
    timeline: "Days 1-21",
    icon: CheckSquare,
    color: "border-red-600",
    text: "text-red-600",
    bg: "bg-red-600",
    objectives: [
      "Visual Rebranding: Retroactive thumbnail replacement for top 15 evergreen episodes.",
      "Metadata Retrofitting: Rewrite titles/descriptions for 2025/2026 catalog.",
      "Ecosystem Routing: Fix all outbound links to UMC and donation pages.",
      "Manual Caption Generation: Upload .srt files for core episodes."
    ]
  },
  {
    id: "phase2",
    title: "Phase II: The Repurposing Engine",
    timeline: "Days 22-60",
    icon: Rocket,
    color: "border-zinc-500",
    text: "text-zinc-500",
    bg: "bg-zinc-500",
    objectives: [
      "Short-Form Factory: Implement 5 Shorts per Episode workflow.",
      "A/B Testing Protocol: Launch 3 thumbnail variations for all new uploads.",
      "Guest PR Kits: Distribute assets to Joy Styles, T.R.A.N.E., etc.",
      "Vertical Engineering: Stacked split-screen templates."
    ]
  },
  {
    id: "phase3",
    title: "Phase III: Scaling & Community",
    timeline: "Days 61-90",
    icon: Globe,
    color: "border-zinc-700",
    text: "text-zinc-700",
    bg: "bg-zinc-700",
    objectives: [
      "Community Tab Activation: Bi-weekly polls and behind-the-scenes.",
      "Live Event Integration: Digital premieres from African Street Festival.",
      "AI Localization: Experiment with multi-language audio dubbing.",
      "Global Expansion: Push content to international demographics."
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-black border-t border-zinc-900">
      <div className="mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Strategic Timeline</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">Phased Implementation <br />Blueprint</h2>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-10 space-y-16">
        {phases.map((phase, index) => (
          <motion.div 
            key={phase.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-16"
          >
            {/* Timeline Node */}
            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black border-4 ${index === 0 ? "border-red-600" : "border-zinc-600"}`} />
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-none border ${phase.color} bg-black`}>
                <Calendar className={`w-4 h-4 ${phase.text}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${phase.text}`}>{phase.timeline}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">{phase.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phase.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className={`w-1.5 h-1.5 mt-2 bg-zinc-700 group-hover:${phase.bg} transition-colors`} />
                  <p className="text-zinc-400 text-lg font-light leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
