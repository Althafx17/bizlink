import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { HeroMedia } from "@/components/hero-media";
import { CompanyOverview } from "@/components/company-overview";
import { ServicesShowcase } from "@/components/services-showcase";

export default function HomePage() {
  return (
    <main id="main-content">
      <section
        className="relative min-h-screen flex flex-col justify-between py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 overflow-hidden text-white"
        aria-labelledby="home-title"
      >
        <HeroMedia />

        {/* Top Header Row (from reference image) */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold tracking-wider text-white/75 border-b border-white/10 pb-4">
          <span className="uppercase tracking-[0.25em] text-[#FFA048]">
            2026 · DOHA, QATAR
          </span>
          <span dir="rtl" className="font-medium text-white/80 tracking-wide text-xs sm:text-sm">
            شركة بيز لينك للتجارة والمقاولات والخدمات ذ.م.م
          </span>
        </div>

        {/* Center Stage: Two Column Presentation (Left Typography & Lockups + Right Towering Emblem) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8 lg:py-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 max-w-2xl">
            {/* Super-spaced Brand Kicker */}
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.45em] text-[#FFA048] uppercase">
              B I Z L I N K
            </p>

            {/* Monumental Headline with accessible contrast and line-height */}
            <h1
              id="home-title"
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              <span className="block text-[#FFA048]">One Roof.</span>
              <span className="block text-white">Solutions.</span>
            </h1>

            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D35400] uppercase">
              One Trusted Partner · Trading &amp; Contracting Services
            </p>

            {/* Bilingual Corporate Lockup + Mini Emblem (from reference image) */}
            <div className="flex items-center gap-3 w-fit pt-1">
              <div className="flex items-center gap-3.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm shadow-sm">
                <div className="text-right leading-tight">
                  <p dir="rtl" className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    الرواد للخدمات والتجارة
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-white/70 tracking-wider uppercase">
                    BizLink Services WLL
                  </p>
                </div>
                <div className="size-10 rounded-lg bg-white/10 p-1.5 ring-1 ring-white/20 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/bizlink-logo-transparent-1.png"
                    alt="BizLink"
                    width={40}
                    height={40}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Group Attribution with vertical accent line */}
            <div className="border-l-2 border-[#D35400] pl-3.5 py-0.5 leading-snug">
              <p className="text-[10px] font-extrabold tracking-[0.25em] text-white/50 uppercase">
                GROUP
              </p>
              <p className="text-xs sm:text-sm font-bold tracking-wider text-white/90 uppercase">
                PATHAS GROUP OF COMPANIES · QATAR
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-1">
              <Link
                href="/contact"
                className="group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[#D35400] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-[#D35400]/30 transition-all duration-200 hover:bg-[#B84300] hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Bottom 2-Row Contact Grid (from reference image) */}
            <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs font-semibold text-white/80">
              <a
                href="https://wa.me/97450091006"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact BizLink on WhatsApp"
                className="flex min-h-[36px] items-center gap-2 transition-colors hover:text-[#FFA048]"
              >
                <MessageCircle size={15} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>+974 5009 1006</span>
              </a>
              <a
                href="tel:97477661037"
                aria-label="Call BizLink at +974 7766 1037"
                className="flex min-h-[36px] items-center gap-2 transition-colors hover:text-[#FFA048]"
              >
                <Phone size={15} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>+974 7766 1037</span>
              </a>
              <a
                href="https://www.instagram.com/bizlink_servises_qa"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit BizLink on Instagram"
                className="flex min-h-[36px] items-center gap-2 transition-colors hover:text-[#FFA048]"
              >
                <Camera size={15} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>@bizlink_servises_qa</span>
              </a>
              <a
                href="mailto:bizlink.qa@gmail.com"
                aria-label="Email BizLink at bizlink.qa@gmail.com"
                className="flex min-h-[36px] items-center gap-2 transition-colors hover:text-[#FFA048]"
              >
                <Mail size={15} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>bizlink.qa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Towering Architectural Emblem */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-6 lg:py-0">
            {/* Ambient Radial Backlight Glow */}
            <div
              className="absolute size-72 sm:size-96 rounded-full bg-[#D35400]/20 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div className="relative">
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink Monumental Emblem"
                width={1120}
                height={910}
                sizes="(max-width: 48rem) 280px, (max-width: 80rem) 440px, 540px"
                className="w-64 sm:w-80 md:w-96 lg:w-[460px] xl:w-[520px] h-auto object-contain filter drop-shadow-[0_0_35px_rgba(211,84,0,0.35)] drop-shadow-[0_25px_50px_rgba(0,0,0,0.75)] transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Explore Link + Arabic Copyright */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60 border-t border-white/10 pt-3.5">
          <a
            href="#services-showcase"
            className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-white/80 hover:text-[#FFA048] transition-colors min-h-[36px]"
          >
            <span>Explore Our Services</span>
            <span aria-hidden="true" className="text-[#D35400]">↓</span>
          </a>
          <span dir="rtl" className="font-medium tracking-wide text-white/70">
            جميع الحقوق محفوظة © BIZ LINK SERVICES WLL
          </span>
        </div>
      </section>

      {/* Interactive Cinematic Services Showcase (Matching Reference Video) */}
      <ServicesShowcase />

      {/* Company Overview (About, Principles, Values, Footprint, Why BizLink) */}
      <CompanyOverview includeWhy includeServices={false} />
    </main>
  );
}
