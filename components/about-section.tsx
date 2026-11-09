"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Building2, CheckCircle2, Globe2, ShieldCheck, Sparkles } from "lucide-react";

interface AboutSectionProps {
  isStandalonePage?: boolean;
}

export function AboutSection({ isStandalonePage = false }: AboutSectionProps) {
  const HeadingTag = isStandalonePage ? "h1" : "h2";

  return (
    <section
      id="about"
      className="relative bg-[#FAF9F6] text-[#0F1B3D] overflow-hidden"
      aria-labelledby="about-main-heading"
    >
      {/* ─────────────────────────────────────────────────────────────
          TOP EDITORIAL SECTION (Exact layout from reference image)
          - Left: Giant 'ABOUT US' headline + kicker + description
          - Center: Prominent rounded architectural interior card
          - Right: Pill image + 'Our Philosophy'
      ───────────────────────────────────────────────────────────── */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 ${isStandalonePage ? "pt-28 sm:pt-36 pb-16 sm:pb-20" : "py-16 sm:py-24"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Massive Headline & Briefing */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#D35400] inline-block" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#D35400] uppercase">
                PATHAS GROUP · QATAR
              </span>
            </div>

            <HeadingTag
              id="about-main-heading"
              className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.92] text-[#0F1B3D]"
            >
              <span className="block">ABOUT</span>
              <span className="block">US</span>
            </HeadingTag>

            <div className="mt-6 space-y-3">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D35400]">
                Trading &amp; Contracting Services W.L.L.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <strong className="font-bold text-[#0F1B3D]">Practical &amp; Reliable:</strong> Providing comprehensive corporate, trading, facility, automotive, and digital solutions under one roof since 2010.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F1B3D] hover:bg-[#D35400] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105"
              >
                <span>Our Services</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 hover:border-[#D35400] text-[#0F1B3D] hover:text-[#D35400] px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Contact Office</span>
              </Link>
            </div>
          </div>

          {/* Center Column: Prominent Rounded Architectural Interior (Reference style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 group">
              <Image
                src="/images/about/interior-main.webp"
                alt="BizLink Qatar Corporate Environment"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FFA048] bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                  Doha Headquarters
                </span>
                <p className="mt-2 text-sm font-bold text-white drop-shadow">
                  Modern Commercial &amp; Corporate Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pill Image + Philosophy (Reference style) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            {/* Pill Image Window */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border-2 border-white bg-gray-100 group">
              <Image
                src="/images/about/philosophy-detail.webp"
                alt="Executive Boardroom and Precision Design"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Our Philosophy Block */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F1B3D]">
                Our Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                At BizLink Qatar, we believe in delivering integrated, reliable, and value-driven solutions that bridge commercial opportunities and simplify operations for clients and partners with uncompromising integrity.
              </p>
            </div>

            {/* Quick Stat Pill */}
            <div className="rounded-2xl border border-gray-200 bg-white p-3.5 shadow-sm flex items-center gap-3">
              <div className="size-10 rounded-xl bg-[#D35400]/10 flex items-center justify-center text-[#D35400] shrink-0">
                <Building2 size={20} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-extrabold text-[#0F1B3D] uppercase tracking-wider">
                  Since 2010 in Qatar
                </p>
                <p className="text-[11px] text-gray-500 font-medium">
                  Part of Pathas Group of Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LOWER SECTION (Soft Sand Background with Rounded Top & Center Pill)
          Reference layout with architectural photo cards (NO PERSONS!)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative bg-[#ECE9E2] rounded-t-[3rem] sm:rounded-t-[4rem] px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-20 border-t border-gray-300 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
          {/* Center Pill: "OUR PRINCIPLES" Banner with 3 Rounded Image Cutouts */}
          <div className="max-w-2xl mx-auto w-full text-center">
            <div className="inline-block bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border border-gray-200/80 w-full">
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0F1B3D]">
                OUR PRINCIPLES
              </h3>

              {/* 3 Pill Photo Cutouts (from reference image) */}
              <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-4 px-2">
                <div className="relative h-12 sm:h-16 rounded-full overflow-hidden shadow-inner border border-gray-200">
                  <Image
                    src="/images/about/doha-corporate.webp"
                    alt="Corporate Qatar"
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
                <div className="relative h-12 sm:h-16 rounded-full overflow-hidden shadow-inner border border-gray-200">
                  <Image
                    src="/images/about/trading-hub.webp"
                    alt="Trading Hub"
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
                <div className="relative h-12 sm:h-16 rounded-full overflow-hidden shadow-inner border border-gray-200">
                  <Image
                    src="/images/about/engineering-facility.webp"
                    alt="Facility Engineering"
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#D35400]">
                TRUST · INTEGRITY · GROWTH
              </p>
            </div>
          </div>

          {/* Left & Right Architectural Cards (Related to Us - NO PERSONS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Card: Purpose & Mission */}
            <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-gray-200/70 flex flex-col justify-between group hover:border-[#D35400] transition-all duration-300">
              <div>
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src="/images/about/doha-corporate.webp"
                    alt="BizLink Qatar Operations"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#0F1B3D] text-white">
                    OUR BUSINESS PURPOSE
                  </span>
                </div>

                <h4 className="text-2xl font-black uppercase tracking-tight text-[#0F1B3D]">
                  Purpose &amp; Mission
                </h4>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed font-normal">
                  To bridge business opportunities and provide end-to-end solutions in trading, facility, automotive, and digital services—making operations easier, transparent, and scalable for our clients and partners across Qatar.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#D35400]">
                <span>INNOVATIVE &amp; PRACTICAL EXECUTION</span>
                <Sparkles size={16} />
              </div>
            </div>

            {/* Right Card: Vision & Strategic Footprint */}
            <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-gray-200/70 flex flex-col justify-between group hover:border-[#D35400] transition-all duration-300">
              <div>
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src="/images/about/engineering-facility.webp"
                    alt="Engineering and Facility Operations in Qatar"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#D35400] text-white">
                    OUR VISION
                  </span>
                </div>

                <h4 className="text-2xl font-black uppercase tracking-tight text-[#0F1B3D]">
                  Vision &amp; Values
                </h4>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed font-normal">
                  To build a diversified multi-service powerhouse recognized for quality, trust, professional acumen, and long-term customer relationships, grounded in four core values: Integrity, Reliability, Innovation, and Customer Focus.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0F1B3D]">
                <span>GLOBAL NETWORK: QATAR · INDIA · UAE · CHINA</span>
                <Globe2 size={16} />
              </div>
            </div>
          </div>

          {/* Core Values Strip */}
          <div className="rounded-2xl bg-white/80 backdrop-blur-md p-6 sm:p-8 border border-gray-300/80 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D35400]">
                  Core Foundations
                </p>
                <h4 className="text-xl sm:text-2xl font-black uppercase text-[#0F1B3D]">
                  The Values Guiding Every BizLink Contract
                </h4>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Excellence · Commitment · Trust
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Integrity", desc: "Transparent, honest business practices across all operations." },
                { name: "Reliability", desc: "Dependable, certified execution and timely deliverables." },
                { name: "Innovation", desc: "Modern technology, optimized workflows, and digital agility." },
                { name: "Customer Focus", desc: "Tailored engagements structured around client success." },
              ].map(({ name, desc }) => (
                <div
                  key={name}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-[#D35400] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[#D35400]" />
                    <span className="text-sm font-extrabold uppercase text-[#0F1B3D] tracking-wide">
                      {name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

