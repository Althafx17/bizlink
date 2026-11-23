"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Zap } from "lucide-react";
import { company } from "@/content/company";

export function WireframeAbout() {
  return (
    <section
      id="about"
      aria-label="About BizLink"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#090D18] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP: Asymmetric 2-Column Layout | MOBILE: Stacked Layout ("ОБО МНЕ" wireframe) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Desktop 5 cols): Featured Corporate / Team Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-[#0F1E38] shadow-2xl">
              <Image
                src="/images/about/executive_handshake_bg.webp"
                alt="BizLink Executive Handshake Doha Qatar"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[70%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl border border-white/15 bg-[#070B14]/90 backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
                  ESTABLISHED 2010
                </span>
                <p className="mt-0.5 text-sm font-bold text-white">
                  Pathas Group of Companies
                </p>
                <p className="text-[11px] font-bold text-cyan-300 mt-0.5">
                  QATAR • INDIA • UAE • CHINA
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop 7 cols): Title, Bio Card, and 3 Horizontal Feature Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
              WHO WE ARE
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              About BizLink
            </h2>

            <p className="mt-3 text-base sm:text-lg font-bold text-cyan-200">
              {company.aboutSubhead}
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {company.about}
            </p>

            {/* 3 Horizontal Feature Pillars matching "СКОРОСТЬ / ЭСТЕТИКА / УДОБСТВО" from wireframe */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Pillar 1: Speed / Turnaround */}
              <div className="rounded-2xl border border-white/10 bg-[#0F182A] p-4 transition-all hover:border-cyan-400/40 group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md">
                    01
                  </span>
                  <Zap size={16} className="text-amber-400" />
                </div>
                <h3 className="mt-2 text-sm font-bold uppercase text-white group-hover:text-cyan-300 transition-colors">
                  Speed & Precision
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  Express 24-48h licensing approvals & prompt emergency maintenance response.
                </p>
              </div>

              {/* Pillar 2: Standard Excellence / Quality */}
              <div className="rounded-2xl border border-white/10 bg-[#0F182A] p-4 transition-all hover:border-cyan-400/40 group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md">
                    02
                  </span>
                  <ShieldCheck size={16} className="text-cyan-400" />
                </div>
                <h3 className="mt-2 text-sm font-bold uppercase text-white group-hover:text-cyan-300 transition-colors">
                  Ministry Standard
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  100% compliant with MOCI regulations, Qatar Labour laws, and Baladiya standards.
                </p>
              </div>

              {/* Pillar 3: Accessibility / Network */}
              <div className="rounded-2xl border border-white/10 bg-[#0F182A] p-4 transition-all hover:border-cyan-400/40 group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md">
                    03
                  </span>
                  <Clock size={16} className="text-emerald-400" />
                </div>
                <h3 className="mt-2 text-sm font-bold uppercase text-white group-hover:text-cyan-300 transition-colors">
                  Doha Wide Hubs
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  Two full-service physical offices in Ain Khalid & Bin Mahmoud with 24/7 on-call teams.
                </p>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
              >
                <span>Read Full Company Story</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
