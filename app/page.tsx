import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { HeroMedia } from "@/components/hero-media";
import { AboutSection } from "@/components/about-section";
import { ServicesShowcase } from "@/components/services-showcase";

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. Monumental Hero Section (Fits 100% within initial viewport on open) */}
      <section
        className="relative h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-5 px-4 sm:px-8 lg:px-12 overflow-hidden text-white"
        aria-labelledby="home-title"
      >
        <HeroMedia />

        {/* Top Header Row (Compact & refined) */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-semibold tracking-wider text-white/75 border-b border-white/10 pb-2 sm:pb-3">
          <span className="uppercase tracking-[0.25em] text-[#FFA048]">
            2026 · DOHA, QATAR
          </span>
          <span dir="rtl" className="font-medium text-white/80 tracking-wide text-[11px] sm:text-xs">
            شركة بيز لينك للتجارة والمقاولات والخدمات ذ.م.م
          </span>
        </div>

        {/* Center Stage: Two Column Presentation (Sized so all contents fit at once) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-2 sm:py-3 w-full">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 max-w-2xl min-w-0">
            {/* Super-spaced Brand Kicker */}
            <p className="text-[10px] sm:text-xs font-extrabold tracking-[0.4em] text-[#FFA048] uppercase">
              B I Z L I N K
            </p>

            {/* Monumental Headline (Balanced size) */}
            <h1
              id="home-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-white"
            >
              <span className="block text-[#FFA048]">One Roof.</span>
              <span className="block text-white">Solutions.</span>
            </h1>

            <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#D35400] uppercase">
              One Trusted Partner · Trading &amp; Contracting Services
            </p>

            {/* Bilingual Corporate Lockup + Mini Emblem */}
            <div className="flex items-center gap-3 w-fit">
              <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm shadow-sm">
                <div className="text-right leading-tight">
                  <p dir="rtl" className="text-xs font-bold text-white tracking-wide">
                    الرواد للخدمات والتجارة
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-white/70 tracking-wider uppercase">
                    BizLink Services WLL
                  </p>
                </div>
                <div className="size-8 rounded-md bg-white/10 p-1 ring-1 ring-white/20 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/bizlink-logo-transparent-1.png"
                    alt="BizLink"
                    width={32}
                    height={32}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Group Attribution with vertical accent line */}
            <div className="border-l-2 border-[#D35400] pl-3 py-0 leading-tight">
              <p className="text-[9px] font-extrabold tracking-[0.25em] text-white/50 uppercase">
                GROUP
              </p>
              <p className="text-[11px] sm:text-xs font-bold tracking-wider text-white/90 uppercase">
                PATHAS GROUP OF COMPANIES · QATAR
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-0.5">
              <Link
                href="/contact"
                className="group inline-flex min-h-[42px] items-center gap-2.5 rounded-full bg-[#D35400] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D35400]/30 transition-all duration-200 hover:bg-[#B84300] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Bottom 2-Row Contact Grid (Compact & clean) */}
            <div className="mt-1 pt-2.5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-semibold text-white/80">
              <a
                href="https://wa.me/97450091006"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact BizLink on WhatsApp"
                className="flex min-h-[28px] items-center gap-1.5 transition-colors hover:text-[#FFA048]"
              >
                <MessageCircle size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>+974 5009 1006</span>
              </a>
              <a
                href="tel:97477661037"
                aria-label="Call BizLink at +974 7766 1037"
                className="flex min-h-[28px] items-center gap-1.5 transition-colors hover:text-[#FFA048]"
              >
                <Phone size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>+974 7766 1037</span>
              </a>
              <a
                href="https://www.instagram.com/bizlink_servises_qa"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit BizLink on Instagram"
                className="flex min-h-[28px] items-center gap-1.5 transition-colors hover:text-[#FFA048]"
              >
                <Camera size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>@bizlink_servises_qa</span>
              </a>
              <a
                href="mailto:bizlink.qa@gmail.com"
                aria-label="Email BizLink at bizlink.qa@gmail.com"
                className="flex min-h-[28px] items-center gap-1.5 transition-colors hover:text-[#FFA048]"
              >
                <Mail size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>bizlink.qa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Towering Architectural Emblem (Scaled so hero stays within viewport) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-2 lg:py-0 w-full min-w-0">
            {/* Ambient Radial Backlight Glow */}
            <div
              className="absolute size-60 sm:size-72 rounded-full bg-[#D35400]/20 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div className="relative flex justify-center lg:justify-end w-full">
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink Monumental Emblem"
                width={1120}
                height={910}
                sizes="(max-width: 48rem) 220px, (max-width: 80rem) 340px, 400px"
                className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[390px] max-w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(211,84,0,0.35)] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-[1.02]"
                style={{ maxWidth: "100%" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Explore Link + Arabic Copyright */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-white/60 border-t border-white/10 pt-2 sm:pt-2.5">
          <a
            href="#about"
            className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-white/80 hover:text-[#FFA048] transition-colors min-h-[28px]"
          >
            <span>Explore About Us</span>
            <span aria-hidden="true" className="text-[#D35400]">↓</span>
          </a>
          <span dir="rtl" className="font-medium tracking-wide text-white/70">
            جميع الحقوق محفوظة © BIZ LINK SERVICES WLL
          </span>
        </div>
      </section>

      {/* 2. About Section: Comes BEFORE Services section (Matching Reference Image) */}
      <AboutSection />

      {/* 3. Services Showcase: Follows About Section (Matching Reference Video, 3s Cycle) */}
      <ServicesShowcase autoPlayInterval={3000} />
    </main>
  );
}
