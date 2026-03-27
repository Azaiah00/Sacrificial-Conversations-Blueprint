"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import WeeklyContentSection, { WeekData } from "@/components/sections/WeeklyContent";
import WeekSelector from "@/components/ui/WeekSelector";

// Import week data
import week1Data from "@/data/content/week1.json";
import week2Data from "@/data/content/week2.json";
import week3Data from "@/data/content/week3.json";
import week4Data from "@/data/content/week4.json";
import week5Data from "@/data/content/week5.json";
import week6Data from "@/data/content/week6.json";

const weekDataMap: Record<string, WeekData> = {
  "week-1": week1Data as WeekData,
  "week-2": week2Data as WeekData,
  "week-3": week3Data as WeekData,
  "week-4": week4Data as WeekData,
  "week-5": week5Data as WeekData,
  "week-6": week6Data as WeekData,
};

export default function WeeklyContentPage() {
  const [selectedWeekId, setSelectedWeekId] = useState("week-6"); // Default to latest week
  const [isSelectorOpen, setIsSelectorOpen] = useState(true);

  // You could also use localStorage or URL params to persist selection
  const currentWeekData = weekDataMap[selectedWeekId];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <div className="pt-20">
        <WeeklyContentSection 
          weekData={currentWeekData} 
          onChangeWeek={() => setIsSelectorOpen(true)}
        />
      </div>

      <WeekSelector 
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        onSelect={(weekId) => setSelectedWeekId(weekId)}
        currentWeekId={selectedWeekId}
      />
    </main>
  );
}
