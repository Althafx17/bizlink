"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  category: string;
  image: string;
  badge: string;
  scope: string;
}

const facilityServiceCards: ServiceCard[] = [
  {
    id: "facility-hospitality-management",
    title: "Facility & Hospitality Management",
    category: "Commercial Towers & Hotels",
    image: "/images/services/brochure/facility-guard-building.webp",
    badge: "Official Brochure Card 01",
    scope: "Turnkey supervision, security liaison & 24/7 helpdesk",
  },
  {
    id: "cleaning-pest-control",
    title: "Cleaning & Pest Control Services",
    category: "Sanitization & Disinfection",
    image: "/images/services/brochure/facility-pest-spray.webp",
    badge: "Official Brochure Card 02",
    scope: "Hospital-grade cleaning & municipality pest eradication",
  },
  {
    id: "gypsum-glass-partitions",
    title: "Gypsum Board & Glass Partition Works",
    category: "Interior Fit-Out & Drywall",
    image: "/images/services/brochure/facility-gypsum-installation.webp",
    badge: "Official Brochure Card 03",
    scope: "Acoustic drywall ceilings & demountable glass rooms",
  },
  {
    id: "electrical-plumbing",
    title: "Electrical & Plumbing Maintenance Works",
    category: "MEP Engineering Services",
    image: "/images/services/brochure/facility-plumbing-mep.webp",
    badge: "Kahramaa Compliant",
    scope: "24/7 pump repairs, leak isolation & breaker panels",
  },
  {
    id: "floor-tiling-polishing",
    title: "Floor Tiling & Surface Restoration",
    category: "Marble & Epoxy Finishes",
    image: "/images/services/fdacility maintainace.jpg",
    badge: "Industrial & Luxury",
    scope: "Diamond pad marble honing & warehouse epoxy",
  },
  {
    id: "property-maintenance-amc",
    title: "Complete Property Care (AMC)",
    category: "Annual Preventative Contracts",
    image: "/images/about/engineering-facility.webp",
    badge: "Guaranteed SLA",
    scope: "Scheduled monthly inspections & under-60m dispatch",
  },
];

export function FacilityCardsAutoScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Track global page scroll progress (0 to 1 as user scrolls the website)
  const { scrollYProgress } = useScroll();

  // Map scroll progress to horizontal translation offset (scroll-coupled motion)
  // When user scrolls down the page, cards shift continuously from right to left
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, -1100]);
  const smoothScrollOffset = useSpring(scrollOffset, { damping: 28, stiffness: 85 });

  // Continuous gentle marquee translation when idle
  const [autoOffset, setAutoOffset] = useState(0);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isHovered) {
        setAutoOffset((prev) => (prev - delta * 30) % 2100);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  // Triplicate cards array for continuous seamless infinite loop
  const displayCards = [
    ...facilityServiceCards,
    ...facilityServiceCards,
    ...facilityServiceCards,
  ];

  return (
    <div className="w-full my-6 sm:my-8" ref={containerRef}>
      {/* Signature Blue Container matching official brochure header (Page 06) */}
      <div className="relative rounded-[28px] sm:rounded-[38px] bg-gradient-to-r from-[#003C8A] via-[#0056B3] to-[#003C8A] border-2 border-cyan-400/50 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,86,179,0.35)] overflow-hidden">
        
        {/* Subtle decorative glow accents inside the container */}
        <div className="absolute top-0 right-1/4 -mt-12 size-64 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-12 size-64 rounded-full bg-blue-400/25 blur-3xl pointer-events-none" />

        {/* Top Header Label inside the container */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-5 pb-3 border-b border-white/15">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-cyan-400/20 border border-cyan-300/40 text-cyan-300">
              <Sparkles className="size-4" />
            </span>
            <div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-cyan-300 block">
                Official Brochure Visual Showcase · Page 06
              </span>
              <span className="text-white font-extrabold text-xs sm:text-sm">
                Separate Service Cards · Auto-Scrolled with Website Scroll
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] font-mono font-bold text-cyan-200">
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Scroll Page to Glide Through Services</span>
          </div>
        </div>

        {/* The Track: Auto-scrolling + Scroll-coupled horizontal motion */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            style={{ x: smoothScrollOffset }}
            animate={{ x: isHovered ? undefined : [autoOffset, autoOffset - 1] }}
            className="flex items-center gap-4 sm:gap-6 w-max"
          >
            {displayCards.map((card, idx) => (
              <Link
                key={`${card.id}-${idx}`}
                href={`#${card.id}`}
                className="group relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl border-2 border-white/85 bg-[#071329] overflow-hidden shadow-xl shrink-0 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300 hover:shadow-cyan-500/30"
              >
                {/* High Resolution Extracted Service Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 360px, 280px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Contrast Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/95 via-[#070B14]/40 to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="rounded-full bg-[#004BB7]/90 border border-white/30 backdrop-blur-md px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-cyan-200">
                    {card.badge}
                  </span>
                  <span className="size-6 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>

                {/* Bottom Card Title and Scope */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 block mb-0.5">
                    {card.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-1 opacity-90">
                    {card.scope}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Footer Navigation Bar inside Container */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-200">
          <span className="text-[11px] text-cyan-200/90 font-medium">
            Hover to pause · Drag to explore · Click any card to inspect deliverables &amp; compliance
          </span>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <span>6 Specialized Service Divisions</span>
            <ChevronRight className="size-3.5 text-cyan-400" />
          </div>
        </div>

      </div>
    </div>
  );
}
