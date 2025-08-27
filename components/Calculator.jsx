"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator as CalcIcon,
  DollarSign,
  Percent,
  Users,
  TrendingDown,
  ArrowRight,
  Info,
} from "lucide-react";

const CURRENCIES = {
  USD: { symbol: "$", locale: "en-US" },
  SGD: { symbol: "$", locale: "en-SG" },
  AED: { symbol: "د.إ", locale: "ar-AE" },
  EUR: { symbol: "€", locale: "de-DE" },
  GBP: { symbol: "£", locale: "en-GB" },
};

function money(n, currency) {
  const { locale } = CURRENCIES[currency] || CURRENCIES["USD"];
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(n);
  } catch {
    const sym = (CURRENCIES[currency] && CURRENCIES[currency].symbol) || "$";
    return sym + Number(n || 0).toLocaleString(locale);
  }
}

// ►► UPDATE: your three plans
const PLANS = [
  { id: "starter",    name: "Starter Plan",    price: 5000,  description: "For startups & small teams (up to 2 roles/mo)" },
  { id: "growth",     name: "Growth Plan",     price: 8500,  description: "For scaling businesses (up to 6 roles/mo)" },
  { id: "enterprise", name: "Enterprise Plan", price: 12500, description: "For enterprises (up to 12 roles/mo)" },
];

export default function Calculator() {
  const [currency, setCurrency] = useState("USD"); // change to "SGD" if you prefer
  const [numHires, setNumHires] = useState(5);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [agencyFeePct, setAgencyFeePct] = useState(20);
  const [months, setMonths] = useState(3);
  const [planId, setPlanId] = useState("growth");
  const [includeGST, setIncludeGST] = useState(false);

  const plan = PLANS.find((p) => p.id === planId);

  const traditionalCost = useMemo(
    () => (numHires || 0) * (avgSalary || 0) * (agencyFeePct / 100),
    [numHires, avgSalary, agencyFeePct]
  );
  const subscriptionCostExclTax = useMemo(
    () => (plan?.price || 0) * (months || 0),
    [plan, months]
  );
  const subscriptionCost = useMemo(
    () => subscriptionCostExclTax * (includeGST ? 1.09 : 1), // SG GST 9% toggle
    [subscriptionCostExclTax, includeGST]
  );

  const savings = Math.max(traditionalCost - subscriptionCost, 0);
  const savingsPct = traditionalCost > 0 ? (savings / traditionalCost) * 100 : 0;

  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Inputs */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <label className="text-sm font-medium text-slate-700">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Info className="h-4 w-4" />
                Symbol only; no FX conversions.
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Number of hires
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={1000}
                    value={numHires}
                    onChange={(e) => setNumHires(clamp(parseInt(e.target.value || "0"), 0, 1000))}
                    className="mt-2 rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Used for traditional agency cost calculation.
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Average salary per hire
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={100}
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Math.max(parseFloat(e.target.value || "0"), 0))}
                    className="mt-2 rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Percent className="h-4 w-4" />
                    Traditional agency fee %
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={50}
                    step={0.5}
                    value={agencyFeePct}
                    onChange={(e) => setAgencyFeePct(clamp(parseFloat(e.target.value || "0"), 0, 50))}
                    className="mt-2 rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <p className="text-xs text-slate-500 mt-1">Typical range 15–25%.</p>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Subscription months
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={months}
                    onChange={(e) => setMonths(clamp(parseInt(e.target.value || "1"), 1, 12))}
                    className="mt-2 rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <p className="text-xs text-slate-500 mt-1">Common pilot: 3 months.</p>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  checked={includeGST}
                  onChange={(e) => setIncludeGST(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300"
                />
                <span className="text-sm text-slate-700">Include Singapore GST (9%)</span>
              </label>

              <div className="pt-4">
                <p className="text-sm font-medium text-slate-700 mb-2">Choose subscription plan</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {PLANS.map((p) => {
                    const active = p.id === planId;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPlanId(p.id)}
                        className={`text-left rounded-2xl border p-4 transition shadow-sm hover:shadow-md ${
                          active ? "border-black ring-2 ring-black" : "border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{p.name}</span>
                          {active && <ArrowRight className="h-4 w-4" />}
                        </div>
                        <div className="mt-1 text-slate-600 text-sm">{p.description}</div>
                        <div className="mt-3 text-sm font-semibold">{money(p.price, currency)} / mo</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-2"
        >
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5 md:p-6 sticky top-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Cost Comparison</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="text-sm text-slate-600">Traditional cost</div>
                <div className="text-right font-semibold">{money(traditionalCost, currency)}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="text-sm text-slate-600">
                  Subscription cost {includeGST && <span className="text-xs text-slate-400">(incl. GST)</span>}
                </div>
                <div className="text-right font-semibold">{money(subscriptionCost, currency)}</div>
              </div>

              <div className="h-px bg-slate-100 my-1" />

              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="text-sm text-slate-900 font-medium">Total savings</div>
                <div className="text-right text-emerald-600 font-semibold">{money(savings, currency)}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="text-sm text-slate-900 font-medium">% savings</div>
                <div className="text-right text-emerald-600 font-semibold">{savingsPct.toFixed(1)}%</div>
              </div>

              <div className="mt-4">
                <div className="text-xs text-slate-500 mb-2">Visual comparison</div>
                <div className="flex items-end gap-2 h-24">
                  <div className="flex-1 bg-slate-100 rounded-xl p-1">
                    <div
                      className="bg-slate-900 rounded-lg w-full"
                      style={{ height: `${traditionalCost === 0 ? 2 : 100}%`, opacity: 0.9 }}
                    />
                    <div className="text-center text-[11px] mt-1">Traditional</div>
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-xl p-1">
                    <div
                      className="bg-emerald-500 rounded-lg w-full"
                      style={{
                        height: `${
                          traditionalCost > 0
                            ? Math.max(2, Math.min(100, (subscriptionCost / traditionalCost) * 100))
                            : 2
                        }%`,
                      }}
                    />
                    <div className="text-center text-[11px] mt-1">Subscription</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                  <p className="text-sm text-emerald-700">
                    With <span className="font-medium">{plan?.name}</span> for {months}{" "}
                    {months === 1 ? "month" : "months"}, you save{" "}
                    <span className="font-semibold">{money(savings, currency)}</span> (
                    {savingsPct.toFixed(1)}%) versus a {agencyFeePct}% traditional agency.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2">
                <button
                  onClick={() => {
                    const text =
                      `Recruitment Subscription Savings\n\n` +
                      `Assumptions: ${numHires} hires, avg salary ${money(avgSalary, currency)}, traditional fee ${agencyFeePct}%, plan ${plan?.name} for ${months} month(s)${
                        includeGST ? " incl. GST" : ""
                      }.\n` +
                      `Traditional cost: ${money(traditionalCost, currency)}\n` +
                      `Subscription cost: ${money(subscriptionCost, currency)}\n` +
                      `Savings: ${money(savings, currency)} (${savingsPct.toFixed(1)}%)`;
                    navigator.clipboard.writeText(text);
                    alert("Summary copied to clipboard ✅");
                  }}
                  className="rounded-2xl bg-black text-white py-2.5 px-4 text-sm font-medium shadow hover:opacity-95"
                >
                  Copy summary
                </button>
                <p className="text-[11px] text-slate-500">
                  Paste this into emails/LinkedIn messages during outreach.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

