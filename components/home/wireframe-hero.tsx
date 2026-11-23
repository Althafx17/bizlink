"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* DESKTOP: Split 2-Column Grid | MOBILE: Clean Vertical Stack matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (Desktop 7 cols) / Order 1 on Mobile: Editorial Typography Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Pathas Group · Doha, Qatar
            </div>

            {/* Main Headline: Bold, modern, clean editorial look */}
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
              All Business <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                Solutions Under
              </span>
              <br />
              One Roof
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              From 100% foreign-owned corporate formation & licensing to 24/7 facility engineering, global industrial trading, automotive care, and creative media production in Qatar.
            </p>

            {/* Primary Action Buttons (Rounded Pill matching reference mockup) */}
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

          {/* Right Column (Desktop 5 cols) / Order 2 on Mobile: Large Featured Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] lg:max-w-none aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0F1E38] to-[#0A1426] shadow-2xl group">
              {/* City Background & 3D Logo Layer */}
              <div className="absolute inset-0">
                <Image
                  src="/images/hero_arab_city_blue_bg.webp"
                  alt="BizLink Modern Arab City in Electric Blue Theme"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-transparent" />
                <div className="absolute inset-0 bg-[#001D4A]/30 backdrop-blur-[1px]" />
              </div>

              {/* 3D Emblem Floating in Showcase */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-3/4 aspect-[641/570] drop-shadow-[0_20px_50px_rgba(0,180,255,0.45)]">
                  <Image
                    src="/images/bizlink_3d_logo_transparent.webp"
                    alt="BizLink 3D Architectural Emblem"
                    fill
                    priority
                    sizes="(min-width: 1024px) 30vw, 70vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Badge Bar inside Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl border border-white/15 bg-[#070B14]/85 backdrop-blur-xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                    <Sparkles size={16} />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-white">Full Corporate & Retail Suite</span>
                    <span className="block text-[10px] text-slate-400">CR No. 222380 · Ministry Approved</span>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/30">
                  DOHA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
