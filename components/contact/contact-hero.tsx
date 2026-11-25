"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative pt-6 sm:pt-8 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Curved Framed Banner Container matching reference design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.8rem] border border-cyan-400/25 bg-[#071426] p-8 sm:p-12 lg:p-16 flex items-center shadow-[0_20px_60px_rgba(0,18,46,0.6)]"
        >
          {/* Blue Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/contact/contact-hero-bg.webp"
              alt="BizLink Qatar Contact Banner"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-center scale-105"
            />
            {/* Luminous deep blue and dark glass overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/92 via-[#071426]/80 to-[#071426]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
          </div>

          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-20 -left-20 size-72 rounded-full bg-cyan-500/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-1/4 size-72 rounded-full bg-[#0056B3]/30 blur-3xl pointer-events-none" />

          {/* Decorative Outline Text on the Right (matching reference) */}
          <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block">
            <span
              className="text-7xl lg:text-9xl font-black uppercase tracking-tight text-transparent opacity-25"
              style={{
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.4)",
              }}
            >
              Contacts
            </span>
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-xl">
            {/* Small emblem / pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulse" />
              <span>Direct Connectivity · Doha</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white drop-shadow-lg">
              Contacts
            </h1>

            <p className="mt-2 text-xs sm:text-sm lg:text-base text-cyan-100/90 font-medium leading-relaxed drop-shadow-md">
              Reach our corporate headquarters, typing centre, and executive multi-sector advisory team in Qatar.
            </p>
          </div>

          {/* Bottom Right Floating Breadcrumb (matching reference) */}
          <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white shadow-lg hover:bg-white/15 transition-all">
              <Link href="/" className="hover:text-cyan-300 transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-white/60" />
              <span className="text-cyan-300">Contacts</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
