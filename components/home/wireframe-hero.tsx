"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

export function WireframeHero() {
  return (
    <section
      id="hero"
      aria-label="BizLink Qatar Hero"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#070B14] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 flex flex-col justify-center overflow-hidden border-b border-white/10"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-[#0056B3]/20 blur-[140px]" />
        <div className="absolute top-1/2 -right-32 size-[600px] rounded-full bg-[#00B4FF]/15 blur-[160px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070B14] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* DESKTOP: 2-Column Grid | MOBILE: Clean Vertical Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column (Desktop 6-7 cols): All existing contents preserved */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            {/* Top Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Pathas Group · Doha, Qatar
            </div>

            {/* Main Headline: Bold, modern, clean editorial look */}
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight text-white uppercase leading-[1.08]">
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

          {/* Right Column: Concentric Overlapping Gradient Circles matching reference design */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[620px] aspect-square flex items-center justify-center select-none">

              {/* 1. OUTER CIRCLE (Largest): Deep Ocean Azure Blue */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#123966] via-[#0d2747] to-[#07162b] border border-cyan-500/25 shadow-2xl shadow-cyan-950/60 overflow-hidden group">
                {/* Subtle ambient lighting */}
                <div className="absolute inset-0 bg-radial from-cyan-400/10 via-transparent to-transparent pointer-events-none" />

                {/* Outer Circle Stat Label (Top Right) */}
                <div className="absolute top-6 sm:top-10 right-6 sm:right-10 text-right z-10">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-400/90 block">
                    GLOBAL FOOTPRINT
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white block mt-0.5">
                    4 Trade Hubs
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 block mt-0.5">
                    Qatar • India • UAE • China
                  </span>
                </div>
              </div>

              {/* 2. MIDDLE CIRCLE: Medium Sapphire Blue (Offset towards Center-Left) */}
              <div className="absolute size-[72%] rounded-full bg-gradient-to-br from-[#1d5c9c] via-[#144372] to-[#0c2a49] border border-cyan-400/35 shadow-xl shadow-cyan-950/50 overflow-hidden flex items-center justify-center">
                {/* Middle Circle Stat Label */}
                <div className="absolute top-5 sm:top-7 right-5 sm:right-7 text-right z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-cyan-300 block">
                    OPERATIONAL SCALE
                  </span>
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-white block mt-0.5">
                    1,000+ Clients
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-medium text-slate-300 block">
                    5 Enterprise Divisions
                  </span>
                </div>
              </div>

              {/* 3. INNER SMALL CIRCLE AT THE CENTER: Glowing Cyan/Sky Blue */}
              <div className="relative z-20 size-[44%] sm:size-[42%] rounded-full bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#07365c] border-2 border-cyan-300/80 shadow-[0_0_60px_rgba(34,211,238,0.55)] flex flex-col items-center justify-center p-4 text-center transition-transform duration-500 hover:scale-105 cursor-pointer">
                
                {/* Ambient pulse halo */}
                <div className="absolute inset-0 rounded-full border border-cyan-300/40 animate-ping opacity-30 pointer-events-none" />

                {/* ROUND LOGO FROM THE IMAGES */}
                <div className="relative size-16 sm:size-20 lg:size-24 drop-shadow-[0_12px_28px_rgba(0,180,255,0.7)]">
                  <Image
                    src="/images/bizlink_3d_logo_transparent.webp"
                    alt="BizLink Round 3D Architectural Emblem"
                    fill
                    priority
                    sizes="(min-width: 1024px) 120px, 80px"
                    className="object-contain"
                  />
                </div>

                {/* Center Core Brand Badge */}
                <div className="mt-1 sm:mt-1.5 flex flex-col items-center">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white drop-shadow-sm">
                    BIZLINK QATAR
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-cyan-200 uppercase tracking-widest mt-0.5">
                    Pathas Group
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WireframeHero;
