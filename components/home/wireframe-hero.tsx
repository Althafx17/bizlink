"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

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

          {/* Left Column (Desktop 6-7 cols): All editorial contents preserved */}
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

          {/* Right Column: Semicircle Arch Background with Floating BizLink Logo Card at Bottom-Left Corner */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[440px] sm:max-w-[540px] lg:max-w-[600px] xl:max-w-[660px] h-[480px] sm:h-[540px] lg:h-[600px] xl:h-[640px] flex items-end justify-start select-none">

              {/* 1. Semicircle Arch Background (Matching the curved glass building from reference image) */}
              <div className="absolute right-0 top-0 bottom-0 w-[84%] sm:w-[80%] lg:w-[76%] rounded-t-full overflow-hidden border border-cyan-400/40 bg-gradient-to-b from-[#3b93e8] via-[#1c64b5] to-[#09294d] shadow-[0_0_90px_rgba(45,139,230,0.35)]">
                {/* Architectural curved glass image blend matching reference image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/about/luxury_boardroom_skyline.jpg"
                    alt="BizLink Architectural Penthouse Arch"
                    fill
                    priority
                    sizes="(min-width: 1024px) 500px, 400px"
                    className="object-cover object-top opacity-35 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 via-transparent to-[#070B14]/80 pointer-events-none" />
                </div>

                {/* Subtle interior ambient glow and arch lines */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/25 to-transparent pointer-events-none" />
                <div className="absolute inset-6 rounded-t-full border border-white/10 pointer-events-none" />

                {/* Top Tag inside Arch */}
                <div className="absolute top-10 sm:top-14 inset-x-0 flex flex-col items-center text-center px-4 z-10">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cyan-200 drop-shadow-md">
                    CORPORATE ECOSYSTEM
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-1 drop-shadow-md">
                    Doha · Qatar
                  </span>
                </div>
              </div>

              {/* 2. Floating BizLink Logo Card at the Bottom Left Corner (matching reference 1 & user diagnostics) */}
              <div className="relative z-20 w-[55%] sm:w-[50%] lg:w-[50%] rounded-2xl sm:rounded-3xl border border-white/20 bg-[#070B14]/92 backdrop-blur-xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] shadow-cyan-950/70 transition-transform duration-500 hover:scale-[1.03] group mb-2 ml-0 sm:mb-4">
                
                {/* Top Header of the Logo Card */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      Corporate
                    </span>
                  </div>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                    Est. 2010
                  </span>
                </div>

                {/* Center 3D BizLink Logo */}
                <div className="relative w-full aspect-[641/460] my-2.5 sm:my-3 flex items-center justify-center">
                  <div className="relative w-4/5 h-full drop-shadow-[0_12px_28px_rgba(0,180,255,0.65)] group-hover:scale-105 transition-transform duration-700 ease-out">
                    <Image
                      src="/images/bizlink_3d_logo_transparent.webp"
                      alt="BizLink 3D Architectural Logo"
                      fill
                      priority
                      sizes="240px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Bottom Brand Title & Credentials */}
                <div className="pt-2.5 border-t border-white/10">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                      BIZLINK
                    </h3>
                    <span className="text-[9px] font-bold text-cyan-300">
                      Pathas Group
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-[8px] sm:text-[9px] font-bold text-slate-400">
                    <span className="text-cyan-300">QATAR</span>
                    <span>•</span>
                    <span>INDIA</span>
                    <span>•</span>
                    <span>UAE</span>
                    <span>•</span>
                    <span>CHINA</span>
                  </div>
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
