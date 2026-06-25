import Section from "./Section";
import DataTable from "./DataTable";
import Collapsible from "./Collapsible";

// Sections 07, 08, 09 — Social Content, Viral Video, Website & SEO.
export default function Marketing() {
  return (
    <>
      <Section id="social" num="07" title="Social Content">
        <h3 className="text-2xl font-semibold text-white mb-4">Wig World — The Content Pillar</h3>
        <p className="text-zinc-300 mb-6">
          2–3 wig posts per week. Seven dedicated posts per month, including the Day 13 medical-wig caption. From the 30-Day Caption Playbook.
        </p>

        <h4 className="text-xl font-bold text-white mb-4">The 7 Wig Posts in the 30-Day Calendar</h4>
        <DataTable
          headers={["Day", "Pillar", "Concept"]}
          rows={[
            ["3", "Wig World", "Three wig price points side by side (Signature vs Luxury vs Medical)"],
            ["9", "Wig World", "Custom fashion wig reveal — She wanted drama. We delivered."],
            ["10", "Teddy Teaches", "What $900 vs $90 wig looks like — split-screen comparison"],
            ["13 Flagship", "Wig World", "Medical wig fitting — compassionate, with client consent"],
            ["18", "Wig World", "How a custom wig is made from scratch — process timelapse"],
            ["23", "Wig World", "Wig maintenance tutorial — how to care for your custom wig"],
            ["28", "Wig World", "Wig rental program intro — rent a Beverly's wig for your event"],
          ]}
        />

        <h4 className="text-xl font-bold text-white mt-10 mb-4">Day 13 — The Medical Wig Caption Ready to Post</h4>
        <Collapsible title="Instagram + TikTok Captions (verbatim)">
          <div className="space-y-6">
            <div>
              <h5 className="text-yellow-500 font-bold mb-2">Instagram</h5>
              <blockquote className="border-l-4 border-yellow-500 pl-4 text-zinc-300 italic space-y-2">
                <p>This work is the work that matters most to us. 🙏</p>
                <p>Today we helped a client who&apos;s been through chemotherapy find herself in the mirror again.</p>
                <p>We specialize in medical wigs and cranial prostheses for clients experiencing hair loss from cancer treatment, alopecia, and other conditions. We provide the documentation needed for insurance reimbursement.</p>
                <p>If you or someone you love is navigating hair loss — reach out. We have you.</p>
                <p>📞 (615) 497-4215</p>
              </blockquote>
              <p className="text-zinc-500 text-xs mt-2">
                Hashtags: #MedicalWig #CranialProsthesis #CancerSupport #ChemoHairLoss #AlopeciaSupport #BeverlysOfNashville #WigBoutique #NashvilleWigs #HairLoss #CancerNashville
              </p>
            </div>
            <div>
              <h5 className="text-yellow-500 font-bold mb-2">TikTok</h5>
              <blockquote className="border-l-4 border-yellow-500 pl-4 text-zinc-300 italic">
                She hadn&apos;t had hair in 8 months. Today that changed. 🙏 We do medical wigs and cranial prostheses at Beverly&apos;s of Nashville. Insurance documentation provided.
              </blockquote>
            </div>
          </div>
        </Collapsible>

        <h4 className="text-xl font-bold text-white mt-10 mb-4">Teddy Teaches — Episode 03 Hook</h4>
        <div className="border border-zinc-800 p-6 rounded-lg">
          <h5 className="text-white font-bold mb-2">&quot;What to Know Before You Buy a Wig&quot;</h5>
          <p className="text-zinc-300 text-sm mb-2"><strong>Hook:</strong> &quot;She spent $800 on a wig that didn&apos;t fit. I&apos;m going to make sure that never happens to you.&quot;</p>
          <p className="text-zinc-300 text-sm mb-2"><strong>Intro:</strong> &quot;At Beverly&apos;s, I custom-fit wigs for women at every stage — from fashion to medical. And the #1 problem I see? People buy before they know what to ask.&quot;</p>
          <p className="text-zinc-300 text-sm"><strong>Key Q3 in the video:</strong> &quot;Do you need a medical fit? (alopecia, chemo, cranial prosthesis)&quot;</p>
        </div>
      </Section>

      <Section id="viral-video" num="08" title="Viral Wig Video Production">
        <h3 className="text-2xl font-semibold text-white mb-4">The Amore Colore Co-Marketing Plays</h3>
        <p className="text-zinc-300 mb-8">
          Two complete 30-second viral video productions built on a single shoot. Both are fashion/luxury positioning. Not cancer-specific — but the brand foundation that makes oncology referrers&apos; Google searches actually find a credible craft stylist.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">v1 — &quot;Italian color. Custom unit. One stylist.&quot;</h4>
            <span className="text-xs uppercase tracking-wider text-yellow-500 border border-yellow-500/40 rounded px-2 py-0.5">Ready to Ship</span>
            <ul className="mt-4 space-y-2 text-zinc-400 text-sm">
              <li><strong className="text-zinc-300">Format:</strong> 30s, 9:16 vertical, POV-Outcome hybrid hook</li>
              <li>Opens with the AFTER, rug-pulls to the Amore Colore product, then ASMR process</li>
              <li>Status: draft cut exists. Ready for CapCut polish: music + text overlays + SFX layer (~20 minutes)</li>
            </ul>
          </div>
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">v2 — &quot;$50 vs $375&quot; (Teddy voiceover)</h4>
            <span className="text-xs uppercase tracking-wider text-zinc-400 border border-zinc-600 rounded px-2 py-0.5">Awaiting VO</span>
            <ul className="mt-4 space-y-2 text-zinc-400 text-sm">
              <li><strong className="text-zinc-300">Hook:</strong> &quot;Cheap wigs start at $50. My custom units start at $375. Here&apos;s where that difference goes.&quot;</li>
              <li>Voiceover: ~95 words, 28 seconds of speaking</li>
              <li>Status: script locked. Awaiting Teddy&apos;s voice memo (3 takes, phone in a quiet bathroom)</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Success Metrics</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            ["3-Sec Retention", "65%+", "Below this, kill the cut"],
            ["Watch Time", "18s+", "60%+ completion"],
            ["DMs / Clicks", "48 hr", "Only metric for bookings"],
            ["AC Reshare", "Y/N", "If yes, repeat playbook"],
          ].map(([label, val, note]) => (
            <div key={label} className="border border-zinc-800 p-4 rounded-lg text-center">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{label}</div>
              <div className="text-2xl font-bold text-yellow-500">{val}</div>
              <div className="text-xs text-zinc-500 mt-1">{note}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="website-seo" num="09" title="Website & SEO">
        <h3 className="text-2xl font-semibold text-white mb-4">What&apos;s Already Live</h3>
        <p className="text-zinc-300 mb-6">
          Homepage wig section, SEO blog, academy page wig course, and tracking are all live or deploy-ready.
        </p>

        <div className="border border-zinc-800 p-6 rounded-lg mb-8">
          <h4 className="text-white font-bold mb-2">Homepage Wig Boutique Section</h4>
          <p className="text-zinc-400 text-sm mb-2">URL: beverlysofnashville.com/wigs (301 redirect to /#wigs). Headline: <strong className="text-white">&quot;A Wig for Every Woman.&quot;</strong></p>
          <blockquote className="border-l-4 border-yellow-500 pl-4 text-zinc-300 italic text-sm">
            Whether you&apos;re looking for a fashion statement, a protective style, or a compassionate solution during a health journey — Teddy crafts custom wigs for every woman, every lifestyle, every need.
          </blockquote>
        </div>

        <div className="border border-zinc-800 p-6 rounded-lg">
          <h4 className="text-white font-bold mb-2">The SEO Blog Post Live</h4>
          <p className="text-zinc-400 text-sm mb-2">URL: beverlysofnashville.com/blog/wigs-for-cancer-patients-nashville</p>
          <p className="text-zinc-300 text-sm mb-2">
            <strong>Target keywords:</strong> wigs for cancer patients Nashville, cranial prosthesis Nashville, medical wigs Nashville TN, hair loss chemotherapy Nashville, cancer wig specialist Nashville
          </p>
          <blockquote className="border-l-4 border-yellow-500 pl-4 text-zinc-300 italic text-sm mt-4">
            &quot;Got my first custom wig here and I am in love. The consultation was so professional and the result is stunning.&quot; — Jessica R.
          </blockquote>
        </div>
      </Section>
    </>
  );
}
