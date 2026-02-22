"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

const checklistItems = [
  { id: 1, text: "Split Screen: Joy Styles + Headline", weight: 1.5 },
  { id: 2, text: "Headline: 'THE TRUTH ABOUT NES' (Big/Readable)", weight: 1.5 },
  { id: 3, text: "ActBlue Link: Top of Description (No Googling)", weight: 1.0 },
  { id: 4, text: "Local SEO: Tagged 'Nashville, TN' in upload", weight: 1.2 },
  { id: 5, text: "Shorts: Linked to Full Video (Related Tab)", weight: 1.5 },
  { id: 6, text: "First 3s: No 'Hello'. Start with Conflict.", weight: 1.5 }
];

export default function Optimization() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [ctrScore, setCtrScore] = useState(2.1);

  const toggleCheck = (id: number, weight: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(prev => prev.filter(item => item !== id));
      setCtrScore(prev => Number((prev - weight).toFixed(1)));
    } else {
      setCheckedItems(prev => [...prev, id]);
      setCtrScore(prev => Number((prev + weight).toFixed(1)));
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Thumbnail Simulator */}
        <div className="bg-black p-10 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[64px]" />
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Thumbnail <br />Architect</h2>
            <div className="flex flex-col items-end">
               <span className="text-red-600 font-mono text-xs uppercase tracking-widest">Interactive Tool</span>
               <span className="text-zinc-600 text-[10px] uppercase">v2.4.0</span>
            </div>
          </div>
          
          <div className="space-y-3 mb-8">
            {checklistItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleCheck(item.id, item.weight)}
                className={`flex items-center justify-between p-4 border transition-all cursor-pointer group ${checkedItems.includes(item.id) ? 'bg-zinc-900 border-red-600' : 'bg-black border-zinc-800 hover:border-zinc-600'}`}
              >
                <span className={`font-mono text-sm uppercase tracking-wide transition-colors ${checkedItems.includes(item.id) ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>{item.text}</span>
                <div className={`h-5 w-5 border flex items-center justify-center transition-colors ${checkedItems.includes(item.id) ? 'bg-red-600 border-red-600' : 'border-zinc-700 bg-black'}`}>
                  {checkedItems.includes(item.id) && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-zinc-900 border border-zinc-800 flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Projected CTR</p>
              <p className="text-xs text-zinc-600">Base Rate: 2.1%</p>
            </div>
            <motion.div 
              key={ctrScore}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-5xl font-bold font-mono ${ctrScore > 6 ? 'text-green-500' : ctrScore > 4 ? 'text-amber-500' : 'text-red-600'}`}
            >
              {ctrScore}%
            </motion.div>
          </div>
        </div>

        {/* Right: Viral Anatomy */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
             <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">The Viral Short <br />Anatomy</h2>
             <p className="text-zinc-400 font-light leading-relaxed border-l-2 border-red-600 pl-4">
               Shorts are not just shorter videos. They are a distinct neurological experience. We engineer them for <span className="text-white font-semibold">retention velocity</span>.
             </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-600 font-bold text-xl group-hover:bg-red-600 group-hover:text-white transition-colors">01</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide mb-1">The 3-Second Ultimatum</h4>
                <p className="text-zinc-500 text-sm">Must begin in media res. No intros. No "Hello." Start with the most provocative statement.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-600 font-bold text-xl group-hover:bg-red-600 group-hover:text-white transition-colors">02</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide mb-1">Dynamic Subtitling</h4>
                <p className="text-zinc-500 text-sm">Bold, high-contrast, flashing captions. Highlight 1-3 words at a time to lock eyes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-600 font-bold text-xl group-hover:bg-red-600 group-hover:text-white transition-colors">03</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide mb-1">The Conversion Bridge</h4>
                <p className="text-zinc-500 text-sm">Hard-coded "Related Video" link funneling traffic to the long-form archive.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
