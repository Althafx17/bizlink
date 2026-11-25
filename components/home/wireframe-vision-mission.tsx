"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Compass, Handshake, Lightbulb, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import { principles, sisterConcerns } from "@/content/company";

export function WireframeVisionMission() {
  return (
    <section
      id="vision-mission"
      aria-label="Our Vision and Mission"
      className="py-16 sm:py-24 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
            STRATEGIC PILLARS
          </span> */}
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Our Vision & Mission
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Forward-thinking guidance and execution standards driving every client engagement across Qatar.
          </p>
        </motion.div>

        {/* 2-Column Grid for Vision & Mission with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F1E38] via-[#0C172B] to-[#080F1E] p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-cyan-400/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* 3D Character with Vision (Stabilized, No Looping/Hover Movement) */}
              <div className="shrink-0 flex items-center justify-center">
                <div className="relative size-28 sm:size-32 rounded-2xl bg-white border border-cyan-400/30 p-2 flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/images/vision and mission.jpg"
                    alt="Our Vision"
                    width={130}
                    height={130}
                    className="size-full object-contain drop-shadow-md"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center sm:text-left flex-1">
                <span className="inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cyan-400">
                  Guiding Direction
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  Our Vision
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {principles[1].body}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span className="text-cyan-300">Sustainable Growth</span>
              <span>Excellence Across Qatar</span>
            </div>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F1E38] via-[#0C172B] to-[#080F1E] p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* 3D Bullseye Target (Stabilized, No Looping/Hover Movement) */}
              <div className="shrink-0 flex items-center justify-center">
                <div className="relative size-28 sm:size-32 rounded-2xl bg-white border border-amber-400/30 p-2 flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/images/mission.png"
                    alt="Our Mission 3D Bullseye Target"
                    width={130}
                    height={130}
                    className="size-full object-contain drop-shadow-md"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center sm:text-left flex-1">
                <span className="inline-block rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                  Execution Focus
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  Our Mission
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {principles[2].body}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span className="text-amber-300">Operational Efficiency</span>
              <span>Trusted Commercial Partner</span>
            </div>
          </motion.div>

        </div>

        {/* 5 Core Values Rounded Pill Bar with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-[#0F182A] p-4 sm:p-6 shadow-xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-around text-center">
            {/* Integrity */}
            <div className="flex flex-col items-center p-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                <ShieldCheck size={20} />
              </span>
              <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">Integrity</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Transparency</span>
            </div>

            {/* Quality */}
            <div className="flex flex-col items-center p-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                <Award size={20} />
              </span>
              <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">Quality</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Standard Excellence</span>
            </div>

            {/* Reliability */}
            <div className="flex flex-col items-center p-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                <Handshake size={20} />
              </span>
              <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">Reliability</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Punctual & Accountable</span>
            </div>

            {/* Innovation */}
            <div className="flex flex-col items-center p-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                <Lightbulb size={20} />
              </span>
              <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">Innovation</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Modern Systems</span>
            </div>

            {/* Customer Focus */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center p-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                <Users size={20} />
              </span>
              <span className="mt-2 text-xs sm:text-sm font-extrabold text-white">Customer Focus</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Client-Centric</span>
            </div>
          </div>
        </motion.div>

        {/* Our Sister Concern Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="space-y-6 pt-6"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-300">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Pathas Group Ecosystem</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                Our Sister Concern Companies
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md sm:text-right">
              Synergistic multi-sector excellence across luxury fashion, VIP mobility, and international trade in Qatar.
            </p>
          </div>

          {/* 3 Sister Concern Company Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sisterConcerns.map((sister, idx) => (
              <motion.article
                key={sister.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F182A] p-6 shadow-xl transition-all duration-300 hover:border-cyan-400/50 flex flex-col justify-between min-h-[380px]"
              >
                {/* Background Image with Dark Gradient Overlays */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src={sister.image}
                    alt={sister.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#0F182A]/90 to-[#0F182A]/60" />
                  <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
                </div>

                {/* Card Content Top: Sector Badge & Since Badge */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-400/15 border border-cyan-400/25 px-2.5 py-1 rounded-full">
                      {sister.category}
                    </span>
                    {sister.since && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
                        {sister.since}
                      </span>
                    )}
                  </div>

                  {/* High-Contrast White Glass Logo Container */}
                  <div className="my-5 relative w-full h-24 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 p-3 shadow-md flex items-center justify-center overflow-hidden group-hover:shadow-cyan-500/20 transition-shadow">
                    <div className="relative w-full h-full max-h-16">
                      <Image
                        src={sister.logo}
                        alt={sister.name}
                        fill
                        sizes="260px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Company Titles */}
                  <div>
                    {sister.arabicName && (
                      <p className="text-right text-xs font-bold text-amber-400/90 font-arabic mb-1">
                        {sister.arabicName}
                      </p>
                    )}
                    <h4 className="text-base sm:text-lg font-black uppercase text-white group-hover:text-cyan-300 transition-colors">
                      {sister.name}
                    </h4>
                    <p className="text-xs font-bold text-cyan-300 tracking-wider uppercase mt-1">
                      {sister.tagline}
                    </p>
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                      {sister.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Location Pill with MapPin Icon */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2 rounded-xl bg-white/[0.05] border border-white/10 p-2.5 text-[11px] font-medium text-slate-300">
                    <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{sister.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
