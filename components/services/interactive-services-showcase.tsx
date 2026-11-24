"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Filter,
  Layers,
  MessageCircle,
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { services, type ServiceDivision } from "@/content/services";

export interface CatalogServiceItem {
  id: string;
  divisionId: string;
  divisionNumber: string;
  divisionName: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  image: string;
  engagementType: "Express Setup" | "Contract / AMC" | "Monthly Package" | "Turnkey / Retail";
  turnaround: "2-3 Days" | "24-48 Hours" | "Same-Day" | "Weekly / Monthly" | "Annual AMC" | "3-5 Days";
  specs: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  summary: string;
  whatsappMessage: string;
}

export const catalogServices: readonly CatalogServiceItem[] = [
  {
    id: "company-formation",
    divisionId: "business-corporate",
    divisionNumber: "01",
    divisionName: "Business & Corporate",
    title: "Company Formation & 100% Foreign Ownership",
    subtitle: "Commercial Registration (CR), Trade Licensing & MOCI Approvals",
    categoryTag: "Corporate & Legal Setup",
    image: "/images/services/business and cooperate.jpg",
    engagementType: "Express Setup",
    turnaround: "2-3 Days",
    specs: {
      label1: "TIMELINE",
      val1: "2-3 Days",
      label2: "AUTHORITY",
      val2: "MOCI Qatar",
      label3: "OWNERSHIP",
      val3: "100% Foreign",
    },
    summary:
      "End-to-end commercial registration, municipal trade licenses, tax cards, corporate bank account guidance, and investor agreements in Doha.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to inquire about Company Formation and 100% Foreign Ownership in Qatar.",
  },
  {
    id: "pro-government-clearing",
    divisionId: "business-corporate",
    divisionNumber: "01",
    divisionName: "Business & Corporate",
    title: "Typing, PRO & Government Document Clearing",
    subtitle: "Visas, Labour Quota, Ministry Approvals & WPS Assistance",
    categoryTag: "Government Clearing",
    image: "/images/about/doha-corporate.webp",
    engagementType: "Express Setup",
    turnaround: "24-48 Hours",
    specs: {
      label1: "SUPPORT",
      val1: "Dedicated PRO",
      label2: "PLATFORM",
      val2: "MOI / Metrash2",
      label3: "COMPLIANCE",
      val3: "100% WPS / QCB",
    },
    summary:
      "Expedited visa stamping, labour quota clearances, official Arabic translations, embassy attestations, and WPS compliant salary files.",
    whatsappMessage:
      "Hello BizLink Qatar, I need assistance with PRO Services, Government Document Clearing, and WPS compliance.",
  },
  {
    id: "digital-marketing-seo",
    divisionId: "digital-creative",
    divisionNumber: "02",
    divisionName: "Digital & Creative",
    title: "Digital Marketing, SEO & High-Impact Ads",
    subtitle: "Full-Funnel Meta, Google, TikTok & Qualified Lead Generation",
    categoryTag: "Growth Marketing",
    image: "/images/services/biz link digitial services.jpg",
    engagementType: "Monthly Package",
    turnaround: "Weekly / Monthly",
    specs: {
      label1: "CADENCE",
      val1: "Weekly / Monthly",
      label2: "TARGETING",
      val2: "Qatar & GCC",
      label3: "METRIC",
      val3: "Performance ROI",
    },
    summary:
      "Precision digital marketing campaigns, Google Ads search management, high-ranking SEO, and monthly social media growth packages tailored for Qatar.",
    whatsappMessage:
      "Hello BizLink Qatar, I am interested in your Digital Marketing, SEO and Lead Generation packages.",
  },
  {
    id: "content-ai-video",
    divisionId: "digital-creative",
    divisionNumber: "02",
    divisionName: "Digital & Creative",
    title: "Content Creation & Cinematic AI Video",
    subtitle: "Short-Form Reels, Corporate Media & AI Video Storytelling",
    categoryTag: "Media Production",
    image: "/images/about/philosophy-detail.webp",
    engagementType: "Monthly Package",
    turnaround: "3-5 Days",
    specs: {
      label1: "RESOLUTION",
      val1: "4K UHD + AI",
      label2: "FORMATS",
      val2: "Reels & Ads",
      label3: "CREATIVE",
      val3: "In-House Studio",
    },
    summary:
      "Next-generation visual storytelling, viral reels, TikTok campaigns, brand photography, and cutting-edge AI video generation for commercial brands.",
    whatsappMessage:
      "Hello BizLink Qatar, I want to inquire about Content Creation, Reels, and AI Video Production.",
  },
  {
    id: "web-ecommerce-apps",
    divisionId: "digital-creative",
    divisionNumber: "02",
    divisionName: "Digital & Creative",
    title: "Website & E-Commerce Application Development",
    subtitle: "Next.js Platforms, Shopify, QPay Gateways & PWA Speed",
    categoryTag: "Web & Platforms",
    image: "/images/about/interior-main.webp",
    engagementType: "Express Setup",
    turnaround: "3-5 Days",
    specs: {
      label1: "ENGINE",
      val1: "Next.js / Shopify",
      label2: "GATEWAY",
      val2: "QPay / CBQ / Stripe",
      label3: "UX/UI",
      val3: "Bilingual AR/EN",
    },
    summary:
      "Lightning-fast modern web applications, e-commerce storefronts, payment gateways, and custom digital portals with seamless mobile experiences.",
    whatsappMessage:
      "Hello BizLink Qatar, I want to discuss Website & E-Commerce application development for my business.",
  },
  {
    id: "general-trading-supply",
    divisionId: "trading-supply",
    divisionNumber: "03",
    divisionName: "Trading & Supply",
    title: "General, Retail & Wholesale Trading Supply",
    subtitle: "Construction Essentials, Safety PPE & Lifestyle Products",
    categoryTag: "Wholesale & Supply",
    image: "/images/services/trading-supply-card.webp",
    engagementType: "Turnkey / Retail",
    turnaround: "24-48 Hours",
    specs: {
      label1: "SOURCING",
      val1: "Global & GCC",
      label2: "STANDARDS",
      val2: "Certified PPE",
      label3: "VOLUME",
      val3: "Wholesale & Bulk",
    },
    summary:
      "Bulk procurement, wholesale distribution of construction hardware, certified safety PPE, electrical components, and lifestyle retail goods.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to request a quotation for Wholesale Trading & Procurement.",
  },
  {
    id: "perfumes-luxury-fragrances",
    divisionId: "trading-supply",
    divisionNumber: "03",
    divisionName: "Trading & Supply",
    title: "Own Brand Perfumes & Luxury Fragrances",
    subtitle: "French Blends, Oriental Ouds & Private Label Distribution",
    categoryTag: "Luxury Fragrances",
    image: "/images/about/trading-hub.webp",
    engagementType: "Turnkey / Retail",
    turnaround: "Same-Day",
    specs: {
      label1: "ESSENCE",
      val1: "French & Oriental",
      label2: "PORTFOLIO",
      val2: "In-House & OEM",
      label3: "NETWORK",
      val3: "Qatar Retail Supply",
    },
    summary:
      "Signature luxury oriental and French fragrance collections, premium perfume oils, hypermarket supply, and bespoke private-label fragrance lines.",
    whatsappMessage:
      "Hello BizLink Qatar, I am interested in your Perfumes & Fragrance collection and distribution.",
  },
  {
    id: "facility-maintenance-amc",
    divisionId: "facility-maintenance",
    divisionNumber: "04",
    divisionName: "Facility & Maintenance",
    title: "Annual Maintenance Contracts (AMC) & MEP Works",
    subtitle: "HVAC Servicing, Electrical, Plumbing & Emergency Building Care",
    categoryTag: "Facility Engineering",
    image: "/images/services/fdacility maintainace.jpg",
    engagementType: "Contract / AMC",
    turnaround: "Annual AMC",
    specs: {
      label1: "EMERGENCY",
      val1: "24/7 Rapid Callout",
      label2: "SCOPE",
      val2: "MEP + HVAC + Civils",
      label3: "COVERAGE",
      val3: "Commercial & Towers",
    },
    summary:
      "Comprehensive facility upkeep, preventive HVAC maintenance, certified electrical & plumbing works, and rapid emergency intervention.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to inquire about Annual Maintenance Contracts (AMC) and MEP works.",
  },
  {
    id: "fitout-gypsum-partitions",
    divisionId: "facility-maintenance",
    divisionNumber: "04",
    divisionName: "Facility & Maintenance",
    title: "Gypsum Board, Glass Partitions & Fit-Out Works",
    subtitle: "Acoustic Walls, Decorative Ceilings & Office Partitions",
    categoryTag: "Interior Fit-Out",
    image: "/images/about/engineering-facility.webp",
    engagementType: "Express Setup",
    turnaround: "3-5 Days",
    specs: {
      label1: "EXECUTION",
      val1: "Turnkey Fit-Out",
      label2: "SAFETY",
      val2: "Fire & Sound Rated",
      label3: "APPLICATION",
      val3: "Offices & Retail",
    },
    summary:
      "Architectural glass partitions, decorative gypsum ceilings, acoustic drywall systems, and customized office interior transformations.",
    whatsappMessage:
      "Hello BizLink Qatar, I want a quote for Gypsum Board, Glass Partitions and Interior Fit-Out.",
  },
  {
    id: "doorstep-car-care",
    divisionId: "automotive",
    divisionNumber: "05",
    divisionName: "Automotive Care",
    title: "Doorstep Mobile Car Wash & Premium Detailing",
    subtitle: "Steam Cleaning, Paint Protection, Interior Disinfection & Wax",
    categoryTag: "Mobile Automotive",
    image: "/images/services/automotive-wash.jpg",
    engagementType: "Turnkey / Retail",
    turnaround: "Same-Day",
    specs: {
      label1: "CONVENIENCE",
      val1: "At Your Doorstep",
      label2: "METHOD",
      val2: "Steam + Nano Wax",
      label3: "FLEET",
      val3: "Sedans & Luxury SUVs",
    },
    summary:
      "Professional automotive care brought directly to your home or office location across Doha, Lusail, and Al Rayyan.",
    whatsappMessage:
      "Hello BizLink Qatar, I would like to book a Doorstep Mobile Car Wash and Detailing service.",
  },
  {
    id: "autoglass-windshield-repair",
    divisionId: "automotive",
    divisionNumber: "05",
    divisionName: "Automotive Care",
    title: "Auto Glass Inspection & Windshield Replacement",
    subtitle: "OEM Certified Glass, Crack Repair & On-Site Installation",
    categoryTag: "Auto Glass Care",
    image: "/images/services/automotive-detailing.jpg",
    engagementType: "Express Setup",
    turnaround: "Same-Day",
    specs: {
      label1: "TURNAROUND",
      val1: "Same-Day Service",
      label2: "STANDARDS",
      val2: "OEM Glass Specs",
      label3: "SERVICE",
      val3: "Mobile Unit / Workshop",
    },
    summary:
      "Rapid windshield replacement, chip repairs, and certified auto glass installation with comprehensive warranty and on-site support.",
    whatsappMessage:
      "Hello BizLink Qatar, I need Auto Glass inspection and Windshield Replacement.",
  },
] as const;

