"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Car,
  ChevronLeft,
  ChevronRight,
  Monitor,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

export interface ServiceCardItem {
  id: string;
  number: string;
  anchor: string;
  title: string;
  subtitle: string;
  divisionLabel: string;
  description: string;
  tagline: string;
  image: string;
  iconName: "building" | "monitor" | "truck" | "wrench" | "car";
  features: string[];
}

export const homeServices: ServiceCardItem[] = [
  {
    id: "business-corporate",
    number: "01",
    anchor: "business-corporate",
    title: "Business & Corporate Solutions",
    subtitle: "Company Formation, CR Licensing & Corporate PRO",
    divisionLabel: "Prestation 01 · Corporate",
    description:
      "End-to-end commercial registration (CR), 100% foreign company formation, corporate PRO liaison, document attestation, and certified WPS payroll compliance across Qatar.",
    tagline: "Simplifying Business. Supporting Growth. Creating Opportunities.",
    image: "/images/services/business-corporate-bg.webp",
    iconName: "building",
    features: [
      "Company Formation & CR Licensing",
      "Corporate PRO & Ministry Attestation",
      "WPS Payroll & Bank Account Setup",
    ],
  },
  {
    id: "digital-creative",
    number: "02",
    anchor: "digital-creative",
    title: "Digital & Creative Solutions",
    subtitle: "Brand Identity, Custom Web & AI Video Production",
    divisionLabel: "Prestation 02 · Media",
    description:
      "High-impact corporate brand identity, performance digital marketing, responsive web & e-commerce engineering, SEO visibility, and cutting-edge cinematic AI video.",
    tagline: "Building Brands. Connecting Audiences. Growing Businesses.",
    image: "/images/services/digital-creative-card.webp",
    iconName: "monitor",
    features: [
      "Custom Web & E-Commerce Platforms",
      "Performance Ads & SEO Ranking",
      "Cinematic AI Video & Social Media",
    ],
  },
  {
    id: "trading-supply",
    number: "03",
    anchor: "trading-supply",
    title: "Trading & Supply Solutions",
    subtitle: "Wholesale Procurement & Luxury Qatar Fragrances",
    divisionLabel: "Prestation 03 · Trading",
    description:
      "General commercial trading, bulk retail procurement, industrial safety supplies, construction materials, fleet spare parts, and exclusive made-in-Qatar luxury perfumes.",
    tagline: "Quality Products. Reliable Supply. Business Excellence.",
    image: "/images/services/trading-supply-bg.webp",
    iconName: "truck",
    features: [
      "Bulk Procurement & Cargo Logistics",
      "Industrial & Building Materials",
      "Made-in-Qatar Luxury Perfumes",
    ],
  },
  {
    id: "facility-maintenance",
    number: "04",
    anchor: "facility-maintenance",
    title: "Facility Management & Maintenance",
    subtitle: "Commercial Property Care, MEP Repairs & AMC",
    divisionLabel: "Prestation 04 · Facilities",
    description:
      "24/7 commercial & residential deep cleaning, certified pest control extermination, general MEP engineering, gypsum & glass partitions, and annual AMC maintenance.",
    tagline: "Maintaining Spaces. Enhancing Environments. Ensuring Reliability.",
    image: "/images/services/facility-maintenance-bg.webp",
    iconName: "wrench",
    features: [
      "24/7 Deep Cleaning & Sanitization",
      "General MEP & HVAC Maintenance",
      "Gypsum Board & Glass Partition Works",
    ],
  },
  {
    id: "automotive",
    number: "05",
    anchor: "automotive",
    title: "Automotive & Mobile Car Care",
    subtitle: "Mobile Detailing & Prime Glass Windshield Repair",
    divisionLabel: "Prestation 05 · Automotive",
    description:
      "Pathas on-demand mobile car wash, premium interior steam cleaning, machine polishing, ceramic coating, and certified Prime Glass on-site windshield repair & replacement.",
    tagline: "Professional Care, Delivered Right to Your Location.",
    image: "/images/services/automotive-bg.webp",
    iconName: "car",
    features: [
      "Mobile Car Wash & Detailing Anywhere",
      "Ceramic Coating & Paint Polish",
      "Prime Glass Windshield Repair & Replacement",
    ],
  },
];

