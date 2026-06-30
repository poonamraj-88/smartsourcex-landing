export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_60rem_at_70%_-10%,rgba(16,185,129,.25),rgba(0,0,0,0))]" />

      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8 relative z-10">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="SmartSourceX Logo"
          className="mx-auto h-16 sm:h-20 md:h-28 w-auto mb-4"
        />

        {/* Tagline */}
        <p className="text-emerald-400/80 tracking-wide text-xs sm:text-sm uppercase font-bold mb-2 hover:text-emerald-300 transition-colors duration-200">
          SmartSourceX
        </p>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight hover:text-emerald-300 transition-colors duration-200">
          Recruitment Re-engineered
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
          Hire top talent in days — not weeks.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="hhttps://calendly.com/poonam-raj-smartsourcex/30min"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base font-medium text-neutral-950 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition duration-200"
          >
            Book a Call
          </a>
          <a
            href="/subscribe"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base font-medium hover:border-neutral-500 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition duration-200"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