function getDivisionIcon(iconName: ServiceDivision["iconName"]) {
  switch (iconName) {
    case "building":
      return <Building2 className="size-5" aria-hidden="true" />;
    case "monitor":
      return <Monitor className="size-5" aria-hidden="true" />;
    case "truck":
      return <Truck className="size-5" aria-hidden="true" />;
    case "wrench":
      return <Wrench className="size-5" aria-hidden="true" />;
    case "car":
      return <Car className="size-5" aria-hidden="true" />;
    default:
      return <ShieldCheck className="size-5" aria-hidden="true" />;
  }
}

export function InteractiveServicesShowcase({ detailed = false }: { detailed?: boolean }) {
  // 1. Spotlight Active Division Index (Woodland Video Section 1)
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState<number>(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState<boolean>(false);
  const activeSpotlight = services[activeSpotlightIndex];
  const ROTATION_INTERVAL_MS = 4500; // Automatic rotation every 4.5 seconds

  // Automatically cycle through divisions in the main card
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const timer = setInterval(() => {
      setActiveSpotlightIndex((prev) => (prev + 1) % services.length);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isAutoPlayPaused, activeSpotlightIndex]);

  // 2. Filter Bar State (Woodland Video Section 2)
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [selectedTurnaround, setSelectedTurnaround] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"catalog" | "brochure">("catalog");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Reset pagination when filters change
  useEffect(() => {
    setIsExpanded(false);
  }, [selectedDivision, selectedTurnaround]);

  // Filtered Cards for the 2-Column Grid
  const filteredCatalogCards = catalogServices.filter((card) => {
    const matchesDivision =
      selectedDivision === "all" || card.divisionId === selectedDivision;
    const matchesTurnaround =
      selectedTurnaround === "all" ||
      (selectedTurnaround === "express" &&
        (card.turnaround === "2-3 Days" ||
          card.turnaround === "24-48 Hours" ||
          card.turnaround === "Same-Day")) ||
      (selectedTurnaround === "retainer" &&
        (card.turnaround === "Weekly / Monthly" ||
          card.turnaround === "Annual AMC")) ||
      (selectedTurnaround === "project" && card.turnaround === "3-5 Days");

    return matchesDivision && matchesTurnaround;
  });

  // Filtered Full Division Articles for Brochure view
  const filteredBrochureDivisions =
    selectedDivision === "all"
      ? services
      : services.filter((s) => s.id === selectedDivision);

  const INITIAL_VISIBLE_COUNT = 4;
  const visibleCatalogCards = isExpanded
    ? filteredCatalogCards
    : filteredCatalogCards.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreCards = filteredCatalogCards.length > INITIAL_VISIBLE_COUNT;

  // Top 3 Queue for the right stacked cards in Spotlight
  const otherDivisions = services
    .map((s, index) => ({ service: s, index }))
    .filter((item) => item.index !== activeSpotlightIndex)
    .slice(0, 3);

  return (
    <section
      id="services-showcase"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#071426] border-b border-white/10"
      aria-labelledby="services-showcase-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-400">
            All Business Solutions Under One Roof
          </p>
          <h2
            id="services-showcase-title"
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Our Service Solutions & Divisions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Interactive commercial directory spanning corporate formation, digital media, trading supply, facility maintenance, and mobile automotive care.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. TOP SPOTLIGHT SHOWCASE: Split Hero + Right Stack (00:00 - 00:03) */}
        {/* ============================================================== */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Featured Spotlight Division Card with Auto-Rotation */}
          <div
            onMouseEnter={() => setIsAutoPlayPaused(true)}
            onMouseLeave={() => setIsAutoPlayPaused(false)}
            className="lg:col-span-8 relative overflow-hidden rounded-3xl border border-white/15 bg-[#0B1B36] shadow-2xl min-h-[460px] sm:min-h-[520px] flex flex-col justify-end p-6 sm:p-10 group"
          >
            {/* Top Auto-Rotation Animated Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
              <motion.div
                key={`progress-${activeSpotlightIndex}-${isAutoPlayPaused ? "paused" : "running"}`}
                initial={{ width: "0%" }}
                animate={{ width: isAutoPlayPaused ? undefined : "100%" }}
                transition={{
                  duration: isAutoPlayPaused ? 0 : ROTATION_INTERVAL_MS / 1000,
                  ease: "linear",
                }}
                className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            </div>

            {/* Division Switcher Indicator Dots (Top Right of Card) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#071426]/75 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/15 shadow-md">
              <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider mr-1 hidden sm:inline">
                {isAutoPlayPaused ? "Paused" : "Auto"}
              </span>
              {services.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSpotlightIndex(idx)}
                  className={`size-6 rounded-full text-[10px] font-black transition-all ${idx === activeSpotlightIndex
                      ? "bg-cyan-400 text-[#071426] shadow-md shadow-cyan-400/40 scale-110"
                      : "text-slate-400 hover:text-white hover:bg-white/15"
                    }`}
                  aria-label={`Switch to Division ${s.number}`}
                >
                  {s.number}
                </button>
              ))}
            </div>

            {/* Background Image with cross-fade */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence>
                <motion.div
                  key={activeSpotlight.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeSpotlight.imageCard}
                    alt={activeSpotlight.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover object-[center_30%] sm:object-center transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/75 to-[#071426]/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/90 via-[#071426]/50 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content overlay with smooth transition on change */}
            <div className="relative z-10 max-w-2xl">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeSpotlight.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Division Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#0056B3] to-[#0088CE] text-white shadow-md text-xs font-black">
                      {activeSpotlight.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-400/10 border border-cyan-400/25 rounded-full px-3 py-1 backdrop-blur-md">
                      Division {activeSpotlight.number} · {activeSpotlight.name}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h3 className="text-2xl sm:text-4xl lg:text-4xl font-black text-white leading-tight drop-shadow-md">
                    {activeSpotlight.title}
                  </h3>

                  {/* Hover Hint Badge (fades when hovered) */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-cyan-400/90 group-hover:hidden transition-all">
                    <span>Hover card to view division scope & capabilities ↓</span>
                  </div>

                  {/* Hover-Revealed Section containing Tagline, Highlight Badge, and Capabilities (Only visible on hover) */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-3">
                    {/* Tagline */}
                    <p className="text-xs sm:text-sm italic font-medium text-cyan-200">
                      “{activeSpotlight.tagline}”
                    </p>

                    {/* Commitment Highlight */}
                    <div className="commitment-highlight-badge mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-[#071426]/80 backdrop-blur-md px-3.5 py-2 text-xs font-bold text-cyan-300 shadow-sm transition-all duration-200 hover:border-cyan-300 hover:bg-[#071426]/95 cursor-pointer">
                      <Sparkles size={14} className="text-amber-400 shrink-0 transition-transform duration-200" aria-hidden="true" />
                      <span>
                        {activeSpotlight.highlight}
                      </span>
                    </div>

                    {/* Quick Specs / Capabilities Row */}
                    <div className="mt-5 flex flex-wrap gap-2 text-slate-200 text-xs">
                      {activeSpotlight.items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1"
                        >
                          <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/contact?service=${activeSpotlight.anchor}`}
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00B4D8] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
                    >
                      <span>Inquire Division {activeSpotlight.number}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>

                    <a
                      href={`https://wa.me/97450091006?text=${encodeURIComponent(
                        `Hello BizLink Qatar, I am interested in ${activeSpotlight.title}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      <MessageCircle size={16} className="text-[#25D366]" aria-hidden="true" />
                      <span>WhatsApp Lead</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Stacked Preview Cards (3 Cards matching 00:00 - 00:02) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 justify-between">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Featured Divisions
              </span>
              <span className="text-xs text-cyan-400 font-semibold">
                Click to preview
              </span>
            </div>

            {otherDivisions.map(({ service: s, index }) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSpotlightIndex(index)}
                className="group relative text-left overflow-hidden rounded-2xl border border-white/15 bg-[#0F254B]/80 hover:bg-[#143161] hover:border-cyan-400/40 p-3.5 transition-all duration-300 shadow-md flex items-center gap-4 hover:shadow-cyan-500/10 cursor-pointer w-full"
              >
                {/* Thumbnail Image */}
                <div className="relative size-20 sm:size-24 rounded-xl overflow-hidden shrink-0 border border-white/20">
                  <Image
                    src={s.imageCard}
                    alt={s.name}
                    fill
                    sizes="96px"
                    className="object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-1.5 left-1.5 flex size-5 items-center justify-center rounded-md bg-[#0056B3] text-[10px] font-black text-white">
                    {s.number}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300">
                    Division {s.number}
                  </span>
                  <h4 className="mt-0.5 text-sm sm:text-base font-bold text-white truncate group-hover:text-cyan-200 transition-colors">
                    {s.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-1">
                    {s.description}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>View Division Details</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. INTERACTIVE FILTER & REFINEMENT BAR (00:04 - 00:05) */}
        {/* ============================================================== */}
        <div className="mt-16 rounded-3xl border border-white/15 bg-gradient-to-r from-[#0B1B36]/90 via-[#0F254B]/90 to-[#0B1B36]/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {/* Top Row: Primary Category Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDivision("all")}
                  className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-bold transition-all ${selectedDivision === "all"
                      ? "bg-gradient-to-r from-[#0056B3] to-[#0088CE] text-white shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/50"
                      : "border border-white/15 bg-[#0B1B36] text-slate-200 hover:bg-[#143161] hover:text-white"
                    }`}
                >
                  All Solutions ({catalogServices.length})
                </button>
                {services.map((div) => (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setSelectedDivision(div.id)}
                    className={`min-h-[40px] inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all ${selectedDivision === div.id
                        ? "bg-gradient-to-r from-[#0056B3] to-[#0088CE] text-white shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/50"
                        : "border border-white/15 bg-[#0B1B36] text-slate-200 hover:bg-[#143161] hover:text-white"
                      }`}
                  >
                    <span>{div.number}</span>
                    <span>{div.name}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle: Interactive Grid vs Official Brochure */}
              <div className="flex items-center rounded-full bg-[#071426] border border-white/15 p-1 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => setViewMode("catalog")}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all ${viewMode === "catalog"
                      ? "bg-[#0088CE] text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                    }`}
                >
                  <Layers size={13} />
                  <span>Visual Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("brochure")}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all ${viewMode === "brochure"
                      ? "bg-[#0088CE] text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                    }`}
                >
                  <CheckCircle2 size={13} />
                  <span>Brochure View</span>
                </button>
              </div>
            </div>

            {/* Bottom Row: Sub-filters (Turnaround speed & Active Count) */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={13} className="text-cyan-400" />
                  Turnaround:
                </span>
                {[
                  { id: "all", label: "All Timelines" },
                  { id: "express", label: "Express (24h - 3 Days)" },
                  { id: "project", label: "Turnkey (3-5 Days)" },
                  { id: "retainer", label: "Retainer & AMC" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTurnaround(item.id)}
                    className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${selectedTurnaround === item.id
                        ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Status counter */}
              <div className="text-slate-300 font-medium">
                Showing{" "}
                <span className="text-cyan-300 font-extrabold">
                  {filteredCatalogCards.length}
                </span>{" "}
                Verified Services in Doha
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. SIGNATURE 2-COLUMN SERVICE GRID WITH HOVER SPEC DRAWER (00:06 - 00:14) */}
        {/* ============================================================== */}
        {viewMode === "catalog" ? (
          <div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {visibleCatalogCards.map((service) => (
                <article
                  key={service.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#0F254B] shadow-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(0,180,255,0.2)] flex flex-col justify-end aspect-[16/11] sm:aspect-[16/10] min-h-[390px] sm:min-h-[420px]"
                >
                  {/* Background Image with Zoom on Hover (Woodland signature effect) */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Deepening dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/75 to-[#071426]/20 group-hover:via-[#071426]/85 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-[#071426]/25 group-hover:bg-[#071426]/40 transition-colors duration-300" />
                  </div>

                  {/* Top Corner Badge Row */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-[#071426]/85 px-3 py-1 text-[11px] font-bold text-cyan-300 backdrop-blur-md shadow-md">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      {service.divisionName}
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                      <Clock size={11} className="text-amber-400" />
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Main Visible Content */}
                  <div className="relative z-10 p-5 sm:p-7 flex flex-col justify-end">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 drop-shadow-sm">
                      {service.categoryTag}
                    </p>

                    <h3 className="mt-1 text-xl sm:text-2xl font-black text-white leading-snug drop-shadow-md group-hover:text-cyan-200 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-300 line-clamp-1 drop-shadow-sm">
                      {service.subtitle}
                    </p>

                    {/* ============================================================== */}
                    {/* SIGNATURE HOVER DRAWER: Slides up on desktop, static on mobile (00:13) */}
                    {/* ============================================================== */}
                    <div className="mt-4 pt-3 border-t border-white/15 transition-all duration-300 ease-out md:translate-y-2 md:opacity-90 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {/* 3-Column Specification Tray (Exact Woodland metadata bar) */}
                      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-[#071426]/90 backdrop-blur-xl p-2.5 text-center shadow-lg">
                        <div className="border-r border-white/10 px-1">
                          <span className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                            {service.specs.label1}
                          </span>
                          <span className="block text-xs font-black text-white truncate mt-0.5">
                            {service.specs.val1}
                          </span>
                        </div>
                        <div className="border-r border-white/10 px-1">
                          <span className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                            {service.specs.label2}
                          </span>
                          <span className="block text-xs font-black text-cyan-300 truncate mt-0.5">
                            {service.specs.val2}
                          </span>
                        </div>
                        <div className="px-1">
                          <span className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                            {service.specs.label3}
                          </span>
                          <span className="block text-xs font-black text-amber-300 truncate mt-0.5">
                            {service.specs.val3}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Action Row inside Drawer */}
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <Link
                          href={`/contact?service=${service.id}`}
                          className="inline-flex flex-1 min-h-[40px] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-4 py-2 text-xs font-bold text-white shadow-md hover:from-[#004088] hover:to-[#0077D7] transition-all"
                        >
                          <span>Inquire Service</span>
                          <ArrowUpRight size={14} />
                        </Link>

                        <a
                          href={`https://wa.me/97450091006?text=${encodeURIComponent(
                            service.whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`WhatsApp for ${service.title}`}
                          className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors shrink-0"
                        >
                          <MessageCircle size={18} className="text-[#25D366]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View More / Show Less Pagination Toggle */}
            {hasMoreCards && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full px-7 py-3 text-sm font-bold bg-[#00B4FF] hover:bg-[#0096D6] text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>
                    {isExpanded
                      ? "Show Less"
                      : `View More (${filteredCatalogCards.length - INITIAL_VISIBLE_COUNT} More Solutions)`}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? "-rotate-90" : "rotate-90"
                      }`}
                  />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ============================================================== */
          /* 4. OFFICIAL BROCHURE DEEP-DIVE VIEW (Preserved from Final Brochure) */
          /* ============================================================== */
          <div className="mt-12 space-y-12">
            {filteredBrochureDivisions.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 overflow-hidden rounded-3xl border border-white/15 bg-[#0F254B]/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Content Header */}
                  <div className="p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between">
                    <div>
                      {/* Badge Pill */}
                      <div className="flex items-center gap-2">
                        <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0056B3] to-[#0088CE] text-xs font-black text-white">
                          {service.number}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                          Division {service.number} · {service.name}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                        {service.title}
                      </h3>

                      {/* Hover Hint Badge (fades when hovered) */}
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-cyan-400/90 group-hover:hidden transition-all">
                        <span>Hover card to view division scope & key services ↓</span>
                      </div>

                      {/* Hover-Revealed Section containing Tagline, Highlight Badge, and Service Checklist (Only visible on hover) */}
                      <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[700px] group-hover:opacity-100 group-hover:mt-3">
                        <p className="text-xs sm:text-sm font-semibold italic text-cyan-300">
                          “{service.tagline}”
                        </p>

                        {/* Highlight Box from Brochure */}
                        <div className="commitment-highlight-badge mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-xs font-bold text-cyan-300 transition-all duration-200 hover:border-cyan-300 cursor-pointer">
                          <Sparkles size={15} className="transition-transform duration-200" aria-hidden="true" />
                          <span>
                            {service.highlight}
                          </span>
                        </div>

                        {/* Service Checklist Items Grid */}
                        <div className="mt-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Key Scope of Services:
                          </p>
                          <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {service.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="mt-0.5 shrink-0 text-cyan-400"
                                  aria-hidden="true"
                                />
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Division Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/contact?service=${service.anchor}`}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:from-[#004088] hover:to-[#0077D7]"
                      >
                        <span>Inquire About {service.name}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>

                      <a
                        href="https://wa.me/97450091006"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20"
                      >
                        <MessageCircle size={16} className="text-[#25D366]" aria-hidden="true" />
                        <span>Fast WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Image Feature Card */}
                  <div className="relative min-h-[220px] lg:min-h-full lg:col-span-4 bg-[#071426] overflow-hidden">
                    <Image
                      src={service.imageCard}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover object-center opacity-85 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F254B] via-[#0F254B]/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-4 p-4 text-white">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                        BizLink Qatar
                      </p>
                      <p className="text-sm font-black text-white">
                        {service.name}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