function getServiceIcon(icon: ServiceCardItem["iconName"], size = 26, className = "text-cyan-300") {
  switch (icon) {
    case "building":
      return <Building2 size={size} className={className} />;
    case "monitor":
      return <Monitor size={size} className={className} />;
    case "truck":
      return <Truck size={size} className={className} />;
    case "wrench":
      return <Wrench size={size} className={className} />;
    case "car":
      return <Car size={size} className={className} />;
    default:
      return <Sparkles size={size} className={className} />;
  }
}

const ROTATION_INTERVAL_MS = 4000;

export function WireframeGallery() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Start on Division 02 like the reference
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = homeServices.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic timer based movement across services
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Compute 3-card window indices
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const prevService = homeServices[prevIndex];
  const activeService = homeServices[activeIndex];
  const nextService = homeServices[nextIndex];

  return (
    <section
      id="services"
      aria-label="BizLink Services"
      className="relative py-16 sm:py-24 bg-[#07111E] border-b border-white/10 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glows matching reference deep dark teal/sapphire palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* HEADER SECTION (Matching "NOS PRESTATIONS" style from reference) */}
        {/* ============================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
            NOS SERVICES · OUR 5 CORE DIVISIONS
          </span>

          {/* Elegant curved wave accent under title from reference mockup */}
          <div className="my-2 flex justify-center items-center">
            <svg
              className="w-20 h-3 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              viewBox="0 0 100 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 8 Q25 2 50 8 T96 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M20 12 Q40 6 65 12 T80 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Integrated Business Solutions
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
            Comprehensive commercial capabilities spanning corporate formation, digital media, trading supply, facility maintenance, and mobile automotive care in Qatar.
          </p>

          {/* Live Timing / Rotation Status Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold text-slate-300 backdrop-blur-md">
            <span
              className={`size-2 rounded-full ${
                isPaused ? "bg-amber-400" : "bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              }`}
            />
            <span>
              {isPaused ? "Auto-play paused on hover" : `Auto-advancing every 4s (${activeIndex + 1} of 5)`}
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CAROUSEL CONTAINER (3-Card Panoramic Grid with Arrow Controls) */}
        {/* ============================================================== */}
        <div className="relative">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous service division"
            className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-13 rounded-full bg-[#081728]/90 hover:bg-[#0E284A] border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform text-cyan-200" />
          </button>

          {/* Right Arrow Button (Matching circular frosted button on right edge of reference image) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next service division"
            className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-13 rounded-full bg-[#081728]/90 hover:bg-[#0E284A] border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 group"
          >
            <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform text-cyan-200" />
          </button>

          {/* Cards Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center max-w-6xl mx-auto px-2 sm:px-0">
            
            {/* ------------------------------------------------------------ */}
            {/* CARD 1: PREVIOUS SERVICE (Left Photography Card) */}
            {/* ------------------------------------------------------------ */}
            <div
              onClick={() => setActiveIndex(prevIndex)}
              className="hidden lg:block relative aspect-[4/5] min-h-[460px] rounded-[32px] overflow-hidden border border-white/15 bg-[#0B1B2F] shadow-2xl group cursor-pointer hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Background Photography */}
              <Image
                src={prevService.image}
                alt={prevService.title}
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111E] via-[#07111E]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#07111E]/20" />

              {/* Bottom Frosted Glass Circular Icon Badge & Label */}
              <div className="absolute bottom-6 inset-x-4 flex flex-col items-center text-center">
                <div className="size-14 sm:size-16 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                  {getServiceIcon(prevService.iconName, 26, "text-cyan-300")}
                </div>
                <span className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                  Prestation {prevService.number}
                </span>
                <p className="mt-1 text-sm font-extrabold text-white truncate max-w-[220px]">
                  {prevService.title}
                </p>
                <span className="mt-1 text-[11px] text-slate-300/80 group-hover:text-cyan-200 transition-colors">
                  Click to view details ←
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* CARD 2: ACTIVE SERVICE (Center Focused Highlight Card) */}
            {/* ------------------------------------------------------------ */}
            <div className="relative w-full max-w-[420px] lg:max-w-none mx-auto aspect-[4/5] min-h-[460px] sm:min-h-[500px] rounded-[32px] overflow-hidden border-2 border-cyan-400/60 bg-gradient-to-b from-[#0F223D]/95 via-[#0A182B]/95 to-[#061120]/95 shadow-[0_20px_50px_rgba(0,180,255,0.25)] flex flex-col justify-between p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 scale-100 lg:scale-105 z-10">
              
              {/* Subtle ambient image texture behind the glass with deep overlay */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07111E] via-[#07111E]/80 to-[#07111E]" />
              </div>

              {/* Card Top: Embossed Circular Badge & Division Number */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Large Embossed Circular Icon Badge matching center card of reference */}
                <div className="relative size-16 sm:size-20 rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/25 to-[#0056B3]/40 border border-cyan-400/50 shadow-[0_0_25px_rgba(34,211,238,0.3)] backdrop-blur-md flex items-center justify-center text-cyan-300">
                  {getServiceIcon(activeService.iconName, 32, "text-cyan-300")}
                  <span className="absolute -top-1 -right-1 size-5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-[10px] font-black text-[#07111E] flex items-center justify-center shadow-md">
                    {activeService.number}
                  </span>
                </div>

                <span className="mt-3 text-[11px] font-black uppercase tracking-[0.25em] text-cyan-300">
                  {activeService.divisionLabel}
                </span>

                <h3 className="mt-1.5 text-xl sm:text-2xl font-black text-white leading-tight">
                  {activeService.title}
                </h3>

                <p className="mt-2 text-xs font-semibold italic text-cyan-200">
                  “{activeService.tagline}”
                </p>
              </div>

              {/* Card Middle: Description & Key Highlights */}
              <div className="relative z-10 my-auto text-center space-y-3">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  {activeService.description}
                </p>

                {/* Key feature pills */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {activeService.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-sm"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: "En savoir plus" style Cream/Gold Pill Button */}
              <div className="relative z-10 flex flex-col items-center pt-4 border-t border-white/10">
                <Link
                  href={`/services#${activeService.anchor}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-200 via-cyan-100 to-amber-100 hover:from-white hover:to-cyan-200 text-[#07111E] font-black text-xs sm:text-sm px-7 py-3 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95"
                >
                  <span>Explore Division Details</span>
                  <ArrowRight size={15} />
                </Link>

                <span className="mt-2 text-[10px] text-slate-400 font-medium">
                  Direct official brochure scope & WhatsApp consultation
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* CARD 3: NEXT SERVICE (Right Photography Card) */}
            {/* ------------------------------------------------------------ */}
            <div
              onClick={() => setActiveIndex(nextIndex)}
              className="hidden lg:block relative aspect-[4/5] min-h-[460px] rounded-[32px] overflow-hidden border border-white/15 bg-[#0B1B2F] shadow-2xl group cursor-pointer hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Background Photography */}
              <Image
                src={nextService.image}
                alt={nextService.title}
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111E] via-[#07111E]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#07111E]/20" />

              {/* Bottom Frosted Glass Circular Icon Badge & Label */}
              <div className="absolute bottom-6 inset-x-4 flex flex-col items-center text-center">
                <div className="size-14 sm:size-16 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                  {getServiceIcon(nextService.iconName, 26, "text-cyan-300")}
                </div>
                <span className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                  Prestation {nextService.number}
                </span>
                <p className="mt-1 text-sm font-extrabold text-white truncate max-w-[220px]">
                  {nextService.title}
                </p>
                <span className="mt-1 text-[11px] text-slate-300/80 group-hover:text-cyan-200 transition-colors">
                  Click to view details →
                </span>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* BOTTOM TIMELINE & DIRECT NAVIGATION BULLETS (01 - 05) */}
          {/* ============================================================== */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4">
            
            {/* Visual Indicator Dots */}
            <div className="flex items-center gap-2.5">
              {homeServices.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Switch to Division ${service.number} · ${service.title}`}
                    className={`group relative flex items-center gap-1.5 transition-all duration-300 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        : "bg-white/10 hover:bg-white/20 px-2.5 py-1.5 border border-white/10"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-black ${
                        isActive ? "text-[#07111E]" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {service.number}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#07111E] hidden sm:inline">
                        {service.id.split("-")[0]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* View Full Services Directory Link */}
            <div className="pt-2 text-center">
              <Link
                href="/services"
                className="text-xs font-bold text-cyan-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                View all 35+ itemized services across our 5 divisions →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
