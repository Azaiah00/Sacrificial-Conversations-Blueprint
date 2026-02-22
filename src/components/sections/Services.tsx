"use client";

import { motion } from "framer-motion";
import { Youtube, Smartphone, Users, ArrowRight, BarChart3, PenTool } from "lucide-react";

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
    ]
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
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-black border-t border-zinc-900">
      <div className="mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Our Capabilities</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">Service Architecture</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-600/50 transition-colors group relative overflow-hidden"
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
