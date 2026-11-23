"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

interface LoyaltyTier {
  id: string;
  badge: string;
  discount: string;
  title: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

const tiers: LoyaltyTier[] = [
  {
    id: "starter",
    badge: "EXPRESS SETUP",
    discount: "-15%",
    title: "Starter Package",
    description: "Ideal for new commercial startups, CR setup, and single division GALLERY.",
    features: [
      "Fast-Track Commercial Registration (CR)",
      "Free Initial Ministry Consultation",
      "Express PRO Document Clearance",
      "Direct WhatsApp Account Manager",
    ],
  },
  {
    id: "featured",
    badge: "MOST POPULAR",
    discount: "-20%",
    title: "Annual AMC Partner",
    description: "Retainer coverage across facility engineering, pest control, and scheduled supplies.",
    features: [
      "All Starter Package inclusions",
      "24/7 Emergency Pest & Cleaning Dispatch",
      "15% Discount on Industrial Supplies",
      "Quarterly Preventative MEP Audits",
      "Priority Same-Day Mobile Fleet Care",
    ],
    isFeatured: true,
  },
  {
    id: "enterprise",
    badge: "FULL COMMERCIAL",
    discount: "-30%",
    title: "Turnkey Enterprise",
    description: "Integrated corporate, trading, facility, automotive, and creative media bundle.",
    features: [
      "All Annual AMC inclusions",
      "Dedicated Senior PRO & Legal Liaison",
      "Full Branding & Digital Web Suite",
      "Unlimited Mobile Fleet Cleaning Visits",
      "Consolidated Monthly Enterprise Invoicing",
    ],
  },
];

export function WireframeLoyalty() {
  return (
    <section
      id="packages"
      aria-label="Partnership Packages"
      className="py-16 sm:py-24 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Section matching "ПРОГРАММА ЛОЯЛЬНОСТИ" from wireframe */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
            ENTERPRISE CONTRACTS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Partnership Tiers
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Structured commercial agreements tailored to startups, growing businesses, and enterprise facilities in Doha.
          </p>
        </div>

        {/* 3 Connected Cards in Podium Layout (Matching wireframe) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${tier.isFeatured
                  ? "border-cyan-400/60 bg-gradient-to-b from-[#122A4E] to-[#0A182F] shadow-2xl shadow-cyan-500/20 lg:-translate-y-2"
                  : "border-white/10 bg-[#0F182A] hover:border-cyan-400/40"
                }`}
            >
              <div>
                {/* Top Badge & Discount Pill */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${tier.isFeatured
                        ? "bg-cyan-400 text-[#070B14] font-black"
                        : "bg-white/10 text-slate-300"
                      }`}
                  >
                    {tier.badge}
                  </span>

                  <span className="text-2xl font-black text-amber-400">
                    {tier.discount}
                  </span>
                </div>

                <h3 className="mt-5 text-xl sm:text-2xl font-black text-white uppercase">
                  {tier.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${tier.isFeatured ? "text-cyan-300" : "text-slate-400"
                          }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href={`/contact?package=${tier.id}`}
                  className={`inline-flex w-full min-h-[46px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${tier.isFeatured
                      ? "bg-[#00B4FF] hover:bg-[#0096D6] text-white shadow-lg shadow-cyan-500/30 hover:scale-[1.02]"
                      : "border border-white/20 bg-white/5 hover:bg-white/15 text-white"
                    }`}
                >
                  <span>Select Package</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global Pill Button below Tiers matching "ЗАПИСАТЬСЯ" button in mockup */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[50px] items-center gap-2.5 rounded-full px-8 py-3 text-sm font-bold bg-gradient-to-r from-[#0056B3] to-[#0088CE] hover:from-[#004088] hover:to-[#0077D7] text-white shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <span>SCHEDULE COMMERCIAL CONSULTATION</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
