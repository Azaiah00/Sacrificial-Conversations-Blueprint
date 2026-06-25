import Image from "next/image";
import {
  Foundation,
  Offer,
  Marketing,
  PatientExperience,
  Plan,
} from "./components";

// Beverly's of Nashville — Wig Strategy Complete Interactive Brief.
// Content is split into group components to keep each file focused and small.

export default function BeverlysPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 pb-40">
      {/* Top eyebrow line */}
      <p className="text-xs uppercase tracking-[0.3em] text-yellow-500/80 mb-8 text-center">
        Beverly&apos;s of Nashville · May 2026
      </p>

      {/* Hero with logo */}
      <header className="mb-20 flex flex-col items-center text-center">
        <div className="w-72 h-28 relative mb-8">
          <Image
            src="/beverlys-logo-4bc5a928-c1fc-4146-a32f-e9a442092276.png"
            alt="Beverly's of Nashville Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-3">
          The Wig Boutique{" "}
          <span className="text-yellow-500 italic lowercase font-serif tracking-normal">
            Strategy
          </span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8">Complete Interactive Brief</p>
        <p className="text-zinc-300 max-w-2xl leading-relaxed">
          Everything we&apos;ve built to grow the wig business — outreach letters,
          pricing, social, viral video, the Cancer-Patient Consultation Module,
          certification plan, email sequences, and the 30-60-90 roadmap.
        </p>

        {/* Stat row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4 w-full max-w-3xl">
          {[
            ["17", "Sections"],
            ["4", "Oncology Partners"],
            ["3", "Outreach Letters"],
            ["2", "Viral Videos"],
            ["1", "Master Plan"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="border border-yellow-600/30 bg-yellow-900/10 rounded-lg py-4 px-2"
            >
              <div className="text-2xl font-bold text-yellow-500">{num}</div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="space-y-24">
        <Foundation />
        <Offer />
        <Marketing />
        <PatientExperience />
        <Plan />

        {/* Footer */}
        <footer className="pt-16 border-t border-yellow-600/20 text-center">
          <p className="text-lg font-bold text-white">
            Beverly&apos;s of Nashville · Wig Strategy Complete Brief
          </p>
          <p className="text-zinc-400 mt-2">
            3304 Nolensville Pike · Nashville, TN 37211 · (615) 497-4215
          </p>
        </footer>
      </div>
    </main>
  );
}
