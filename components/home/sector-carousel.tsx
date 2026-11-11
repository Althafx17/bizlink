"use client";

import { useState } from "react";
import { Building2, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Truck, Wrench } from "lucide-react";

interface PillarSlide {
  id: string;
  sector: string;
  title: string;
  summary: string;
  scope: string;
  icon: "building" | "truck" | "wrench" | "shield" | "sparkles";
}

const slides: readonly PillarSlide[] = [
  {
    id: "corporate-wps",
    sector: "Corporate & Compliance Sector",
    title: "Seamless Company Setup & WPS",
    summary:
      "End-to-end commercial registration, Qatari sponsorship arrangements, PRO clearances, MOFA & Embassy attestation, and fully managed WPS payroll processing across Qatar.",
    scope: "CR • PRO • Attestation • WPS Payroll",
    icon: "shield",
  },
  {
    id: "facility-amc",
    sector: "Commercial & Hospitality Properties",
    title: "24/7 Facility & MEP Execution",
    summary:
      "Dependable annual maintenance contracts (AMC), deep cleaning, pest control, gypsum and glass partitioning, electrical, plumbing, and floor polishing under strict supervision.",
    scope: "AMC • Gypsum • Electrical • 24/7 Cleaning",
    icon: "wrench",
  },
  {
    id: "trading-logistics",
    sector: "Supply Chain & Fragrance Trade",
    title: "Trading, Cargo & Made-in-Qatar Scents",
    summary:
      "Bulk procurement, hypermarket supply, vehicle spare parts, international cargo clearance, and custom-blended Made-in-Qatar perfumes in 6ml to 50ml formats.",
    scope: "Procurement • Cargo • Spare Parts • Perfumes",
    icon: "truck",
  },
  {
    id: "automotive-digital",
    sector: "Fleet Care & Digital Solutions",
    title: "On-Site Auto Glass & IT Centers",
    summary:
      "Doorstep Pathas Mobile Car Wash, Prime Glass mobile windshield replacement, Biz Link Computer Center support, e-commerce enablement, and digital growth packages.",
    scope: "Mobile Wash • Prime Glass • Computer Center • Web",
    icon: "sparkles",
  },
  {
    id: "pathas-group",
    sector: "Pathas Group Backed Since 2010",
    title: "Regional Group Strength in Doha",
    summary:
      "Backed by Pathas Group of Companies spanning Qatar, India, UAE, and China — giving Doha businesses an experienced, transparent single point of accountability.",
    scope: "Qatar • India • UAE • China",
    icon: "building",
  },
];

function SlideIcon({ name }: { name: PillarSlide["icon"] }) {
  switch (name) {
    case "shield":
      return <ShieldCheck size={24} className="text-[#0056B3]" aria-hidden="true" />;
    case "wrench":
      return <Wrench size={24} className="text-[#0056B3]" aria-hidden="true" />;
    case "truck":
      return <Truck size={24} className="text-[#0056B3]" aria-hidden="true" />;
    case "sparkles":
      return <Sparkles size={24} className="text-[#0056B3]" aria-hidden="true" />;
    default:
      return <Building2 size={24} className="text-[#0056B3]" aria-hidden="true" />;
  }
}

export function SectorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const handlePrev = () => setActiveIndex(prevIndex);
  const handleNext = () => setActiveIndex(nextIndex);

  const visibleIndices = [
    { idx: prevIndex, position: "left" as const },
    { idx: activeIndex, position: "center" as const },
    { idx: nextIndex, position: "right" as const },
  ];

  return (
    <div className="mt-10 sm:mt-12">
      <div className="relative flex items-center justify-center gap-4 lg:gap-6">
        {/* Left Navigation Arrow (Desktop/Tablet) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous client sector highlight"
          className="hidden sm:inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#0B2C5F]/15 bg-white text-[#0B2C5F] shadow-sm transition hover:border-[#0056B3] hover:bg-[#EAF2FA] hover:text-[#0056B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3]"
        >
          <ChevronLeft size={20} />
        </button>

        {/* 3-Card Stage matching Prototype Section 7 */}
        <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-5 md:grid-cols-[0.88fr_1.24fr_0.88fr]">
          {visibleIndices.map(({ idx, position }) => {
            const slide = slides[idx];
            const isCenter = position === "center";

            return (
              <div
                key={`${slide.id}-${position}`}
                onClick={() => !isCenter && setActiveIndex(idx)}
                role={isCenter ? undefined : "button"}
                tabIndex={isCenter ? undefined : 0}
                onKeyDown={(e) => {
                  if (!isCenter && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                className={`rounded-3xl transition-all duration-300 text-center flex flex-col items-center ${
                  isCenter
                    ? "bg-[#EAF2FA] border border-[#0066CC]/25 px-6 py-8 sm:px-8 sm:py-10 shadow-xl shadow-[#0B2C5F]/8"
                    : "hidden md:flex bg-[#F5F8FC] border border-[#0B2C5F]/8 px-5 py-7 opacity-65 hover:opacity-90 cursor-pointer scale-95"
                }`}
              >
                {/* Circular White Medallion on Top */}
                <div
                  className={`grid place-items-center rounded-full bg-white shadow-md ring-1 ring-[#0B2C5F]/10 ${
                    isCenter ? "size-16 mb-4" : "size-12 mb-3"
                  }`}
                >
                  <SlideIcon name={slide.icon} />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0077CC]">
                  {slide.sector}
                </p>

                <h3
                  className={`mt-2 font-extrabold tracking-tight text-[#0B2C5F] ${
                    isCenter ? "text-lg sm:text-xl" : "text-base"
                  }`}
                >
                  {slide.title}
                </h3>

                <p
                  className={`mt-3 leading-relaxed text-[#475D7A] ${
                    isCenter ? "text-sm max-w-md" : "text-xs line-clamp-3"
                  }`}
                >
                  {slide.summary}
                </p>

                {isCenter && (
                  <span className="mt-5 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[11px] font-bold tracking-wide text-[#0B2C5F] shadow-sm border border-[#0B2C5F]/10">
                    {slide.scope}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Navigation Arrow (Desktop/Tablet) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next client sector highlight"
          className="hidden sm:inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#0B2C5F]/15 bg-white text-[#0B2C5F] shadow-sm transition hover:border-[#0056B3] hover:bg-[#EAF2FA] hover:text-[#0056B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Dots + Mobile Arrows */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous highlight"
          className="inline-flex sm:hidden size-9 items-center justify-center rounded-full border border-[#0B2C5F]/15 bg-white text-[#0B2C5F]"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose sector highlight">
          {slides.map((slide, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={slide.title}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active ? "w-7 bg-[#0056B3]" : "w-2.5 bg-[#0B2C5F]/20 hover:bg-[#0B2C5F]/40"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next highlight"
          className="inline-flex sm:hidden size-9 items-center justify-center rounded-full border border-[#0B2C5F]/15 bg-white text-[#0B2C5F]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

