"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
    image: "/images/services/brochure/business-corporate-main.jpg",
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
    image: "/images/services/sub service/Digital & Creative Solutions 1.jpg",
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
    image: "/images/services/sub service/AUTOMOBILE AND SERVICES.png",
    icon: Car,
  },
];

export function WireframeGallery() {
  const [viewMode, setViewMode] = useState<"scroll" | "grid">("scroll");
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxScrollX, setMaxScrollX] = useState<number>(0);

  // Measure track scroll width vs window width for sticky horizontal progression
  useEffect(() => {
    const calculateScrollDistance = () => {
      if (trackRef.current) {
        const track = trackRef.current;
        const cards = track.querySelectorAll("article");
        if (cards.length > 0) {
          const lastCard = cards[cards.length - 1] as HTMLElement;
          const containerWidth = track.parentElement?.clientWidth || window.innerWidth;
          const targetLastCardLeft = Math.max(16, (containerWidth - lastCard.offsetWidth) / 2);
          const totalDistance = lastCard.offsetLeft - targetLastCardLeft;
          setMaxScrollX(Math.max(0, totalDistance));
        } else {
          const trackWidth = track.scrollWidth;
          const clientWidth = window.innerWidth;
          const paddingOffset = window.innerWidth < 640 ? 30 : 120;
          setMaxScrollX(Math.max(0, trackWidth - clientWidth + paddingOffset));
        }
      }
    };

    calculateScrollDistance();
    const timer = setTimeout(calculateScrollDistance, 400);
    window.addEventListener("resize", calculateScrollDistance);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateScrollDistance);
    };
  }, [viewMode]);

  // Framer Motion Sticky Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);

  // Keep active division in sync with scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = homeServices.length;
    const index = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    setActiveDivisionIndex((previous) => (previous === index ? previous : index));
  });

  return (
    <section
      id="services"
      aria-label="Our Service Solutions & Divisions"
      className="relative bg-[#000E24] text-white w-full max-w-full overflow-visible"
    >
      {/* Ambient multi-spectral radiant aurora glow mesh */}
      <div className="home-ambient-glow pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/25 blur-[140px]" />
        <div className="absolute -right-24 top-1/3 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[150px]" />
        <div className="absolute left-1/3 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />
        <div className="absolute right-1/4 -bottom-20 h-[400px] w-[400px] rounded-full bg-amber-500/15 blur-[130px]" />
      </div>

      {/* 1. SIGNATURE STICKY SCROLL CONTAINER: Cards Move From First to Last as User Scrolls */}
      {viewMode === "scroll" ? (
        <div
          ref={containerRef}
          style={{ height: "320vh" }}
          className="relative w-full"
        >
          {/* Pinned Viewport while scrolling through this section */}
          <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden pt-6 pb-4 sm:pt-8 sm:pb-5">
            
            {/* Section Header with Scroll Sync Progress Bar & Active Division Pill */}
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6 shrink-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
                <div>
                  <h2 className="flex items-center justify-center text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                  OUR SERVICES
                  </h2>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-3 sm:gap-4 self-start md:self-end">
                  {/* Grid View Toggle */}
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#0c1f2b]/80 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all backdrop-blur-md cursor-pointer"
                    title="Switch to All 5 Divisions Grid View"
                  >
                    <Grid3X3 className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Cards Motion Track: Synchronously Slides from 1st to Last Card */}
            <div className="w-full overflow-x-clip overflow-y-visible">
              <motion.div
                ref={trackRef}
                style={{ x, willChange: "transform" }}
                className="flex w-max transform-gpu select-none gap-4 pl-4 pr-8 sm:gap-6 sm:pl-8 sm:pr-16 lg:pl-16"
              >
                {homeServices.map((service, idx) => {
                  const isActive = idx === activeDivisionIndex;
                  return (
                    <article
                      key={service.id}
                      className={`group relative flex w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-br from-white/[0.12] via-[#0b2138]/70 to-[#07131b]/90 p-5 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-[border-color,box-shadow] duration-300 sm:w-[380px] sm:min-h-[490px] sm:p-6 sm:pb-7 lg:w-[420px] lg:min-h-[515px] ${
                        isActive
                          ? "border-cyan-400/70 shadow-[0_25px_60px_rgba(0,180,255,0.25)] ring-1 ring-cyan-400/40"
                          : "border-white/20 hover:border-cyan-400/50"
                      }`}
                    >
                      {/* Top Visual Banner with Clean Uninterrupted Image */}
                      <div>
                        <Link href={service.ctaHref} className="block relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 shadow-inner cursor-pointer group/img">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(min-width: 1024px) 420px, 320px"
                            className="object-cover object-[center_30%] transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </Link>

                        {/* Title & Description */}
                        <div className="mt-4">
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                            {service.badge}
                          </div>
                          <Link href={service.ctaHref} className="block group/title">
                            <h3 className="mt-1 text-base sm:text-xl font-black text-white leading-snug group-hover/title:text-cyan-200 transition-colors">
                              {service.title}
                            </h3>
                          </Link>
                          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                            {service.description}
                          </p>

                          {/* 3 Core Points Checklist */}
                          <ul className="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-slate-300">
                            {service.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-3 border-t border-white/10 mt-2">
                        <Link
                          href={service.ctaHref}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-teal-400 transition-all active:scale-[0.98]"
                        >
                          <span>View Details &amp; Scope</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </motion.div>
            </div>

          </div>
        </div>
      ) : (
        /* 2. GRID VIEW: All 5 Cards Visible Simultaneously when explicitly selected */
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-300 uppercase shadow-sm">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Our Service Solutions</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white uppercase">
                Specialized Corporate &amp; Industrial Capabilities
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setViewMode("scroll")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#0c1f2b]/80 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all backdrop-blur-md cursor-pointer self-start"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-cyan-400" />
              <span>Back to Scroll View</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, idx) => {
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
                    <Link href={service.ctaHref} className="block relative aspect-[16/10] sm:aspect-[16/9] min-h-[190px] w-full overflow-hidden rounded-2xl border border-white/10 group/img cursor-pointer">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-[center_30%] transition-transform duration-700 group-hover/img:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>

                    <div className="mt-5">
                      <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                        {service.badge}
                      </div>
                      <Link href={service.ctaHref} className="block group/title">
                        <h3 className="mt-1.5 text-xl font-bold text-white group-hover/title:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                        {service.description}
                      </p>

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
        </div>
      )}
    </section>
  );
}

// Named alias export for compatibility with WireframeServices
export const WireframeServices = WireframeGallery;
export default WireframeGallery;
