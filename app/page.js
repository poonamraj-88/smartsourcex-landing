
import Calculator from "../components/Calculator";
import ClientsStrip from "../components/ClientsStrip";
import Testimonials from "../components/Testimonials";
import CookieBanner from "../components/CookieBanner";
import ContactForm from "../components/ContactForm";
  






export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-sx-dark text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center bg-white/90 rounded-xl px-4 py-2 mb-6">
            <img src="/smartsourcex-logo.png" alt="SmartSourceX" width="200" height="60" className="block" />
          </div>

          {/* Headline (you can tweak this line if you prefer a different headline) */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hire Smarter. Scale Faster.
          </h1>

          {/* Subheadline */}
          <p className="text-slate-200/90 max-w-2xl mx-auto">
            Our Mission: Make high-quality recruitment accessible and affordable for every growing business.
          </p>

          {/* Primary CTA + quick blurb */}
          <div className="mt-8 grid gap-4 justify-center">
            <a href="#contact" className="inline-block bg-white text-sx-dark font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95">
              Ready to Start Hiring Smarter?
            </a>
            <div className="text-sm text-slate-200/80 max-w-xl mx-auto">
              <p className="font-medium">Free 30-Minute Consultation</p>
              <p>Book a strategy call to discuss your hiring needs and get a custom savings analysis.</p>
              <ul className="mt-2 space-y-1">
                <li>• Book consultation call</li>
                <li>• Choose your plan</li>
                <li>• Begin first search within 48 hours</li>
                <li>• Receive first candidates within 7–10 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sx-dark text-center">Our Proven 4-Step Process</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">Step 1: Strategy Call (Week 1)</h3>
              <ul className="mt-2 text-slate-700 space-y-1 text-sm">
                <li>• 30-minute consultation to understand role requirements</li>
                <li>• Define ideal candidate profile and must-have qualifications</li>
                <li>• Establish timeline and success metrics</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">Step 2: Sourcing & Screening (Weeks 1–2)</h3>
              <ul className="mt-2 text-slate-700 space-y-1 text-sm">
                <li>• Access to 50+ job boards & proprietary database</li>
                <li>• Initial screening of 100+ candidates per role</li>
                <li>• Skills assessment & cultural fit evaluation</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">Step 3: Delivery & Review (Weeks 2–3)</h3>
              <ul className="mt-2 text-slate-700 space-y-1 text-sm">
                <li>• Shortlist of 3–5 pre-qualified candidates</li>
                <li>• Detailed profiles with assessment scores</li>
                <li>• Interview coordination & feedback loop</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">Step 4: Offer Support (Weeks 3–4)</h3>
              <ul className="mt-2 text-slate-700 space-y-1 text-sm">
                <li>• Salary benchmarking & negotiation support</li>
                <li>• Reference checks & background verification</li>
                <li>• Onboarding assistance for successful hires</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center text-slate-600">
            <p>Average Time to Shortlist: <strong>10–14 days</strong></p>
            <p>Success Rate: <strong>85% of roles filled within 30 days</strong></p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sx-dark text-center">Pricing Plans</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-sx-dark">Starter</h3>
              <p className="mt-4 text-4xl font-bold text-sx-accent">$8,500<span className="text-lg">/mo</span></p>
              <p className="mt-2 text-slate-600 text-sm">Perfect for: Startups & Small Teams (2–10 employees)</p>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                <li>✅ 2 active searches simultaneously</li>
                <li>✅ Dedicated recruiter assigned</li>
                <li>✅ 48-hour response time</li>
                <li>✅ Basic candidate screening</li>
                <li>✅ Email & Slack support</li>
                <li>✅ Monthly performance report</li>
                <li className="text-slate-600">Best for: first sales rep, lead developer, head of marketing</li>
              </ul>
            </div>

            {/* Growth */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-sx-dark">Growth</h3>
              <p className="mt-4 text-4xl font-bold text-sx-accent">$10,500<span className="text-lg">/mo</span></p>
              <p className="mt-2 text-slate-600 text-sm">Perfect for: Scaling Businesses (10–50 employees)</p>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                <li>✅ 5 active searches simultaneously</li>
                <li>✅ Senior recruiter + research support</li>
                <li>✅ 24-hour response time</li>
                <li>✅ Advanced skills assessment</li>
                <li>✅ Phone & video call support</li>
                <li>✅ Bi-weekly strategy sessions</li>
                <li>✅ Custom hiring playbooks</li>
                <li className="text-slate-600">Best for: building out departments or rapid scaling</li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-sx-dark">Enterprise</h3>
              <p className="mt-4 text-4xl font-bold text-sx-accent">$15,000<span className="text-lg">/mo</span></p>
              <p className="mt-2 text-slate-600 text-sm">Perfect for: Established Companies (50+ employees)</p>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                <li>✅ 12 active searches simultaneously</li>
                <li>✅ Dedicated recruitment team</li>
                <li>✅ Same-day response time</li>
                <li>✅ Executive search capabilities</li>
                <li>✅ Priority support hotline</li>
                <li>✅ Weekly strategy sessions</li>
                <li>✅ Custom ATS integration</li>
                <li>✅ Quarterly hiring planning</li>
                <li className="text-slate-600">Best for: continuous hiring across multiple departments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sx-dark text-center">Savings Calculator</h2>
          <p className="mt-2 text-center text-slate-600">Estimate your savings vs. traditional agency fees.</p>
          <div className="mt-8">
            <Calculator />
          </div>
        </div>
      </section>

      {/* FAQ with Risk Reversal */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sx-dark text-center">Frequently Asked Questions</h2>
          <div className="mt-10 divide-y divide-slate-200">
            {[
              {
                q: "Try Risk-Free for 30 Days — what does that include?",
                a: "Money-Back Guarantee: If you're not satisfied with our service quality in the first 30 days, we'll refund your entire first month—no questions asked. In your first 30 days you get: complete role intake and strategy session; first batch of screened candidates; detailed progress reports; and direct access to your dedicated recruiter."
              },
              {
                q: "What if you can't fill a role?",
                a: "We offer a 90-day replacement guarantee. If a candidate leaves within 90 days, we'll find a replacement at no additional cost."
              },
              {
                q: "Can I pause or cancel my subscription?",
                a: "Yes, you can pause for up to 2 months or cancel with 30 days’ notice. No long-term contracts required."
              },
              {
                q: "What industries do you specialize in?",
                a: "We focus primarily on tech startups and SaaS companies, with expertise in engineering, product, sales, and marketing roles."
              },
              {
                q: "How do you source candidates?",
                a: "We use a combination of job boards, LinkedIn, GitHub, our proprietary database of 10K+ candidates, and employee referrals."
              },
              {
                q: "What's included in candidate screening?",
                a: "Technical skills assessment, cultural fit interview, reference checks, and background verification for all shortlisted candidates."
              },
              {
                q: "Do you handle executive searches?",
                a: "Yes, our Enterprise plan includes C-level and VP-level executive search capabilities."
              },
            ].map((item, idx) => (
              <details key={idx} className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer text-sx-dark font-medium">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left: CTA text */}
      <div>
        <h2 className="text-3xl font-semibold text-sx-dark">
          Ready to Start Hiring Smarter?
        </h2>
        <p className="mt-3 text-slate-600">
          Book a free 30-minute strategy call to discuss your hiring needs and get a custom savings analysis.
        </p>
        <ul className="mt-5 space-y-2 text-slate-700 text-sm">
          <li>• Book consultation call</li>
          <li>• Choose your plan</li>
          <li>• Begin first search within 48 hours</li>
          <li>• Receive first candidates within 7–10 days</li>
        </ul>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p><strong>Risk-Free for 30 Days:</strong> If you’re not satisfied, we’ll refund your first month — no questions asked.</p>
        </div>
      </div>

      {/* Right: EmailJS form */}
      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-sx-dark mb-4">Book Your Consultation</h3>
        <ContactForm />
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-10 bg-sx-dark text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} SmartSourceX. All rights reserved.
            <a href="/privacy" className="hover:underline ml-3">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </p>
          <a href="mailto:hello@smartsourcex.com" className="text-sm text-slate-300 hover:underline">
            hello@smartsourcex.com
          </a>
        </div>
      </footer>
    </main>
  );
}
