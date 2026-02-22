import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Audit from "@/components/sections/Audit";
import Strategy from "@/components/sections/Strategy";
import TikTokDeepDive from "@/components/sections/TikTokDeepDive";
import Optimization from "@/components/sections/Optimization";
import Deliverables from "@/components/sections/Deliverables";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />

      <div id="audit">
        <Audit />
      </div>

      <div id="strategy">
        <Strategy />
      </div>

      {/* TikTok Growth Engine — placed directly under The Algorithmic Imperative */}
      <TikTokDeepDive />

      <div id="optimization">
        <Optimization />
      </div>

      <div id="deliverables">
        <Deliverables />
      </div>

      <div id="services">
        <Services />
      </div>
    </main>
  );
}
