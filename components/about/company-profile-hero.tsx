"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, Building2, Globe, ShieldCheck } from "lucide-react";
import { company } from "@/content/company";

interface CompanyProfileHeroProps {
  imageSrc?: string;
}

export function CompanyProfileHero({
  imageSrc = "/images/about/luxury_boardroom_skyline.jpg",
}: CompanyProfileHeroProps) {
  return (
    <section
      id="profile-cover"
      aria-label="Company Profile Presentation"
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] overflow-hidden bg-[#0A0D14] border-b border-white/10 flex items-stretch"
    >
      {/* 1. Background Right Panorama: Architectural Modern Curved Glass Penthouse & City Skyline */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="BizLink Modern Architectural Corporate Penthouse & City Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-center select-none"
        />
        {/* Cinematic gradient over the skyline for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[#070B14]/25 pointer-events-none" />
      </div>

      {/* 2. Top-Right "PRESENTATION" & Bottom-Right "○ ○ ○ ○" matching reference design */}
      {/* <div className="absolute top-24 sm:top-28 right-6 sm:right-10 z-20 flex items-center gap-3"> */}
        
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] animate-pulse" />
        </div>
      

      <div className="absolute bottom-8 right-6 sm:right-10 z-20 hidden sm:flex items-center gap-2 text-white/60">
        <span className="size-2 rounded-full border border-white/60" />
        <span className="size-2 rounded-full border border-white/60" />
        <span className="size-2 rounded-full border border-white/60" />
        <span className="size-2 rounded-full border border-white/60" />
      </div>

      {/* Floating Corporate Status Card in Skyline (Bottom Right) - Luminous Glassmorphic */}
      <div className="absolute bottom-8 right-24 sm:right-32 z-20 hidden md:flex items-center gap-3 rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.14] via-slate-900/60 to-[#070B14]/85 px-4 py-2.5 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3),0_0_25px_rgba(0,180,255,0.2)] hover:border-cyan-400/60 transition-all">
        <div className="relative size-8 shrink-0">
          <Image
            src="/images/bizlink_3d_logo_transparent.webp"
            alt="BizLink 3D Architectural Emblem"
            fill
            sizes="32px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-black uppercase text-white tracking-wider">
            Doha Corporate Hub
          </span>
          <span className="text-[10px] font-bold text-cyan-300">
            CR: 120538 · Est. {company.since}
          </span>
        </div>
      </div>

      {/* 3. Diagonal Sliced Dark Section (Matches Reference Image) */}
      {/* On desktop: Slices diagonally from top (~34%) to bottom (~54%) with dark charcoal solid fill */}
      <div className="relative z-10 w-full lg:w-[62%] xl:w-[56%] bg-[#111520]/95 lg:bg-[#111520] shadow-[20px_0_60px_rgba(0,0,0,0.85)] flex flex-col justify-center lg:[clip-path:polygon(0_0,84%_0,100%_100%,0_100%)]">
        {/* Subtle geometric gradient backdrop inside dark banner */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#181D2A] via-[#111520] to-[#0A0D14] opacity-95 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/30 via-white/10 to-transparent hidden lg:block pointer-events-none" />

        {/* Content Container Inside the Dark Diagonal Banner */}
        <div className="relative z-20 px-6 sm:px-10 lg:pl-12 lg:pr-20 xl:pl-16 xl:pr-24 py-24 sm:py-32">
          
          {/* Four Circles at Top Left matching reference "○ ○ ○ ○" */}
          <div className="flex items-center gap-2 mb-3">
            <span className="size-2 rounded-full border border-white/60" />
            <span className="size-2 rounded-full border border-white/60" />
            <span className="size-2 rounded-full border border-white/60" />
            <span className="size-2 rounded-full border border-white/60" />
          </div>

          {/* Subtle Horizontal Accent Lines matching reference "--  --" */}
          <div className="flex items-center gap-3 my-2">
            <div className="w-10 h-[2px] bg-white/40" />
            <div className="w-6 h-[2px] bg-cyan-400/80" />
          </div>

          {/* GIANT BOLD HEADLINE: "COMPANY PROFILE" matching reference typography */}
          <h1 className="mt-3 text-4xl sm:text-6xl lg:text-[68px] xl:text-[80px] font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-xl">
            COMPANY
            <br />
            PROFILE
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="mt-5 text-xs sm:text-sm font-bold text-cyan-300 tracking-wider uppercase">
            BizLink Trading and Contracting Services WLL
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
            An established integrated enterprise under Pathas Group of Companies, delivering excellence across corporate operations, industrial supply, facility engineering, and digital systems.
          </p>

          {/* Global Footprint Corridor Badge */}
          <div className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-950/50 px-4 py-1.5 text-[11px] sm:text-xs font-bold text-white backdrop-blur-md shadow-inner">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-wider text-cyan-200">QATAR</span>
            <span className="text-cyan-400">•</span>
            <span className="tracking-wider text-slate-300">INDIA</span>
            <span className="text-cyan-400">•</span>
            <span className="tracking-wider text-slate-300">UAE</span>
            <span className="text-cyan-400">•</span>
            <span className="tracking-wider text-slate-300">CHINA</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#about"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Overview</span>
              <ArrowDown size={14} />
            </a>

            <a
              href={`${company.whatsappUrl}?text=Hello%20BizLink%20Qatar%2C%20please%20send%20me%20your%20Official%20Company%20Profile%20PDF.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/15 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <Download size={14} className="text-cyan-400" />
              <span>Get Profile PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyProfileHero;
