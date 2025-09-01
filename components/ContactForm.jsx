"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ ok: false, msg: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ ok: false, msg: "" });

    try {
      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_b91upqi",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_89noxbf",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "JJq7T15ViA4XkmeHz"
      );

      if (res.text === "OK") {
        setStatus({ ok: true, msg: "Thanks! We’ll be in touch within one business day." });
        formRef.current?.reset();
      } else {
        setStatus({ ok: false, msg: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Could not send your message. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-4">
      <div>
        <label className="text-sm font-medium">Your Name</label>
        <input name="name" type="text" required className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Work Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Phone</label>
        <input name="phone" type="tel" className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Company</label>
        <input name="company" type="text" className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium">Plan</label>
        <select name="plan" className="mt-1 w-full rounded-md border px-3 py-2">
          <option value="Starter">Starter — $8,500/mo</option>
          <option value="Growth">Growth — $10,500/mo</option>
          <option value="Enterprise">Enterprise — $15,000/mo</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">What roles are you hiring?</label>
        <textarea name="message" rows={4} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-2 rounded-lg bg-sx-accent px-5 py-3 font-semibold text-white hover:opacity-95 disabled:opacity-60"
      >
        {sending ? "Sending..." : "Book My Free 30-Minute Consultation"}
      </button>

      {status.msg && (
        <p className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.msg}</p>
      )}
    </form>
  );
}
