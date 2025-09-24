export default function BookACall() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-semibold text-sx-dark">
          Book a Call with SmartSourceX
        </h1>
        <p className="mt-3 text-slate-600">
          Choose a time that works for you. Your dedicated strategy call awaits.
        </p>

        <div className="mt-10">
          <div className="w-full h-[700px] sm:h-[800px]">
            <iframe
              src="https://calendly.com/poonam-raj-smartsourcex/30min"
              className="w-full h-full rounded-xl border border-slate-200 shadow-md"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
