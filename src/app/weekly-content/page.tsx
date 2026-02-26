"use client";

import Navbar from "@/components/ui/Navbar";
import WeeklyContentSection from "@/components/sections/WeeklyContent";

export default function WeeklyContentPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <div className="pt-20">
        <WeeklyContentSection />
      </div>
    </main>
  );
}
