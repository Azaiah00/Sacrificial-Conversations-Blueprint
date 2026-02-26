"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Film, Layout, CheckCircle2, X, Play, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ContentPost {
  id: string;
  type: "video" | "static" | "longform";
  aspectRatio: "9/16" | "3/4" | "16/9";
  title: string;
  thumbnail: string;
  assetUrl?: string;
  caption?: string;
  hashtags?: string;
  platform?: string;
  instructions?: {
    platform: string;
    caption: string;
    hashtags: string;
    sound?: string;
    postingTime: string;
    thumbnailStrategy?: string;
    strategyNote?: string;
    cta?: string;
    pinnedComment?: string;
    audienceSettings?: string;
    relatedVideo?: string;
  }[];
  longformSteps?: {
    step: string;
    action: string;
    content: string;
  }[];
}

const WEEKLY_CONTENT: ContentPost[] = [
  // 2 Video Clips (9:16)
  {
    id: "clip-1",
    type: "video",
    aspectRatio: "9/16",
    title: "Prison to Freedom: Readjusting to Life After Incarceration",
    thumbnail: "/assets/high-emotion-trigger-sc-thumbail-variation.jpeg",
    assetUrl: "/assets/Prison to Freedom_ Readjusting to Life After Incarceration.mp4",
    instructions: [
      {
        platform: "TikTok",
        caption: "Imagine waking up 10 years later and the world is completely different. 😳",
        hashtags: "#PrisonTok, #LifeAfterLockup, #PrisonReform, #FYP, #RealTalk",
        sound: "Use a trending, low-fi instrumental or \"sad piano\" backing track at 1-10% volume.",
        postingTime: "7:30 PM - 9:30 PM",
        thumbnailStrategy: "Upload delivered thumbnail"
      },
      {
        platform: "Instagram Reels",
        caption: "The hardest part of prison isn't getting locked up... it's getting out. 🔓 Teddy and Monica break down the reality of 'Institutionalization' and why the transition to freedom is a sacrifice of its own. Catch the full conversation on Youtube. Link in Bio!",
        hashtags: "#SacrificialConversations #MindsetShift #PrisonReform #SecondChances #InspirationDaily #Reentry #SocialJustice #NashvilleTN #GospelRadio #RealTalk #PodcastClips #DeepDive #TruthBomb",
        strategyNote: "Limit to 10-15 highly relevant tags. Place them in the first comment, not the caption.",
        sound: "Use a trending sound backing track at 1-10% volume.",
        postingTime: "11:00 AM - 1:00 PM",
        thumbnailStrategy: "Upload delivered thumbnail"
      },
      {
        platform: "YouTube Shorts",
        caption: "Why Inmates Feel Safer in Prison than Outside 🤯",
        hashtags: "#Shorts #Prison #Truth #PrisonLife #LifeAfterPrison #Inmate #Institutionalization #SacrificialConversations #Podcast #Motivation #Society #Technology #CultureShock #TeddyAndMonica #ChristianTalk",
        pinnedComment: "\"Do we do enough to help people readjust, or are we setting them up to fail? Let's talk about it. 👇\"",
        postingTime: "4:00 PM - 6:00 PM",
        thumbnailStrategy: "Pick the frame where the guest looks the most emotional or confused (around 0:42).",
        audienceSettings: "Is this video made for kids? Select NO. (Ensures comments/notifications stay on).",
        relatedVideo: "Link this Short to the Long-Form Episode of this interview."
      },
      {
        platform: "Facebook",
        caption: "Have you ever felt like the world was moving too fast for you to keep up? Now imagine that feeling after being locked away for a decade...",
        hashtags: "#SacrificialConversations #PrisonReform #SecondChances",
        cta: "Drop a ❤️ if you believe everyone deserves a second chance at navigating life.",
        postingTime: "8:00 AM (Morning devotional/coffee crowd)"
      }
    ]
  },
  {
    id: "clip-2",
    type: "video",
    aspectRatio: "9/16",
    title: "Losing Freedom",
    thumbnail: "/assets/social-disruptor.jpeg",
    assetUrl: "/assets/Losing Freedom.mp4",
    instructions: [
      {
        platform: "TikTok",
        caption: "That sound... 🔒 It changes you. I went behind the gates for one hour and felt the weight of it. Imagine 10 years",
        hashtags: "#PrisonTok #Jailtok #SacrificialConversations #Storytime #RealTalk #FYP",
        sound: "Use a trending, low-fi instrumental or \"sad piano\" backing track at 1-10% volume.",
        postingTime: "5:00 PM - 7:00 PM",
        thumbnailStrategy: "Upload delivered thumbnail"
      },
      {
        platform: "Instagram Reels",
        caption: "We take 'lunch breaks' for granted. 🥪 But for some, that gate creates a permanent separation. Monica shares a moment of panic behind bars that put everything into perspective. 🎙️ Tune in to Sacrificial Conversations Pocast on Youtube. Link in Bio!",
        hashtags: "#SacrificialConversations #PrisonReform #MindsetShift #Gratitude #FaithWalk #ChristianPodcast #NashvilleTN #WFTB #GospelRadio #RealTalk #PodcastClips #DeepDive #TruthBomb #SecondChances",
        strategyNote: "Comment 'FREEDOM' if you’re grateful for yours today. 👇",
        sound: "Use a trending sound backing track at 1-10% volume.",
        postingTime: "11:00 AM - 1:00 PM",
        thumbnailStrategy: "Upload delivered thumbnail"
      },
      {
        platform: "YouTube Shorts",
        caption: "The Sound That Means Your Freedom is GONE 🔒",
        hashtags: "#Shorts #Prison #SacrificialConversations #TeddyAndMonica #WFTB1041 #PrisonLife #Inmate #Jail #Motivation #Inspiration #Christianity #Society #Culture",
        pinnedComment: "\"Do we do enough to help people readjust, or are we setting them up to fail? Let's talk about it. 👇\"",
        postingTime: "3:30 PM – 5:30 PM",
        thumbnailStrategy: "Pick the frame where the guest looks the most emotional or confused (around 0:42).",
        audienceSettings: "Is this video made for kids? Select NO.",
        relatedVideo: "Link this Short to the Long-Form Episode of this interview."
      },
      {
        platform: "Facebook",
        caption: "\"I thank God for my freedom.\" 🙏 Monica shares a terrifying moment of realization during a prison ministry lunch...",
        hashtags: "#SacrificialConversations #Gratitude #Freedom #WFTB",
        cta: "Tag someone who needs a reminder to be grateful for their freedom today. ❤️",
        postingTime: "7:30 AM – 9:30 AM"
      }
    ]
  },
  // 3 Static Flyers (3:4)
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
  // Long Form Settings
  {
    id: "longform-1",
    type: "longform",
    aspectRatio: "16/9",
    title: "Long Form Video Optimization (Ep. 68)",
    thumbnail: "/assets/video-poster.png",
    longformSteps: [
      {
        step: "Step 1: Change the Title",
        action: "Enter all of these into the A/B testing titles section:",
        content: "Correctional Officer REVEALS: Why Inmates Choose Prison Over Freedom | Ep. 68\nSurviving Maximum Security: A Sergeant’s Guide to Mental Warfare | Ep. 68\nLife Inside a Max Security Prison: The Truth About Officers & Inmates | Ep. 68"
      },
      {
        step: "Step 2: Update Description Box",
        action: "Delete the old description and paste this in:",
        content: "I've seen people leave on Monday and be back on Friday... because it's safer in here. Correctional Sergeant Whitfield drops a bombshell on why freedom isn't always the goal for everyone.\n\nChapters:\n0:00 Intro\n5:00 First Day in a Max Security Prison\n15:00 The Hard Stat: 80% African American Population\n27:30 Why Inmates Choose Prison Over Freedom\n37:30 The \"Hyper-Vigilance\": Watching Exits at Restaurants\n43:00 The Officer Who Snapped & Quit\n54:13 Final Warning: \"Stay Free\"\n#SacrificialConversations #PrisonLife #CorrectionalOfficer #WFTB #RealTalk"
      },
      {
        step: "Step 3: Add Tags",
        action: "Copy these into the \"Tags\" section at the bottom:",
        content: "#PrisonLife #CorrectionalOfficer #MaximumSecurityPrison #InmateStories #PrisonDocumentary #Institutionalized #MassIncarceration #PrisonMentalHealth #FearOfFreedom #LifeBehindBars #SacrificialConversations #TeddyAndMonica #WFTB1041 #WhyInmatesStayInPrison #TruthAboutPrisonGuards"
      },
      {
        step: "Step 4: Pinned Comment",
        action: "Post and Pin this comment:",
        content: "\"Sergeant Whitfield said 80% of the inmates in his facility are African American. What is the FIRST step our community needs to take to lower this number? Let's talk below. 👇\""
      }
    ]
  }
];

