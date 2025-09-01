export default function Testimonials() {
  const items = [
    {
      quote:
        "SmartSourceX helped us hire 4 key roles in under 8 weeks and cut our agency spend by 60%.",
      name: "Aarav Menon",
      role: "CEO, NexaSoft",
    },
    {
      quote:
        "Great candidate quality and clear weekly updates. The subscription model finally made hiring predictable.",
      name: "Clara Tan",
      role: "Head of People, Finly",
    },
    {
      quote:
        "We scaled our sales team fast without sacrificing fit. The risk-free start gave us confidence to try.",
      name: "Jude Lim",
      role: "COO, VectorLabs",
    },
  ];
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-sx-dark text-center">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-sx-dark">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
