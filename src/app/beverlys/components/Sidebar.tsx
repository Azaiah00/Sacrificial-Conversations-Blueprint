"use client";

// Left side navigation for the Beverly's wig strategy brief.
// Groups all 17 sections under five headings, mirroring the source brief.
// Tracks which section is on screen and highlights it. Collapses on mobile.

import { useEffect, useState } from "react";

// The full section map. Each group has a label and its sections.
// "id" must match the matching section id="" in the page.
const groups = [
  {
    label: "Foundation",
    items: [
      { id: "executive-summary", num: "01", name: "Executive Summary" },
      { id: "oncology-partners", num: "02", name: "Oncology Partners" },
      { id: "dermatology-partners", num: "02b", name: "Dermatology Partners" },
      { id: "outreach-letters", num: "03", name: "Outreach Letters" },
      { id: "follow-up", num: "04", name: "Follow-Up Cadence" },
    ],
  },
  {
    label: "The Offer",
    items: [
      { id: "pricing", num: "05", name: "Pricing & Services" },
      { id: "insurance", num: "06", name: "Insurance & Certification" },
      { id: "vendors", num: "06b", name: "Wig Vendor List" },
    ],
  },
  {
    label: "Marketing & Content",
    items: [
      { id: "social", num: "07", name: "Social Content" },
      { id: "viral-video", num: "08", name: "Viral Wig Video" },
      { id: "website-seo", num: "09", name: "Website & SEO" },
    ],
  },
  {
    label: "Patient Experience",
    items: [
      { id: "email", num: "10", name: "Email Touchpoints" },
      { id: "reviews", num: "11", name: "Google Reviews" },
      { id: "booking", num: "12", name: "Booking & Retention" },
      { id: "sensitivity", num: "13", name: "Sensitivity Module" },
    ],
  },
  {
    label: "Plan",
    items: [
      { id: "kpi", num: "14", name: "KPI Dashboard" },
      { id: "gaps", num: "15", name: "Gaps & Priorities" },
      { id: "roadmap", num: "16", name: "30-60-90 Roadmap" },
      { id: "assets", num: "17", name: "Asset Inventory" },
    ],
  },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");
  // Mobile drawer open/closed state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Watch which section is currently in view to highlight the nav.
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const allItems = groups.flatMap((g) => g.items);
      for (const item of allItems) {
        const el = document.getElementById(item.id);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveId(item.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to a section, leaving room for the fixed top navbar.
  const goTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  };

  // The list of groups + items, shared by desktop and mobile.
  const navList = (
    <nav className="space-y-6">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-yellow-500/80 mb-2 px-3">
            {group.label}
          </h3>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className={`w-full flex items-center gap-2 text-left px-3 py-1.5 rounded text-sm transition-colors border-l-2 ${
                    activeId === item.id
                      ? "text-yellow-400 border-yellow-500 bg-yellow-900/10"
                      : "text-zinc-400 border-transparent hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  <span className="font-mono text-[11px] text-zinc-600 w-6 shrink-0">
                    {item.num}
                  </span>
                  <span className="truncate">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar — fixed on the left, only visible on large screens */}
      <aside className="hidden lg:block fixed top-20 left-0 bottom-0 w-72 border-r border-yellow-600/20 bg-black/60 backdrop-blur-sm overflow-y-auto p-5 z-40">
        {navList}
      </aside>

      {/* Mobile toggle button — floats bottom-right */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-50 bg-yellow-500 text-black font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-lg shadow-yellow-500/30"
      >
        ☰ Sections
      </button>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Dark backdrop — tap to close */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto w-80 max-w-[85%] bg-zinc-950 border-l border-yellow-600/30 overflow-y-auto p-5 pt-16">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
            {navList}
          </div>
        </div>
      )}
    </>
  );
}
