import Section from "./Section";
import DataTable from "./DataTable";
import Collapsible from "./Collapsible";

// Sections 10, 11, 12, 13 — Email, Reviews, Booking, Sensitivity Module.
export default function PatientExperience() {
  return (
    <>
      <Section id="email" num="10" title="Email Touchpoints">
        <h3 className="text-2xl font-semibold text-white mb-4">The Oncology Referral Email Track</h3>
        <p className="text-zinc-300 mb-6">
          Existing email program has two soft wig mentions. The new dedicated Oncology Referral track adds 11 Kit tags and two automated sequences — patient sequence (4 emails) and family member sequence (2 emails).
        </p>

        <h4 className="text-xl font-bold text-white mb-4">The New Kit Tag Scheme</h4>
        <DataTable
          headers={["Category", "Tags"]}
          rows={[
            ["Parent", "Oncology Referral"],
            ["Source (pick one)", "Vanderbilt-Ingram · Tennessee Oncology · Sarah Cannon · TriStar Centennial · Other Oncology · Self-Identified"],
            ["Stage (updated over time)", "Pre-Treatment · Active Treatment · Post-Treatment · Family Member"],
          ]}
        />

        <h4 className="text-xl font-bold text-white mt-10 mb-4">The 4-Email Patient Sequence (Verbatim, Ready for Kit)</h4>
        <p className="text-zinc-400 text-sm italic mb-6">
          Tone reminder from Google Review Templates: &quot;Softer, no pressure. Never push for a review from a medical/oncology client — only offer gently.&quot; Apply to every email.
        </p>

        <div className="space-y-4">
          <Collapsible title="Email 1 — Day 0 — You're Not Alone In This">
            <p><strong>Subject:</strong> A short note from Teddy at Beverly&apos;s</p>
            <p><strong>From:</strong> hello@beverlysofnashville.com</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Hi,</p>
              <p>My name is Teddy. I own Beverly&apos;s of Nashville. If you&apos;re reading this, it&apos;s probably because you&apos;re navigating something hard — either for yourself or for someone you love. I&apos;m sorry. And I&apos;m glad you found us.</p>
              <p>I&apos;m not going to fill this email with sales copy. You don&apos;t need that right now. What I want you to know is this:</p>
              <p>Whatever stage you&apos;re at — before treatment starts, in the middle of it, or coming out the other side — we have a way to help. We make custom medical wigs and cranial prostheses for people in your exact situation. We work with insurance. The consultation is private, unrushed, and entirely at your pace.</p>
              <p>There is no rush from our end. When you&apos;re ready, call us at (615) 497-4215 or reply to this email. If you&apos;d rather take a few days, or a few weeks, that&apos;s completely OK.</p>
              <p>With care,<br/>Teddy</p>
            </div>
          </Collapsible>

          <Collapsible title="Email 2 — Day 3 — What a Consultation Actually Looks Like">
            <p><strong>Subject:</strong> What a wig consultation actually looks like (no pressure)</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Hi,</p>
              <p>It&apos;s Teddy again. A few people have asked me what a wig consultation at Beverly&apos;s is actually like — so I wanted to walk you through it. No commitment, no booking required just to read this.</p>
              <p>When you come in (or your family member brings you in), here&apos;s what happens:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>We meet in a private space — not on the salon floor where everyone can see you. Just us, comfortable chairs, water if you want it.</li>
                <li>We talk first. Not about wigs. About you. Where you are in treatment, what your hair looked like before, what you want it to feel like to look in the mirror.</li>
                <li>We measure. It&apos;s painless and quick.</li>
                <li>We look at options together. You can try them. Or you can just look. Whatever feels right.</li>
                <li>If you want to take time to think, you take time. We do not pressure-sell wigs at Beverly&apos;s. Ever.</li>
              </ol>
              <p>— Teddy</p>
            </div>
          </Collapsible>

          <Collapsible title="Email 3 — Day 7 — The Insurance Question">
            <p><strong>Subject:</strong> How insurance works for medical wigs (5-minute read)</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Hi,</p>
              <p>This is the email a lot of people tell me they wish they&apos;d had earlier. Most patients don&apos;t know that their insurance probably covers what&apos;s called a &quot;cranial prosthesis&quot; — which is the medical term for a wig prescribed for hair loss due to a medical condition.</p>
              <p>Ask your oncologist for a written prescription. It has to say <strong>&quot;cranial prosthesis,&quot;</strong> not &quot;wig.&quot; That single word is the difference between coverage and denial.</p>
              <p>— Teddy</p>
            </div>
          </Collapsible>

          <Collapsible title="Email 4 — Day 14 — A Story">
            <p><strong>Subject:</strong> A client I&apos;ll never forget</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Hi,</p>
              <p>I want to tell you about a client. With her permission.</p>
              <p>She came in eight months into chemotherapy. By that point she&apos;d been wearing a scarf every day for half a year. She told me, on the way in, that she didn&apos;t actually think a wig would help. She was &quot;just exploring.&quot;</p>
              <p>Then she said: <em>&quot;I forgot what I looked like.&quot;</em></p>
              <p>That&apos;s the work. That&apos;s the only reason we do this.</p>
              <p>With care,<br/>Teddy</p>
            </div>
          </Collapsible>
        </div>
      </Section>

      <Section id="reviews" num="11" title="Google Review Templates">
        <h3 className="text-2xl font-semibold text-white mb-4">Two Templates — Different Tones</h3>
        <p className="text-zinc-300 mb-6">
          From the Google Review Templates PDF. The cranial prosthesis template is markedly softer — tone for medical clients matters.
        </p>
        <div className="space-y-4">
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h4 className="text-white font-bold mb-2">After a Standard Wig Fitting</h4>
            <p className="text-zinc-400 text-sm italic">&quot;Thank you for trusting Beverly&apos;s with your wig fitting today… Especially warm tone — wig clients often have emotional journeys worth honoring.&quot;</p>
          </div>
          <div className="border border-yellow-500/20 bg-yellow-900/10 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">After a Cranial Prosthesis Fitting — Use This For Cancer Clients</h4>
            <p className="text-zinc-300 text-sm italic">&quot;Hi [First Name], it was an honor to work with you today. Whenever you feel comfortable, if you&apos;d like to share your experience on Google, we&apos;d be grateful — it helps us reach others who may need the same care… Wishing you all the best. — Teddy&quot;</p>
          </div>
        </div>
        <p className="text-zinc-400 text-sm italic mt-6">
          Critical Tone Note (Verbatim from PDF): &quot;Softer, no pressure. Never push for a review from a medical/oncology client — only offer gently.&quot;
        </p>
      </Section>

      <Section id="booking" num="12" title="Booking & Retention">
        <h3 className="text-2xl font-semibold text-white mb-4">The Operational Plumbing</h3>
        <p className="text-zinc-300 mb-6">Three concrete things that turn the strategy into a workflow.</p>
        <div className="space-y-4">
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h4 className="text-white font-bold mb-2">Booking Platform — Wig Consultation Service Type Pending</h4>
            <p className="text-zinc-400 text-sm">&quot;Custom Wig Fitting: $50 deposit · 60 min.&quot; Policy: deposit required (recommended for color corrections and custom wigs).</p>
            <p className="text-yellow-500 text-xs mt-2 uppercase tracking-wider">Status: not yet configured in Square Appointments.</p>
          </div>
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h4 className="text-white font-bold mb-2">Wig Client Retention Script</h4>
            <p className="text-zinc-400 text-sm italic">&quot;I like to check in on custom pieces every 8–12 weeks — styling, fit adjustment, any maintenance. Want me to put a follow-up appointment on the books now?&quot;</p>
            <p className="text-zinc-500 text-xs mt-2">For medical clients in active treatment: tighter cadence (4–6 weeks) and the language should center on &quot;how are you feeling&quot; before &quot;how is the wig.&quot;</p>
          </div>
        </div>
      </Section>

      <Section id="sensitivity" num="13" title="The Sensitivity Module">
        <h3 className="text-2xl font-semibold text-white mb-4">The Cancer-Patient Consultation Framework</h3>
        <p className="text-zinc-300 mb-8">
          A 12-section module covering the cancer-patient consultation end-to-end. Built as a $49 add-on to The Consultation Vault digital product.
        </p>

        <h4 className="text-xl font-bold text-white mb-6">The Modified 4-Step Frame</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            ["01", "Listen — Longer", "20 minutes before you say anything substantive. Take notes. Don't interrupt."],
            ["02", "Translate — Gently", "It sounds like you want to feel like yourself. Never diagnosis-speak."],
            ["03", "Honesty — Calibrated", "Truthful about what's possible. Never overload. Bury no leads in jargon."],
            ["04", "Plan — Written Down", "She is overwhelmed. Her brain is fogged from treatment. Write the plan on paper."],
          ].map(([num, title, desc]) => (
            <div key={num} className="border border-zinc-800 p-5 rounded-lg">
              <span className="text-yellow-500 font-mono text-sm">{num}</span>
              <h5 className="text-white font-bold mt-1 mb-2">{title}</h5>
              <p className="text-zinc-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-bold text-white mb-4">What NOT to Say</h4>
        <DataTable
          headers={["Don't Say", "Say Instead"]}
          rows={[
            ["You're so strong, you're going to beat this!", "I'm glad you came in today."],
            ["My cousin had cancer and...", "(nothing — let her talk, don't redirect)"],
            ["At least you have your health.", "(never. just don't.)"],
            ["This wig will make you feel like yourself again!", "Let's see how this one feels."],
            ["You look great!", "How does that feel to you?"],
            ["I know exactly how you feel.", "I can't imagine. Tell me more."],
            ["Honey / sweetie / love", "Use her name. Always."],
          ]}
        />
        <p className="text-zinc-400 text-sm italic mt-4">
          The meta-rule: if you wouldn&apos;t say it to your best friend going through the worst week of her life, don&apos;t say it to a cancer patient who is paying you to help her feel like herself again.
        </p>
      </Section>
    </>
  );
}
