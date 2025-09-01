"use client";
import { useEffect, useState } from "react";

const KEY = "sx_cookie_consent_v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setShow(true);
    } catch (_) {}
  }, []);

  const accept = () => {
    try { localStorage.setItem(KEY, "accepted"); } catch (_) {}
    setShow(false);
  };

  const decline = () => {
    try { localStorage.setItem(KEY, "declined"); } catch (_) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-xl border border-slate-200 bg-white shadow-lg p-4 md:flex md:items-center md:justify-between">
        <p className="text-sm text-slate-700 md:mr-4">
          We use minimal cookies/analytics to improve your experience. See our{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
        <div className="mt-3 md:mt-0 flex gap-2">
          <button onClick={decline} className="px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50">
            Decline
          </button>
          <button onClick={accept} className="px-3 py-2 rounded-lg bg-sx-accent text-white text-sm hover:opacity-95">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
