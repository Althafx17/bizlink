"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { branches } from "@/content/company";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

export function WireframeContacts() {
  const [activeBranchId, setActiveBranchId] = useState<string>("bin-mahmoud");
  const activeBranch = branches.find((b) => b.id === activeBranchId) ?? branches[0];

  return (
    <section
      id="contact"
      aria-label="Location and Contacts"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#090D18] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
            DOHA OFFICES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Contacts & Location
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Directly accessible at two strategic corporate hubs in Doha. Walk in or connect with our support advisors.
          </p>
        </motion.div>

        {/* Branch Switcher Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex rounded-full border border-white/15 bg-[#0F182A] p-1.5 shadow-md">
            {branches.map((b) => {
              const isActive = b.id === activeBranch.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setActiveBranchId(b.id)}
                  className={`min-h-[40px] rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
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
        </motion.div>

        {/* Map Container with Floating Contact Card & Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0F182A] shadow-2xl min-h-[460px] flex flex-col lg:block"
        >
          
          {/* Interactive Google Map Embed (Full Background on Desktop, Bottom on Mobile) */}
          <div className="order-2 lg:order-none lg:absolute lg:inset-0 w-full h-[320px] lg:h-full z-0">
            <iframe
              title={`Map of ${activeBranch.title}`}
              src={activeBranch.mapEmbedUrl}
              className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.1]"
              loading="lazy"
            />
          </div>

          {/* Floating Business Contact Card Overlay (Left on Desktop, Top on Mobile) */}
          <div className="order-1 lg:order-none relative z-10 lg:my-8 lg:ml-8 lg:max-w-md p-6 sm:p-7 rounded-2xl border border-white/20 bg-[#070B14]/95 backdrop-blur-xl shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
              {activeBranch.role}
            </span>

            <h3 className="mt-3 text-xl font-black text-white">
              {activeBranch.title}
            </h3>

            {/* Address */}
            <div className="mt-4 flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 mt-0.5">
                <MapPin size={16} />
              </span>
              <div className="text-xs text-slate-300 leading-relaxed">
                {activeBranch.lines.map((line) => (
                  <span key={line} className="block font-medium">
                    {line}
                  </span>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-3 flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 mt-0.5">
                <Clock size={16} />
              </span>
              <div className="text-xs text-slate-300">
                <p className="font-bold text-white">Saturday – Thursday: 8:00 AM – 7:00 PM</p>
                <p className="text-[11px] text-slate-400">Friday: Emergency On-Call Support</p>
              </div>
            </div>

            {/* Phone & Direct Contacts */}
            <div className="mt-3 flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 mt-0.5">
                <Phone size={16} />
              </span>
              <div className="text-xs text-slate-300">
                <p className="font-bold text-white">+974 5009 1006 / +974 7766 1037</p>
                <p className="text-[11px] text-slate-400">bizlink.qa@gmail.com</p>
              </div>
            </div>

            {/* Direct Action Buttons inside Card */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  activeBranch.mapsQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-4 py-2 text-xs font-bold text-white shadow-md hover:from-[#004088] hover:to-[#0077D7] transition-all"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/97450091006?text=Hello%20BizLink%2C%20I%20would%20like%20to%20visit%20your%20Doha%20office."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
