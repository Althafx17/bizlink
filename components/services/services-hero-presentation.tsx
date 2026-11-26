"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    image: "/images/services/sub service/Business & Corporate Solutions.jpg",
    accent: "#38bdf8",
    servicesCount: 8,
    anchor: "/services/business-corporate",
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
    image: "/images/services/sub service/Digital & Creative Solutions 1.jpg",
    accent: "#818cf8",
    servicesCount: 7,
    anchor: "/services/digital-creative",
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
    image: "/images/services/brochure/trading-supply-main.webp",
    accent: "#38bdf8",
    servicesCount: 7,
    anchor: "/services/trading-supply",
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
    image: "/images/services/brochure/facility-maintenance-main.webp",
    accent: "#34d399",
    servicesCount: 7,
    anchor: "/services/facility-maintenance",
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
    image: "/images/services/sub service/AUTOMOBILE AND SERVICES.png",
    accent: "#f472b6",
    servicesCount: 6,
    anchor: "/services/automotive",
    highlights: [
      "On-Demand Mobile Car Wash",
      "Ceramic Coating & Detailing",
      "Corporate Fleet Maintenance",
    ],
  },
];

export function ServicesHeroPresentation() {
  const [activeIdx, setActiveIdx] = useState(2); // Center card active by default

  return (
    <section
      id="services-presentation"
      aria-label="Our Service Solutions & Divisions"
      className="relative w-full max-w-full bg-[#000E24] pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-clip border-b border-white/10"
    >
      {/* Ambient multi-spectral radiant aurora glow mesh */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 size-[320px] sm:size-[600px] rounded-full bg-cyan-400/25 blur-[120px] sm:blur-[160px]" />
        <div className="absolute top-1/3 right-0 translate-x-1/4 size-[320px] sm:size-[600px] rounded-full bg-violet-600/25 blur-[120px] sm:blur-[160px]" />
        <div className="absolute -bottom-20 left-1/4 size-[300px] sm:size-[500px] rounded-full bg-blue-500/20 blur-[110px] sm:blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#000E24] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Luminous Glass Theme Container Frame matching the website's aesthetic */}
        <div className="relative rounded-3xl border border-white/25 bg-gradient-to-b from-white/[0.1] via-[#071426]/85 to-[#000E24]/95 p-6 sm:p-10 lg:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.3),0_0_40px_rgba(0,180,255,0.2)] overflow-hidden backdrop-blur-2xl">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 size-[260px] sm:size-[500px] rounded-full bg-cyan-400/15 blur-[90px] sm:blur-[140px]" />
            <div className="absolute -bottom-40 right-0 translate-x-1/3 size-[260px] sm:size-[500px] rounded-full bg-sky-500/15 blur-[90px] sm:blur-[150px]" />
          </div>

          {/* Top Header Row matching the typography & fonts of other website pages */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            
            {/* Left Column: Heading & Font matching Home, About & Company Profile */}
            <div className="flex flex-col text-left">
              {/* Eyebrow Badge matching website style */}
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-sm">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Operational Excellence
              </div>

              {/* Main Headline: Bold, modern, clean editorial look matching other pages */}
              <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[54px] xl:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
                How We <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                  Deliver
                </span>
              </h1>

              {/* Subtitle / Value Proposition: Clean sans-serif matching other pages */}
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Structured five-division delivery across Qatar, India, UAE, and China, ensuring accountability, compliance, and transparent service execution.
              </p>
            </div>

            {/* Right Tag matching the blue theme */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex flex-col items-end">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
                  05 / 35
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                  Divisions · Scope
                </span>
              </div>
              <div className="hidden sm:flex size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            </div>
          </div>

          {/* 3D Perspective Fanned-Out Cards Array */}
          <div className="relative mt-12 sm:mt-16 w-full max-w-full overflow-hidden py-4">
            
            {/* Desktop 3D Perspective Container */}
            <div className="hidden md:flex items-center justify-center gap-3 lg:gap-4 perspective-[1200px]">
              {serviceDivisions.map((division, idx) => {
                const isActive = idx === activeIdx;
                const distance = idx - activeIdx;
                
                // Calculate 3D rotation, translation, and scale
                const rotateY = distance * -12;
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
                        ? "border-cyan-400/90 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.4),0_0_35px_rgba(0,210,255,0.35)] ring-1 ring-cyan-400/60 bg-gradient-to-br from-white/[0.18] via-[#001438]/85 to-[#000E24]/95 backdrop-blur-2xl"
                        : "border-white/25 hover:border-cyan-400/60 bg-gradient-to-br from-white/[0.1] via-[#071426]/75 to-[#000E24]/90 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)]"
                    }`}
                  >
                    {/* Background Photography */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={division.image}
                        alt={division.name}
                        fill
                        sizes="(min-width: 1024px) 250px, 180px"
                        className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient veil for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000E24] via-[#000E24]/65 to-transparent" />
                      <div className="absolute inset-0 bg-[#001438]/20" />
                    </div>

                    {/* Top Card Badge: Division Number */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="flex items-center justify-center size-7 rounded-full bg-[#000E24]/90 border border-cyan-400/40 text-xs font-black text-cyan-300 backdrop-blur-md">
                        {division.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-[#001438]/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                        {division.servicesCount} Services
                      </span>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="relative z-10">
                      <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                        {division.name}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {division.tagline}
                      </p>

                      {/* Itemized Highlights on Active Card */}
                      {isActive && (
                        <ul className="mt-2.5 pt-2 border-t border-cyan-500/20 space-y-1 text-[10px] text-slate-200">
                          {division.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-cyan-400" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                        <Link
                          href={division.anchor}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 hover:text-white transition-colors"
                        >
                          <span>Explore Division</span>
                          <ArrowRight size={12} />
                        </Link>
                        <ArrowUpRight size={14} className="text-white/60 group-hover:text-cyan-300 transition-colors" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Horizontal Scrollable Showcase */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar w-full max-w-full box-border">
              {serviceDivisions.map((division) => (
                <div
                  key={division.id}
                  className="snap-center shrink-0 relative w-[calc(100vw-5rem)] max-w-[280px] h-[340px] rounded-2xl overflow-hidden border border-cyan-400/50 p-4 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3),0_0_25px_rgba(0,180,255,0.2)] bg-gradient-to-br from-white/[0.14] via-[#001438]/85 to-[#000E24]/95 backdrop-blur-2xl box-border"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={division.image}
                      alt={division.name}
                      fill
                      sizes="280px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000E24] via-[#000E24]/65 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex items-center justify-center size-7 rounded-full bg-[#000E24]/90 border border-cyan-400/40 text-xs font-black text-cyan-300">
                      {division.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-[#001438]/80 px-2 py-0.5 rounded-full border border-white/10">
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
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-3 py-2 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20"
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

          {/* Bottom Division Pills Selector: Website Blue & Cyan Theme */}
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
                      ? "bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] text-white font-bold shadow-lg shadow-cyan-500/30 scale-105"
                      : "border border-white/15 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-white"
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
