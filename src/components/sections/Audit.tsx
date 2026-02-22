"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AuditRadarChart from "../charts/RadarChart";
import { CheckCircle2, AlertTriangle, XCircle, Search } from "lucide-react";
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
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="text-center mb-20">
        <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Phase I: The Reality</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">Forensic Diagnostic <br />Assessment</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto text-xl leading-relaxed font-light">
          A granular review of the content's inherent value against its digital execution, exposing critical vulnerabilities in the current operational state.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        <div className="space-y-10">
          {/* Pros */}
          <div ref={(el) => { if (el) cardsRef.current[0] = el }} className="bg-zinc-900/50 p-8 rounded-none border-l-4 border-green-500 hover:bg-zinc-900 transition-colors group opacity-0">
            <div className="flex items-start gap-6">
              <CheckCircle2 className="w-8 h-8 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">The Cultural Moat</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-white font-semibold">Core Strength:</span> Deep integration with Nashville's civic and musical ecosystem (UMC, 104.1 Tab Radio). High-caliber guests like <span className="text-green-400">Joy Styles</span> and <span className="text-green-400">T.R.A.N.E. Spitta</span> provide an intrinsic competitive advantage that cannot be replicated.
                </p>
              </div>
            </div>
          </div>

          {/* Cons */}
          <div ref={(el) => { if (el) cardsRef.current[1] = el }} className="bg-zinc-900/50 p-8 rounded-none border-l-4 border-red-600 hover:bg-zinc-900 transition-colors group opacity-0">
            <div className="flex items-start gap-6">
              <XCircle className="w-8 h-8 text-red-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">The Invisible Archive</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-white font-semibold">Critical Failure:</span> High-value content is being deposited as a storage mechanism rather than an attention magnet. 
                  <br /><br />
                  <span className="text-red-500 font-mono text-sm block mb-2">&gt; Ep 63 (Joy Styles): 56 Views</span>
                  <span className="text-red-500 font-mono text-sm block">&gt; Ep 64 (Dr. King): 17 Views</span>
                  <br />
                  The algorithm is suppressing reach due to unoptimized packaging.
                </p>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div ref={(el) => { if (el) cardsRef.current[2] = el }} className="bg-zinc-900/50 p-8 rounded-none border-l-4 border-amber-500 hover:bg-zinc-900 transition-colors group opacity-0">
            <div className="flex items-start gap-6">
              <AlertTriangle className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Algorithmic Penalty</h3>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-white font-semibold">Current Status:</span> The channel lacks the structural hooks, thumbnail psychology, and metadata required to intercept user intent. The "0.3 Second Rule" is being violated on every upload.
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
          className="bg-black p-10 border border-zinc-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-20 pointer-events-none" />
          <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Search className="w-5 h-5 text-red-600" /> Channel Health Matrix
            </h3>
            <span className="text-xs font-mono text-zinc-500">DIAGNOSTIC_V1.0</span>
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
