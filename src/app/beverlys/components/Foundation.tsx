import Section from "./Section";
import Collapsible from "./Collapsible";
import DataTable from "./DataTable";

// Sections 01-04: Executive Summary, Oncology Partners, Dermatology Partners, Outreach Letters, Follow-Up.
export default function Foundation() {
  return (
    <>
      <Section id="executive-summary" num="01" title="Executive Summary">
        <h3 className="text-2xl font-semibold text-white mb-4">Where the Wig Business Stands</h3>
        <p className="text-zinc-300 leading-relaxed">
          The wig side of Beverly&apos;s is starting to take off. This brief consolidates every piece of marketing material we&apos;ve built that touches wigs and cancer patients, plus the targeted next steps to turn that momentum into a steady book of business.
        </p>

        <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Four Channels Working Right Now</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">01 · B2B Oncology Referrals</h4>
            <p className="text-zinc-400 text-sm mb-4">Direct relationships with Nashville oncology centers. Patient navigators and social workers are the highest-leverage referral source we have.</p>
            <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded border border-yellow-500/30">Three letters written, tracker built, nothing sent yet.</div>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">02 · Cranial Prosthesis Positioning</h4>
            <p className="text-zinc-400 text-sm mb-4">Using the correct medical terminology unlocks insurance reimbursement and signals professionalism the second a patient or referrer hears it.</p>
            <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded border border-yellow-500/30">Certification path defined — Phase 2 action plan ready.</div>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">03 · Wig World Content Pillar</h4>
            <p className="text-zinc-400 text-sm">Seven dedicated posts per month, including the Day 13 medical-wig caption (already written, ready to deploy with client consent + footage). Plus a full SEO blog already live.</p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg">
            <h4 className="text-yellow-500 font-bold mb-2">04 · Viral Wig Content (Amore Colore)</h4>
            <p className="text-zinc-400 text-sm mb-4">Two 30-second video cuts. Built around an Amore Colore co-marketing angle that establishes authority as a craft stylist.</p>
            <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded border border-yellow-500/30">v1 ready to ship, v2 awaiting Teddy&apos;s voiceover.</div>
          </div>
        </div>

        <div className="mt-12 p-8 border border-yellow-500/20 bg-gradient-to-br from-yellow-900/20 to-black rounded-xl">
          <h4 className="text-xl font-bold text-white mb-4">Why This Matters Financially</h4>
          <p className="text-zinc-300 mb-4">A single referral relationship with one oncology center can bring <strong className="text-yellow-500">5–20 new clients per year at $780–$3,000+</strong> per fitting.</p>
          <p className="text-zinc-300 mb-4">Phase 3 target by Day 90: <strong className="text-white">2+ active oncology partnerships and 5+ wig consultations per month.</strong></p>
          <p className="text-zinc-400 text-sm italic">Cranial prosthesis certification (~$197 via Wig Medical / NACPS) is the gate to billing insurance directly. The Project Review called this &quot;a major revenue unlock.&quot;</p>
        </div>

        <h3 className="text-2xl font-semibold text-white mt-12 mb-6">The Niche — Why Beverly&apos;s Is Different</h3>
        <div className="border-l-4 border-yellow-500 pl-6 py-2">
          <h4 className="text-xl font-bold text-white mb-4">Beverly&apos;s Doesn&apos;t Sell Synthetic Wigs. Every Wig Is Human Hair, Custom-Colored, and Custom-Cut.</h4>
          <p className="text-zinc-300 mb-4"><strong className="text-white">Teddy is a master colorist.</strong> Synthetic wigs can&apos;t be colored. They can&apos;t be cut and reshaped the way real hair can. A Beverly&apos;s wig is a canvas — Teddy hand-colors and razor-cuts every piece to match the client&apos;s face, skin tone, and the hair she remembers having before treatment.</p>
          <p className="text-zinc-300 mb-6">This is the positioning that makes Beverly&apos;s different from Amazon, a department store, or any other Nashville salon dabbling in wigs. It is the reason patients drive across Middle Tennessee for the consultation. It is the answer to &quot;why $1,200 instead of $150.&quot;</p>
          <div className="bg-black p-4 rounded border border-zinc-800">
            <p className="text-yellow-500 font-medium">The pitch in one sentence: <span className="text-white italic">&quot;A Beverly&apos;s wig isn&apos;t a wig pulled from a box. It&apos;s the hair you remember — custom-colored on real human hair, cut to your face, built for your life.&quot;</span></p>
          </div>
        </div>
      </Section>

      <Section id="oncology-partners" num="02" title="Target Oncology Partners">
        <h3 className="text-2xl font-semibold text-white mb-4">The Four Nashville Centers</h3>
        <p className="text-zinc-300 mb-6">
          These are the centers in the Oncology Outreach Tracker. Letters are drafted for the first three. Vanderbilt&apos;s oncology social work department is the recommended starting point — they specifically make direct community referrals.
        </p>
        <DataTable
          highlightFirst
          headers={["Center", "Type", "Address / Web", "Phone"]}
          rows={[
            ["Vanderbilt-Ingram Cancer Center\nStart Here", "Comprehensive Cancer Center", "2220 Pierce Ave, Nashville, TN 37232\nvicc.vanderbilt.edu", "(615) 936-8422"],
            ["Tennessee Oncology — Nashville", "Private Oncology Practice", "Multiple Nashville locations\ntennesseeoncology.com", "(615) 329-7274"],
            ["Sarah Cannon Research Institute", "Research Institute (TriStar)", "One Sarah Cannon Way, Nashville, TN 37203", "Via TriStar main"],
            ["TriStar Centennial — Oncology", "Hospital Oncology Dept.", "2300 Patterson St, Nashville, TN 37203", "(615) 342-1000"],
          ]}
        />
        <p className="text-zinc-400 text-sm italic mt-4">
          <strong>Contact at each:</strong> Patient Services Director, Oncology Social Worker, or Oncology Patient Navigator. Patient navigators coordinate community resource referrals.
        </p>
      </Section>

      <Section id="dermatology-partners" num="02b" title="Dermatology & Trichology Partners">
        <h3 className="text-2xl font-semibold text-white mb-4">17 Nashville-Area Hair Loss Specialists</h3>
        <p className="text-zinc-300 mb-8">
          Cancer patients aren&apos;t the only people losing hair. Alopecia areata, CCCA, lupus-related shedding, thyroid hair loss, and androgenetic alopecia all run through dermatology and trichology — and dermatologists don&apos;t sell wigs, so once they trust Beverly&apos;s, they will reliably refer. Full tracker at 08 - Tracking & Outreach / Nashville-Dermatologist-Outreach-Tracker.xlsx.
        </p>

        <h4 className="text-yellow-500 font-bold mb-4">Tier 1 — Academic / Highest Hair-Loss Volume Start Here</h4>
        <DataTable
          headers={["Practice", "Lead", "Why", "Phone"]}
          rows={[
            ["Vanderbilt Dermatology — One Hundred Oaks", "Alopecia Care faculty", "Named Alopecia Care program + Skin of Color clinic — highest single source of CCCA / alopecia patients in Middle TN", "(615) 322-6485"],
            ["Nashville Skin (Comprehensive Derm)", "Dr. Christina Feser, DO", "Principal investigator on alopecia clinical trials · 6 locations · trial patients still need wigs during shedding", "(615) 327-9797"],
            ["Traceside Dermatology", "Dr. Amy Valet, MD", "Vanderbilt-trained · most-cited hair loss dermatologist in Nashville consumer searches", "(615) 212-3012"],
            ["Heritage Medical — Dermatology", "Dr. J. Matthew Hardin", "Explicitly lists Alopecias as treated condition · two-for-one: derm + endo/rheum under one roof", "(615) 297-2700"],
          ]}
        />

        <div className="mt-8 p-6 border border-yellow-500/20 bg-yellow-900/10 rounded-lg">
          <h4 className="text-yellow-500 font-bold mb-2">Strategic Priority — CCCA Pipeline</h4>
          <p className="text-zinc-300 text-sm">
            Central centrifugal cicatricial alopecia (CCCA) is the most common form of scarring alopecia in Black women. <strong>Gold Skin Care Center</strong> (Tier 2) and <strong>Vanderbilt&apos;s Skin of Color clinic</strong> (Tier 1) are the two highest-impact CCCA referral sources in Nashville. Beverly&apos;s Nolensville Pike location is in the heart of the demographic most affected. Make these two Week 1 priorities alongside Vanderbilt-Ingram oncology.
          </p>
        </div>

        <div className="mt-8 p-6 border border-zinc-800 rounded-lg">
          <h4 className="text-white font-bold mb-4">Expected Referral Volume</h4>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>Tier 1 active partner = <strong className="text-yellow-500">3–8 wig clients/year</strong></li>
            <li>Tier 2 active partner = <strong className="text-yellow-500">1–4/year</strong></li>
            <li>Trichologist = <strong className="text-yellow-500">2–5/year</strong></li>
            <li className="pt-2">5+ active dermatology partnerships + 2+ active oncology partnerships = <strong className="text-white">25–60 wig clients/year</strong> from partnerships alone. At an average $1,200/sale, that&apos;s $30K–$72K of recurring partnership-driven revenue annually.</li>
          </ul>
        </div>
      </Section>

      <Section id="outreach-letters" num="03" title="Outreach Letters">
        <h3 className="text-2xl font-semibold text-white mb-4">Three Letters Ready to Send</h3>
        <p className="text-zinc-300 mb-6">
          All three letters are drafted in Beverly&apos;s-Email-Sequences-and-Outreach.docx. Personalize the contact name, swap the date, and they can go out today. Click any letter below to expand.
        </p>
        <div className="space-y-4">
          <Collapsible title="Letter 1 — Vanderbilt-Ingram Cancer Center" badge="Ready">
            <p><strong>Subject:</strong> Wig & Hair Prosthesis Partnership — Beverly&apos;s of Nashville</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Dear [Contact Name],</p>
              <p>My name is Teddy Chisom. I am the owner and lead stylist at Beverly&apos;s of Nashville, a full-service hair salon located at 3304 Nolensville Pike, Nashville, TN 37211. Beverly&apos;s has been serving the Nashville community since 1994 — over 30 years of trusted, compassionate service.</p>
              <p>I am writing to introduce a service that I believe could genuinely improve the lives of your patients who are experiencing hair loss during treatment.</p>
              <p>Beverly&apos;s of Nashville offers a dedicated custom wig boutique designed to serve women facing hair loss due to cancer treatment, alopecia, and other medical causes. We provide:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Private, compassionate one-on-one wig consultations in a comfortable, dignified setting</li>
                <li>Custom cranial prostheses for women going through chemotherapy or experiencing medical hair loss</li>
                <li>Insurance reimbursement assistance — we work with patients and their providers to help navigate coverage for cranial prostheses, which many insurance plans cover at $350–$3,500+</li>
                <li>A range of options across price points to ensure every patient can access a dignified solution</li>
                <li>Ongoing wig care and maintenance services to keep units looking their best throughout treatment</li>
              </ul>
              <p>I would welcome the opportunity to partner with Vanderbilt-Ingram Cancer Center in any capacity that would benefit your patients — whether that&apos;s providing printed materials for your waiting areas, hosting a quarterly &apos;Beautiful You&apos; wig consultation day at our salon for your patients, or simply being a trusted referral resource for your oncology team.</p>
              <p>I would love to schedule a brief call or meeting at your convenience to discuss how Beverly&apos;s can best serve your patients. I can be reached at (615) 497-4215 or hello@beverlysofnashville.com.</p>
              <p>Thank you for the extraordinary care you provide to Nashville&apos;s cancer community. I look forward to the possibility of walking alongside your patients in a small but meaningful way.</p>
              <p>With sincere respect,<br/>Theodore &quot;Teddy&quot; Chisom<br/>Owner & Lead Stylist | Beverly&apos;s of Nashville<br/>3304 Nolensville Pike | Nashville, TN 37211<br/>(615) 497-4215 | hello@beverlysofnashville.com</p>
            </div>
          </Collapsible>

          <Collapsible title="Letter 2 — Tennessee Oncology" badge="Ready">
            <p><strong>Subject:</strong> Hair Loss Support Partnership for Your Patients — Beverly&apos;s of Nashville</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Dear [Contact Name],</p>
              <p>My name is Teddy Chisom, and I own Beverly&apos;s of Nashville — a premier hair salon and custom wig boutique that has served the Nashville community for over 30 years at 3304 Nolensville Pike.</p>
              <p>I&apos;m reaching out because I believe there is a meaningful opportunity to improve the experience of your patients who are navigating hair loss during cancer treatment — and I&apos;d like to be a resource for your practice.</p>
              <p>I know that hair loss is one of the most emotionally difficult aspects of chemotherapy for many women. It changes how they see themselves. It affects their confidence, their relationships, and their sense of identity during an already incredibly difficult time.</p>
              <p>Beverly&apos;s of Nashville has built a specialized service to help. We offer private wig consultations specifically designed for cancer patients — compassionate, unhurried, and focused on restoring confidence and dignity. We provide custom cranial prostheses and assist patients with insurance reimbursement navigation. Our wigs are hand-crafted with soft interior linings that are gentle against sensitive scalps.</p>
              <p>I am proposing a simple referral partnership: when patients of Tennessee Oncology are ready to explore wig options, your team refers them to Beverly&apos;s with confidence. In return, I am happy to provide:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Informational brochures for your waiting areas and patient packets</li>
                <li>A dedicated scheduling pathway for Tennessee Oncology patients (priority booking)</li>
                <li>Quarterly &apos;Beautiful You&apos; events at our salon — free wig styling days for your patients</li>
                <li>A referral card with QR code that links patients directly to our wig consultation booking</li>
              </ul>
              <p>There is no cost or obligation involved. This is simply about connecting your patients with a trusted resource at a time when they need it most.</p>
              <p>I would welcome a 15-minute call to discuss what would work best for your practice and patients. Please reach me at (615) 497-4215 or hello@beverlysofnashville.com at any time.</p>
              <p>Thank you for the vital care you provide to the Nashville oncology community. I hope we can work together.</p>
              <p>Warmly,<br/>Theodore &quot;Teddy&quot; Chisom</p>
            </div>
          </Collapsible>

          <Collapsible title="Letter 3 — Sarah Cannon Research Institute" badge="Ready">
            <p><strong>Subject:</strong> Complementary Patient Support Services — Beverly&apos;s of Nashville Wig Boutique</p>
            <div className="space-y-3 mt-4 text-sm">
              <p>Dear [Contact Name],</p>
              <p>I am writing to you as a long-standing Nashville business owner and someone who has spent over 30 years witnessing the profound impact that hair loss has on the women in our community.</p>
              <p>My name is Teddy Chisom. I own Beverly&apos;s of Nashville — a salon and custom wig boutique at 3304 Nolensville Pike that was founded by my mother, Beverly Epps, in 1994. For over three decades, Beverly&apos;s has been more than a salon. It has been a place of restoration — where women come to feel like themselves again.</p>
              <p>I believe that philosophy aligns closely with the patient-centered mission of Sarah Cannon Research Institute. Beverly&apos;s of Nashville&apos;s Wig Boutique offers:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confidential, private consultations with Teddy personally — never rushed, always compassionate</li>
                <li>Custom cranial prostheses that are medically appropriate and emotionally thoughtful</li>
                <li>Insurance reimbursement support — we guide patients through the process of filing for cranial prosthesis coverage</li>
                <li>Wigs with soft interior construction designed for chemotherapy-sensitive scalps</li>
                <li>Ongoing wig care, restyling, and maintenance throughout the treatment journey</li>
              </ul>
              <p>I would be honored to work alongside your team to make Beverly&apos;s an official referral resource for Sarah Cannon patients. I am open to any collaborative format that serves your patients best — educational seminars, in-facility consultation events, or simply being a name your social workers and nurses trust to recommend.</p>
              <p>At no cost and with no obligation, I can provide branded referral cards and informational materials suitable for your patient waiting areas and intake packets.</p>
              <p>Please contact me at (615) 497-4215 or hello@beverlysofnashville.com.</p>
              <p>With gratitude for the life-changing work your institute does every day,<br/>Theodore &quot;Teddy&quot; Chisom</p>
            </div>
          </Collapsible>
        </div>
      </Section>

      <Section id="follow-up" num="04" title="Follow-Up Cadence">
        <h3 className="text-2xl font-semibold text-white mb-4">The 5-Touchpoint Playbook</h3>
        <p className="text-zinc-300 mb-6">
          Most healthcare partnerships take 3–5 touchpoints. This is the cadence from the Oncology Outreach Tracker.
        </p>
        <DataTable
          headers={["Day", "Action"]}
          rows={[
            ["Day 1", "Send email letter"],
            ["Day 3", "Call the main number. Ask for the Patient Services Director or Oncology Social Worker by name."],
            ["Day 7", "Mail a physical copy with 2–3 printed brochures and a handwritten note."],
            ["Day 14", "Second follow-up call. Leave a brief, warm voicemail."],
            ["Day 30", "If still no response, pivot to a different department head."],
          ]}
        />

        <div className="mt-8 p-6 border border-yellow-500/20 bg-yellow-900/10 rounded-lg">
          <h4 className="text-yellow-500 font-bold mb-2">Phone Script for the Day 3 Call</h4>
          <blockquote className="text-zinc-300 italic border-l-4 border-yellow-500 pl-4">
            &quot;Hi, I&apos;m Teddy Chisom from Beverly&apos;s of Nashville. I recently sent a letter about our wig and cranial prosthesis services — I wanted to follow up and see if there&apos;s an opportunity to support your patients.&quot;
          </blockquote>
        </div>

        <h4 className="text-xl font-bold text-white mt-10 mb-4">Questions to Ask at the First Meeting</h4>
        <ul className="space-y-2 text-zinc-300 list-disc list-inside">
          <li>Can Beverly&apos;s be added to your patient resource list or referral network?</li>
          <li>Is there a patient navigator or social worker who coordinates wellness referrals?</li>
          <li>Would you accept informational materials for the waiting area?</li>
          <li>Are there community events, support groups, or resource fairs we could attend?</li>
          <li>Is there a formal vendor/partner application process?</li>
        </ul>
      </Section>
    </>
  );
}
