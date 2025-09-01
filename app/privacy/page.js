export const metadata = {
  title: "Privacy Policy — SmartSourceX",
  description:
    "How SmartSourceX collects, uses, and protects your information when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-sx-dark">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">
          Effective date: <strong>[Insert Date]</strong>
        </p>

        <div className="prose prose-slate mt-8">
          <p>
            SmartSourceX (“we,” “our,” or “us”) respects your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use our website and services.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <strong>Information you provide:</strong> name, email, phone,
              company, role details, and other form inputs.
            </li>
            <li>
              <strong>Usage data:</strong> pages viewed, device/browser info,
              and cookies/analytics.
            </li>
          </ul>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>To respond to inquiries and deliver recruitment services.</li>
            <li>To operate, protect, and improve our website and marketing.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share data with
            service providers who support our operations (e.g., hosting,
            analytics, email delivery) subject to confidentiality and data
            protection obligations.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We use reasonable technical and organizational safeguards. However,
            no system is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            data by contacting us at{" "}
            <a href="mailto:privacy@smartsourcex.com">privacy@smartsourcex.com</a>.
          </p>

          <h2>6. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. We’ll post the
            revised version with an updated effective date.
          </p>

          <h2>7. Contact</h2>
          <p>
            Questions? Contact{" "}
            <a href="mailto:privacy@smartsourcex.com">privacy@smartsourcex.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
