"use client";
import { useState, useMemo } from "react";

// ✅ Updated plan prices + descriptions
const PLANS = [
  { id: "starter",    name: "Starter Plan",    price: 8500,  description: "Startups & small teams (2 active searches)" },
  { id: "growth",     name: "Growth Plan",     price: 10500, description: "Scaling businesses (up to 5 active searches)" },
  { id: "enterprise", name: "Enterprise Plan", price: 15000, description: "Established companies (up to 12 searches)" },
];

// Helper to coerce empty/invalid input to 0
const toNumber = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export default function Calculator() {
  // Example fields (adjust to match your UI)
  const [inputs, setInputs] = useState({
    rolesPerMonth: 0,
    avgAgencyFee: 25, // %
    avgSalary: 6000,  // monthly base or use annual/whatever your math expects
    months: 1,
    plan: "starter",
  });

  const handleChange = (name) => (e) => {
    const val = e?.target?.value ?? e;
    // ✅ Empty field => 0 (fixes “doesn’t start from 0”)
    setInputs((s) => ({ ...s, [name]: val === "" ? 0 : toNumber(val) }));
  };

  const handlePlan = (planId) => {
    setInputs((s) => ({ ...s, plan: planId }));
  };

  const selectedPlan = useMemo(
    () => PLANS.find((p) => p.id === inputs.plan) ?? PLANS[0],
    [inputs.plan]
  );

  // ✏️ Example math (adjust to your model):
  // Agency cost avoided = roles * months * (avgSalary * agencyFee%)
  // Subscription cost = plan.price * months
  const agencyCostAvoided = useMemo(() => {
    const feePct = toNumber(inputs.avgAgencyFee) / 100;
    return toNumber(inputs.rolesPerMonth) * toNumber(inputs.months) * (toNumber(inputs.avgSalary) * feePct);
  }, [inputs.rolesPerMonth, inputs.months, inputs.avgSalary, inputs.avgAgencyFee]);

  const subscriptionCost = useMemo(() => {
    return selectedPlan.price * toNumber(inputs.months);
  }, [selectedPlan.price, inputs.months]);

  const netSavings = useMemo(() => {
    return Math.max(agencyCostAvoided - subscriptionCost, 0);
  }, [agencyCostAvoided, subscriptionCost]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left: Inputs */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Active roles per month</label>
          <input
            type="number"
            min={0}
            step={1}
            value={inputs.rolesPerMonth ?? 0}
            onChange={handleChange("rolesPerMonth")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Average salary (monthly)</label>
          <input
            type="number"
            min={0}
            step={100}
            value={inputs.avgSalary ?? 0}
            onChange={handleChange("avgSalary")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Typical agency fee (%)</label>
          <input
            type="number"
            min={0}
            max={100}
            step={1}
            value={inputs.avgAgencyFee ?? 0}
            onChange={handleChange("avgAgencyFee")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="0"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Months of subscription</label>
          <input
            type="number"
            min={1}
            step={1}
            value={inputs.months ?? 1}
            onChange={handleChange("months")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Choose a plan</label>
          <div className="mt-2 grid sm:grid-cols-3 gap-2">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePlan(p.id)}
                className={`rounded-lg border px-3 py-2 text-left ${
                  inputs.plan === p.id ? "border-sx-accent bg-sx-accent/10" : "border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-slate-600">${p.price.toLocaleString()}/mo</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Results */}
      <div className="rounded-xl border border-slate-200 p-5 bg-white">
        <h3 className="text-lg font-semibold">Your Savings Estimate</h3>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Agency cost avoided</span>
            <span className="font-medium">${agencyCostAvoided.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Subscription cost ({selectedPlan.name})</span>
            <span className="font-medium">${subscriptionCost.toLocaleString()}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-sx-dark text-base font-semibold">
            <span>Net savings</span>
            <span>${netSavings.toLocaleString()}</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          * Estimates for illustration. Adjust inputs to reflect your roles and market.
        </p>
      </div>
    </div>
  );
}



