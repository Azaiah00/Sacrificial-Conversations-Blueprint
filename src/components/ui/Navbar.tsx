"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Diagnostic", target: "audit" },
  { name: "Strategy", target: "strategy" },
  { name: "Visuals", target: "deliverables" },
  { name: "Services", target: "services" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.getElementById(item.target);
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(item.target);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-zinc-800" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-xl skew-x-[-10deg] group-hover:bg-white group-hover:text-black transition-colors">
              <span className="skew-x-[10deg]">SC</span>
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tighter text-white uppercase font-display group-hover:text-red-600 transition-colors">
              Sacrificial<span className="text-red-600 group-hover:text-white">Conversations</span>
            </span>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-red-500",
                  activeSection === item.target ? "text-red-600" : "text-zinc-500"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button 
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors border-l-2",
                    activeSection === item.target
                      ? "text-red-600 border-red-600 bg-zinc-900/50"
                      : "text-zinc-500 border-transparent hover:text-white hover:border-zinc-600"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
