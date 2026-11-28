"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Globe2,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Play,
  QrCode,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { company, branches, principles, values, reasons, sisterConcerns } from "@/content/company";
import { services, type ServiceDivision } from "@/content/services";
import { InteractiveServicesShowcase } from "@/components/services/interactive-services-showcase";

export { InteractiveServicesShowcase };

function getDivisionIcon(name: ServiceDivision["iconName"]) {
  switch (name) {
    case "building":
      return <Building2 className="size-6 text-cyan-400" aria-hidden="true" />;
    case "monitor":
      return <Monitor className="size-6 text-cyan-400" aria-hidden="true" />;
    case "truck":
      return <Truck className="size-6 text-cyan-400" aria-hidden="true" />;
    case "wrench":
      return <Wrench className="size-6 text-cyan-400" aria-hidden="true" />;
    case "car":
      return <Car className="size-6 text-cyan-400" aria-hidden="true" />;
    default:
      return <ShieldCheck className="size-6 text-cyan-400" aria-hidden="true" />;
  }
}

/**
 * Image 1 Cover Card Component
 * Exact composition matching the brochure cover with high-resolution artwork and animated handshake.
 */
export function Image1CoverCard() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[270px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[415px]">
      {/* Outer ambient glow behind card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-[48px] bg-gradient-to-tr from-[#00D2FF]/30 via-[#1E3A8A]/35 to-[#F97316]/30 blur-3xl opacity-75"
      />

      {/* Floating Levitation Frame */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-0.3, 0.3, -0.3],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.02 }}
        className="relative w-full aspect-[1200/1696] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/25 bg-[#0B1B36] shadow-2xl shadow-black/70 ring-1 ring-white/10 group cursor-pointer"
      >
        {/* High-Resolution Brochure Cover Artwork (Image 1) */}
        <Image
          src="/images/brochure_cover/cover_hero_card.webp"
        alt="BizLink company profile cover - All Business Solutions Under One Roof"
          fill
          priority
          sizes="(max-width: 640px) 270px, (max-width: 1024px) 350px, 415px"
          className="object-cover object-center select-none"
        />

        {/* Circular BizLink Logo Halo Ring (Emblem at ~70% X, ~26% Y) */}
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [0.95, 1.12, 0.95],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[70%] top-[26%] -translate-x-1/2 -translate-y-1/2 size-28 sm:size-36 rounded-full bg-cyan-400/30 blur-2xl"
        />

        {/* Handshake Clasp Energy Aura (Clasp at ~45% X, ~75% Y) */}
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [0.85, 1.45, 0.85],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[45%] top-[75%] -translate-x-1/2 -translate-y-1/2 size-20 sm:size-26 rounded-full bg-gradient-to-r from-cyan-400/50 via-white/50 to-amber-400/50 blur-xl"
        />

        {/* Pulsing Ripple Shockwave from Clasp */}
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [0.8, 1.7, 0.8],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute left-[45%] top-[75%] -translate-x-1/2 -translate-y-1/2 size-12 sm:size-16 rounded-full border-2 border-cyan-300/70"
        />

        {/* Luminous Shimmer Sweep across the City Skyscrapers (Y: 58% to 84%) */}
        <div className="pointer-events-none absolute inset-x-0 top-[58%] h-[26%] overflow-hidden">
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-120%", "240%"] }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-32 -skew-x-20 bg-gradient-to-r from-transparent via-white/35 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function BrochureCover() {
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-title"
      className="relative min-h-screen overflow-hidden bg-[#000E24] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 flex flex-col justify-between border-b border-white/10"
    >
      {/* Background: Modern Arab City in Electric Sapphire Blue Theme (PixelForge inspiration) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_arab_city_blue_bg.webp"
          alt="BizLink Qatar - Modern Arab City Waterfront in Electric Blue Theme"
          fill
          sizes="100vw"
          priority
          className="object-cover object-[75%_center] sm:object-center select-none"
        />

        {/* Readability Vignette: Soft gradient veil across left side for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000E24]/92 via-[#001438]/70 to-transparent sm:from-[#000E24]/85 sm:via-[#001438]/40 sm:to-transparent" />

        {/* Top edge gradient to blend smoothly under the transparent navbar */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#000E24]/85 via-[#000E24]/40 to-transparent" />

        {/* Bottom edge shadow transition into the services section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#000E24] via-[#000E24]/60 to-transparent" />

        {/* Ambient Cyan / Electric Sapphire Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-1/4 size-[550px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-500/15 to-transparent blur-3xl"
        />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-6 lg:gap-10">
          {/* 1. Main Heading Block (Kicker Eyebrow + H1) */}
          <div className="order-1 lg:order-none lg:col-span-7 xl:col-span-7 flex flex-col text-left max-w-2xl xl:max-w-3xl">
            {/* Kicker Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-[#001438]/75 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] backdrop-blur-md">
                <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Build · Innovate · Grow · Qatar
              </span>
            </div>

            {/* Main H1 Headline with Glowing Gradient */}
            <h1
              id="hero-title"
              className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-[66px] xl:text-[74px] font-black tracking-tight text-white leading-[1.1] sm:leading-[1.08] drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]"
            >
              <span>All BUSINESS</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                SOLUTIONS
              </span>
              <span className="block text-xl sm:text-3xl lg:text-5xl font-extrabold text-white/95 mt-1 sm:mt-2 drop-shadow-md">
                UNDER ONE ROOF
              </span>
            </h1>
          </div>

          {/* 2. 3D BizLink Brand Monument Centerpiece (Order 2 on mobile: directly beneath heading) */}
          <div className="order-2 lg:order-none lg:col-span-5 xl:col-span-5 lg:row-span-2 lg:col-start-8 lg:row-start-1 flex flex-col items-center justify-center relative my-3 lg:my-0">
            {/* Ambient Cyan / Royal Blue Halo Glow behind the 3D logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-blue-600/25 blur-3xl opacity-70"
            />

            {/* Stable 3D Logo Container */}
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[460px] xl:max-w-[490px] flex flex-col items-center">
              <div className="relative w-full aspect-[641/570] drop-shadow-[0_25px_60px_rgba(0,140,255,0.45)]">
                <Image
                  src="/images/bizlink_3d_logo_transparent.webp"
                  alt="BizLink Qatar - 3D Architectural Emblem and Typography"
                  fill
                  sizes="(min-width: 1024px) 40vw, 75vw"
                  priority
                  className="object-contain select-none"
                />
              </div>

              {/* Reflection pedestal glow line */}
              <div className="w-3/4 h-[3px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-sm -mt-2" />
              <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent -mt-[2px]" />
            </div>
          </div>

          {/* 3. Primary Action Buttons & Sub-Services Tags (Order 3 on mobile: beneath the 3D logo) */}
          <div className="order-3 lg:order-none lg:col-span-7 xl:col-span-7 lg:row-start-2 flex flex-col text-left max-w-2xl xl:max-w-3xl">
            {/* Primary Action Buttons (Pill styling matching reference image) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/services"
                className="inline-flex min-h-[46px] sm:min-h-[50px] items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0088FF] to-[#00B4D8] px-6 sm:px-8 py-3 text-xs sm:text-base font-bold text-white shadow-[0_0_25px_rgba(0,180,255,0.4)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(0,180,255,0.6)] active:scale-[0.98]"
              >
                <span>Explore Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] sm:min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 sm:px-6 py-3 text-xs sm:text-base font-bold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-cyan-300/60 active:scale-[0.98]"
              >
                <Play size={14} className="fill-white text-white" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+97450091006"
                className="inline-flex min-h-[46px] sm:min-h-[50px] items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-cyan-300 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Phone size={14} aria-hidden="true" />
                <span>+974 5009 1006</span>
              </a>
            </div>

            {/* Sub-Services row (Image 1 style quick tags) */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300 text-[11px] sm:text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-slate-200">
                <Building2 size={13} className="text-cyan-400" />
                Corporate & Licensing
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-slate-200">
                <Truck size={13} className="text-cyan-400" />
                Trading & Supply
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-slate-200">
                <Wrench size={13} className="text-cyan-400" />
                Facility & Maintenance
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-slate-200">
                <Monitor size={13} className="text-cyan-400" />
                Digital & Creative
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar & Scroll Down (Exact layout from reference image) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: 3 Stat Metrics with Minimalist Line Icons */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full sm:w-auto">
          {/* Stat 1: 14+ Years in Qatar */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 shrink-0 shadow-md">
              <Rocket size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-white leading-none">
                14+
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                Years in Qatar
              </p>
            </div>
          </div>

          {/* Stat 2: 1,000+ Happy Clients */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 shrink-0 shadow-md">
              <Users size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-white leading-none">
                1,000+
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Stat 3: 4 Global Hubs */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 shrink-0 shadow-md">
              <Globe2 size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-white leading-none">
                4
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                Global Hubs
              </p>
            </div>
          </div>
        </div>

        {/* Right: Scroll Down Mouse Indicator (Exact from Image 1) */}
        <a
          href="#services-section"
          className="group hidden sm:flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to explore services"
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/45 flex items-start justify-center p-1 group-hover:border-cyan-300 transition-colors shadow-md">
            <motion.div
              animate={{ y: [0, 9, 0], opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="size-1 rounded-full bg-cyan-400"
            />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase">
            Scroll to explore
          </span>
        </a>
      </div>
    </section>
  );
}

export function SectorIconsBar() {
  return (
    <section
      id="services-section"
      className="border-b border-white/10 bg-[#0B1B36] py-12"
      aria-label="Our 5 Service Divisions"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Comprehensive Capabilities
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Our 5 Core Divisions
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Explore dedicated operational divisions designed to support your commercial and personal needs across Qatar.
          </p>
        </div>

        {/* 5 Circular Badge Icons from the Flyer */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-[#0F254B]/60 p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#143161] hover:shadow-xl hover:shadow-cyan-500/10 last:col-span-2 last:justify-self-center last:w-full last:max-w-[260px] sm:last:col-span-1 sm:last:w-auto sm:last:max-w-none"
            >
              {/* Circular Blue Icon Badge */}
              <span className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0056B3] to-[#0088CE] text-white shadow-md shadow-[#0088CE]/25 transition-transform duration-200 group-hover:scale-110">
                {getDivisionIcon(service.iconName)}
                <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white">
                  {service.number}
                </span>
              </span>
              <strong className="mt-3 text-xs sm:text-sm font-extrabold text-white group-hover:text-cyan-300">
                {service.name}
              </strong>
              <span className="mt-1 text-[11px] text-slate-400 line-clamp-1">
                {service.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyStory({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#071426] border-b border-white/10"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* TOP SECTION: About BizLink with Executive Handshake Background */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-[#071426] p-6 sm:p-10 lg:p-12 shadow-2xl min-h-[480px] lg:min-h-[520px] flex flex-col justify-center">
          {/* Background Image: Executive Handshake in Gulf Skyline Office */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/about/executive_handshake_bg.webp"
              alt="BizLink Business Partnership in Modern Gulf Skyline Office"
              fill
              priority
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="object-cover object-[78%_center] sm:object-[72%_center] lg:object-[80%_center] select-none"
            />
            {/* Dark gradient overlay on the left so all text has maximum contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/92 to-transparent sm:from-[#071426]/95 sm:via-[#071426]/85 sm:to-transparent lg:w-[65%]" />
            <div className="absolute inset-0 bg-[#071426]/30" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071426] to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Top "Company Profile · Doha, Qatar" removed per instruction */}

              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-md"
              >
                About BizLink
              </h2>

              <p className="mt-2 text-base sm:text-lg font-bold text-cyan-300 drop-shadow-sm">
                {company.aboutSubhead}
              </p>

              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-slate-300 drop-shadow-sm max-w-xl">
                <p>{company.about}</p>
                <p>{company.aboutParagraph2}</p>
              </div>

              {/* Quick Feature Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-200">
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10 backdrop-blur-md">
                  Founded {company.since}
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10 backdrop-blur-md">
                  {company.registration}
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10 backdrop-blur-md">
                  Pathas Group of Companies
                </span>
              </div>

              {/* Bottom Footprint Pill per instruction: QATAR • INDIA • UAE • CHINA */}
              <div className="mt-6 pt-4 border-t border-white/15 flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#001D4A]/80 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] backdrop-blur-md">
                  <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                  QATAR • INDIA • UAE • CHINA
                </span>
              </div>
            </div>

            {/* Right Free Space: Inside card removed, businessmen and skyline appear naturally */}
            <div className="hidden lg:block lg:col-span-5 min-h-[380px]" aria-hidden="true" />
          </div>
        </div>

        {/* MIDDLE SECTION: Our Vision & Our Mission (Exact Chevron Layout from Page 2) */}
        <div className="space-y-8">
          {/* 1. Our Vision Block with Left Chevron and Binoculars Character */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0F254B]/80 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Blue Chevron Pointer (from Page 2) */}
              <div className="hidden md:flex md:col-span-2 items-center justify-center">
                <svg
                  className="size-16 lg:size-20 text-cyan-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>

              {/* 3D Character with Vision */}
              <div className="flex justify-center md:col-span-3">
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-32 sm:size-36 rounded-2xl bg-white border border-cyan-400/30 p-2 flex items-center justify-center shadow-lg overflow-hidden"
                >
                  <Image
                    src="/images/vision and mission.jpg"
                    alt="Our Vision"
                    width={150}
                    height={150}
                    className="size-full object-contain drop-shadow-md"
                  />
                </motion.div>
              </div>

              {/* Vision Text Content */}
              <div className="md:col-span-7">
                <span className="inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cyan-400">
                  Guiding Direction
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  Our Vision
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  {principles[1].body}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Our Mission Block with Right Chevron and Bullseye Target */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0F254B]/80 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Mission Text Content */}
              <div className="order-2 md:order-1 md:col-span-7">
                <span className="inline-block rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                  Execution Focus
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  {principles[2].body}
                </p>
              </div>

              {/* 3D Target with Arrows */}
              <div className="order-1 md:order-2 flex justify-center md:col-span-3">
                <motion.div
                  animate={{ scale: [0.96, 1.04, 0.96], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-32 sm:size-36 rounded-2xl bg-white border border-amber-400/30 p-2 flex items-center justify-center shadow-lg overflow-hidden"
                >
                  <Image
                    src="/images/mission.png"
                    alt="Our Mission 3D Bullseye Target"
                    width={150}
                    height={150}
                    className="size-full object-contain drop-shadow-md"
                  />
                </motion.div>
              </div>

              {/* Right Blue Chevron Pointer (from Page 2) */}
              <div className="hidden md:flex order-3 md:col-span-2 items-center justify-center">
                <svg
                  className="size-16 lg:size-20 text-cyan-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 5 Core Values Rounded Pill Bar (from Page 2) */}
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
              Foundational Principles
            </p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-black text-white">
              Our 5 Core Values
            </h3>
          </div>

          {/* Elongated Pill Bar Container matching Page 2 of the brochure */}
          <div className="overflow-hidden rounded-3xl sm:rounded-full border border-cyan-400/30 bg-gradient-to-r from-[#0F254B] via-[#122C57] to-[#0F254B] p-4 sm:p-6 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 items-center justify-around">
              {/* 1. Integrity */}
              <div className="flex flex-col items-center text-center p-2 group">
                <span className="flex size-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                  Integrity
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 mt-0.5">
                  Transparency & Ethics
                </span>
              </div>

              {/* 2. Quality */}
              <div className="flex flex-col items-center text-center p-2 group">
                <span className="flex size-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Award size={24} aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                  Quality
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 mt-0.5">
                  Standard Excellence
                </span>
              </div>

              {/* 3. Reliability */}
              <div className="flex flex-col items-center text-center p-2 group">
                <span className="flex size-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Handshake size={24} aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                  Reliability
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 mt-0.5">
                  Punctual & Accountable
                </span>
              </div>

              {/* 4. Innovation */}
              <div className="flex flex-col items-center text-center p-2 group">
                <span className="flex size-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Lightbulb size={24} aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                  Innovation
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 mt-0.5">
                  Forward Systems
                </span>
              </div>

              {/* 5. Customer Focus */}
              <div className="col-span-2 sm:col-span-1 flex flex-col items-center text-center p-2 group">
                <span className="flex size-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Users size={24} aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                  Customer Focus
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 mt-0.5">
                  Client-Centric Success
                </span>
              </div>
            </div>
          </div>

          {/* Brochure Footer Line with 02 Page Number */}
          <div className="flex items-center justify-between px-4 pt-2 text-xs font-bold text-slate-400">
            <span className="text-cyan-300">www.bizlinkqatar.com</span>
            <span className="flex size-6 items-center justify-center rounded-full bg-cyan-400/20 text-[11px] font-black text-cyan-300 border border-cyan-400/40">
              02
            </span>
          </div>
        </div>

        {/* SISTER CONCERN COMPANIES SECTION (Exact Page 2 Layout) */}
        <div className="overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#0B1B36] via-[#0F254B] to-[#0A1F3D] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch gap-6">
            {/* Left Badge: "Our Sister Concern Companies" matching Page 2 */}
            <div className="flex flex-col justify-center items-center text-center rounded-2xl bg-gradient-to-b from-[#0056B3] to-[#003B7A] p-6 text-white min-w-[220px] shrink-0 shadow-lg border border-cyan-400/30">
              <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
                Pathas Group of Companies
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black leading-tight text-white">
                Our Sister<br />Concern<br />Companies
              </h3>
              <p className="mt-2 text-xs text-sky-200 font-medium">
                Established Presence Across Qatar
              </p>
            </div>

            {/* Right: 3 Sister Concerns Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 items-stretch">
              {sisterConcerns.map((sister) => (
                <div
                  key={sister.name}
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(7, 11, 20, 0.94) 0%, rgba(11, 27, 54, 0.78) 50%, rgba(7, 11, 20, 0.55) 100%), url("${sister.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="flex flex-col justify-between h-full min-h-[260px] rounded-2xl border border-white/15 p-5 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 group relative overflow-hidden"
                >
                  <div className="flex flex-col flex-1 relative z-10">
                    {/* Header with Company Logo & Since Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative h-10 w-28 rounded-lg bg-white/95 p-1 backdrop-blur-md shadow-sm overflow-hidden flex items-center justify-center">
                        <Image
                          src={sister.logo}
                          alt={sister.name}
                          fill
                          className="object-contain"
                          sizes="120px"
                        />
                      </div>
                      {sister.since && (
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/30 backdrop-blur-sm">
                          {sister.since}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-3.5 text-base sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors drop-shadow-md">
                      {sister.name}
                    </h4>
                    {sister.arabicName && (
                      <p className="text-xs font-bold text-slate-200 mt-0.5 drop-shadow-xs" dir="rtl">
                        {sister.arabicName}
                      </p>
                    )}
                    <span className="mt-1.5 inline-block text-[11px] font-extrabold uppercase tracking-wider text-cyan-300 drop-shadow-xs">
                      {sister.tagline}
                    </span>
                    <p className="mt-1 text-xs text-slate-200 line-clamp-2 leading-relaxed drop-shadow-xs">
                      {sister.category}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/15 flex items-start gap-2 text-xs text-slate-200 relative z-10">
                    <MapPin size={14} className="shrink-0 text-cyan-400 mt-0.5" aria-hidden="true" />
                    <span className="leading-snug font-medium drop-shadow-xs">{sister.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GLOBAL FOOTPRINT: Pathas Group of Companies Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1E1B4B] via-[#1E3A8A] to-[#0284C7] p-6 sm:p-8 text-white shadow-2xl border border-white/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <Globe2 size={28} className="text-cyan-300" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  International Network
                </p>
                <h4 className="text-lg sm:text-xl font-black text-white">
                  PATHAS GROUP OF COMPANIES
                </h4>
                <p className="text-xs sm:text-sm text-sky-100 font-semibold tracking-wide">
                  {company.footprint}
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-bold backdrop-blur-md">
                Established 2010 · 15+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesDirectory({ detailed = false }: { detailed?: boolean }) {
  return <InteractiveServicesShowcase detailed={detailed} />;
}

export function WhyBizLink() {
  return (
    <section
      className="py-16 sm:py-24 bg-[#070B14] border-b border-white/10"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Layout: Title left, 3 image cards right — matching the Property Catalog reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Title & Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
              Enterprise Value
            </p>
            <h2 id="why-title" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1]">
              Why Partner<br className="hidden lg:block" /> With BizLink?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              One partner, multiple solutions, endless possibilities. Here is why organizations across Qatar choose us.
            </p>

            {/* Slogan Badge */}
            <div className="mt-6">
              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
                {company.slogan}
              </span>
            </div>

            {/* Nav arrows (desktop) */}
            <div className="hidden lg:flex items-center gap-3 mt-8">
              <span className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                <ArrowLeft size={18} />
              </span>
              <span className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 transition-colors cursor-default">
                <ArrowRight size={18} />
              </span>
            </div>
          </div>

          {/* Right Column: 3 Tall Image Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {reasons.map((r, i) => (
              <div key={r.title} className="group flex flex-col">
                {/* Tall Image Card */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0F182A] shadow-lg">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-[#070B14]/20 to-transparent pointer-events-none" />

                  {/* Stat badge inside card */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#070B14]/70 border border-white/15 px-3 py-1.5 text-[11px] font-bold text-cyan-300 backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      {r.stat}
                    </span>
                  </div>

                  {/* Number badge */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md text-xs font-black text-white border border-white/20">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Caption Below */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export function BranchCards() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("bin-mahmoud");
  const activeBranch = branches.find((b) => b.id === selectedBranchId) ?? branches[0];

  return (
    <section
      id="offices-map"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#0B1B36] border-b border-white/10"
      aria-labelledby="branches-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Two Locations · Same Commitment
          </p>
          <h2
            id="branches-title"
            className="mt-2 text-2xl sm:text-4xl font-black text-white"
          >
            Visit Our Doha Offices
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Directly accessible in Ain Khalid (Head Office) and Bin Mahmoud (Branch). Walk in or schedule a meeting.
          </p>
        </div>

        {/* Branch Tabs Switcher */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/15 bg-[#0F254B] p-1.5 shadow-md">
            {branches.map((b) => {
              const isActive = b.id === activeBranch.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`min-h-[42px] rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${isActive
                      ? "bg-gradient-to-r from-[#0056B3] to-[#0088CE] text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                    }`}
                >
                  {b.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Branch Content Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Details Card */}
          <div className="rounded-3xl border border-white/15 bg-[#0F254B]/90 p-6 sm:p-8 lg:col-span-5 shadow-xl backdrop-blur-md">
            <span className="inline-block rounded-full bg-cyan-400/15 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cyan-300">
              {activeBranch.role}
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-black text-white">
              {activeBranch.title}
            </h3>

            {/* Address */}
            <div className="mt-5 flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-400">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <address className="text-xs sm:text-sm leading-relaxed text-slate-300 not-italic">
                {activeBranch.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            {/* Hours */}
            <div className="mt-4 flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-400">
                <Clock size={18} aria-hidden="true" />
              </span>
              <div className="text-xs sm:text-sm text-slate-300">
                <p className="font-bold text-white">Business Hours</p>
                <p>Saturday – Thursday: 8:00 AM – 7:00 PM</p>
                <p className="text-[11px] text-slate-400">Friday: Closed / On-Call Support</p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeBranch.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-4 py-2 text-xs font-bold text-white shadow-xs hover:from-[#004088] hover:to-[#0077D7] transition"
              >
                <MapPin size={14} aria-hidden="true" />
                <span>Get directions</span>
              </a>

              <a
                href="tel:+97450091006"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition"
              >
                <Phone size={14} className="text-cyan-400" aria-hidden="true" />
                <span>Call +974 5009 1006</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#0F254B] shadow-xl lg:col-span-7 h-[340px] sm:h-[400px]">
            <iframe
              title={`Map of ${activeBranch.title}`}
              src={activeBranch.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactBand({ social = false }: { social?: boolean }) {
  return (
    <section
      id="contact-bizlink"
      className="scroll-mt-20 py-16 sm:py-24 bg-gradient-to-b from-[#071426] via-[#0B1B36] to-[#050F1D] text-white"
      aria-labelledby="contact-band-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#0B1B36] via-[#0F254B] to-[#0A1F3D] p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-[#001438]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              {company.registration} · {company.postBox}
            </span>
            <h2
              id="contact-band-title"
              className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white"
            >
              Connect with BizLink
            </h2>
            <p className="mt-2 text-base sm:text-lg font-bold text-cyan-300">
              One Partner, Multiple Solutions, Endless Possibilities
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Reach out directly to our corporate consulting, facility, trading, and digital teams across Doha.
            </p>
          </div>

          {/* Primary Quick Action Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[50px] items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-base font-extrabold text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition hover:bg-[#20ba59] hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>WhatsApp: {company.whatsappLabel}</span>
            </a>

            <a
              href="tel:+97444121001"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 sm:px-6 py-3 text-xs sm:text-base font-bold text-cyan-300 hover:bg-cyan-400/20 transition"
            >
              <Phone size={16} aria-hidden="true" />
              <span>Landline: +974 4412 1001</span>
            </a>

            <a
              href="mailto:info@bizlinkqatar.com"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 sm:px-6 py-3 text-xs sm:text-base font-bold text-white hover:bg-white/20 transition"
            >
              <Mail size={16} aria-hidden="true" />
              <span>info@bizlinkqatar.com</span>
            </a>
          </div>

          {/* 3-Column Directory Grid (Page 8 Specification) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Col 1: Phone Numbers & Landline */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Phone size={15} />
                  <span>Call Lines & WhatsApp</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs text-slate-300 font-medium">WhatsApp Hotline:</span>
                    <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300">
                      {company.whatsappLabel}
                    </a>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs text-slate-300 font-medium">Office Landline:</span>
                    <a href="tel:+97444121001" className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300">
                      +974 4412 1001
                    </a>
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Additional Desk Lines:</p>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-200">
                      <a href="tel:+97477661037" className="hover:text-cyan-300">+974 7766 1037</a>
                      <a href="tel:+97470081001" className="hover:text-cyan-300">+974 7008 1001</a>
                      <a href="tel:+97430003916" className="hover:text-cyan-300">+974 30003 916</a>
                      <a href="tel:+97430003821" className="hover:text-cyan-300">+974 30003 821</a>
                      <a href="tel:+97455929821" className="hover:text-cyan-300 col-span-2">+974 559 29 821</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-cyan-300 font-medium">
                Available Saturday – Thursday, 8 AM – 7 PM
              </div>
            </div>

            {/* Col 2: Locations & Branches */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <MapPin size={15} />
                  <span>Our Doha Locations</span>
                </div>

                <div className="mt-4 space-y-4">
                  {/* Head Office */}
                  <div className="pb-3 border-b border-white/10">
                    <span className="inline-block rounded-md bg-cyan-400/20 px-2 py-0.5 text-[10px] font-black uppercase text-cyan-300">
                      Head Office
                    </span>
                    <p className="mt-1 text-xs text-slate-200 font-medium leading-relaxed">
                      Building #43, Zone #56, Street # 100,<br />
                      Souq Naif, East Industrial Area Road,<br />
                      Ain Khalid, Doha Qatar
                    </p>
                  </div>

                  {/* Typing Centre */}
                  <div>
                    <span className="inline-block rounded-md bg-sky-400/20 px-2 py-0.5 text-[10px] font-black uppercase text-sky-300">
                      Typing Centre
                    </span>
                    <p className="mt-1 text-xs text-slate-200 font-medium leading-relaxed">
                      Building # 28, Zone #22, Street # 342,<br />
                      Al Jazeera Street, Bin Mahamoud,<br />
                      Doha Qatar (P.O. Box 13710)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-300">
                <Link href="/contact" className="hover:underline flex items-center gap-1">
                  <span>View interactive maps</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Col 3: Official Emails, Website & Social */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Mail size={15} />
                  <span>Email & Digital Channels</span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Primary Inquiries:</p>
                    <a href="mailto:info@bizlinkqatar.com" className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300">
                      info@bizlinkqatar.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Alternative Gmail:</p>
                    <a href="mailto:bizlink.qatar@gmail.com" className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300">
                      bizlink.qatar@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Official Website:</p>
                    <a href="https://www.bizlinkqatar.com" target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-bold text-cyan-300 hover:underline">
                      www.bizlinkqatar.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Follow Us:</p>
                <p className="mt-0.5 text-xs font-black text-white">BizLink Services Qatar</p>
                <div className="mt-2 flex flex-wrap gap-2 text-slate-300 text-xs">
                  <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-300">WhatsApp</a>
                  <span>·</span>
                  <a href="https://www.facebook.com/share/1Ce1qEyQDQ/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Facebook</a>
                  <span>·</span>
                  <a href="https://www.instagram.com/bizlink_servises_qa" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Instagram</a>
                  <span>·</span>
                  <a href="https://www.tiktok.com/@biz.link.qa" target="_blank" rel="noreferrer" className="hover:text-cyan-300">TikTok</a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
            <span>{company.name} · {company.registration} · {company.postBox}</span>
            <span className="text-cyan-300">Doha, State of Qatar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0B1B36] to-[#071426] pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
          BIZLINK QATAR · CORPORATE DETAILS
        </p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function MobileBottomActionDock() {
  return (
    <div
      aria-label="Quick mobile contacts"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-white/15 bg-[#071426]/95 backdrop-blur-md px-3 py-2 shadow-2xl flex items-center justify-around gap-2 max-w-full box-border"
    >
      <a
        href="tel:+97450091006"
        className="flex-1 flex flex-col items-center justify-center min-h-[44px] rounded-xl bg-white/10 py-1 text-cyan-300 active:bg-white/20"
      >
        <Phone size={18} aria-hidden="true" />
        <span className="text-[10px] font-bold mt-0.5">Call</span>
      </a>

      <a
        href={company.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center min-h-[44px] rounded-xl bg-[#25D366]/20 py-1 text-[#25D366] active:bg-[#25D366]/30"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center min-h-[44px] rounded-xl bg-gradient-to-r from-[#0056B3] to-[#0088CE] py-1 text-white active:from-[#004088] active:to-[#0077D7]"
      >
        <ArrowUpRight size={18} aria-hidden="true" />
        <span className="text-[10px] font-bold mt-0.5">Get Quote</span>
      </Link>
    </div>
  );
}
