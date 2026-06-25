import Section from "./Section";
import DataTable from "./DataTable";

// Sections 14, 15, 16, 17 — KPI, Gaps, Roadmap, Asset Inventory.
export default function Plan() {
  return (
    <>
      <Section id="kpi" num="14" title="KPI Dashboard">
        <h3 className="text-2xl font-semibold text-white mb-4">What Gets Tracked</h3>
        <p className="text-zinc-300 mb-8">
          From the 90-Day Results Dashboard. Wig Boutique pillar has three tracked rows.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            ["Wig Consultations / Mo", "5+", "Day 90 target"],
            ["Oncology Partners", "2+", "Active by Day 90"],
            ["Wig Revenue", "$$", "Tracked monthly"],
            ["Insurance-Billed", "Y/N", "Post-certification"],
          ].map(([label, val, note]) => (
            <div key={label} className="border border-zinc-800 p-4 rounded-lg text-center">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{label}</div>
              <div className="text-2xl font-bold text-yellow-500">{val}</div>
              <div className="text-xs text-zinc-500 mt-1">{note}</div>
            </div>
          ))}
        </div>

        <DataTable
          headers={["Metric", "Day 60 Target", "Day 90 Target"]}
          rows={[
            ["Wig Consultations / Month", "1–2", "5+"],
            ["Oncology Partners Active", "Outreach started", "2+ active"],
            ["Wig Revenue ($)", "—", "Tracked monthly"],
          ]}
        />

        <div className="mt-8 p-6 border border-yellow-500/20 bg-yellow-900/10 rounded-lg">
          <h4 className="text-yellow-500 font-bold mb-2">Day 90 Success Criterion</h4>
          <p className="text-zinc-300 italic">&quot;At least one oncology center is actively referring patients to Teddy for wig fittings.&quot;</p>
        </div>
      </Section>

      <Section id="gaps" num="15" title="Gaps & Priorities">
        <h3 className="text-2xl font-semibold text-white mb-6">What&apos;s Blocking, What&apos;s Filling, What&apos;s Future</h3>

        <div className="space-y-8">
          <div>
            <h4 className="text-red-400 font-bold uppercase tracking-wider text-sm mb-4">Critical — Blocking Revenue Blocker</h4>
            <ol className="space-y-2 text-zinc-300 list-decimal list-inside">
              <li>Reconcile wig pricing across all five sources. Cannot print brochures or one-pager until one truth is set.</li>
              <li>Build the wig boutique one-pager. Single most important missing deliverable.</li>
              <li>Pursue cranial prosthesis certification ($497 via Wig Medical). Full action plan in Section 06.</li>
              <li>Start the outreach. Letters drafted, tracker built. Vanderbilt social work first.</li>
            </ol>
          </div>
          <div>
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-4">Important — Filling Out the Funnel Pending</h4>
            <ol className="space-y-2 text-zinc-300 list-decimal list-inside">
              <li>Add &quot;Wig Consultation&quot; Square Appointments service type ($50 deposit, 60 min)</li>
              <li>Build wig client intake form — template ready in Sensitivity Module</li>
              <li>Film Day 13 medical wig content with client consent — caption already written</li>
              <li>Implement Oncology Referral tag scheme in Kit — full 11-tag spec in Section 10</li>
              <li>Ship Viral Wig Videos v1 + v2 — v1 needs CapCut polish (20 min), v2 needs Teddy&apos;s VO</li>
            </ol>
          </div>
          <div>
            <h4 className="text-zinc-400 font-bold uppercase tracking-wider text-sm mb-4">Strategic — Future Upside</h4>
            <ol className="space-y-2 text-zinc-300 list-decimal list-inside">
              <li>Dedicated Meta ad campaign for wig/cancer audience. Retargeting blog readers + wig page visitors.</li>
              <li>Quarterly &quot;Beautiful You&quot; events. Free wig styling day for oncology partner patients.</li>
              <li>Launch the $49 Sensitivity Module as an Academy add-on — already built (Section 13).</li>
              <li>Lock in the Amore Colore relationship before v1 video ships. First reshare is the proof.</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="roadmap" num="16" title="30-60-90 Roadmap">
        <h3 className="text-2xl font-semibold text-white mb-8">The Plan for the Wig Business</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              days: "Days 1–30",
              phase: "Foundation",
              tagline: "Send the letters. Lock the pricing. Ship v1.",
              items: [
                "Send all three oncology letters by end of week 1. Email first, mail follow-up at Day 7",
                "Lock pricing tiers with Teddy. Update website, service menu, captions, Linktree",
                "Build the wig boutique one-pager",
                "Add Wig Consultation Square Appointments service type ($50 deposit, 60 min)",
                "Confirm cranial prosthesis certification status. Register for Wig Medical if needed",
                "Ship Viral Wig Video v1 — CapCut polish, post TikTok Tuesday 7pm CT, IG Reels Wednesday",
                "Record Teddy's voiceover for v2",
                "Film one medical wig client reveal (with consent) for Day 13 content",
                "Implement Oncology Referral tag scheme in Kit",
              ],
            },
            {
              days: "Days 31–60",
              phase: "Build the Infrastructure",
              tagline: "Get certified. Meet a partner. Run the first ad test.",
              items: [
                "Complete cranial prosthesis certification (Wig Medical Digital Bundle)",
                "Receive NPI Number. Set up insurance superbill workflow in Square",
                "Add Beverly's to NACPS specialist directory",
                "Hold at least one in-person meeting with an oncology partner",
                "Print 200 brochures and 500 referral cards with QR code",
                "Launch dedicated wig-lead email sequence (Oncology Referral 4-email track)",
                "Ship Viral Wig Video v2",
                "Run first wig-focused Meta retargeting test ($300/month)",
                "Build the wig client intake form",
                "Update oncology letters to lead with new credential",
              ],
            },
            {
              days: "Days 61–90",
              phase: "Scale",
              tagline: "Two partners. Five consults a month. First insurance-billed sale.",
              items: [
                "Host first Beautiful You event with one oncology partner's patients",
                "2+ oncology partnerships actively referring",
                "5+ wig consultations per month sustainably",
                "Begin insurance-direct billing for cranial prostheses",
                "Add cancer-patient consultation module to Consultation Vault product (Academy upsell)",
                "Hit Day 90 success criterion: at least one oncology center actively referring",
              ],
            },
          ].map((block) => (
            <div key={block.days} className="border border-zinc-800 bg-black p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400" />
              <h4 className="text-xl font-bold text-white mb-1">{block.days}</h4>
              <p className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-2">{block.phase}</p>
              <p className="text-white font-medium mb-4 text-sm">{block.tagline}</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-yellow-500 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="assets" num="17" title="Asset Inventory">
        <h3 className="text-2xl font-semibold text-white mb-6">Everything We Have Built</h3>
        <p className="text-zinc-300 mb-8">Source files in the workspace, organized by function.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Outreach",
              items: [
                "3 oncology outreach letters (drafted, ready)",
                "Oncology Outreach Tracker (4 Nashville targets, cadence, phone script)",
                "Cranial Prosthesis Certification Action Plan v2 ✨ new",
                "Oncology Referral Email Track ✨ new",
                "Nashville Dermatologist Outreach Tracker (17 hair-loss specialists, tier-ranked) ✨ new",
                "Nashville Dermatologist Outreach Letter (standard + trichology variants) ✨ new",
              ],
            },
            {
              title: "Pricing & Service",
              items: [
                "Salon Service Menu — Section 04 Custom Wig Boutique",
                "Homepage wig boutique section (8 categories, 3 pricing tiers)",
                "Beverly's Wig Sourcing & Vendor List (8 tiers, 30+ vendors) ✨ new",
              ],
            },
            {
              title: "Content",
              items: [
                "30-day Caption Playbook — 7 wig posts with finished captions",
                "Hashtag banks (Wig World + Medical/Cranial)",
                "Day 13 medical wig caption (IG + TikTok verbatim)",
                "Teddy Teaches Episode 03 outline",
                "YouTube playlist plan + 2 wig video ideas",
                "Instagram + TikTok bio language + wig highlight reel plan",
                "Linktree wig boutique link strategy",
              ],
            },
            {
              title: "Video",
              items: [
                "Two complete 30s video productions (v1 + v2)",
                "13 source video clips + 2 draft cuts",
                "Amore Colore co-marketing playbook",
                "CapCut handoff card",
              ],
            },
            {
              title: "SEO & Web",
              items: [
                "Blog post live: blog-wigs-cancer-nashville.html",
                "Schema.org medical markup installed",
                "GA4 + Meta Pixel tracking on wig pages",
              ],
            },
            {
              title: "Patient Experience",
              items: [
                "Google review templates (standard + cranial prosthesis)",
                "Wig client retention script (8–12 week cadence)",
                "Cancer-Patient Consultation Sensitivity Module ✨ new",
                "Wig client intake form template (in Sensitivity Module)",
              ],
            },
            {
              title: "Academy / Products",
              items: [
                "$199 Wig Construction Companion (live digital product)",
                "$49 Cancer-Patient Consultation Module ✨ new",
                "Wig Construction & Custom Fitting course (forthcoming)",
              ],
            },
            {
              title: "Tracking",
              items: [
                "90-Day Results Dashboard (wig consults, oncology partners, wig revenue)",
                "Oncology Outreach Tracker (sources, statuses, follow-ups)",
              ],
            },
          ].map((group) => (
            <div key={group.title} className="border border-zinc-800 p-5 rounded-lg">
              <h4 className="text-yellow-500 font-bold mb-3">{group.title}</h4>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-zinc-400 text-sm flex gap-2">
                    <span className="text-yellow-500/60 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
