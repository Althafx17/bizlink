"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Cpu,
  TrendingUp,
  Sparkles,
  Car,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Grid3X3,
  SlidersHorizontal,
} from "lucide-react";

interface ServiceDivisionItem {
  id: string;
  badge: string;
  title: string;
  category: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const homeServices: ServiceDivisionItem[] = [
  {
    id: "01",
    badge: "Corporate & PRO",
    title: "Business & Corporate Solutions",
    category: "Division 01",
    description:
      "End-to-end company formation, 100% foreign ownership, commercial licensing, PRO operations, and regulatory compliance in Doha, Qatar.",
    points: [
      "Company Formation & Commercial Registration (CR)",
      "Corporate PRO & Government Relations (MOCI / MOI)",
      "Embassy Attestation, Legal Typing & Translation",
    ],
    ctaText: "View Details & Scope",
    ctaHref: "/services/business-corporate",
    image: "/images/services/brochure/business-corporate-main.webp",
    icon: Building2,
  },
  {
    id: "02",
    badge: "Digital & Media",
    title: "Digital & Creative Solutions",
    category: "Division 02",
    description:
      "Custom enterprise web platforms, branding, performance marketing, IT solutions, and media production built for fast-scaling GCC businesses.",
    points: [
      "Custom Web & E-Commerce Platform Development",
      "Brand Identity, Media Production & Commercial Video",
      "SEO, Performance Marketing & Social Media Management",
    ],
    ctaText: "View Details & Scope",
    ctaHref: "/services/digital-creative",
    image: "/images/services/bizlink digital service.jpg",
    icon: Cpu,
  },
  {
    id: "03",
    badge: "Trading & Supply",
    title: "International Trading & Supply Solutions",
    category: "Division 03",
    description:
      "Cross-border wholesale distribution, industrial materials procurement, logistics optimization, and luxury perfumes across GCC corridors.",
    points: [
      "General Trading, Retail & Commercial Distribution",
      "Industrial Safety Supplies & Construction Hardware",
      "Bulk International Procurement & Freight Logistics",
    ],
    ctaText: "View Details & Scope",
    ctaHref: "/services/trading-supply",
    image: "/images/services/brochure/trading-supply-main.webp",
    icon: TrendingUp,
  },
  {
    id: "04",
    badge: "Facility Management",
    title: "Facility Management & Maintenance",
    category: "Division 04",
    description:
      "Comprehensive property care, 24/7 commercial cleaning, pest control, gypsum partitions, MEP repairs, and annual maintenance contracts.",
    points: [
      "Commercial & Residential Deep Cleaning (24/7 Doha)",
      "Pest Control, Disinfection & Sanitization Protocols",
      "Gypsum Board Partitions, Glass Works & MEP Repairs",
    ],
    ctaText: "View Details & Scope",
    ctaHref: "/services/facility-maintenance",
    image: "/images/services/brochure/facility-maintenance-main.webp",
    icon: Sparkles,
  },
  {
    id: "05",
    badge: "Automotive Care",
    title: "Automotive & Mobile Car Care",
    category: "Division 05",
    description:
      "Professional mobile car wash delivered to your doorstep, VIP detailing, ceramic paint protection, auto glass replacement, and corporate fleet care.",
    points: [
      "Pathas Mobile Car Wash (Any Where, Any Time in Doha)",
      "Interior Deep Cleaning, Detailing & Ceramic Coating",
      "Prime Glass Mobile Windshield Repair & Replacement",
    ],
    ctaText: "View Details & Scope",
    ctaHref: "/services/automotive",
    image: "/images/services/brochure/automotive-main.webp",
    icon: Car,
  },
];

export function WireframeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  const total = homeServices.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance slides every 4.5 seconds in carousel view unless hovered
  useEffect(() => {
    if (isPaused || viewMode !== "carousel") return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, viewMode, nextSlide]);

  const getSlideAt = (offset: number) => {
    const idx = (currentIndex + offset + total) % total;
    return homeServices[idx];
  };

  const prevItem = getSlideAt(-1);
  const currentItem = getSlideAt(0);
  const nextItem = getSlideAt(1);

