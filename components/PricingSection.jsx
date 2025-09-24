export default function PricingSection() {
  const plans = [
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
  ];

  return (
    <section className="bg-neutral-950 text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center">Plans & Pricing</h2>
        <p className="mt-3 text-neutral-300 text-center">
          Transparent subscription plans. No % fees. Just predictable hiring.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
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
  );
}