export default function WeeklyContentSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<ContentPost | null>(null);

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {WEEKLY_CONTENT.filter(item => item.type === "video").map((item) => (
            <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} onPreview={setPreviewItem} />
          ))}
        </div>
      </div>

      {/* Static Flyers Section (3:4) */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <Layout className="text-red-600 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Static Assets (3:4)</h3>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEEKLY_CONTENT.filter(item => item.type === "static").map((item) => (
            <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} onPreview={setPreviewItem} />
          ))}
        </div>
      </div>

      {/* Long Form Optimization Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <Youtube className="text-red-600 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Long-Form Optimization</h3>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>
        
        {WEEKLY_CONTENT.filter(item => item.type === "longform").map((item) => (
          <div key={item.id} className="bg-zinc-900/30 border border-zinc-800 p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3">
                <div className="aspect-video relative border border-zinc-800 bg-black overflow-hidden group">
                  <Image src={item.thumbnail} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest mt-6 text-xl">{item.title}</h4>
                <p className="text-zinc-500 text-sm mt-2 font-mono uppercase tracking-widest">Target: YouTube Algorithm</p>
              </div>
              
              <div className="lg:w-2/3 space-y-8">
                {item.longformSteps?.map((step, idx) => (
                  <div key={idx} className="border-l-2 border-red-600 pl-6 py-2">
                    <h5 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">{step.step}</h5>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold mb-3">{step.action}</p>
                    <div className="relative group">
                      <pre className="bg-zinc-950 p-4 border border-zinc-800 text-zinc-300 text-xs leading-relaxed whitespace-pre-wrap font-mono">
                        {step.content}
                      </pre>
                      <button 
                        onClick={() => copyToClipboard(step.content, `${item.id}-step-${idx}`)}
                        className="absolute top-2 right-2 px-3 py-1 bg-zinc-800 hover:bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
                      >
                        {copiedId === `${item.id}-step-${idx}` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen preview modal — view asset before download */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
            onClick={() => setPreviewItem(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setPreviewItem(null)}
              aria-label="Close preview"
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className={`relative bg-black border border-zinc-800 shadow-2xl ${previewItem.aspectRatio === "9/16" ? "aspect-[9/16] max-h-[90vh]" : "aspect-[3/4] max-h-[90vh]"}`}
              style={{ maxWidth: previewItem.aspectRatio === "9/16" ? "min(100%, calc(90vh * 9 / 16))" : "min(100%, calc(90vh * 3 / 4))" }}
              onClick={(e) => e.stopPropagation()}
            >
              {previewItem.type === "longform" ? (
                <div className="w-full h-full p-8 overflow-y-auto bg-zinc-950">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">{previewItem.title}</h3>
                  <div className="space-y-10">
                    {previewItem.longformSteps?.map((step, idx) => (
                      <div key={idx} className="border-l-2 border-red-600 pl-6">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">{step.step}</h4>
                        <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold mb-4">{step.action}</p>
                        <pre className="bg-black p-6 border border-zinc-800 text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                          {step.content}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ) : previewItem.type === "video" ? (
                <video
                  src={previewItem.assetUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  muted={false}
                />
              ) : (
                <Image
                  src={previewItem.assetUrl || ""}
                  alt={previewItem.title}
                  fill
                  className="object-contain"
                />
              )}
              {previewItem.type !== "longform" && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent border-t border-zinc-800">
                  <p className="text-white text-xs font-medium mb-1 line-clamp-2">{previewItem.instructions ? previewItem.instructions[0].caption : previewItem.caption}</p>
                  <p className="text-red-500/90 font-mono text-[10px] mb-3 line-clamp-1">{previewItem.instructions ? previewItem.instructions[0].hashtags : previewItem.hashtags}</p>
                  <a
                    href={previewItem.assetUrl}
                    download={previewItem.assetUrl?.split("/").pop() || "download"}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContentCard({ item, onCopy, copiedId, onPreview }: { item: ContentPost; onCopy: (text: string, id: string) => void; copiedId: string | null; onPreview: (item: ContentPost) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col bg-zinc-900/30 border border-zinc-800 group hover:border-red-600/50 transition-all duration-500"
    >
      {/* Click to open fullscreen preview — view before download */}
      <button
        type="button"
        onClick={() => onPreview(item)}
        className={`relative overflow-hidden bg-black w-full text-left cursor-pointer ${item.aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-[3/4]"}`}
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Platform Badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-white uppercase tracking-widest">
            {item.platform || (item.instructions ? item.instructions[0].platform : "")}
          </span>
        </div>
        {/* Hover: View (opens preview) + Download link */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest">
            <Play className="w-4 h-4" />
            View
          </span>
          {item.assetUrl && (
            <a
              href={item.assetUrl}
              download={item.assetUrl.split("/").pop() || "download"}
              className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-3 h-3" />
              Download
            </a>
          )}
        </div>
      </button>

      {/* Content Details */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-4 border-b border-zinc-800 pb-2">
          {item.title}
        </h4>
        
        <div className="space-y-6 flex-1">
          {item.instructions ? (
            item.instructions.map((inst, idx) => (
              <div key={idx} className="border-l border-zinc-800 pl-4 py-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-red-600/10 border border-red-600/20 text-red-500 text-[9px] font-bold uppercase tracking-widest">
                    {inst.platform}
                  </span>
                  <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-mono">Posting Time: {inst.postingTime}</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Caption</span>
                      <button 
                        onClick={() => onCopy(inst.caption, `${item.id}-${idx}-cap`)}
                        className="text-[9px] text-red-500 hover:text-red-400 uppercase tracking-widest font-bold transition-colors"
                      >
                        {copiedId === `${item.id}-${idx}-cap` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed italic bg-zinc-950/50 p-2 border border-zinc-800/50">
                      "{inst.caption}"
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Hashtags</span>
                      <button 
                        onClick={() => onCopy(inst.hashtags, `${item.id}-${idx}-hash`)}
                        className="text-[9px] text-red-500 hover:text-red-400 uppercase tracking-widest font-bold transition-colors"
                      >
                        {copiedId === `${item.id}-${idx}-hash` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="text-red-600/80 font-mono text-[9px] leading-relaxed break-words bg-zinc-950/50 p-2 border border-zinc-800/50">
                      {inst.hashtags}
                    </p>
                  </div>

                  {inst.sound && (
                    <div className="pt-1">
                      <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold block mb-1">Sound Strategy</span>
                      <p className="text-zinc-500 text-[10px] leading-snug">{inst.sound}</p>
                    </div>
                  )}
                  
                  {inst.thumbnailStrategy && (
                    <div className="pt-1">
                      <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold block mb-1">Thumbnail</span>
                      <p className="text-zinc-500 text-[10px] leading-snug">{inst.thumbnailStrategy}</p>
                    </div>
                  )}

                  {inst.cta && (
                    <div className="pt-1">
                      <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold block mb-1">CTA</span>
                      <p className="text-emerald-500/80 text-[10px] leading-snug font-medium">{inst.cta}</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Suggested Caption</span>
                  <button 
                    onClick={() => onCopy(item.caption || "", `${item.id}-cap`)}
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
                    onClick={() => onCopy(item.hashtags || "", `${item.id}-hash`)}
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
          )}
        </div>

        {item.assetUrl && (
          <a
            href={item.assetUrl}
            download
            className="mt-8 w-full py-3 bg-zinc-800 hover:bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-3 h-3" />
            Download Asset
          </a>
        )}
      </div>
    </motion.div>
  );
}
