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
  /** When set, thumbnail image is also offered as a separate download (e.g. for shorts). */
  thumbnailAssetUrl?: string;
  isNew?: boolean;
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
  // 3 Video Clips (9:16)
  {
    id: "clip-3",
    type: "video",
    aspectRatio: "9/16",
    title: "Helping Ex-Inmates Succeed: First Steps After Prison",
    thumbnail: "/assets/shorts/Helping Ex-Inmates Succeed_ First Steps After Prison.mp4",
    assetUrl: "/assets/shorts/Helping Ex-Inmates Succeed_ First Steps After Prison.mp4",
    thumbnailAssetUrl: "/assets/shorts/Helping Ex-Inmates Succeed_ First Steps After Prison.mp4",
    isNew: true,
    instructions: [
      {
        platform: "TikTok",
        caption: "If the mindset doesn't change, the location doesn't matter. 💯 The hardest prison to escape is the one in your mind.",
        hashtags: "#prisonreform #lifeafterlockup #fyp #motivation #prisontiktok",
        sound: "Use a trending, low-fi instrumental or \"sad piano\" backing track at 1-10% volume to underscore the emotion without drowning out the speech.",
        postingTime: "4:00 PM - 7:00 PM (When people are off work and scrolling).",
        thumbnailStrategy: "Upload delivered thumbnail"
      },
      {
        platform: "Instagram Reels",
        caption: "It’s a controversial take, but is it the truth? 👇\nTeddy asks how to keep a young man from feeling like \"prison is better than freedom.\" The answer isn't what you expect. It starts with owning the mistake.\nDrop a 🔥 if you agree that accountability is the key to a fresh start.",
        hashtags: "#prisonministry #faithwalk #personalgrowth #mindsetshift #freshstart #nashville #sacrificialconversations #wftb #prison #motivation",
        strategyNote: "Limit to 10-15 highly relevant tags. Place them in the first comment, not the caption, to keep the aesthetic clean. Comment 'FREEDOM' if you’re grateful for yours today. 👇",
        sound: "Use a trending sound backing track at 1-10% volume to underscore the emotion without drowning out the speech.",
        postingTime: "11:00 AM (Lunch break crowd) or 8:00 PM",
        thumbnailStrategy: "Upload delivered thumbnail"
      },
      {
        platform: "YouTube Shorts",
        caption: "The Sound That Means Your Freedom is GONE 🔒 #Shorts #Prison\n\nDescription: The sound that changes everything... 🔒\nWe drive past prisons every day, but have you ever walked INSIDE? In this clip from Sacrificial Conversations, Monica breaks down the terrifying reality of hearing the gate lock behind her. It’s a sound—\"Do-Doom\"—that signifies the total loss of freedom.\nIt’s easy to take your liberty for granted until you feel the weight of that door.\n🎙️ From the Episode: \"Behind Bars: The Daily Fears of Losing Freedom\" 📻 Listen Live: Mondays on WFTB 104.1 TabNashville 👉 Watch the Full Discussion: Click the \"Created from...\" link above the title!",
        hashtags: "#SacrificialConversations #TeddyAndMonica #WFTB1041 #PrisonLife #Inmate #Jail #Motivation #Inspiration #Christianity #Society #Culture",
        pinnedComment: "\"Do we do enough to help people readjust, or are we setting them up to fail? Let's talk about it. 👇\"",
        postingTime: "3:30 PM – 5:30 PM (Catching the post-work rush)",
        thumbnailStrategy: "You cannot upload a custom thumbnail for Shorts on mobile easily yet, but you can select a frame. Strategy: Pick the frame where the guest looks the most emotional or confused (around the 0:42 mark when he talks about the flip phone).",
        audienceSettings: "Is this video made for kids? Select NO. Why: If you select \"Yes,\" comments are disabled, and you lose the notification bell. This kills viral potential. Age Restriction: Select NO (unless there is explicit cursing/violence, which this clip is clean enough for general audiences).",
        relatedVideo: "Look for the setting: \"Related Video\" (Right side on Desktop, or \"Edit\" on Mobile). Action: Link this Short to the Long-Form Episode of this interview. Why: This creates a button on the Short that says \"Created from...\" or links viewers directly to the full 1-hour show. This is how you grow the main channel."
      },
      {
        platform: "Facebook",
        caption: "\"I really want this young man to come out of prison and do the best he can...\"\nIt’s the prayer of every parent, friend, and spouse waiting on a loved one to come home. But how do we ensure they don't go back?\nOn this week's Sacrificial Conversations, we discussed the painful reality of reentry. It’s not just about finding a job. It’s about looking in the mirror and saying, \"I am here because of choices I made.\" Only then can you make new choices.\nTrue freedom starts with the sacrifice of Pride.\nWatch the full conversation on YouTube. 🎙️https://www.youtube.com/@SacrificialConversations",
        hashtags: "#SacrificialConversations #PrisonReform #SecondChances",
        cta: "Tag a family member who has been a support system for someone coming home. Let’s honor them today.",
        postingTime: "7:30 AM – 9:30 AM (The \"Coffee & Jesus\" crowd)."
      }
    ]
  },
  {
    id: "clip-1",
    type: "video",
    aspectRatio: "9/16",
    title: "Prison to Freedom: Readjusting to Life After Incarceration",
    thumbnail: "/assets/shorts/thmubnail-tiktok-1.webp",
    assetUrl: "/assets/shorts/Prison to Freedom_ Readjusting to Life After Incarceration.mp4",
    thumbnailAssetUrl: "/assets/shorts/thmubnail-tiktok-1.webp",
    instructions: [
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
        caption: "Have you ever felt like the world was moving too fast for you to keep up? Now imagine that feeling after being locked away for a decade.\nIn this clip, we talk about the heartbreaking reality of 'Institutionalization.' It's not just about doing the time; it's about coming home to a world you don't recognize anymore—where even a smartphone feels like an alien object.\nSometimes, the sacrifice isn't staying out of trouble; it's swallowing your pride to ask for help in a world that forgot you.",
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
    thumbnail: "/assets/shorts/thumbnail-tiktok-2.webp",
    assetUrl: "/assets/shorts/Losing Freedom.mp4",
    thumbnailAssetUrl: "/assets/shorts/thumbnail-tiktok-2.webp",
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
        caption: "\"I thank God for my freedom.\" 🙏\nWe often drive past prisons and don't think twice. But have you ever walked inside? In this clip, Monica shares a terrifying moment of realization during a prison ministry lunch. She walked behind the gate, the door slammed—Clap... Do-Doom—and suddenly, the reality of 'Losing Freedom' wasn't just a concept. It was a feeling.\nIt made us ask: How much do we take our daily liberty for granted?\nCatch the full Sacrificial Conversations episode on WFTB 104.1 or YouTube.",
        hashtags: "#SacrificialConversations #Gratitude #Freedom #WFTB",
        cta: "Tag someone who needs a reminder to be grateful for their freedom today. ❤️",
        postingTime: "7:30 AM – 9:30 AM (The \"Coffee & Jesus\" crowd)"
      }
    ]
  },
  // 3 Static Flyers (3:4) — Ep. 68 Sergeant Whitfield promo assets
  {
    id: "s1",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 01: Correctional Sergeant Whitfield — Inside The Job",
    thumbnail: "/assets/flyer%201.jpeg",
    assetUrl: "/assets/flyer%201.jpeg",
    caption: "NEW EPISODE OUT NOW! Correctional Sergeant Whitfield: Inside The Job. Journey, challenges & the untold truth. Watch now on YouTube — link in bio! 🎙️🔗",
    hashtags: "#SacrificialConversations #Episode68 #PrisonLife #CorrectionalOfficer #Nashville #PodcastAlert",
    platform: "Instagram Feed / Facebook",
  },
  {
    id: "s2",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 02: Episode #68 — The Untold Truth From Inside The Walls",
    thumbnail: "/assets/flyer%202.jpeg",
    assetUrl: "/assets/flyer%202.jpeg",
    caption: "Episode #68: Correctional Sergeant Whitfield — The untold truth from inside the walls. Faith, marriage, growth. Watch now on YouTube! 👇",
    hashtags: "#SacrificialConversations #Episode68 #InsideTheWalls #RealTalk #FaithMarriageGrowth #Podcast",
    platform: "Instagram Feed",
  },
  {
    id: "s3",
    type: "static",
    aspectRatio: "3/4",
    title: "Flyer 03: Episode #68 — Watch Now on YouTube",
    thumbnail: "/assets/flyer%203.jpeg",
    assetUrl: "/assets/flyer%203.jpeg",
    caption: "The conversation you don't want to miss. Episode #68 with Correctional Sergeant Whitfield. Watch now on YouTube — link in bio! 🔥",
    hashtags: "#SacrificialConversations #Episode68 #WatchNow #YouTube #Nashville #PodcastClips",
    platform: "Facebook / Instagram",
  },
  // Long Form Settings
  {
    id: "longform-1",
    type: "longform",
    aspectRatio: "16/9",
    title: "Long Form Video Optimization (Ep. 68)",
    thumbnail: "/assets/e30d4e0e-bf9c-4016-afa4-5767533c0529.jpeg",
    thumbnailAssetUrl: "/assets/e30d4e0e-bf9c-4016-afa4-5767533c0529.jpeg",
    longformSteps: [
      {
        step: "Step 1: Change the Title",
        action: "",
        content: "Current title: \"Ep.68 Life on the Other Side of the Cell\"\n(Problem: This sounds a bit like a documentary. We need drama!)\n\nAction: Copy and paste one of these titles or enter all of them into the A/B testing titles section.\n\nCorrectional Officer REVEALS: Why Inmates Choose Prison Over Freedom | Ep. 68\nSurviving Maximum Security: A Sergeant’s Guide to Mental Warfare | Ep. 68\nLife Inside a Max Security Prison: The Truth About Officers & Inmates | Ep. 68"
      },
      {
        step: "Step 2: Update the Description Box",
        action: "",
        content: "The description helps YouTube find new viewers.\n\nAction: Delete the old description and paste this in:\n\nIn this raw episode of Sacrificial Conversations, Teddy & Monica sit down with Sergeant Whitfield, a 13-year veteran of a maximum security prison. They go beyond the bars to discuss the mental toll of the job, the shocking 80% demographic statistic, and the story of an officer who broke down and quit.\nBroadcasted live on WFTB 104.1 TabNashville, this conversation exposes the sacrifice of those who work in the shadows.\n\nChapters:\n0:00 Intro\n5:00 First Day in a Max Security Prison\n15:00 The Hard Stat: 80% African American Population\n27:30 Why Inmates Choose Prison Over Freedom\n37:30 The \"Hyper-Vigilance\": Watching Exits at Restaurants\n43:00 The Officer Who Snapped & Quit\n54:13 Final Warning: \"Stay Free\"\n\n#SacrificialConversations #PrisonLife #CorrectionalOfficer #WFTB #RealTalk"
      },
      {
        step: "Step 3: Add These Tags",
        action: "",
        content: "This helps the search engine.\n\nAction: Copy these into the \"Tags\" section at the bottom of the edit page:\n\n#PrisonLife #CorrectionalOfficer #MaximumSecurityPrison #InmateStories #PrisonDocumentary #Institutionalized #MassIncarceration #PrisonMentalHealth #FearOfFreedom #LifeBehindBars #SacrificialConversations #TeddyAndMonica #WFTB1041 #WhyInmatesStayInPrison #TruthAboutPrisonGuards"
      },
      {
        step: "Step 4: The \"Pinned Comment\"",
        action: "",
        content: "This starts the conversation in the comment section.\n\nAction:\nGo to the video comments section.\n\nPost this comment from your account:\n\n\"Sergeant Whitfield said 80% of the inmates in his facility are African American. What is the FIRST step our community needs to take to lower this number? Let's talk below. 👇\"\n\nClick the three dots next to your comment and select \"Pin\"."
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 bg-black min-h-screen overflow-x-hidden">
      {/* Hero header — stacks on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-10 sm:mb-16 md:mb-20 border-b border-zinc-800 pb-6 sm:pb-8">
        <div className="w-full">
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 block">Weekly Distribution</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-tight">
            Weekly <br className="sm:hidden" /> Content Hub
          </h2>
        </div>
        <div className="w-full md:w-auto md:text-right flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 md:gap-1">
          <p className="text-zinc-400 text-xs sm:text-sm uppercase tracking-widest font-mono">
            Current Week: <span className="text-white">Feb 23 - Mar 01, 2026</span>
          </p>
          <p className="text-zinc-600 text-[10px] sm:text-xs uppercase tracking-widest font-mono flex items-center gap-2">
            Status: <span className="text-emerald-500 inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Ready</span>
          </p>
        </div>
      </div>

      {/* Videos/Shorts Section (9:16) — 2 columns on sm+, single on mobile */}
      <div className="mb-14 sm:mb-20">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
          <Film className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Short-Form Clips (9:16)</h3>
          <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {WEEKLY_CONTENT.filter(item => item.type === "video").map((item) => (
            <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} onPreview={setPreviewItem} />
          ))}
        </div>
      </div>

      {/* Digital Flyers Section (3:4) — 1 col mobile, 2 sm, 3 lg */}
      <div className="mb-14 sm:mb-20">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
          <Layout className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
            Digital Flyers <span className="text-red-600 font-normal normal-case text-sm sm:text-base tracking-normal">Use for social media posts to promote the latest podcast</span>
          </h3>
          <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WEEKLY_CONTENT.filter(item => item.type === "static").map((item) => (
            <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} onPreview={setPreviewItem} />
          ))}
        </div>
      </div>

      {/* Long Form Optimization Section — single col mobile, side-by-side lg */}
      <div className="mb-14 sm:mb-20">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
          <Youtube className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Long-Form Optimization</h3>
          <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
        </div>
        
        {WEEKLY_CONTENT.filter(item => item.type === "longform").map((item) => (
          <div key={item.id} className="bg-zinc-900/30 border border-zinc-800 p-4 sm:p-6 lg:p-10 rounded-sm">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2">Optional thumbnail for your video — download below if you want to use it</p>
                <div className="aspect-video relative border border-zinc-800 bg-black overflow-hidden rounded-sm">
                  <Image src={item.thumbnail} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl">{item.title}</h4>
                <p className="text-zinc-500 text-xs sm:text-sm mt-2 font-mono uppercase tracking-widest">Target: YouTube Algorithm</p>
                {/* Optional: download thumbnail for YouTube upload */}
                {item.thumbnailAssetUrl && (
                  <a
                    href={item.thumbnailAssetUrl}
                    download={item.thumbnailAssetUrl.split("/").pop() || "thumbnail.jpeg"}
                    className="inline-flex items-center gap-2 mt-3 min-h-[44px] px-4 py-2 bg-zinc-800 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download thumbnail
                  </a>
                )}
              </div>
              
              <div className="flex-1 min-w-0 space-y-6 sm:space-y-8">
                {item.longformSteps?.map((step, idx) => (
                  <div key={idx} className="border-l-2 border-red-600 pl-4 sm:pl-6 py-2">
                    <h5 className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">{step.step}</h5>
                    <p className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3">{step.action}</p>
                    <div className="relative group">
                      <pre className="bg-zinc-950 p-3 sm:p-4 border border-zinc-800 text-zinc-300 text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto rounded-sm">
                        {step.content}
                      </pre>
                      <button 
                        onClick={() => copyToClipboard(step.content, `${item.id}-step-${idx}`)}
                        className="absolute top-2 right-2 min-h-[44px] min-w-[44px] sm:min-w-0 sm:min-h-0 px-4 py-3 sm:px-3 sm:py-1.5 bg-zinc-800 hover:bg-red-600 text-white text-xs sm:text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm flex items-center justify-center"
                        aria-label="Copy to clipboard"
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

      {/* Fullscreen preview modal — responsive, touch-friendly close and download */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-3 sm:p-4"
            onClick={() => setPreviewItem(null)}
          >
            <button
              type="button"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-400 hover:text-white active:text-white transition-colors rounded-sm"
              onClick={() => setPreviewItem(null)}
              aria-label="Close preview"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
            <div
              className={`relative bg-black border border-zinc-800 shadow-2xl w-full ${previewItem.aspectRatio === "9/16" ? "aspect-[9/16] max-h-[85vh] sm:max-h-[90vh]" : "aspect-[3/4] max-h-[85vh] sm:max-h-[90vh]"}`}
              style={{ maxWidth: previewItem.aspectRatio === "9/16" ? "min(100%, calc(90vh * 9 / 16))" : "min(100%, calc(90vh * 3 / 4))" }}
              onClick={(e) => e.stopPropagation()}
            >
              {previewItem.type === "longform" ? (
                <div className="w-full h-full p-4 sm:p-6 lg:p-8 overflow-y-auto overflow-x-hidden bg-zinc-950">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase tracking-tighter mb-6 sm:mb-8 border-b border-zinc-800 pb-3 sm:pb-4">{previewItem.title}</h3>
                  <div className="space-y-8 sm:space-y-10">
                    {previewItem.longformSteps?.map((step, idx) => (
                      <div key={idx} className="border-l-2 border-red-600 pl-4 sm:pl-6">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">{step.step}</h4>
                        <p className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3">{step.action}</p>
                        <pre className="bg-black p-4 sm:p-6 border border-zinc-800 text-zinc-300 text-[11px] sm:text-sm leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto rounded-sm">
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {previewItem.type !== "longform" && (
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 to-transparent border-t border-zinc-800">
                  <p className="text-white text-[11px] sm:text-xs font-medium mb-1 line-clamp-2">{previewItem.instructions ? previewItem.instructions[0].caption : previewItem.caption}</p>
                  <p className="text-red-500/90 font-mono text-[9px] sm:text-[10px] mb-3 line-clamp-1 break-all">{previewItem.instructions ? previewItem.instructions[0].hashtags : previewItem.hashtags}</p>
                  <div className="flex flex-wrap gap-2">
                    {previewItem.assetUrl && (
                      <a
                        href={previewItem.assetUrl}
                        download={previewItem.assetUrl.split("/").pop() || "video.mp4"}
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-3 sm:py-2 bg-red-600 hover:bg-red-500 active:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm"
                      >
                        <Download className="w-4 h-4 flex-shrink-0" />
                        Download Video
                      </a>
                    )}
                    {previewItem.thumbnailAssetUrl && (
                      <a
                        href={previewItem.thumbnailAssetUrl}
                        download={previewItem.thumbnailAssetUrl.split("/").pop() || "thumbnail.webp"}
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-3 sm:py-2 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-600 text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm border border-zinc-600"
                      >
                        <Download className="w-4 h-4 flex-shrink-0" />
                        Download Thumbnail
                      </a>
                    )}
                  </div>
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
      viewport={{ once: true, margin: "-20px" }}
      className="flex flex-col bg-zinc-900/30 border border-zinc-800 group hover:border-red-600/50 active:border-red-600/50 transition-all duration-300 rounded-sm overflow-hidden relative"
    >
      {/* New Badge */}
      {item.isNew && (
        <div className="absolute top-3 right-3 z-20 bg-emerald-500 text-black text-[10px] sm:text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-sm shadow-xl border border-emerald-400/50 animate-pulse">
          New
        </div>
      )}
      {/* Tap/click to open fullscreen preview — view before download */}
      <button
        type="button"
        onClick={() => onPreview(item)}
        className={`relative overflow-hidden bg-black w-full text-left cursor-pointer touch-manipulation ${item.aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-[3/4]"}`}
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-80 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"
        />
        {/* Platform Badge — readable on all screens */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
          <span className="px-2 py-1.5 sm:py-1 bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] sm:text-[10px] font-bold text-white uppercase tracking-widest rounded-sm max-w-[85%] truncate">
            {item.platform || (item.instructions ? item.instructions[0].platform : "")}
          </span>
        </div>
        {/* Mobile: always show tap hint (no hover on touch). Desktop: show on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-0 sm:inset-0 sm:bg-black/40 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end sm:justify-center gap-2 sm:gap-3 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:from-transparent sm:via-transparent">
          <span className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm sm:rounded-none">
            <Play className="w-4 h-4 flex-shrink-0" />
            Tap to view
          </span>
          {item.assetUrl && (
            <a
              href={item.assetUrl}
              download={item.assetUrl.split("/").pop() || "download"}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 sm:py-2 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-700 text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm sm:rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-3.5 h-3.5" />
              Video
            </a>
          )}
          {item.thumbnailAssetUrl && (
            <a
              href={item.thumbnailAssetUrl}
              download={item.thumbnailAssetUrl.split("/").pop() || "thumbnail.webp"}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 sm:py-2 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-700 text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm sm:rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-3.5 h-3.5" />
              Thumbnail
            </a>
          )}
        </div>
      </button>

      {/* Content Details — responsive padding and typography */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h4 className="text-white font-bold uppercase tracking-wide text-base sm:text-sm mb-3 sm:mb-4 border-b border-zinc-800 pb-2 line-clamp-2 sm:line-clamp-none">
          {item.title}
        </h4>
        
        <div className="space-y-5 sm:space-y-6 flex-1">
          {item.instructions ? (
            item.instructions.map((inst, idx) => (
              <div key={idx} className="border-l-2 border-zinc-800 sm:border-l pl-3 sm:pl-4 py-1">
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="px-2 py-1 sm:py-0.5 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] sm:text-[9px] font-bold uppercase tracking-widest rounded-sm">
                    {inst.platform}
                  </span>
                  <span className="text-[10px] sm:text-[9px] text-zinc-600 uppercase tracking-widest font-mono">Posting: {inst.postingTime}</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center gap-2 mb-1">
                      <span className="text-[10px] sm:text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Caption</span>
                      <button 
                        onClick={() => onCopy(inst.caption, `${item.id}-${idx}-cap`)}
                        className="min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 px-3 py-2 sm:px-0 sm:py-0 text-red-500 hover:text-red-400 active:text-red-400 text-xs sm:text-[9px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center sm:inline"
                        aria-label="Copy caption"
                      >
                        {copiedId === `${item.id}-${idx}-cap` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="text-zinc-400 text-[11px] sm:text-[11px] leading-relaxed italic bg-zinc-950/50 p-2.5 sm:p-2 border border-zinc-800/50 rounded-sm line-clamp-4 sm:line-clamp-none">
                      "{inst.caption}"
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center gap-2 mb-1">
                      <span className="text-[10px] sm:text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Hashtags</span>
                      <button 
                        onClick={() => onCopy(inst.hashtags, `${item.id}-${idx}-hash`)}
                        className="min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 px-3 py-2 sm:px-0 sm:py-0 text-red-500 hover:text-red-400 active:text-red-400 text-xs sm:text-[9px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center sm:inline"
                        aria-label="Copy hashtags"
                      >
                        {copiedId === `${item.id}-${idx}-hash` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="text-red-600/80 font-mono text-[10px] sm:text-[9px] leading-relaxed break-words bg-zinc-950/50 p-2.5 sm:p-2 border border-zinc-800/50 rounded-sm">
                      {inst.hashtags}
                    </p>
                  </div>

                  {inst.sound && (
                    <div className="pt-1">
                      <span className="text-[10px] sm:text-[9px] text-zinc-600 uppercase tracking-widest font-bold block mb-1">Sound</span>
                      <p className="text-zinc-500 text-[11px] sm:text-[10px] leading-snug">{inst.sound}</p>
                    </div>
                  )}
                  
                  {inst.thumbnailStrategy && (
                    <div className="pt-1">
                      <span className="text-[10px] sm:text-[9px] text-zinc-600 uppercase tracking-widest font-bold block mb-1">Thumbnail</span>
                      <p className="text-zinc-500 text-[11px] sm:text-[10px] leading-snug">{inst.thumbnailStrategy}</p>
                    </div>
                  )}

                  {inst.cta && (
                    <div className="pt-1">
                      <span className="text-[10px] sm:text-[9px] text-zinc-600 uppercase tracking-widest font-bold block mb-1">CTA</span>
                      <p className="text-emerald-500/80 text-[11px] sm:text-[10px] leading-snug font-medium">{inst.cta}</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center gap-2 mb-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Caption</span>
                  <button 
                    onClick={() => onCopy(item.caption || "", `${item.id}-cap`)}
                    className="min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 px-3 py-2 sm:px-0 sm:py-0 text-red-500 hover:text-red-400 text-xs sm:text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center sm:inline"
                    aria-label="Copy caption"
                  >
                    {copiedId === `${item.id}-cap` ? "Copied!" : "Copy"}
                  </button>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed italic line-clamp-4 bg-zinc-950/50 p-2.5 sm:p-2 border border-zinc-800/50 rounded-sm">
                  "{item.caption}"
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center gap-2 mb-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Hashtags</span>
                  <button 
                    onClick={() => onCopy(item.hashtags || "", `${item.id}-hash`)}
                    className="min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 px-3 py-2 sm:px-0 sm:py-0 text-red-500 hover:text-red-400 text-xs sm:text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center sm:inline"
                    aria-label="Copy hashtags"
                  >
                    {copiedId === `${item.id}-hash` ? "Copied!" : "Copy"}
                  </button>
                </div>
                <p className="text-red-600/80 font-mono text-[10px] leading-relaxed break-words bg-zinc-950/50 p-2.5 sm:p-2 border border-zinc-800/50 rounded-sm">
                  {item.hashtags}
                </p>
              </div>
            </div>
          )}
        </div>

        {(item.assetUrl || item.thumbnailAssetUrl) && (
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            {item.assetUrl && (
              <a
                href={item.assetUrl}
                download={item.assetUrl.split("/").pop() || "video.mp4"}
                className="w-full min-h-[48px] py-3.5 sm:py-3 bg-zinc-800 hover:bg-red-600 active:bg-red-600 text-white text-xs sm:text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-sm"
              >
                <Download className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" />
                {item.thumbnailAssetUrl ? "Download Video" : "Download Asset"}
              </a>
            )}
            {item.thumbnailAssetUrl && (
              <a
                href={item.thumbnailAssetUrl}
                download={item.thumbnailAssetUrl.split("/").pop() || "thumbnail.webp"}
                className="w-full min-h-[48px] py-3.5 sm:py-3 bg-zinc-800 hover:bg-red-600 active:bg-red-600 text-white text-xs sm:text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-sm border border-zinc-700"
              >
                <Download className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" />
                Download Thumbnail
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
