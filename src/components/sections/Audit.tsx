"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AuditRadarChart from "../charts/RadarChart";
import { CheckCircle2, AlertTriangle, XCircle, Search, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Audit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="text-center mb-10 sm:mb-20">
        <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Phase I: The Reality</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-8 tracking-tight uppercase">Forensic Diagnostic <br />Assessment</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto text-sm sm:text-base md:text-xl leading-relaxed font-light px-2 sm:px-0">
          A granular review of the content&apos;s inherent value against its digital execution. <span className="text-white font-semibold">Joy Styles (Ep. 67)</span> is the primary case study—we highlight the gap between &quot;Podcast Episode&quot; packaging and &quot;Breaking News&quot; positioning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start mb-12 sm:mb-20">
        <div className="space-y-6 sm:space-y-10">
          {/* Pros */}
          <div ref={(el) => { if (el) cardsRef.current[0] = el }} className="bg-zinc-900/50 p-4 sm:p-6 lg:p-8 rounded-none border-l-4 border-green-500 hover:bg-zinc-900 transition-colors group opacity-0">
            <div className="flex items-start gap-4 sm:gap-6">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">The Cultural Moat</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-white font-semibold">Core Strength:</span> Deep integration with Nashville's civic and musical ecosystem. The Joy Styles interview contains explosive content about the <span className="text-green-400">NES Power Outage</span>, <span className="text-green-400">2027 Mayoral Race</span>, and <span className="text-green-400">Antioch Development</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Cons */}
          <div ref={(el) => { if (el) cardsRef.current[1] = el }} className="bg-zinc-900/50 p-4 sm:p-6 lg:p-8 rounded-none border-l-4 border-red-600 hover:bg-zinc-900 transition-colors group opacity-0">
            <div className="flex items-start gap-4 sm:gap-6">
              <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">The "Gap"</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-white font-semibold">Critical Failure:</span> The current packaging positions this as a "Podcast Episode" rather than "Breaking News."
                  <br /><br />
                  <span className="text-red-500 font-mono text-sm block mb-2">&gt; Current Title: "Conversation with..." (Passive)</span>
                  <span className="text-red-500 font-mono text-sm block">&gt; Missed Opportunity: "Joy Styles Exposes NES Failures" (Active)</span>
                  <br />
                  YouTube audiences click on conflict and news, not just conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div ref={(el) => { if (el) cardsRef.current[2] = el }} className="bg-zinc-900/50 p-4 sm:p-6 lg:p-8 rounded-none border-l-4 border-amber-500 hover:bg-zinc-900 transition-colors group opacity-0">
            <div className="flex items-start gap-4 sm:gap-6">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">The Pivot</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-white font-semibold">Strategic Action:</span> We must pivot the packaging from "Podcast" to "Exclusive Insight." This bridges the gap between politically active Nashville residents and the faith-based WFTB 104.1 audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Radar Chart Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black p-4 sm:p-6 md:p-10 border border-zinc-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-20 pointer-events-none" />
          <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Search className="w-5 h-5 text-red-600" /> Channel Health Matrix
            </h3>
            <span className="text-xs font-mono text-zinc-500">DIAGNOSTIC_V2.0</span>
          </div>
          
          <div className="relative z-10">
            <AuditRadarChart />
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4 text-xs font-mono text-zinc-500 border-t border-zinc-800 pt-4">
            <div>
              <span className="block text-red-600 font-bold mb-1">CURRENT SCORE</span>
              <span className="text-white text-lg">32/100</span>
            </div>
            <div className="text-right">
              <span className="block text-green-500 font-bold mb-1">POTENTIAL</span>
              <span className="text-white text-lg">94/100</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