  return (
    <section
      id="services"
      aria-label="Our Service Solutions & Divisions"
      className="relative overflow-hidden bg-[#000E24] py-20 text-white md:py-28 w-full max-w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient multi-spectral radiant aurora glow mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/25 blur-[140px]" />
        <div className="absolute -right-24 top-1/3 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[150px]" />
        <div className="absolute left-1/3 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />
        <div className="absolute right-1/4 -bottom-20 h-[400px] w-[400px] rounded-full bg-amber-500/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 uppercase shadow-sm">
            <span>Our Service Solutions</span>
          </div>

          {/* Elegant wavy ribbon accent */}
          <div className="mt-3 flex justify-center">
            <svg
              className="h-4 w-28 text-cyan-400/70"
              viewBox="0 0 120 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M 0,8 C 15,2 30,14 45,8 C 60,2 75,14 90,8 C 105,2 115,12 120,8" />
            </svg>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Specialized Corporate &amp; Industrial Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Delivering trusted business setup, facility management, international trading, automotive care, and technology infrastructure across Qatar and the GCC.
          </p>

          {/* View Mode Switch: Carousel vs All 5 Cards Grid */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="inline-flex items-center rounded-xl border border-white/10 bg-[#0c1f2b]/80 p-1 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setViewMode("carousel")}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === "carousel"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Carousel View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Grid3X3 className="h-3.5 w-3.5" />
                <span>Show All 5 Divisions</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 1. CAROUSEL VIEW: 3-Card Panoramic with Full Contents on All Cards */}
        {viewMode === "carousel" && (
          <div className="relative mt-12 sm:mt-16">
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
              {/* Previous Card - Luminous Glassmorphic */}
              <div
                onClick={prevSlide}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") prevSlide();
                }}
                className="group relative hidden cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.1] via-[#0b2138]/60 to-[#07131b]/80 p-6 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] md:flex"
              >
                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[190px] w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={prevItem.image}
                      alt={prevItem.title}
                      fill
                      className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f2b] via-[#0c1f2b]/30 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center">
                      <prevItem.icon className="h-4 w-4 text-cyan-300 drop-shadow-md" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                      {prevItem.badge}
                    </div>
                    <h3 className="mt-1.5 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {prevItem.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                      {prevItem.description}
                    </p>

                    {/* Full Feature Checklist on Previous Card */}
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                      {prevItem.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={prevItem.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-950/40 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950"
                  >
                    <span>{prevItem.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Active Center Card (Spotlight) - Luminous Crystal Glass */}
              <div className="relative z-10 flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-cyan-400/80 bg-gradient-to-br from-white/[0.16] via-[#0f324d]/80 to-[#07131b]/95 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.4),0_0_45px_rgba(0,210,255,0.3)] backdrop-blur-2xl transition-all duration-500">
                <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[220px] w-full overflow-hidden rounded-2xl border border-cyan-400/40 shadow-inner">
                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentItem.image}
                        alt={currentItem.title}
                        fill
                        priority
                        className="object-cover object-[center_30%] transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2738] via-transparent to-black/20 pointer-events-none" />
                    {/* Top-left icon with cleared container styling & redundant span badges removed */}
                    <div className="absolute top-3 left-3 flex items-center">
                      <currentItem.icon className="h-5 w-5 text-cyan-300 drop-shadow-[0_2px_8px_rgba(0,180,255,0.8)]" />
                    </div>
                  </div>

                  <div className="mt-4">
                    {/* Primary Heading with Enhanced Typography & Gradient Text */}
                    <h3 className="mt-[2.5rem] text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.12] font-black tracking-[0.02em] bg-gradient-to-r from-white via-white to-[#cffafe] bg-clip-text text-transparent drop-shadow-md">
                      {currentItem.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      {currentItem.description}
                    </p>

                    {/* Full Feature Checklist on Active Card */}
                    <ul className="mt-5 space-y-2.5 border-t border-cyan-500/20 pt-4 text-xs text-slate-200">
                      {currentItem.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-cyan-500/20">
                  <Link
                    href={currentItem.ctaHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:from-cyan-400 hover:to-teal-400 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98]"
                  >
                    <span>{currentItem.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Next Card - Luminous Glassmorphic */}
              <div
                onClick={nextSlide}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") nextSlide();
                }}
                className="group relative hidden cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.1] via-[#0b2138]/60 to-[#07131b]/80 p-6 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] md:flex"
              >
                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[190px] w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={nextItem.image}
                      alt={nextItem.title}
                      fill
                      className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f2b] via-[#0c1f2b]/30 to-transparent" />
                    <div className="absolute top-3 right-3 flex items-center">
                      <nextItem.icon className="h-4 w-4 text-cyan-300 drop-shadow-md" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                      {nextItem.badge}
                    </div>
                    <h3 className="mt-1.5 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {nextItem.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                      {nextItem.description}
                    </p>

                    {/* Full Feature Checklist on Next Card */}
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                      {nextItem.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={nextItem.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-950/40 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950"
                  >
                    <span>{nextItem.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Navigation Controls */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous division"
              className="absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0c1f2b]/95 text-white shadow-xl backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 z-20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next division"
              className="absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0c1f2b]/95 text-white shadow-xl backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 z-20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* 2. GRID VIEW: All 5 Cards Visible Simultaneously with Full Contents & Respective Images */}
        {viewMode === "grid" && (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              const isLead = idx === 0;
              return (
                <div
                  key={service.id}
                  className={`flex flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-br from-white/[0.1] via-[#0b2138]/70 to-[#07131b]/85 p-6 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] ${
                    isLead
                      ? "border-cyan-400/60 ring-1 ring-cyan-400/30 shadow-[0_0_25px_rgba(0,180,255,0.2)]"
                      : "border-white/20"
                  }`}
                >
                  <div>
                    {/* Respective Image Banner */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[190px] w-full overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-[center_30%] transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f2b] via-[#0c1f2b]/30 to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center">
                        <ServiceIcon className="h-4 w-4 text-cyan-300 drop-shadow-md" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                        {service.badge}
                      </div>
                      <h3 className="mt-1.5 text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                        {service.description}
                      </p>

                      {/* Full Feature Checklist */}
                      <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                        {service.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={service.ctaHref}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/40 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:from-cyan-500 hover:to-teal-500 hover:text-slate-950 hover:shadow-md hover:shadow-cyan-500/20"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Carousel Pagination / Division Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {homeServices.map((service, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(index);
                  if (viewMode === "grid") setViewMode("carousel");
                }}
                aria-label={`Go to slide ${service.id} - ${service.title}`}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive && viewMode === "carousel"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-105"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{service.id}</span>
                <span className="hidden sm:inline">{service.badge}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Named alias export for compatibility with WireframeServices
export const WireframeServices = WireframeGallery;
export default WireframeGallery;
