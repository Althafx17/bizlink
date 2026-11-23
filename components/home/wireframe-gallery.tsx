"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Cpu,
  TrendingUp,
  Sparkles,
  Car,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface ServiceSlide {
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

const homeServices: ServiceSlide[] = [
  {
    id: "01",
    badge: "Corporate & PRO",
    title: "Corporate Services & PRO Operations",
    category: "Division 01",
    description:
      "End-to-end company formation, commercial licensing, embassy attestation, and regulatory liaising in Doha, Qatar.",
    points: [
      "Company Formation & Licensing",
      "Embassy Attestation & Translation",
      "Government Relations & Visas",
    ],
    ctaText: "Explore Corporate",
    ctaHref: "/services#corporate",
    image: "/images/services/corporate-formation.png",
    icon: Building2,
  },
  {
    id: "02",
    badge: "Digital & Media",
    title: "Digital Systems & Creative Media",
    category: "Division 02",
    description:
      "Enterprise web solutions, IT infrastructure, AI workflows, and strategic branding built for fast-scaling GCC businesses.",
    points: [
      "Custom Enterprise Web Applications",
      "Cloud Infrastructure & Security",
      "Corporate Media & Brand Design",
    ],
    ctaText: "Explore Digital",
    ctaHref: "/services#digital",
    image: "/images/services/digital-media.png",
    icon: Cpu,
  },
  {
    id: "03",
    badge: "Global Trading",
    title: "International General Trading",
    category: "Division 03",
    description:
      "Cross-border procurement, logistics optimization, and trade compliance across Qatar, India, UAE, and China corridors.",
    points: [
      "Supply Chain Procurement",
      "Customs Clearance & Freight",
      "Multi-region Vendor Verification",
    ],
    ctaText: "Explore Trading",
    ctaHref: "/services#trading",
    image: "/images/services/general-trading.png",
    icon: TrendingUp,
  },
  {
    id: "04",
    badge: "Facility Management",
    title: "Facility Management & Hospitality Care",
    category: "Division 04",
    description:
      "Complete property maintenance, commercial cleaning, pest control, gypsum partitioning, and hospitality support.",
    points: [
      "Commercial Cleaning & Sanitation",
      "Pest Control & Sanitization",
      "Gypsum & Architectural Partitions",
    ],
    ctaText: "Explore Facilities",
    ctaHref: "/services#facility",
    image: "/images/services/facility-management.png",
    icon: Sparkles,
  },
  {
    id: "05",
    badge: "Automotive Services",
    title: "Limousine & Automotive Fleet Care",
    category: "Division 05",
    description:
      "Premium corporate fleet rentals, VIP chauffeur transfers, car detailing, and specialized auto service solutions.",
    points: [
      "Corporate Limousine Leasing",
      "VIP Chauffeur Services",
      "Automotive Detailing & Care",
    ],
    ctaText: "Explore Automotive",
    ctaHref: "/services#automotive",
    image: "/images/services/automotive-fleet.png",
    icon: Car,
  },
];

export function WireframeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = homeServices.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance slides every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getSlideAt = (offset: number) => {
    const idx = (currentIndex + offset + total) % total;
    return homeServices[idx];
  };

  const prevItem = getSlideAt(-1);
  const currentItem = getSlideAt(0);
  const nextItem = getSlideAt(1);

  const CurrentIcon = currentItem.icon;
  const PrevIcon = prevItem.icon;
  const NextIcon = nextItem.icon;

  return (
    <section
      id="services"
      aria-label="Our Service Solutions & Divisions"
      className="relative overflow-hidden bg-[#07131b] py-20 text-white md:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow and wave watermark */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
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
            Delivering trusted business setup, facility management, international trading, and technology infrastructure across Qatar and the GCC.
          </p>
        </div>

        {/* 3-Card Panoramic Carousel */}
        <div className="relative mt-12 sm:mt-16">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {/* Left Card (Previous) */}
            <div
              onClick={prevSlide}
              className="group relative hidden cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0c1f2b]/70 p-6 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 md:flex"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                <Image
                  src={prevItem.image}
                  alt={prevItem.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f2b] via-[#0c1f2b]/40 to-transparent" />
                <div className="absolute top-3 left-3 rounded-full bg-[#07131b]/80 px-2.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                  {prevItem.category}
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <PrevIcon className="h-5 w-5 text-cyan-400" />
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {prevItem.badge}
                    </span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-white group-hover:text-cyan-300">
                    {prevItem.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-300">
                    {prevItem.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                  <span>Previous Division</span>
                  <ChevronLeft className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Center Card (Active Spotlight) */}
            <div className="relative z-10 flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-cyan-400/60 bg-[#0e2738]/90 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl transition-all duration-500">
              {/* Highlight ribbon */}
              <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

              <div>
                {/* Active Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-cyan-400/30">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2738] via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#07131b]/90 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-sm">
                    <CurrentIcon className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{currentItem.category} • {currentItem.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {currentItem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    {currentItem.description}
                  </p>

                  {/* Feature bullet list */}
                  <ul className="mt-5 space-y-2 text-xs text-slate-300">
                    {currentItem.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-bold text-cyan-300">
                          ✓
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-cyan-500/20">
                <Link
                  href={currentItem.ctaHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:from-cyan-400 hover:to-teal-400 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98]"
                >
                  <span>{currentItem.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Card (Next) */}
            <div
              onClick={nextSlide}
              className="group relative hidden cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0c1f2b]/70 p-6 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 md:flex"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                <Image
                  src={nextItem.image}
                  alt={nextItem.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f2b] via-[#0c1f2b]/40 to-transparent" />
                <div className="absolute top-3 right-3 rounded-full bg-[#07131b]/80 px-2.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                  {nextItem.category}
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <NextIcon className="h-5 w-5 text-cyan-400" />
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {nextItem.badge}
                    </span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-white group-hover:text-cyan-300">
                    {nextItem.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-300">
                    {nextItem.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-end gap-1.5 text-xs font-semibold text-cyan-400">
                  <span>Next Division</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls: Previous / Next Floating Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous division"
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0c1f2b]/90 text-white shadow-lg backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 sm:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next division"
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0c1f2b]/90 text-white shadow-lg backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 sm:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Pagination / Division Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {homeServices.map((service, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${service.id} - ${service.title}`}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive
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
