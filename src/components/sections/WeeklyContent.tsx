"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Film, Layout, CheckCircle2, X, Play, Youtube, ChevronDown, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ContentPost {
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

export interface WeekData {
  weekId: string;
  dates: string;
  status: string;
  content: ContentPost[];
}

interface WeeklyContentSectionProps {
  weekData: WeekData;
  onChangeWeek: () => void;
}

export default function WeeklyContentSection({ weekData, onChangeWeek }: WeeklyContentSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<ContentPost | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const videos = weekData.content.filter(item => item.type === "video");
  const statics = weekData.content.filter(item => item.type === "static");
  const longforms = weekData.content.filter(item => item.type === "longform");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 bg-black min-h-screen overflow-x-hidden">
      {/* Hero header — stacks on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-10 sm:mb-16 md:mb-20 border-b border-zinc-800 pb-6 sm:pb-8">
        <div className="w-full">
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 block">Weekly Distribution</span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-tight">
              Weekly Content Hub
            </h2>
            <button 
              onClick={onChangeWeek}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-red-600 text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm sm:mt-2"
            >
              Change Week <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto md:text-right flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 md:gap-1">
          <p className="text-zinc-400 text-xs sm:text-sm uppercase tracking-widest font-mono">
            Selected: <span className="text-white">{weekData.dates}</span>
          </p>
          <p className="text-zinc-600 text-[10px] sm:text-xs uppercase tracking-widest font-mono flex items-center gap-2">
            Status: {weekData.status === "Ready" ? (
              <span className="text-emerald-500 inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Ready</span>
            ) : (
              <span className="text-amber-500 inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 flex-shrink-0" /> {weekData.status}</span>
            )}
          </p>
        </div>
      </div>

      {/* Videos/Shorts Section (9:16) — 2 columns on sm+, single on mobile */}
      {videos.length > 0 && (
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
            <Film className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Short-Form Clips (9:16)</h3>
            <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {videos.map((item) => (
              <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} onPreview={setPreviewItem} />
            ))}
          </div>
        </div>
      )}

      {/* Digital Flyers Section (3:4) — 1 col mobile, 2 sm, 3 lg */}
      {statics.length > 0 && (
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
            <Layout className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              Digital Flyers <span className="text-red-600 font-normal normal-case text-sm sm:text-base tracking-normal">Use for social media posts to promote the latest podcast</span>
            </h3>
            <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {statics.map((item) => (
              <ContentCard key={item.id} item={item} onCopy={copyToClipboard} copiedId={copiedId} onPreview={setPreviewItem} />
            ))}
          </div>
        </div>
      )}

      {/* Long Form Optimization Section — single col mobile, side-by-side lg */}
      {longforms.length > 0 && (
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
            <Youtube className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Long-Form Optimization</h3>
            <div className="h-px bg-zinc-800 flex-1 min-w-[60px]" />
          </div>
          
          {longforms.map((item) => (
            <div key={item.id} className="bg-zinc-900/30 border border-zinc-800 p-4 sm:p-6 lg:p-10 rounded-sm mb-8 last:mb-0">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2">Optional thumbnail for your video — download below if you want to use it</p>
                  <div className="aspect-video relative border border-zinc-800 bg-black overflow-hidden rounded-sm">
                    {item.thumbnail ? (
                      <Image src={item.thumbnail} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500 text-xs font-mono uppercase tracking-widest px-4 text-center">
                        Thumbnail coming soon
                      </div>
                    )}
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
      )}

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
        <div className="absolute top-3 right-3 z-20 bg-emerald-500 text-black text-sm sm:text-base font-black uppercase tracking-tighter px-3 py-1.5 rounded-sm shadow-xl border-2 border-emerald-400/50 animate-pulse">
          New
        </div>
      )}
      {/* Tap/click to open fullscreen preview — view before download */}
      <button
        type="button"
        onClick={() => onPreview(item)}
        className={`relative overflow-hidden bg-black w-full text-left cursor-pointer touch-manipulation ${item.aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-[3/4]"}`}
      >
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-80 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500 text-xs font-mono uppercase tracking-widest px-4 text-center">
            Thumbnail coming soon
          </div>
        )}
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
