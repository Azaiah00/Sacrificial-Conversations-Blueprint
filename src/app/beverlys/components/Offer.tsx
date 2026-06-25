import Section from "./Section";
import DataTable from "./DataTable";

// Sections 05, 06, 06b — Pricing, Insurance, Vendors.
export default function Offer() {
  return (
    <>
      <Section id="pricing" num="05" title="Pricing & Services">
        <h3 className="text-2xl font-semibold text-white mb-4">
          The Wig Boutique Menu — Confirmed by Teddy Locked
        </h3>
        <p className="text-zinc-300 mb-4">
          Every wig at Beverly&apos;s is custom human hair — custom-colored and custom-cut by Teddy. No synthetic. No ready-made. Every piece is a craft product. Medical and cranial prosthesis clients receive private appointments with complete discretion.
        </p>
        <p className="text-zinc-400 text-sm italic mb-6">
          Prices confirmed by Teddy on phone, May 14, 2026. These are the guaranteed set prices — publish everywhere.
        </p>

        <div className="border border-yellow-500/20 bg-yellow-900/10 p-6 rounded-lg mb-8">
          <h4 className="text-yellow-500 font-bold mb-2">Why No Synthetic</h4>
          <p className="text-zinc-300 text-sm">
            Synthetic wigs can&apos;t be colored. They can&apos;t take heat. They can&apos;t be razor-cut to a client&apos;s face the way real hair can. Selling synthetic would mean selling something Teddy can&apos;t put his craft into — and Beverly&apos;s whole differentiator is the master-colorist work. <strong className="text-white">The price floor goes from $150 to $400 — and that&apos;s the point.</strong> Beverly&apos;s isn&apos;t competing with Amazon. Beverly&apos;s is the craft option.
          </p>
        </div>

        <DataTable
          headers={["Service", "Price", "Time", "Notes"]}
          rows={[
            ["Wig Consultation", "$50 (applied to order)", "45 min", "Required for all custom orders"],
            ["Custom Wig (Human Hair)", "$400 – $1,000", "2 weeks", "Entry point. Fully custom human hair · color-matched, razor-cut, fitted to measurements. Every piece is bespoke."],
            ["Luxury Custom Wig", "$2,000 – $3,500+", "3 weeks", "HD lace · hand-tied · custom color · top-tier raw human hair"],
            ["Cranial Prosthesis (Medical Wig)", "Varies", "Consult", "Custom human hair for alopecia / chemo / medical. May be insurance-reimbursable."],
            ["Wig Maintenance & Restyle", "Starting at $55", "60 min", "Deep clean, condition, restyle"],
            ["Wig Installation", "Starting at $100", "45 min", "Adhesive, tape, or stocking cap"],
            ["Custom Color Service (on wig)", "Starting at $200", "2–3 hrs", "Beverly's signature. Bespoke color match or transformation on a human hair wig"],
          ]}
        />

        <h4 className="text-xl font-bold text-white mt-10 mb-4">No Ready-Made Tier — Everything Is Custom</h4>
        <p className="text-zinc-300 mb-8">
          Teddy doesn&apos;t sell ready-made wigs, even in human hair. <strong className="text-white">Every wig that leaves Beverly&apos;s is custom-built.</strong> The 2-week turnaround on the entry tier ($400–$1,000) is the floor. There is no &quot;walk-out same day&quot; option — and that&apos;s the positioning. Beverly&apos;s competes on craft and fit, not on speed-to-shelf.
        </p>

        <h4 className="text-xl font-bold text-white mb-6">The Two Confirmed Custom Tiers Confirmed by Teddy</h4>
        <p className="text-zinc-300 mb-6">
          Synthetic and ready-made are both out. Beverly&apos;s has two clean custom-human-hair tiers — confirmed by Teddy by phone, May 14, 2026. Every wig is custom. Every wig is human hair. Every wig gets Teddy&apos;s color and razor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h5 className="text-yellow-500 font-bold mb-2">Tier 1 — Custom Human Hair Core</h5>
            <p className="text-2xl font-bold text-white mb-3">$400 – $1,000</p>
            <p className="text-zinc-400 text-sm">Entry-level custom build. Human hair · color-matched, razor-cut, fitted to measurements. 2-week turnaround. This is Beverly&apos;s bread-and-butter.</p>
          </div>
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h5 className="text-yellow-500 font-bold mb-2">Tier 2 — Luxury Custom</h5>
            <p className="text-2xl font-bold text-white mb-3">$2,000 – $3,500+</p>
            <p className="text-zinc-400 text-sm">HD lace · hand-tied · top-tier raw human hair · bespoke color. 3-week turnaround. The flagship piece.</p>
          </div>
        </div>
        <p className="text-zinc-300 mb-4">
          <strong>Cranial prosthesis (medical):</strong> priced inside the Tier 1 / Tier 2 ranges depending on construction. May be insurance-reimbursable. Custom human hair only.
        </p>
        <p className="text-zinc-400 text-sm italic mb-10">
          The gap between $1,000 and $2,000 is intentional. Tier 1 is the workhorse custom build. Tier 2 is the flagship — significantly different in cap construction (HD lace, hand-tied), hair grade (raw vs. processed), and time investment. Clients self-select up to Tier 2 because they want the difference, not because they&apos;re being upsold.
        </p>

        <h4 className="text-xl font-bold text-white mb-4">Where the Old Pricing Lives — Update Now Action</h4>
        <p className="text-zinc-300 mb-4">
          Teddy has confirmed the pricing above. These places still carry old/incorrect numbers and need to be revised this week to match. Treat this as a hard checklist, not a proposal.
        </p>
        <DataTable
          headers={["Source", "Currently States", "Action"]}
          rows={[
            ["Service Menu PDF (Section 04)", "Lists Synthetic $150–400 AND Ready-Made Human Hair $400–920 as separate services", "Remove both. Replace with single Custom Wig $400–$1,000 tier + Luxury Custom $2,000–$3,500+ tier."],
            ["Website index.html (#wigs)", "Signature $150–400 · Luxury $400–1,200 · Medical $350–3,500+", "Rename: Custom Wig $400–$1,000 · Luxury Custom $2,000–$3,500+ · Medical Custom (varies). Remove Signature tier entirely."],
            ["Caption Playbook (Day 3)", "Three-tier IG caption with synthetic + ready-made references", "Rewrite caption — two tiers only: Custom human hair starts at $400. Luxury custom starts at $2,000. We don't sell synthetic. We don't sell ready-made. Every wig is built for you."],
            ["Linktree Setup Guide", "Wig clients spend $780–$3,000+", "Update to: Custom human hair wigs · $400–$3,500+"],
            ["Wig Video v2 voiceover", "Cheap wigs start at $50. My custom units start at $375.", "Update to: Off-the-shelf synthetic wigs start at $50. My custom human hair units start at $400 — and every one is colored and cut by hand. Re-record once Teddy approves."],
          ]}
        />
      </Section>

      <Section id="insurance" num="06" title="Insurance & Certification">
        <h3 className="text-2xl font-semibold text-white mb-4">The Cranial Prosthesis Angle</h3>
        <p className="text-zinc-300 mb-8">
          The single biggest reason patients choose a specialist wig boutique over Amazon or a department store. Most patients have no idea their insurance may cover this — the right framing turns a $1,500 wig into a $250 out-of-pocket purchase.
        </p>

        <div className="border border-yellow-500/20 bg-yellow-900/10 p-6 rounded-lg mb-8">
          <h4 className="text-yellow-500 font-bold mb-4">The Insurance Talk Track — For Every Patient</h4>
          <ul className="space-y-2 text-zinc-300 text-sm list-disc list-inside">
            <li>Many insurance plans, including Medicare Part B, cover cranial prostheses under &quot;Durable Medical Equipment.&quot;</li>
            <li>Patients need a written prescription from their oncologist. <strong>The prescription must say &quot;cranial prosthesis&quot; — not &quot;wig.&quot;</strong></li>
            <li>Coverage varies. Some plans cover full cost; others a set dollar amount ($150–$350 is common).</li>
            <li>Patients should call insurance before the appointment to ask about benefit and pre-authorization.</li>
            <li>Beverly&apos;s provides the itemized receipt and documentation needed to submit a claim.</li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Recommended Provider: Wig Medical</h4>
        <DataTable
          headers={["Tier", "Cost", "What's Included"]}
          rows={[
            ["Digital Only Recommended", "$197", "Online modules, downloadable cert, NPI guidance, superbill template, HIPAA training"],
            ["Digital Bundle Skip", "$497", "Same as Digital Only + generic vendor list + DermAtlas directory — we've built better, Nashville-specific versions in-house"],
            ["All Courses + Physical Kit", "Higher", "Full bundle plus Cranial Prosthesis Specialist Kit (optional later add-on)"],
          ]}
        />

        <div className="mt-8 p-6 border border-zinc-800 rounded-lg">
          <h4 className="text-white font-bold mb-4">Budget</h4>
          <DataTable
            headers={["Item", "Cost"]}
            rows={[
              ["Wig Medical Digital Only", "$197"],
              ["NPI Number application", "Free"],
              ["Documentation supplies", "~$50"],
              ["Updated brochures + referral cards", "~$150"],
              ["Total", "~$400 (saves $300 vs. Bundle)"],
            ]}
          />
          <p className="text-zinc-300 mt-4 text-sm">
            <strong>Break-even:</strong> A single insurance-billed sale at $1,500 with $1,200 reimbursement (typical) pays back the entire course + setup more than three times over. <strong>Break-even is one wig.</strong>
          </p>
        </div>
      </Section>

      <Section id="vendors" num="06b" title="Wig Sourcing & Vendor List">
        <h3 className="text-2xl font-semibold text-white mb-4">Human Hair Vendors Only — No Synthetic</h3>
        <p className="text-zinc-300 mb-6">
          Custom-built for Beverly&apos;s human-hair-only positioning. Tier 1 = medical / cranial prosthesis suppliers · Tier 2 = premium human hair · Tier 3 = custom construction materials · Tier 4 = regional distributors. Synthetic vendors removed. Full list at 06 - Salon Operations / Beverlys-Wig-Sourcing-Vendor-List.docx.
        </p>

        <div className="border border-yellow-500/20 bg-yellow-900/10 p-6 rounded-lg mb-8">
          <h4 className="text-yellow-500 font-bold mb-2">Pricing Strategy Cheat-Sheet</h4>
          <p className="text-zinc-300 text-sm mb-2">
            <strong>Cost-of-goods rule:</strong> Beverly&apos;s retail = 2.5–4× vendor cost. A $250 wholesale human hair unit retails at $625–1,000. A $900 wholesale custom retails at $2,250–3,600.
          </p>
          <p className="text-zinc-400 text-sm">
            Cranial prostheses sold under insurance billing typically have lower margin (~2×) but much higher conversion and reliable reimbursement.
          </p>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Recommended Opening Set (First 30 Days)</h4>
        <p className="text-zinc-300 mb-4">Start with 3 vendors — not 30. All three are 100% human hair sources that Teddy can color and cut.</p>
        <DataTable
          headers={["Vendor", "Tier", "Why Start Here"]}
          rows={[
            ["Indique Hair", "Tier 1 + Tier 2 (Custom + Luxury Custom)", "Raw human hair (Indian + Brazilian) · stylist program · perfect for Beverly's Black-women core demographic. The workhorse vendor for custom builds at every price point."],
            ["Bohyme", "Tier 1 (Custom — bundle/material sourcing)", "Remy human hair bundles · wholesale-friendly · stock as raw material for entry-level custom builds ($400–$1,000 finished pieces)."],
            ["New Image", "Cranial Prosthesis (post-cert)", "Built for medical insurance billing · superbill alignment · the production engine for cranial prostheses once Teddy has his NPI."],
          ]}
        />
        <p className="text-zinc-400 text-sm italic mt-4">
          Before you order: always verify MOQs, current wholesale pricing, lead times, and sample programs by phone. Vendor lists in this industry shift quickly.
        </p>
      </Section>
    </>
  );
}
