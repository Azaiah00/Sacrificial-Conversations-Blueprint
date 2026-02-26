"use client";

import { motion } from "framer-motion";
import { Download, Instagram, Film, Layout, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ContentPost {
  id: string;
  type: "video" | "static";
  aspectRatio: "9/16" | "3/4";
  title: string;
  thumbnail: string;
  assetUrl: string;
  caption: string;
  hashtags: string;
  platform: string;
}

const WEEKLY_CONTENT: ContentPost[] = [
  // 5 Video/Short spots (9:16)
  {
    id: "v1",
    type: "video",
    aspectRatio: "9/16",
    title: "Clip 01: The Vision",
    thumbnail: "/assets/high-emotion-trigger-sc-thumbail-variation.jpeg",
    assetUrl: "/assets/demo-SC-intro-vid.mp4",
    caption: "The vision for Sacrificial Conversations isn't just about talking—it's about the transformation that happens when we're willing to go deep. 🎙️✨",
    hashtags: "#SacrificialConversations #Podcast #Transformation #Nashville",
    platform: "Instagram Reels / TikTok",
  },
  {
    id: "v2",
    type: "video",
    aspectRatio: "9/16",
    title: "Clip 02: Community Impact",
    thumbnail: "/assets/social-disruptor.jpeg",
    assetUrl: "/assets/demo-SC-intro-vid.mp4",
    caption: "How we're impacting the Nashville community one conversation at a time. This is why we do what we do. 🙌",
    hashtags: "#NashvilleCommunity #Impact #RealTalk #PodcastLife",
    platform: "YouTube Shorts",
  },
  {
    id: "v3",
    type: "video",
    aspectRatio: "9/16",
    title: "Clip 03: The Process",
    thumbnail: "/assets/unnamed.webp",
    assetUrl: "/assets/demo-SC-intro-vid.mp4",
    caption: "Behind the scenes of the latest episode. The process is just as important as the result. 🎬",
    hashtags: "#BehindTheScenes #CreatorEconomy #PodcastProduction",
    platform: "Instagram Reels",
  },
  {
    id: "v4",
    type: "video",
    aspectRatio: "9/16",
    title: "Clip 04: Leadership",
    thumbnail: "/assets/high-emotion-trigger-sc-thumbail-variation.jpeg",
    assetUrl: "/assets/demo-SC-intro-vid.mp4",
    caption: "Leadership requires sacrifice. Are you ready to have the conversations that matter? 💼🔥",
    hashtags: "#Leadership #Sacrifice #GrowthMindset #NashvilleBusiness",
    platform: "TikTok",
  },
  {
    id: "v5",
    type: "video",
    aspectRatio: "9/16",
    title: "Clip 05: Weekly Highlight",
    thumbnail: "/assets/social-disruptor.jpeg",
    assetUrl: "/assets/demo-SC-intro-vid.mp4",
    caption: "The highlight of this week's episode. You don't want to miss this one. 🎧🔥",
    hashtags: "#PodcastHighlight #MustWatch #SacrificialConversations",
    platform: "YouTube Shorts / TikTok",
  },
  // 5 Static Flyer spots (3:4)
  {
    id: "s1",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 01: New Episode",
    thumbnail: "/assets/event-activation.jpeg",
    assetUrl: "/assets/event-activation.jpeg",
    caption: "NEW EPISODE OUT NOW! We're diving deep into the heart of Nashville's transformation. Link in bio to listen. 🎙️🔗",
    hashtags: "#NewEpisode #PodcastAlert #Nashville #SacrificialConversations",
    platform: "Instagram Feed / Facebook",
  },
  {
    id: "s2",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 02: Quote of the Week",
    thumbnail: "/assets/new-banner-concept.png",
    assetUrl: "/assets/new-banner-concept.png",
    caption: "\"Growth happens in the uncomfortable spaces.\" - A powerful reminder from this week's guest. 💭✨",
    hashtags: "#QuoteOfTheWeek #Inspiration #Growth #PodcastQuotes",
    platform: "Instagram Feed",
  },
  {
    id: "s3",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 03: Join the Conversation",
    thumbnail: "/assets/event-activation.jpeg",
    assetUrl: "/assets/event-activation.jpeg",
    caption: "We want to hear from you! Join the conversation in the comments or send us a DM. Your voice matters. 🗣️❤️",
    hashtags: "#JoinTheConversation #CommunityVoice #NashvilleTalks",
    platform: "Facebook / Instagram",
  },
  {
    id: "s4",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 04: Upcoming Guest",
    thumbnail: "/assets/new-banner-concept.png",
    assetUrl: "/assets/new-banner-concept.png",
    caption: "Sneak peek at next week's guest! Can you guess who it is? Stay tuned. 👀🎙️",
    hashtags: "#UpcomingGuest #PodcastSneakPeek #NashvilleInfluencers",
    platform: "Instagram Feed / Stories",
  },
  {
    id: "s5",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 05: Weekly Wrap-up",
    thumbnail: "/assets/event-activation.jpeg",
    assetUrl: "/assets/event-activation.jpeg",
    caption: "That's a wrap for this week! Thank you for being part of the Sacrificial Conversations journey. 🙏✨",
    hashtags: "#WeeklyWrapUp #Grateful #PodcastCommunity #Nashville",
    platform: "Instagram Feed / Facebook",
  },
];

export default function WeeklyContentSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 border-b border-zinc-800 pb-8">
        <div>
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Weekly Distribution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight">
            Weekly <br /> Content Hub
          </h2>
        </div>
        <div className="text-right mt-8 md:mt-0">
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-mono">
            Current Week: <span className="text-white">Feb 23 - Mar 01, 2026</span>
          </p>
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-mono mt-1 flex items-center justify-end gap-2">
            Status: <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Ready</span>
          </p>
        </div>
      </div>

      {/* Videos/Shorts Section (9:16) */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <Film className="text-red-600 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Short-Form Clips (9:16)</h3>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WEEKLY_CONTENT.filter(item => item.aspectRatio === "9/16").map((item) => (
            <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} />
          ))}
        </div>
      </div>

      {/* Static Flyers Section (3:4) */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <Layout className="text-red-600 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Static Assets (3:4)</h3>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WEEKLY_CONTENT.filter(item => item.aspectRatio === "3/4").map((item) => (
            <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentCard({ item, onCopy, copiedId }: { item: ContentPost, onCopy: (text: string, id: string) => void, copiedId: string | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col bg-zinc-900/30 border border-zinc-800 group hover:border-red-600/50 transition-all duration-500"
    >
      {/* Social Media Preview Style */}
      <div className={`relative overflow-hidden bg-black ${item.aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-[3/4]"}`}>
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Platform Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-white uppercase tracking-widest">
            {item.platform}
          </span>
        </div>

        {/* Hover Overlay with Download */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={item.assetUrl}
            download
            className="p-4 bg-red-600 text-white rounded-full hover:scale-110 transition-transform shadow-xl"
            title="Download Asset"
          >
            <Download className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-4 border-b border-zinc-800 pb-2">
          {item.title}
        </h4>
        
        <div className="space-y-4 flex-1">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Suggested Caption</span>
              <button 
                onClick={() => onCopy(item.caption, `${item.id}-cap`)}
                className="text-[10px] text-red-500 hover:text-red-400 uppercase tracking-widest font-bold transition-colors"
              >
                {copiedId === `${item.id}-cap` ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed italic line-clamp-4 bg-zinc-950/50 p-2 border border-zinc-800/50">
              "{item.caption}"
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Hashtags</span>
              <button 
                onClick={() => onCopy(item.hashtags, `${item.id}-hash`)}
                className="text-[10px] text-red-500 hover:text-red-400 uppercase tracking-widest font-bold transition-colors"
              >
                {copiedId === `${item.id}-hash` ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-red-600/80 font-mono text-[10px] leading-relaxed break-words bg-zinc-950/50 p-2 border border-zinc-800/50">
              {item.hashtags}
            </p>
          </div>
        </div>

        <a
          href={item.assetUrl}
          download
          className="mt-6 w-full py-3 bg-zinc-800 hover:bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-3 h-3" />
          Download Asset
        </a>
      </div>
    </motion.div>
  );
}
