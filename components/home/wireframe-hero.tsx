"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, ArrowDown } from "lucide-react";

export function WireframeHero() {
  return (
    <section
      id="hero"
      aria-label="BizLink Qatar Hero"
      className="relative min-h-[90vh] lg:min-h-screen bg-[#070B14] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 flex flex-col justify-center overflow-hidden border-b border-white/10"
    >
      {/* Background ambient gradient and subtle geometric glow lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-[#0056B3]/20 blur-[130px]" />
        <div className="absolute top-1/2 -right-32 size-[550px] rounded-full bg-[#00B4FF]/15 blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070B14] to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center justify-between">
        {/* Left Column: Aligned with the standard max-w-7xl grid layout */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col justify-center text-left px-4 sm:px-6 lg:pl-8 lg:pr-6 xl:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] xl:pr-8 py-6 lg:py-10">
          {/* Top Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Pathas Group · Doha, Qatar
          </div>

          {/* Main Headline: Bold, modern, clean editorial look */}
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[54px] xl:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            All Business <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
              Solutions Under
            </span>
            <br />
            One Roof
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
            From 100% foreign-owned corporate formation &amp; licensing to 24/7 facility engineering, global industrial trading, automotive care, and creative media production in Qatar.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/97450091006?text=Hello%20BizLink%20Qatar%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3 text-sm font-bold text-white hover:bg-white/15 hover:border-cyan-400/40 backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WHATSAPP DIRECT</span>
            </a>

            <a
              href="tel:+97450091006"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:border-white/30 transition-colors"
            >
              <Phone size={14} className="text-cyan-400" />
              <span>+974 5009 1006</span>
            </a>
          </div>

          {/* Quick Metrics Bar at bottom of left column */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <span className="block text-xl sm:text-2xl font-black text-white">15+</span>
              <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                Years Exp
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-cyan-300">1,000+</span>
              <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                Clients in Qatar
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-white">4 Hubs</span>
              <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                Global Footprint
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase Container
            - Extends flush to the right browser border with 0 margin and 0 padding (mr-0 pr-0 right-0)
            - Left side is deeply curved (rounded-l-[36px] sm:rounded-l-[48px] lg:rounded-l-[64px])
            - Right end has NO curve (rounded-r-none) matching the user reference design
            - Background video: /videos/hero-bg.mp4
            - Overlaid image on top: /images/hero-partners-skyline.jpg
            - Adjusted floating 3D logo in top-left glassmorphic badge
            - Bottom-right floating pill scroll action matching the reference design
        */}
        <div className="w-full lg:w-[52%] xl:w-[54%] pl-4 sm:pl-6 lg:pl-6 pr-0 mr-0 mt-8 lg:mt-0">
          <div className="group relative w-full h-[460px] sm:h-[540px] lg:h-[620px] xl:h-[680px] rounded-l-[36px] sm:rounded-l-[48px] lg:rounded-l-[64px] rounded-r-none overflow-hidden border-y border-l border-white/15 bg-[#070B14] shadow-2xl shadow-cyan-950/40">

            {/* 1. Background Video Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
              {/* Subtle film grain & darkening vignette to highlight the foreground layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-[#070B14]/30 to-[#070B14]/50 pointer-events-none" />
              <div className="absolute inset-0 bg-[#001D4A]/25 backdrop-blur-[0.5px] pointer-events-none" />
            </div>

            {/* 2. Second Image Placed ON TOP of the Hero Section Image Part */}
            <div className="absolute inset-0 z-10 flex items-center justify-end pointer-events-none">
              <div className="relative h-full w-full sm:w-[92%] lg:w-[88%] xl:w-[84%]">
                <Image
                  src="/images/hero-partners-skyline.jpg"
                  alt="BizLink Qatar Strategic Partnerships & Executive Leadership"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-right-top sm:object-right opacity-90 group-hover:opacity-95 transition-opacity duration-700"
                />
                {/* Soft left gradient blend so the background video seamlessly flows on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/40 pointer-events-none" />
              </div>
            </div>

            {/* 3. Concentric Hotspot Indicator on the Left Curved Edge (matches reference design) */}
            <div className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <span className="absolute size-10 rounded-full border border-cyan-400/40 animate-ping opacity-60" />
                <span className="absolute size-8 rounded-full border border-cyan-400/50" />
                <span className="size-3.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              </div>
            </div>

            {/* 4. Adjusted 3D Logo Badge: Positioned cleanly in top-left without obstructing the partners */}
            <div className="absolute top-6 left-6 sm:left-8 z-20 flex items-center gap-3.5 rounded-2xl border border-white/20 bg-[#070B14]/85 px-4 py-2.5 backdrop-blur-xl shadow-2xl shadow-cyan-950/50 transition-transform duration-300 group-hover:scale-105">
              <div className="relative size-10 sm:size-11 shrink-0 drop-shadow-[0_0_14px_rgba(0,180,255,0.6)]">
                <Image
                  src="/images/bizlink_3d_logo_transparent.webp"
                  alt="BizLink 3D Architectural Emblem"
                  fill
                  priority
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-white tracking-wider uppercase">
                  BIZLINK QATAR
                </span>
                <span className="text-[10px] font-semibold text-cyan-300">
                  Pathas Group of Companies
                </span>
              </div>
            </div>

            {/* 5. Bottom Right Floating Pill Button (matches reference design "Прокрутите вниз ↓") */}
            <a
              href="#services"
              className="absolute bottom-6 right-6 sm:right-8 z-20 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/95 hover:bg-white text-slate-950 px-5 py-2.5 text-xs font-bold tracking-wide shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group/scroll cursor-pointer"
            >
              <span>Explore Divisions</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-slate-950 text-white transition-transform group-hover/scroll:translate-y-0.5">
                <ArrowDown size={12} />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
