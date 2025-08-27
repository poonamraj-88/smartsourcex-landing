
"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Calculator from "../components/Calculator";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function LandingPage() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_b91upqi",   // ← replace with EmailJS service_id
      "template_89noxbf",  // ← replace with EmailJS template_id
      formRef.current,
      "JJq7T15ViA4XkmeHz"    // ← replace with EmailJS public_key
    ).then(() => {
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sx-dark to-sx-darker py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img
  src="/smartsourcex-logo.png"
  alt="SmartSourceX"
  width="200"
  height="60"
  className="mx-auto mb-6"
/>

          </div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Hire Smarter with Subscription Recruitment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-sx-light max-w-2xl mx-auto"
          >
            Predictable hiring costs. Faster turnaround. Scalable plans for every growing business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <a href="#contact" className="rounded-2xl px-8 py-4 text-lg bg-sx-accent hover:bg-sx-accent-dark transition">Book a Demo</a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-sx-dark">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow border border-sx-accent/20">
              <h3 className="font-semibold text-xl mb-2 text-sx-dark">1. Subscribe</h3>
              <p className="text-slate-600">Choose the plan that fits your hiring needs—2 roles, 5 roles, or unlimited.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow border border-sx-accent/20">
              <h3 className="font-semibold text-xl mb-2 text-sx-dark">2. We Recruit</h3>
              <p className="text-slate-600">Our recruiters source, screen, and deliver top candidates directly to you.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow border border-sx-accent/20">
              <h3 className="font-semibold text-xl mb-2 text-sx-dark">3. You Hire</h3>
              <p className="text-slate-600">Fill roles faster, at predictable costs, without hefty agency fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* Pricing Section */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold mb-12 text-sx-dark">Pricing Plans</h2>
    <div className="grid md:grid-cols-3 gap-6">
      
      {/* Starter Plan */}
      <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition text-left">
        <h3 className="text-xl font-semibold text-sx-dark">Starter Plan</h3>
        <p className="mt-2 text-slate-600">For startups & small teams hiring a few key roles</p>
        <p className="mt-4 text-3xl font-bold text-sx-accent">$5,000<span className="text-lg">/mo</span></p>
        <ul className="mt-4 space-y-2 text-slate-600 text-sm">
          <li>✅ Up to 2 active roles per month</li>
          <li>✅ 3–5 qualified CVs within 7 business days</li>
          <li>✅ Dedicated recruiter support</li>
          <li>✅ Weekly progress report + market insights</li>
          <li>✅ Role marketing across LinkedIn & job boards</li>
        </ul>
      </div>

      {/* Growth Plan */}
      <div className="border-2 border-sx-accent rounded-2xl p-6 shadow-md bg-white text-left">
        <h3 className="text-xl font-semibold text-sx-dark">
          Growth Plan <span className="ml-2 text-xs text-emerald-600">Most Popular</span>
        </h3>
        <p className="mt-2 text-slate-600">For scaling businesses with multiple vacancies</p>
        <p className="mt-4 text-3xl font-bold text-sx-accent">$8,500<span className="text-lg">/mo</span></p>
        <ul className="mt-4 space-y-2 text-slate-600 text-sm">
          <li>✅ Up to 6 active roles per month</li>
          <li>✅ 2 dedicated recruiters (shared pool)</li>
          <li>✅ 3–5 qualified CVs within 7 business days</li>
          <li>✅ Weekly update call & strategy alignment</li>
          <li>✅ Talent pipeline building (future hires)</li>
          <li>✅ Salary benchmarking + competitor insights</li>
        </ul>
      </div>

      {/* Enterprise Plan */}
      <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition text-left">
        <h3 className="text-xl font-semibold text-sx-dark">Enterprise Plan</h3>
        <p className="mt-2 text-slate-600">For enterprises with continuous hiring needs</p>
        <p className="mt-4 text-3xl font-bold text-sx-accent">$12,500<span className="text-lg">/mo</span></p>
        <ul className="mt-4 space-y-2 text-slate-600 text-sm">
          <li>✅ Up to 12 active roles per month</li>
          <li>✅ Dedicated recruitment pod (2 recruiters + Account Manager)</li>
          <li>✅ Fast-track shortlists (first CVs in 5 days)</li>
          <li>✅ Employer branding support (ads & outreach)</li>
          <li>✅ Weekly hiring dashboard & reports</li>
          <li>✅ Workforce planning & hiring strategy</li>
        </ul>
      </div>

    </div>
  </div>
</section>


      {/* Calculator Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-sx-dark">See How Much You Can Save</h2>
          <Calculator />
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="py-20 bg-sx-dark text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Get a Free Hiring Audit</h2>
          <p className="text-sx-light mb-8">Enter your details and we’ll reach out with a tailored recruitment savings analysis.</p>
          <div className="bg-white text-slate-900 shadow-lg p-6 rounded-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-xl" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-xl" /><input
  type="text"
  name="phone"
  placeholder="Contact Number"
  className="w-full p-3 border rounded-xl"
/>

              <input type="text" name="companySize" placeholder="Company Size" className="w-full p-3 border rounded-xl" />
              <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 border rounded-xl"></textarea>
              <button type="submit" className="rounded-2xl px-8 py-4 text-lg bg-sx-accent hover:bg-sx-accent-dark text-white transition">Request Audit</button>
            </form>
          </div>

          {status === "success" && (
            <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-xl shadow">
              ✅ Thank you! Your message has been sent. We’ll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="mt-6 bg-red-100 text-red-800 p-4 rounded-xl shadow">
              ❌ Oops! Something went wrong. Please try again.
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-sx-dark">Ready to Hire Smarter?</h2>
          <p className="text-slate-600 mb-8">Start your subscription today and save thousands compared to traditional agency fees.</p>
          <a href="#contact" className="rounded-2xl px-8 py-4 text-lg bg-sx-accent hover:bg-sx-accent-dark text-white transition">Get Started</a>
        </div>
      </section>
    </div>
  );
}
