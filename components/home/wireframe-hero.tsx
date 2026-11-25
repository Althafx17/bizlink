"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { AnimatedCounter } from "@/components/home/animated-counter";

const heroServiceVideos = [
  {
    id: "business-setup",
    src: "/videos/services/business-setup.mp4",
    title: "Corporate & Licensing",
    tagline: "100% Foreign Ownership",
  },
  {
    id: "facility-management",
    src: "/videos/services/facility-management.mp4",
    title: "Facility Management",
    tagline: "Commercial Operations",
  },
  {
    id: "automotive",
    src: "/videos/services/automotive.mp4",
    title: "Automotive Mobility",
    tagline: "Fleet & Limousine",
  },
  {
    id: "trading",
    src: "/videos/services/trading.mp4",
    title: "International Trading",
    tagline: "Global Supply Chain",
  },
];

export function WireframeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % heroServiceVideos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = heroServiceVideos[currentVideoIdx].src;
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy handled: video is muted and playsInline
      });
    }
  }, [currentVideoIdx]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms: GPU-composited for cinematic magazine scroll feel
  const yParallaxArch = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const yParallaxGlow = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const yParallaxCard = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="BizLink Qatar Hero"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#070B14] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 flex flex-col justify-center overflow-hidden border-b border-white/10"
    >
      {/* Background ambient gradient glow with vibrant multi-spectral aurora orbs */}
      <motion.div style={{ y: yParallaxGlow }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Luminous Electric Cyan Orb */}
        <div className="absolute -top-32 -left-32 size-[360px] sm:size-[600px] rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/20 blur-[110px] sm:blur-[150px]" />
        {/* Vibrant Royal Violet / Sapphire Glow */}
        <div className="absolute top-1/3 -right-32 size-[380px] sm:size-[650px] rounded-full bg-gradient-to-bl from-violet-500/25 via-blue-600/20 to-cyan-400/15 blur-[120px] sm:blur-[170px]" />
        {/* Warm Golden / Amber Accent Glow */}
        <div className="absolute -bottom-10 left-1/4 size-[250px] sm:size-[450px] rounded-full bg-amber-400/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070B14] to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* DESKTOP: 2-Column Grid | MOBILE: Clean Vertical Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Scaled for maximum mobile impact & readability */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Top Eyebrow Status Badge - Content hidden with visibility: hidden preserving 38px layout flow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ visibility: "hidden" }}
              aria-hidden="true"
              className="invisible inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-950/40 px-5 py-2 text-[14px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-sm"
            >
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              Pathas Group · Doha, Qatar
            </motion.div>

            {/* Main Headline: Bold 44px mobile scale with tight 1.05 leading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[44px] leading-[1.05] sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight text-white uppercase sm:leading-[1.08]"
            >
              All Business <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                Solutions Under
              </span>
              <br />
              One Roof
            </motion.h1>

            {/* Subtitle / Value Proposition: Relaxed 18px text-lg on mobile */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-6 text-lg sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              From 100% foreign-owned corporate formation &amp; licensing to 24/7 facility engineering, global industrial trading, automotive care, and creative media production in Qatar.
            </motion.p>

            {/* Primary Action Buttons: Full width on mobile for thumb reachability, flex-row on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36 }}
              className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5"
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex min-h-[52px] sm:min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-8 py-4 sm:px-7 sm:py-3 text-base sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/97450091006?text=Hello%20BizLink%20Qatar%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex min-h-[52px] sm:min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-8 py-4 sm:px-6 sm:py-3 text-base sm:text-sm font-bold text-white hover:bg-white/15 hover:border-cyan-400/40 backdrop-blur-md transition-all active:scale-[0.98] text-center"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>WHATSAPP DIRECT</span>
              </a>

              <a
                href="tel:+97450091006"
                className="w-full sm:w-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-bold text-slate-300 hover:text-white hover:border-white/30 transition-colors text-center"
              >
                <Phone size={15} className="text-cyan-400" />
                <span>+974 5009 1006</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar with Animated Number Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44 }}
              className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <AnimatedCounter
                  value={15}
                  suffix="+"
                  duration={2}
                  className="block text-[28px] sm:text-2xl font-black text-white leading-tight"
                />
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                  Years Exp
                </span>
              </div>
              <div>
                <AnimatedCounter
                  value={1000}
                  suffix="+"
                  duration={2.2}
                  className="block text-[28px] sm:text-2xl font-black text-cyan-300 leading-tight"
                />
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                  Clients in Qatar
                </span>
              </div>
              <div>
                <AnimatedCounter
                  value={4}
                  suffix=" Hubs"
                  duration={1.6}
                  className="block text-[28px] sm:text-2xl font-black text-white leading-tight"
                />
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                  Global Footprint
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Semicircle Arch Background with Parallax and Ken Burns Breathing */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center relative w-full max-w-full">
            <div className="relative w-full max-w-full sm:max-w-[540px] lg:max-w-[600px] xl:max-w-[660px] h-[440px] sm:h-[540px] lg:h-[600px] xl:h-[640px] flex items-end justify-start select-none">

              {/* 1. Square Curved Edged Showcase with Continuous Video Playlist and Parallax */}
              <motion.div
                style={{ y: yParallaxArch }}
                className="absolute inset-0 sm:inset-y-0 sm:left-auto sm:right-0 w-full sm:w-[85%] lg:w-[82%] rounded-3xl overflow-hidden border border-cyan-400/40 bg-gradient-to-b from-[#3b93e8] via-[#1c64b5] to-[#09294d] shadow-[0_0_90px_rgba(45,139,230,0.35)]"
              >
                {/* Continuous Sequential Service Videos */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnded}
                    src={heroServiceVideos[0].src}
                    poster="/images/about/luxury_boardroom_skyline.jpg"
                    className="h-full w-full object-cover object-center scale-105 transition-opacity duration-700"
                    aria-label={`BizLink Hero Background - ${heroServiceVideos[currentVideoIdx].title}`}
                  >
                    <source src={heroServiceVideos[0].src} type="video/mp4" />
                  </video>

                  {/* Fallback & semantic image for accessibility & search indexing */}
                  <Image
                    src="/images/about/luxury_boardroom_skyline.jpg"
                    alt="BizLink Architectural Penthouse Arch"
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="sr-only"
                  />

                  {/* Gradient overlays for contrast with typography and card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/40 via-transparent to-[#070B14]/85 pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070B14]/80 to-transparent pointer-events-none" />
                </div>

                {/* Subtle interior ambient glow and square curved border frame lines */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/25 to-transparent pointer-events-none" />
                <div className="absolute inset-3 sm:inset-5 rounded-2xl border border-white/15 pointer-events-none" />

                {/* Top Service Indicator & Dynamic Title */}
                <div className="absolute top-4 sm:top-6 inset-x-0 flex flex-col items-center text-center px-4 z-10">
                  {/* 4-Pill Continuous Progress / Service Indicators */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    {heroServiceVideos.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrentVideoIdx(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                          idx === currentVideoIdx
                            ? "w-8 bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                            : "w-2.5 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Play ${item.title}`}
                        title={item.title}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cyan-200 drop-shadow-md">
                    {heroServiceVideos[currentVideoIdx].tagline}
                  </span>
                  <span className="text-base sm:text-xl lg:text-2xl font-black text-white mt-0.5 drop-shadow-md uppercase tracking-tight">
                    {heroServiceVideos[currentVideoIdx].title}
                  </span>
                </div>
              </motion.div>

              {/* 2. Floating BizLink Logo Card at the Bottom Left Corner with opposing Parallax & Luminous Glassmorphism */}
              <div className="relative top-[25px] sm:top-0 -mb-[20px] sm:mb-4 ml-3 sm:ml-0 z-20 w-[40%] sm:w-[50%] lg:w-[50%] origin-bottom-left scale-90 sm:scale-100">
                <motion.div
                  style={{ y: yParallaxCard }}
                  className="w-full rounded-2xl sm:rounded-3xl border border-white/30 bg-gradient-to-br from-white/[0.14] via-[#0b1c36]/70 to-[#070B14]/85 backdrop-blur-2xl p-3 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.35),0_0_35px_rgba(0,210,255,0.25)] transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/70 group"
                >
                  {/* Center 3D BizLink Logo */}
                  <div className="relative w-full aspect-[641/460] my-2 sm:my-3 flex items-center justify-center">
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
                  <div className="pt-2 sm:pt-2.5 border-t border-white/10 sm:mb-10">
                    <div className="flex items-baseline justify-between">
                      <p className="text-[11px] sm:text-sm font-black text-white uppercase tracking-wider">
                        BIZLINK
                      </p>
                      <span className="text-[8px] sm:text-[9px] font-bold text-cyan-300">
                        Pathas Group
                      </span>
                    </div>
                    <div className="mt-1 sm:mt-1.5 flex items-center gap-1 text-[7px] sm:text-[9px] font-bold text-slate-400">
                      <span className="text-cyan-300">QATAR</span>
                      <span>•</span>
                      <span>INDIA</span>
                      <span>•</span>
                      <span>UAE</span>
                      <span>•</span>
                      <span>CHINA</span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WireframeHero;
