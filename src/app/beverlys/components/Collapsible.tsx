"use client";

// Reusable expandable card. Used for outreach letters and email sequences.
// Click the header to toggle the content open/closed.

import { useState } from "react";

type CollapsibleProps = {
  title: string;
  // Optional small badge on the right (e.g. "Ready")
  badge?: string;
  children: React.ReactNode;
};

export default function Collapsible({ title, badge, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/40">
      {/* Header row — click to toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-zinc-900/80 transition-colors"
      >
        <span className="font-semibold text-white">{title}</span>
        <span className="flex items-center gap-3 shrink-0">
          {badge && (
            <span className="text-xs uppercase tracking-wider text-yellow-500 border border-yellow-500/40 rounded px-2 py-0.5">
              {badge}
            </span>
          )}
          {/* Arrow rotates when open */}
          <span
            className={`text-yellow-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </span>
      </button>

      {/* Body — only shown when open */}
      {open && (
        <div className="px-5 py-5 border-t border-zinc-800 text-zinc-300 leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}
