export const metadata = {
  title: "Terms of Service — SmartSourceX",
  description:
    "The terms governing your access to and use of SmartSourceX’s website and subscription recruitment services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-sx-dark">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">
          Effective date: <strong>[Insert Date]</strong>
        </p>

        <div className="prose prose-slate mt-8">
          <p>
            Welcome to SmartSourceX (“we,” “our,” “us”). By accessing or using
            our website and recruitment services, you agree to these Terms of
            Service (“Terms”).
          </p>

          <h2>1. Services</h2>
          <p>
            We provide subscription-based recruitment services under our
            Starter, Growth, and Enterprise plans, as described on our site or
            in an order form.
          </p>

          <h2>2. Subscriptions & Payment</h2>
          <ul>
            <li>Subscriptions are billed monthly in advance.</li>
            <li>Fees are non-refundable except as required by law.</li>
            <li>
              You may upgrade plans at any time; changes take effect from the
              next billing cycle unless agreed otherwise.
            </li>
          </ul>

          <h2>3. Client Responsibilities</h2>
          <ul>
            <li>
              Provide accurate role descriptions, timely feedback, and
              decision-making to enable delivery.
            </li>
            <li>
              Ensure compliance with applicable employment laws and internal
              policies.
            </li>
          </ul>

          <h2>4. Candidate Guarantee</h2>
          <p>
            We provide a 90-day replacement guarantee: if a placed candidate
            leaves within 90 days, we’ll conduct a replacement search at no
            additional placement fee (subscription fees continue as normal).
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            The site and services are provided “as is.” To the maximum extent
            permitted by law, we disclaim warranties and are not liable for
            indirect, incidental, or consequential damages.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your Country/State], and
            any disputes will be subject to the exclusive jurisdiction of the
            courts in [Your Location].
          </p>

          <h2>7. Changes</h2>
          <p>
            We may update these Terms from time to time. The updated version
            will be posted with a new effective date. Your continued use
            constitutes acceptance.
          </p>

          <h2>8. Contact</h2>
          <p>
            Questions? Contact{" "}
            <a href="mailto:legal@smartsourcex.com">legal@smartsourcex.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
