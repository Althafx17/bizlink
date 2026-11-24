"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Cpu, TrendingUp, Sparkles, Car, CheckCircle2 } from "lucide-react";

interface DivisionCard {
  id: string;
  number: string;
  name: string;
  tagline: string;
  image: string;
  accent: string;
  servicesCount: number;
  anchor: string;
  highlights: string[];
}

const serviceDivisions: DivisionCard[] = [
  {
    id: "business-corporate",
    number: "01",
    name: "Business & Corporate",
    tagline: "Corporate Licensing, PRO Services & 100% Foreign Ownership",
    image: "/images/services/business-corporate-card.webp",
    accent: "#38bdf8",
    servicesCount: 8,
    anchor: "#business",
    highlights: [
      "Company Formation & CR",
      "Corporate PRO & Visas",
      "Embassy & MOFA Attestation",
    ],
  },
  {
    id: "digital-creative",
    number: "02",
    name: "Digital & Creative",
    tagline: "Custom Web Applications, Branding & Digital Marketing",
    image: "/images/services/digital-creative-card.webp",
    accent: "#818cf8",
    servicesCount: 7,
    anchor: "#digital",
    highlights: [
      "Custom Web & E-Commerce",
      "Branding & Creative Media",
      "Performance SEO & Ads",
    ],
  },
  {
    id: "trading-supply",
    number: "03",
    name: "Trading & Supply",
    tagline: "Wholesale Procurement, Industrial Supplies & Logistics",
    image: "/images/services/trading-supply-card.webp",
    accent: "#fbbf24",
    servicesCount: 7,
    anchor: "#trading",
    highlights: [
      "General Wholesale Trading",
      "Industrial & Safety Supplies",
      "Cross-Border Cargo Freight",
    ],
  },
  {
    id: "facility-maintenance",
    number: "04",
    name: "Facility & Maintenance",
    tagline: "24/7 Property Maintenance, Commercial Cleaning & AMC",
    image: "/images/services/facility-maintenance-card.webp",
    accent: "#34d399",
    servicesCount: 7,
    anchor: "#facility",
    highlights: [
      "24/7 Deep Cleaning & Hygiene",
      "Pest Control & Sanitization",
      "MEP Maintenance & Partitions",
    ],
  },
  {
    id: "automotive",
    number: "05",
    name: "Automotive Care",
    tagline: "Mobile Car Wash, Detailing & Fleet Maintenance",
    image: "/images/services/automotive-card.webp",
    accent: "#f472b6",
    servicesCount: 6,
    anchor: "#automotive",
    highlights: [
      "On-Demand Mobile Car Wash",
      "Ceramic Coating & Detailing",
      "Corporate Fleet Maintenance",
    ],
  },
];

