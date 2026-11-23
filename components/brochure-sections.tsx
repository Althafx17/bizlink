"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
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
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { company, branches, principles, values, reasons } from "@/content/company";
import { services, type ServiceDivision } from "@/content/services";

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
          alt="BizLink Brochure Cover - All Business Solutions Under One Roof"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-8 lg:gap-10">
          {/* Primary Content Column: Typography & CTAs */}
          <div className="flex flex-col text-left lg:col-span-7 xl:col-span-7 max-w-2xl xl:max-w-3xl order-2 lg:order-1">
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
              <span>All Business</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                Solutions.
              </span>
              <span className="block text-xl sm:text-3xl lg:text-5xl font-extrabold text-white/95 mt-1 sm:mt-2 drop-shadow-md">
                UNDER ONE ROOF.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            {/* <p className="mt-3 sm:mt-5 max-w-xl text-xs sm:text-base lg:text-lg leading-relaxed text-slate-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] font-normal">
              BizLink Trading and Contracting Services provides comprehensive business solutions across Corporate Consulting, Trading & Supply, Facility Maintenance, Automotive Care, and Digital Creative Services under one roof in Qatar.
            </p> */}

            {/* Primary Action Buttons (Pill styling matching reference image) */}
            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/services"
                className="inline-flex min-h-[46px] sm:min-h-[50px] items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-[#0066FF] via-[#0088FF] to-[#00B4D8] px-6 sm:px-8 py-3 text-xs sm:text-base font-bold text-white shadow-[0_0_25px_rgba(0,180,255,0.4)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(0,180,255,0.6)] active:scale-[0.98]"
              >
                <span>Explore Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <a
                href="https://wa.me/97450091006"
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

            {/* Sub-services row (Image 1 style quick tags) */}
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

          {/* 3D BizLink Brand Monument Centerpiece ("and logo on top of that") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col items-center justify-center lg:col-span-5 xl:col-span-5 relative order-1 lg:order-2 my-2 lg:my-0"
          >
            {/* Ambient Cyan / Royal Blue Halo Glow behind the 3D logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-blue-600/25 blur-3xl opacity-70"
            />

            {/* Floating 3D Logo Container */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[460px] xl:max-w-[490px] flex flex-col items-center"
            >
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
            </motion.div>
          </motion.div>
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
              href={`/services#${service.id}`}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-[#0F254B]/60 p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#143161] hover:shadow-xl hover:shadow-cyan-500/10"
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
        {/* TOP SECTION: About BizLink with 3D Climbing Figures (Exact Page 2 Top Layout) */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#0B1B36] via-[#0F254B] to-[#0A1F3D] p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-cyan-300">
                <span className="size-2 rounded-full bg-cyan-400" />
                Company Profile · Doha, Qatar
              </span>

              <h2
                id="about-title"
                className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white"
              >
                About BizLink
              </h2>

              <p className="mt-2 text-base sm:text-lg font-bold text-cyan-300">
                {company.aboutSubhead}
              </p>

              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-slate-300">
                <p>{company.about}</p>
                <p>{company.aboutParagraph2}</p>
              </div>

              {/* Quick Feature Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-200">
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10">
                  Founded {company.since}
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10">
                  {company.registration}
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10">
                  Pathas Group of Companies
                </span>
                <span className="rounded-full bg-cyan-400/20 px-3.5 py-1.5 text-cyan-300 border border-cyan-400/30">
                  {company.footprint}
                </span>
              </div>
            </div>

            {/* Right Visual: 3D Climbing Teamwork Figures (from Page 2) */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[420px]">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-b from-sky-400/10 via-[#071E42] to-[#0B2C5F] shadow-2xl p-2"
                >
                  <Image
                    src="/images/brochure_about/teamwork_climbing.webp"
                    alt="BizLink Teamwork and Business Partnership"
                    width={830}
                    height={524}
                    sizes="(max-width: 640px) 340px, 420px"
                    className="w-full h-auto object-cover rounded-xl drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
                    priority
                  />
                  <div className="mt-2 flex items-center justify-between px-3 pb-1 text-[11px] font-bold text-cyan-200">
                    <span>Collaborative Partnership</span>
                    <span className="text-amber-400">Mutual Success</span>
                  </div>
                </motion.div>
              </div>
            </div>
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

              {/* 3D Character with Binoculars (from Page 2) */}
              <div className="flex justify-center md:col-span-3">
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-32 sm:size-36 flex items-center justify-center"
                >
                  <Image
                    src="/images/brochure_about/vision_binoculars.webp"
                    alt="Our Vision 3D Binoculars"
                    width={150}
                    height={150}
                    className="size-32 sm:size-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
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

              {/* 3D Target with Arrows (from Page 2) */}
              <div className="order-1 md:order-2 flex justify-center md:col-span-3">
                <motion.div
                  animate={{ scale: [0.96, 1.04, 0.96], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-32 sm:size-36 flex items-center justify-center"
                >
                  <Image
                    src="/images/brochure_about/mission_target.webp"
                    alt="Our Mission 3D Bullseye Target"
                    width={144}
                    height={144}
                    className="size-32 sm:size-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
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
  const [selectedDivision, setSelectedDivision] = useState<string>("all");

  const filteredServices =
    selectedDivision === "all"
      ? services
      : services.filter((s) => s.id === selectedDivision);

  return (
    <section
      id="services"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#0B1B36] border-b border-white/10"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            All Business Solutions Under One Roof
          </p>
          <h2
            id="services-title"
            className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white"
          >
            {detailed ? "Complete Services Directory" : "Our Service Solutions"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            From corporate licensing and PRO support to facility maintenance, commercial trading, automotive care, and digital marketing.
          </p>
        </div>

        {/* Division Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedDivision("all")}
            className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-bold transition-all ${
              selectedDivision === "all"
                ? "bg-gradient-to-r from-[#0056B3] to-[#0088CE] text-white shadow-lg shadow-cyan-500/25"
                : "border border-white/15 bg-[#0F254B] text-slate-200 hover:bg-[#143161]"
            }`}
          >
            All Divisions ({services.length})
          </button>
          {services.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedDivision(s.id)}
              className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-bold transition-all ${
                selectedDivision === s.id
                  ? "bg-gradient-to-r from-[#0056B3] to-[#0088CE] text-white shadow-lg shadow-cyan-500/25"
                  : "border border-white/15 bg-[#0F254B] text-slate-200 hover:bg-[#143161]"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Detailed Services Division Cards */}
        <div className="mt-12 space-y-12">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/15 bg-[#0F254B]/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left/Top Content Header */}
                <div className="p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Badge Pill */}
                    <div className="flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0056B3] to-[#0088CE] text-xs font-black text-white">
                        {service.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        Division {service.number} · {service.name}
                      </span>
                    </div>

                    {/* Main Title & Tagline from Brochure */}
                    <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold italic text-cyan-300">
                      “{service.tagline}”
                    </p>

                    {/* Highlight Box from Brochure */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-xs font-bold text-cyan-300">
                      <Sparkles size={15} aria-hidden="true" />
                      <span>{service.highlight}</span>
                    </div>

                    {/* Service Checklist Items Grid */}
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Scope of Services:
                      </p>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-cyan-400"
                              aria-hidden="true"
                            />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Division Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/contact?service=${service.anchor}`}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:from-[#004088] hover:to-[#0077D7]"
                    >
                      <span>Inquire About {service.name}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>

                    <a
                      href="https://wa.me/97450091006"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20"
                    >
                      <MessageCircle size={16} className="text-[#25D366]" aria-hidden="true" />
                      <span>Fast WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>

                {/* Right Image Feature Card */}
                <div className="relative min-h-[220px] lg:min-h-full lg:col-span-4 bg-[#071426] overflow-hidden">
                  <Image
                    src={service.imageCard}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover object-center opacity-85 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F254B] via-[#0F254B]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-4 p-4 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                      BizLink Qatar
                    </p>
                    <p className="text-sm font-black text-white">
                      {service.name}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA Banner if not detailed */}
        {!detailed && (
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-cyan-500/25 hover:from-[#004088] hover:to-[#0077D7] transition"
            >
              <span>View Full 35+ Services Catalog</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function WhyBizLink() {
  return (
    <section
      className="py-16 sm:py-20 bg-[#071426] border-b border-white/10"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Enterprise Value
          </p>
          <h2 id="why-title" className="mt-2 text-2xl sm:text-4xl font-black text-white">
            Why Partner With BizLink?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            One partner, multiple solutions, endless possibilities. Here is why organizations across Qatar choose us.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-[#0F254B]/60 p-6 sm:p-8 shadow-md transition hover:border-cyan-400/40 hover:bg-[#143161]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 font-black text-sm">
                  0{i + 1}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                  {r.tagline}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-white leading-snug">
                {r.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* Slogan Banner */}
        <div className="mt-10 text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-[#0F254B] px-6 py-2.5 text-xs font-black uppercase tracking-widest text-cyan-300 shadow-md">
            {company.slogan}
          </span>
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
                  className={`min-h-[42px] rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
                    isActive
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
                href={activeBranch.mapsDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-4 py-2 text-xs font-bold text-white shadow-xs hover:from-[#004088] hover:to-[#0077D7] transition"
              >
                <MapPin size={14} aria-hidden="true" />
                <span>Open in Google Maps</span>
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
      className="scroll-mt-20 py-16 sm:py-20 bg-gradient-to-b from-[#071426] via-[#0B1B36] to-[#050F1D] text-white"
      aria-labelledby="contact-band-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 sm:p-12 backdrop-blur-xl shadow-2xl text-center max-w-4xl mx-auto">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Connect With BizLink Qatar
          </p>
          <h2
            id="contact-band-title"
            className="mt-2 text-2xl sm:text-4xl font-black text-white"
          >
            One Partner. Multiple Solutions. Endless Possibilities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Ready to streamline your company setup, facility operations, or corporate supply? Speak directly with our consultants today.
          </p>

          {/* Phone Numbers & Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+97450091006"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-extrabold text-[#0B2C5F] shadow-lg hover:bg-slate-100 transition"
            >
              <Phone size={17} className="text-[#0056B3]" aria-hidden="true" />
              <span>+974 5009 1006</span>
            </a>

            <a
              href="tel:+97477661037"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-extrabold text-[#0B2C5F] shadow-lg hover:bg-slate-100 transition"
            >
              <Phone size={17} className="text-[#0088CE]" aria-hidden="true" />
              <span>+974 7766 1037</span>
            </a>

            <a
              href="https://wa.me/97450091006"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-[#20ba59] transition"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
            >
              <Mail size={17} aria-hidden="true" />
              <span>{company.email}</span>
            </a>
          </div>

          {/* Subtitle / Footer Note */}
          <p className="mt-6 text-xs text-slate-400">
            {company.name} · {company.registration} · {company.postBox} · Doha, Qatar
          </p>
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
          BIZLINK QATAR · CORPORATE BROCHURE
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
      className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-white/15 bg-[#071426]/95 backdrop-blur-md px-3 py-2 shadow-2xl flex items-center justify-around gap-2"
    >
      <a
        href="tel:+97450091006"
        className="flex-1 flex flex-col items-center justify-center min-h-[44px] rounded-xl bg-white/10 py-1 text-cyan-300 active:bg-white/20"
      >
        <Phone size={18} aria-hidden="true" />
        <span className="text-[10px] font-bold mt-0.5">Call</span>
      </a>

      <a
        href="https://wa.me/97450091006"
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
