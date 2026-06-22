import HeroSection from "../components/HeroSection";
import Calculator from "../components/Calculator";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* Hero */}
      <HeroSection />

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <p className="mt-3 text-neutral-300">
            A simple, predictable process designed for speed and quality.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Kickoff Call",
                desc: "We align on your roles, goals, and culture in a 30-minute call.",
              },
              {
                step: "Sourcing & Screening",
                desc: "Your recruiter pod builds a tailored shortlist fast.",
              },
              {
                step: "Interview & Feedback",
                desc: "We refine until you see candidates you love.",
              },
              {
                step: "Hire & Guarantee",
                desc: "Make the hire with confidence — backed by a 90-day replacement guarantee.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-emerald-400">
                  {item.step}
                </h3>
                <p className="text-sm text-neutral-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-neutral-950 text-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-center">Plans & Pricing</h2>
          <p className="mt-3 text-neutral-300 text-center">
            Transparent subscription plans. No % fees. Just predictable hiring.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$6,500",
                features: [
                  "✅ 2 active searches simultaneously",
                  "✅ Dedicated recruiter assigned",
                  "✅ 48-hour response time",
                  "✅ Basic candidate screening",
                  "✅ Email & Slack support",
                  "✅ Monthly performance report",
                  "✅ Shortlist delivered ≤ 5 business days",
                ],
              },
              {
                name: "Growth",
                price: "$11,100",
                features: [
                  "✅ Up to 5 roles",
                  "✅ Priority sourcing & screening",
                  "✅ 48-hour response time",
                  "✅ Advanced candidate screening",
                  "✅ Email, Slack & WhatsApp support",
                  "✅ Bi-weekly performance report",
                  "✅ Shortlist delivered ≤ 3–4 business days",
                ],
              },
              {
                name: "Enterprise",
                price: "$21,000",
                features: [
                  "✅ Up to 10 roles",
                  "✅ Full recruiter + sourcer squad",
                  "✅ 24-hour response time",
                  "✅ Premium candidate screening",
                  "✅ Multi-channel support",
                  "✅ Weekly performance report",
                  "✅ Shortlist delivered ≤ 2 business days",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-emerald-400 text-2xl font-bold">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-neutral-300 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start ${
                        feature.includes("Shortlist") ? "mt-4" : ""
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="https://calendly.com/your-link"
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-400"
                  >
                    Book a Call
                  </a>
                  <a
                    href="/subscribe"
                    className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium hover:border-neutral-500"
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sx-dark text-center">
            Savings Calculator
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Estimate your savings vs. traditional agency fees.
          </p>
          <div className="mt-8">
            <Calculator />
          </div>
        </div>
      </section>

      {/* FAQ with Risk Reversal */}
      <section id="faq" className="py-20 bg-slate-50 text-neutral-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sx-dark text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 divide-y divide-slate-200">
            {[
              {
                q: "Try Risk-Free for 30 Days — what does that include?",
      "No upfront cost, no retainer, and no commitment fee. We embed a dedicated recruiter into your hiring workflow from day one. During the 30-day trial, you receive a full role intake and hiring strategy session, screened candidate shortlists, regular progress updates, and direct access to your dedicated recruiter. You only pay if we successfully place a candidate during the trial period. A flat fee of SGD 5,000 applies per successful hire. If no placement is made within 30 days, you owe us nothing and the engagement simply ends.",
              },
              {
                q: "What if you can't fill a role?",
                a: "We offer a 60-day replacement guarantee. If a candidate leaves within 60 days, we'll find a replacement at no additional cost.",
              },
              {
                q: "Can I pause or cancel my subscription?",
                a: "Yes, you can pause for up to 2 months or cancel with 30 days’ notice. No long-term contracts required.",
              },
              {
                q: "What industries do you specialize in?",
                a: "We focus primarily on tech startups and SaaS companies, with expertise in engineering, product, sales, and marketing roles.",
              },
              {
                q: "How do you source candidates?",
                a: "We use a combination of job boards, LinkedIn, GitHub, our proprietary database of 10K+ candidates, and employee referrals.",
              },
              {
                q: "What's included in candidate screening?",
                a: "Technical skills assessment, cultural fit interview, reference checks, and background verification for all shortlisted candidates.",
              },
              {
                q: "Do you handle executive searches?",
                a: "Yes, our Enterprise plan includes C-level and VP-level executive search capabilities.",
              },
            ].map((item, idx) => (
              <details key={idx} className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer text-sx-dark font-medium">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 bg-white text-neutral-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: CTA text */}
            <div>
              <h2 className="text-3xl font-semibold text-sx-dark">
                Ready to Start Hiring Smarter?
              </h2>
              <p className="mt-3 text-slate-600">
                Book a free 30-minute strategy call to discuss your hiring needs
                and get a custom savings analysis.
              </p>
              <ul className="mt-5 space-y-2 text-slate-700 text-sm">
                <li>• Book consultation call</li>
                <li>• Choose your plan</li>
                <li>• Begin first search within 48 hours</li>
                <li>• Receive first candidates within 7–10 days</li>
              </ul>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p>
                  <strong>Risk-Free for 30 Days:</strong> If you’re not
                  satisfied, we’ll refund your first month — no questions asked.
                </p>
              </div>
            </div>

            {/* Right: EmailJS form */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-sx-dark mb-4">
                Book Your Consultation
              </h3>
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
            <a href="/privacy" className="hover:underline ml-3">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </p>
          <a
            href="mailto:hello@smartsourcex.com"
            className="text-sm text-slate-300 hover:underline"
          >
            hello@smartsourcex.com
          </a>
        </div>
      </footer>
    </main>
  );
}

     