export default function ClientsStrip() {
  const logos = [
    { src: "/logos/client-1.png", alt: "Client 1" },
    { src: "/logos/client-2.png", alt: "Client 2" },
    { src: "/logos/client-3.png", alt: "Client 3" },
    { src: "/logos/client-4.png", alt: "Client 4" },
    { src: "/logos/client-5.png", alt: "Client 5" },
  ];
  return (
    <section aria-label="Trusted by" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm text-slate-600">Trusted by fast-growing teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
          {logos.map((l, i) => (
            <img key={i} src={l.src} alt={l.alt} className="mx-auto h-10 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
