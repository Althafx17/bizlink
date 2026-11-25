"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation, Star } from "lucide-react";
import { branches } from "@/content/company";

export function ContactMapSection() {
  const [activeBranchId, setActiveBranchId] = useState<string>("head-office");
  const currentBranch =
    branches.find((b) => b.id === activeBranchId) ?? branches[0];

  return (
    <section id="doha-map" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              PHYSICAL PRESENCE
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Interactive Doha Locations
            </h3>
          </div>

          {/* Branch Switcher Tabs */}
          <div className="inline-flex rounded-full border border-white/15 bg-[#0F254B] p-1.5 shadow-md">
            {branches.map((b) => {
              const isActive = b.id === activeBranchId;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setActiveBranchId(b.id)}
                  className={`min-h-[38px] rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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

        {/* Map Container matching reference design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] sm:h-[480px] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-[#0B1B36]"
        >
          {/* Responsive Map Embed */}
          <iframe
            key={currentBranch.id}
            title={`${currentBranch.title} Location Map`}
            src={currentBranch.mapEmbedUrl}
            className="h-full w-full border-0 grayscale-[25%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Location Card Overlay (matching reference layout) */}
          <div className="absolute top-5 left-5 z-20 max-w-sm rounded-2xl border border-white/20 bg-[#070B14]/92 backdrop-blur-xl p-4 sm:p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-block rounded-md bg-cyan-400/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-cyan-300">
                  {currentBranch.role}
                </span>
                <h4 className="mt-1.5 text-base font-black text-white uppercase">
                  BizLink Qatar — {currentBranch.title}
                </h4>
              </div>
              <a
                href={currentBranch.mapsDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                title="Get Directions"
              >
                <Navigation size={18} />
              </a>
            </div>

            <address className="mt-3 text-xs leading-relaxed text-slate-300 not-italic">
              {currentBranch.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span>15+ Years Commercial Experience</span>
              </div>
              <a
                href={currentBranch.mapsDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline"
              >
                <span>Directions</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