export function ServicesHeroPresentation() {
  const [activeIdx, setActiveIdx] = useState(2); // Center card active by default (Division 03 or 02)

  return (
    <section
      id="services-presentation"
      aria-label="Our Service Solutions & Divisions"
      className="relative w-full bg-[#070A10] pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden border-b border-white/10"
    >
      {/* Outer Thin Elegant Golden Border matching reference design */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[#C5A880]/30 bg-gradient-to-b from-[#0B0F19] via-[#080B13] to-[#05070C] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="pointer-events-none absolute -top-40 -left-40 size-[500px] rounded-full bg-[#C5A880]/10 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

          {/* Top Header Row matching reference typography */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            
            {/* Left Title: Two-line editorial header (White + Gold Serif) */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                Services &amp;
              </span>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-[#C5A880] tracking-wide -mt-1 sm:-mt-2">
                Solutions
              </span>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-normal max-w-md leading-relaxed">
                Integrated enterprise operations across Qatar, India, UAE, and China. 5 specialized divisions delivering 35+ verified corporate services.
              </p>
            </div>

            {/* Right Tag matching "06/20" reference tag */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex flex-col items-end">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                  05 / 35
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                  Divisions · Scope
                </span>
              </div>
              <div className="hidden sm:flex size-2 rounded-full bg-[#C5A880] shadow-[0_0_8px_#C5A880]" />
            </div>
          </div>

          {/* 3D Perspective Fanned-Out Cards Array */}
          <div className="relative mt-12 sm:mt-16 w-full py-4">
            
            {/* Desktop 3D Perspective Container */}
            <div className="hidden md:flex items-center justify-center gap-3 lg:gap-4 perspective-[1200px]">
              {serviceDivisions.map((division, idx) => {
                const isActive = idx === activeIdx;
                const distance = idx - activeIdx;
                
                // Calculate realistic 3D rotation, translation, and scale based on distance from center
                const rotateY = distance * -12; // tilted towards center
                const translateZ = isActive ? 60 : -Math.abs(distance) * 35;
                const scale = isActive ? 1.05 : 0.92 - Math.abs(distance) * 0.04;
                const opacity = isActive ? 1 : 0.75 - Math.abs(distance) * 0.08;

                return (
                  <div
                    key={division.id}
                    onClick={() => setActiveIdx(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActiveIdx(idx);
                    }}
                    style={{
                      transform: `perspective(1000px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      opacity,
                      zIndex: isActive ? 30 : 20 - Math.abs(distance),
                    }}
                    className={`relative w-48 lg:w-56 xl:w-64 h-[340px] lg:h-[400px] rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-2xl group flex flex-col justify-between p-4 select-none ${
                      isActive
                        ? "border-[#C5A880] shadow-[#C5A880]/20 ring-1 ring-[#C5A880]/40"
                        : "border-white/15 hover:border-white/30 bg-[#0C121D]"
                    }`}
                  >
                    {/* Background Photography */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={division.image}
                        alt={division.name}
                        fill
                        sizes="(min-width: 1024px) 250px, 180px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient veil for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-[#070A10]/60 to-transparent" />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Top Card Badge: Division Number */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="flex items-center justify-center size-7 rounded-full bg-[#070A10]/90 border border-white/20 text-xs font-black text-white backdrop-blur-md">
                        {division.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                        {division.servicesCount} Services
                      </span>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="relative z-10">
                      <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors leading-tight">
                        {division.name}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {division.tagline}
                      </p>

                      {/* Itemized Highlights on Active Card */}
                      {isActive && (
                        <ul className="mt-2.5 pt-2 border-t border-white/15 space-y-1 text-[10px] text-slate-200">
                          {division.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-[#C5A880]" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                        <Link
                          href={division.anchor}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C5A880] hover:text-white transition-colors"
                        >
                          <span>Explore Division</span>
                          <ArrowRight size={12} />
                        </Link>
                        <ArrowUpRight size={14} className="text-white/60 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Horizontal Scrollable Showcase */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
              {serviceDivisions.map((division) => (
                <div
                  key={division.id}
                  className="snap-center shrink-0 relative w-[260px] h-[340px] rounded-2xl overflow-hidden border border-[#C5A880]/40 p-4 flex flex-col justify-between shadow-xl"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={division.image}
                      alt={division.name}
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-[#070A10]/60 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex items-center justify-center size-7 rounded-full bg-[#070A10]/90 border border-white/20 text-xs font-black text-white">
                      {division.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                      {division.servicesCount} Services
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-white">
                      {division.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 line-clamp-2">
                      {division.tagline}
                    </p>

                    <div className="mt-3 pt-2 border-t border-white/15">
                      <Link
                        href={division.anchor}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#C5A880]/30 to-[#C5A880]/10 border border-[#C5A880]/40 px-3 py-2 text-xs font-bold text-[#C5A880]"
                      >
                        <span>View Services</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Division Pills Selector */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {serviceDivisions.map((division, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={division.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#C5A880] text-slate-950 font-bold shadow-lg shadow-[#C5A880]/20 scale-105"
                      : "border border-white/15 bg-white/5 text-slate-300 hover:border-[#C5A880]/50 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-black uppercase opacity-80">{division.number}</span>
                  <span>{division.name}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesHeroPresentation;
