import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { HeroMedia } from "@/components/hero-media";
import { AboutSection } from "@/components/about-section";
import { ServicesShowcase } from "@/components/services-showcase";

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. Monumental Hero Section (Fits 100% within initial viewport with mobile-first centering) */}
      <section
        className="relative h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-5 px-4 sm:px-8 lg:px-12 overflow-hidden text-white"
        aria-labelledby="home-title"
      >
        <HeroMedia />

        {/* Center Stage: Two Column Presentation (Mobile-Centered, Desktop-Split) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center justify-items-center my-auto py-2 sm:py-3 w-full text-center lg:text-left">
          {/* Left Column (Centered on Mobile, Left-aligned on Desktop) */}
          <div className="lg:col-span-7 flex w-full max-w-2xl min-w-0 flex-col items-center lg:items-start gap-3 sm:gap-4 justify-self-stretch">
            {/* Super-spaced Brand Kicker (Upgraded to 12px for mobile legibility) */}
            <p className="text-xs sm:text-xs font-extrabold tracking-[0.4em] text-[#FFA048] uppercase text-center lg:text-left w-full">
              B I Z L I N K
            </p>

            {/* Monumental Headline (36px on mobile for optimal mobile readability) */}
            <h1
              id="home-title"
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-white text-center lg:text-left w-full"
            >
              <span className="block text-[#FFA048] text-4xl sm:text-5xl lg:text-5xl xl:text-6xl">
                One Roof.
              </span>
              <span className="block text-white">Solutions.</span>
            </h1>

            <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#D35400] uppercase text-center lg:text-left w-full">
              One Trusted Partner · Trading &amp; Contracting Services
            </p>

            {/* Bilingual Corporate Lockup + Mini Emblem (Clean & borderless on mobile) */}
            <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-fit">
              <div className="flex items-center gap-3 rounded-lg border-0 lg:border border-white/15 bg-transparent lg:bg-white/5 px-0 lg:px-3 py-1 lg:py-1.5 backdrop-blur-none lg:backdrop-blur-sm shadow-none lg:shadow-sm justify-center mx-auto lg:mx-0">
                <div className="text-center sm:text-right leading-tight">
                  <p dir="rtl" className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    الرواد للخدمات والتجارة
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-white/70 tracking-wider uppercase">
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

            {/* Group Attribution (Centered without side borders on mobile) */}
            <div className="border-l-0 lg:border-l-2 border-[#D35400] pl-0 lg:pl-3 py-0 leading-tight text-center lg:text-left w-full">
              <p className="text-[10px] sm:text-xs font-extrabold tracking-[0.25em] text-white/50 uppercase">
                GROUP
              </p>
              <p className="text-xs sm:text-sm font-bold tracking-wider text-white/90 uppercase">
                PATHAS GROUP OF COMPANIES · QATAR
              </p>
            </div>

            {/* Call to Action Button (Centered on mobile) */}
            <div className="pt-0.5 flex justify-center lg:justify-start w-full sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full bg-[#D35400] px-7 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D35400]/30 transition-all duration-200 hover:bg-[#B84300] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Bottom 2-Row Contact Grid (Centered on mobile) */}
            <div className="mt-1.5 pt-2.5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-semibold text-white/80 w-full justify-items-center sm:justify-items-start">
              <a
                href="https://wa.me/97450091006"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact BizLink on WhatsApp"
                className="flex min-h-[28px] items-center justify-center sm:justify-start gap-1.5 transition-colors hover:text-[#FFA048] w-full sm:w-auto"
              >
                <MessageCircle size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>+974 5009 1006</span>
              </a>
              <a
                href="tel:97477661037"
                aria-label="Call BizLink at +974 7766 1037"
                className="flex min-h-[28px] items-center justify-center sm:justify-start gap-1.5 transition-colors hover:text-[#FFA048] w-full sm:w-auto"
              >
                <Phone size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>+974 7766 1037</span>
              </a>
              <a
                href="https://www.instagram.com/bizlink_servises_qa"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit BizLink on Instagram"
                className="flex min-h-[28px] items-center justify-center sm:justify-start gap-1.5 transition-colors hover:text-[#FFA048] w-full sm:w-auto"
              >
                <Camera size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>@bizlink_servises_qa</span>
              </a>
              <a
                href="mailto:bizlink.qa@gmail.com"
                aria-label="Email BizLink at bizlink.qa@gmail.com"
                className="flex min-h-[28px] items-center justify-center sm:justify-start gap-1.5 transition-colors hover:text-[#FFA048] w-full sm:w-auto"
              >
                <Mail size={14} className="text-[#D35400] shrink-0" aria-hidden="true" />
                <span>bizlink.qa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Towering Architectural Emblem */}
          <div className="lg:col-span-5 flex w-full min-w-0 items-center justify-center justify-self-stretch py-2 lg:py-0">
            {/* Ambient Radial Backlight Glow */}
            <div
              className="absolute size-60 sm:size-72 rounded-full bg-[#D35400]/20 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div className="relative flex w-full justify-center">
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink Monumental Emblem"
                width={1120}
                height={910}
                sizes="(max-width: 48rem) 220px, (max-width: 80rem) 340px, 400px"
                className="h-auto w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[390px] max-w-full object-contain filter drop-shadow-[0_0_30px_rgba(211,84,0,0.35)] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-[1.02]"
                style={{ maxWidth: "100%" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Explore Link + Arabic Copyright (Centered on Mobile) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-2.5 text-xs text-white/60 border-t border-white/10 pt-2.5 text-center">
          <div className="flex justify-center w-full sm:w-auto">
            <a
              href="#about"
              className="flex items-center justify-center gap-1.5 font-bold tracking-wider uppercase text-white/80 hover:text-[#FFA048] transition-colors min-h-[30px]"
            >
              <span>Explore About Us</span>
              <span aria-hidden="true" className="text-[#D35400]">↓</span>
            </a>
          </div>
          <div className="flex justify-center w-full sm:w-auto">
            <span dir="rtl" className="font-medium tracking-wide text-white/70">
              جميع الحقوق محفوظة © BIZ LINK SERVICES WLL
            </span>
          </div>
        </div>
      </section>

      {/* 2. About Section: Comes BEFORE Services section (Matching Reference Image) */}
      <AboutSection />

      {/* 3. Services Showcase: Follows About Section (Matching Reference Video, 3s Cycle) */}
      <ServicesShowcase autoPlayInterval={3000} />
    </main>
  );
}
