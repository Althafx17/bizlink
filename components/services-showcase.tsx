"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface ShowcaseService {
  id: string;
  number: string;
  tag: string;
  title: string;
  headlineFirst: string;
  headlineSecond: string;
  description: string;
  highlights: readonly string[];
  bgImage: string;
  cardImage: string;
  link: string;
}

export const showcaseServices: readonly ShowcaseService[] = [
  {
    id: "business-corporate",
    number: "01",
    tag: "Doha, Qatar · Corporate & Legal",
    title: "Business & Corporate",
    headlineFirst: "BUSINESS &",
    headlineSecond: "CORPORATE",
    description:
      "End-to-end company formation, CR registration, commercial licensing, Qatari sponsor arrangements, corporate PRO services, and WPS payroll management.",
    highlights: [
      "Company Formation & CR",
      "Qatari Sponsor Arrangements",
      "PRO & Government Visas",
      "WPS Payroll Support",
    ],
    bgImage: "/images/services/business-corporate-bg.webp",
    cardImage: "/images/services/business-corporate-card.webp",
    link: "/services#business-corporate",
  },
  {
    id: "trading-supply",
    number: "02",
    tag: "Wholesale & Procurement · Qatar",
    title: "Trading & Supply",
    headlineFirst: "TRADING &",
    headlineSecond: "SUPPLY",
    description:
      "Comprehensive procurement and wholesale distribution of construction materials, certified PPE safety equipment, electrical and plumbing supplies, and logistics support.",
    highlights: [
      "Building & Construction Materials",
      "Safety Gear & Certified PPE",
      "Electrical & Plumbing Supplies",
      "Cargo & Distribution Support",
    ],
    bgImage: "/images/services/trading-supply-bg.webp",
    cardImage: "/images/services/trading-supply-card.webp",
    link: "/services#trading-supply",
  },
  {
    id: "facility-maintenance",
    number: "03",
    tag: "Commercial & Residential · Qatar",
    title: "Facility & Maintenance",
    headlineFirst: "FACILITY &",
    headlineSecond: "MAINTENANCE",
    description:
      "Complete property upkeep, annual maintenance contracts (AMC), deep cleaning, pest control, gypsum partitions, floor polishing, and MEP technical repairs.",
    highlights: [
      "Annual Maintenance (AMC)",
      "Cleaning & Pest Control",
      "Gypsum & Glass Partitions",
      "Electrical & Plumbing Works",
    ],
    bgImage: "/images/services/facility-maintenance-bg.webp",
    cardImage: "/images/services/facility-maintenance-card.webp",
    link: "/services#facility-maintenance",
  },
  {
    id: "automotive",
    number: "04",
    tag: "Mobile & Workshop Services · Qatar",
    title: "Automotive Services",
    headlineFirst: "AUTOMOTIVE",
    headlineSecond: "SERVICES",
    description:
      "On-demand doorstep mobile car detailing, auto glass repair, certified windshield replacement, interior sanitization, and corporate fleet care.",
    highlights: [
      "Mobile Car Wash & Detailing",
      "Auto Glass Repair & Fitting",
      "Windshield Replacement",
      "Fleet Maintenance Support",
    ],
    bgImage: "/images/services/automotive-bg.webp",
    cardImage: "/images/services/automotive-card.webp",
    link: "/services#automotive",
  },
  {
    id: "digital-creative",
    number: "05",
    tag: "Tech & Media Solutions · Qatar",
    title: "Digital & Creative",
    headlineFirst: "DIGITAL &",
    headlineSecond: "CREATIVE",
    description:
      "Custom web and mobile applications, bilingual brand identity, targeted digital marketing, SEO, social media management, and corporate IT infrastructure.",
    highlights: [
      "Web & E-Commerce Apps",
      "Bilingual Brand Identity",
      "Digital Marketing & SEO",
      "Corporate IT & Cloud Setup",
    ],
    bgImage: "/images/about/philosophy-detail.webp",
    cardImage: "/images/about/doha-corporate.webp",
    link: "/services#digital-creative",
  },
] as const;

interface ServicesShowcaseProps {
  initialServiceId?: string;
  isStandalonePage?: boolean;
  autoPlayInterval?: number; // Duration in ms (defaults to 3000ms = 3s span)
}

