"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Compass, Handshake, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { principles } from "@/content/company";

export function WireframeVisionMission() {
  return (
    <section
      id="vision-mission"
      aria-label="Our Vision and Mission"
      className="py-16 sm:py-24 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
            STRATEGIC PILLARS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Our Vision & Mission
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Forward-thinking guidance and execution standards driving every client engagement across Qatar.
          </p>
        </div>

        {/* 2-Column Grid for Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Our Vision */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F1E38] via-[#0C172B] to-[#080F1E] p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-cyan-400/40 transition-all">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* 3D Character with Binoculars */}
              <div className="shrink-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-28 sm:size-32 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 p-2 flex items-center justify-center shadow-lg"
                >
                  <Image
                    src="/images/brochure_about/vision_binoculars.webp"
                    alt="Our Vision 3D Binoculars"
                    width={130}
                    height={130}
                    className="size-24 sm:size-28 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
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
          </div>

          {/* Card 2: Our Mission */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F1E38] via-[#0C172B] to-[#080F1E] p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400/40 transition-all">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* 3D Bullseye Target */}
              <div className="shrink-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [0.96, 1.04, 0.96], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-28 sm:size-32 rounded-2xl bg-amber-400/10 border border-amber-400/20 p-2 flex items-center justify-center shadow-lg"
                >
                  <Image
                    src="/images/brochure_about/mission_target.webp"
                    alt="Our Mission 3D Bullseye Target"
                    width={130}
                    height={130}
                    className="size-24 sm:size-28 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
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
          </div>

        </div>

        {/* 5 Core Values Rounded Pill Bar */}
        <div className="rounded-3xl border border-white/10 bg-[#0F182A] p-4 sm:p-6 shadow-xl">
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
        </div>

      </div>
    </section>
  );
}
