"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Youtube, Smartphone, Users, ArrowRight, CheckCircle2 } from "lucide-react";

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
    interactive: true
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
      "Quarterly Performance & Growth Reporting"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 bg-black border-t border-zinc-900">
      <div className="mb-10 sm:mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">Our Capabilities</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">Service Architecture</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 hover:border-red-600/50 transition-colors group relative overflow-hidden ${service.interactive ? 'ring-2 ring-red-900/20' : ''}`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <service.icon className="w-24 h-24 text-red-600" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-red-600 transition-colors">
                <service.icon className="w-6 h-6 text-white group-hover:text-red-600 transition-colors" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-6 sm:mb-8 leading-relaxed h-auto md:h-20 text-sm sm:text-base">{service.description}</p>

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
        className="relative overflow-hidden text-center py-16 sm:py-32 px-4 sm:px-6 bg-red-600 mt-8"
      >
        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-tighter">Partner With Us</h2>
          <p className="text-white/80 text-lg sm:text-2xl mb-8 sm:mb-12 font-light max-w-2xl mx-auto px-2 sm:px-0">
            We build the infrastructure that enables growth—capabilities and architecture.
          </p>
        </div>
      </motion.div>

      {/* $500/mo Package — What's included in the partnership */}
      <motion.div
        id="package"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-zinc-900 py-12 sm:py-24"
      >
        <div className="mb-8 sm:mb-12">
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2 block">Proposed Partnership</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-2">
            Sacrificial Conversations — Monthly Package
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            What&apos;s included in your $500/mo partnership.
          </p>
        </div>
        <div className="mb-10">
          <span className="text-4xl sm:text-5xl font-bold text-white">$500</span>
          <span className="text-xl sm:text-2xl text-zinc-400 font-mono uppercase tracking-wider ml-2">/month</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { title: "Content intelligence", desc: "Every recorded episode run through our analytics so we identify high-impact moments and data-backed opportunities." },
            { title: "Posting strategy", desc: "Clear guidance on when and what to post: schedule, format, and cadence so your content works with the algorithm." },
            { title: "Discoverability pack", desc: "Captions, hashtags, keywords, and focus suggestions plus what's trending so you get found more." },
            { title: "Unified visual identity", desc: "YouTube and TikTok refreshed for a consistent, on-brand look that grabs attention and looks professional." },
            { title: "1 video per week (animated/promo)", desc: "One polished animated or promo piece each week to use across platforms." },
            { title: "Weekly static promos", desc: "A set number of static ads each week for Stories, Facebook, and feed to promote the podcast." },
            { title: "Thumbnail design", desc: "Thumbnail creation for YouTube long-form and TikTok clips so every post is built to convert." },
            { title: "5 high-converting clips per week", desc: "We turn your weekly Monday podcast into 5 short-form clips and advise exactly when to post them for maximum reach." },
            { title: "10 clips per month (Saturday show)", desc: "Your monthly Saturday couples podcast becomes 10 short-form clips, with posting guidance so each one performs." },
            { title: "Open line — no hesitation", desc: "Reach out anytime. No scheduling, no waiting—we're here when you need us." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 border-l-2 border-zinc-800 pl-4 py-2 hover:border-red-600/50 transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold uppercase tracking-wide text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Paid status — Stripe link saved in stored-links/stripe-payment-link.md for next month */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <span className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-4 px-8 sm:py-5 sm:px-12 text-base sm:text-lg uppercase tracking-widest border-0 w-full sm:w-auto max-w-xs sm:max-w-none rounded-sm">
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" strokeWidth={2.5} />
            Paid
          </span>
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-zinc-900 pt-12 flex flex-col items-center text-center gap-8">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 opacity-90">
          <Image
            src="/assets/silvre-logo.png"
            alt="Couture House"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-zinc-600 text-xs uppercase tracking-widest font-mono">
          <p>© 2026 Couture House Co.</p>
          <p>Confidential Service Blueprint // Sacrificial Conversations</p>
        </div>
      </footer>
    </section>
  );
}