export function ServicesShowcase({
  initialServiceId,
  isStandalonePage = false,
  autoPlayInterval = 3000, // 3-second cycle requested by user
}: ServicesShowcaseProps) {
  const initialIndex = initialServiceId
    ? Math.max(0, showcaseServices.findIndex((s) => s.id === initialServiceId))
    : 0;

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isPaused, setIsPaused] = useState(false);

  const activeService = showcaseServices[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % showcaseServices.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + showcaseServices.length) % showcaseServices.length);
  }, []);

  const handleSelect = (id: string) => {
    const idx = showcaseServices.findIndex((s) => s.id === id);
    if (idx !== -1) {
      setActiveIndex(idx);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Exact 3-second span auto-rotation: card image smoothly expands into background
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex, autoPlayInterval, handleNext]);

  // Other services queue for the right carousel deck
  const cardsQueue = showcaseServices
    .map((_, i) => showcaseServices[(activeIndex + 1 + i) % showcaseServices.length])
    .slice(0, showcaseServices.length - 1);

  return (
    <section
      id="services-showcase"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A1128] text-white select-none"
      aria-label="BizLink Qatar Services Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3-Second Active Progress Bar (Fills smoothly across the 3s span, then advances) */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/10 z-30 overflow-hidden">
        <motion.div
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "100%" : "100%" }}
          transition={{
            duration: autoPlayInterval / 1000,
            ease: "linear",
          }}
          className="h-full bg-gradient-to-r from-[#0056B3] to-[#00A2E8]"
        />
      </div>

      {/* Crossfading Backgrounds with Card Expansion Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {showcaseServices.map((service, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <motion.div
                initial={false}
                animate={isActive ? { scale: 1 } : { scale: 1.08 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  priority={idx === 0 || idx === 1}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.78] contrast-[1.08]"
                />
              </motion.div>
              {/* Vignette gradients to guarantee pristine readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C5F]/95 via-[#0B2C5F]/75 to-[#0B2C5F]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071E42] via-transparent to-[#0B2C5F]/70" />
              <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/25 to-black/60" />
            </div>
          );
        })}
      </div>

      {/* Top Brand & Category Kicker */}
      <div className="relative z-20 pt-24 sm:pt-28 px-4 sm:px-8 lg:px-14 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-[#00A2E8] animate-pulse" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#7CD4FF]">
            OUR SERVICES · BIZLINK QATAR
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-wider text-white/60">
          <Sparkles size={13} className="text-[#7CD4FF]" />
          <span>AUTOPLAY (3S SPAN) · CLICK ANY CARD TO FOCUS</span>
        </div>
      </div>

      {/* Center Stage: Left Hero Typography + Right Card Deck */}
      <div className="relative z-20 my-auto py-8 lg:py-12 px-4 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Active Service Details */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 sm:gap-6"
            >
              {/* Category Subtitle with Accent Dash */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#00A2E8] inline-block" />
                <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#7CD4FF] uppercase">
                  {activeService.tag}
                </p>
              </div>

              {/* Massive Condensed Headline */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.04] text-white drop-shadow-md">
                <span className="block">{activeService.headlineFirst}</span>
                <span className="block text-white/95">{activeService.headlineSecond}</span>
              </h2>

              {/* Description Body */}
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
                {activeService.description}
              </p>

              {/* Offerings Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeService.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/15 backdrop-blur-md shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Buttons (Circle Button + Glass Pill Button) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={activeService.link}
                  className="size-12 rounded-full bg-[#0056B3] text-white flex items-center justify-center shadow-lg shadow-[#0056B3]/40 transition-all duration-200 hover:bg-[#004088] hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`View ${activeService.title} details`}
                >
                  <ArrowUpRight
                    size={22}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href={activeService.link}
                  className="px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:border-white hover:bg-white/20 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A2E8]"
                >
                  Explore Solutions
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-full bg-white text-[#0B2C5F] hover:bg-[#EAF2FA] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Floating Interactive Card Deck */}
        <div className="lg:col-span-6 xl:col-span-7 flex items-center overflow-visible">
          <div className="w-full relative">
            <div className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
              {cardsQueue.map((item, index) => {
                const isNextInQueue = index === 0;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className={`group relative shrink-0 w-[200px] sm:w-[230px] md:w-[250px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 text-left transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A2E8] ${
                      isNextInQueue
                        ? "border-2 border-[#00A2E8] ring-4 ring-[#00A2E8]/25"
                        : "border border-white/20 hover:border-[#00A2E8]"
                    }`}
                    aria-label={`Switch to ${item.title}`}
                  >
                    {/* Card Background Image */}
                    <Image
                      src={item.cardImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 230px, 250px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.88]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity group-hover:opacity-90" />

                    {/* Number Badge & 'Up Next' Tag at Top Right */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                      {isNextInQueue ? (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7CD4FF] bg-[#0B2C5F]/80 px-2.5 py-1 rounded-full border border-[#00A2E8]/40 backdrop-blur-md">
                          Next in 3s
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs font-mono font-bold text-white/90 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                        {item.number}
                      </span>
                    </div>

                    {/* Card Details at Bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col gap-1 z-10">
                      <span className="w-5 h-[2px] bg-[#00A2E8] mb-1 group-hover:w-8 transition-all duration-300" />
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest truncate">
                        {item.tag.split("·")[0]}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-tight leading-tight group-hover:text-[#7CD4FF] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls Row */}
      <div className="relative z-20 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
        {/* Left: Circular Arrow Navigation */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous service"
            className="size-11 sm:size-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-white hover:bg-white/15 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A2E8]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next service"
            className="size-11 sm:size-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-white hover:bg-white/15 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A2E8]"
          >
            <ChevronRight size={20} />
          </button>
          <span className="hidden md:inline-block text-xs font-semibold text-white/50 pl-2">
            Auto-rotates every 3s · Click any card to select
          </span>
        </div>

        {/* Center: Progress Bar Track with Slide Steps */}
        <div className="flex-1 max-w-md mx-4 hidden sm:block">
          <div className="relative h-[2px] w-full bg-white/20 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 bg-[#00A2E8] transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${((activeIndex + 1) / showcaseServices.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Right: Big Stylized Numeral */}
        <div className="flex items-baseline gap-1.5 font-extrabold tracking-tight">
          <span className="text-3xl sm:text-5xl text-white font-mono leading-none">
            {activeService.number}
          </span>
          <span className="text-xs sm:text-sm text-white/40 font-mono">
            /{String(showcaseServices.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
