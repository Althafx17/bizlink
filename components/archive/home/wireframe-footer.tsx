"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/content/company";

export function WireframeFooter() {
  return (
    <footer
      aria-label="BizLink Footer"
      className="bg-[#070B14] text-white pt-12 pb-16 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Rounded High-Contrast Card matching the bottom of mockup */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F1E38] via-[#0C172B] to-[#080F1E] p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

            {/* Left: Brand Identity & Subtext */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
                <Image
                  src="/images/bizlink-logo-transparent-1.png"
                  alt="BizLink Logo"
                  width={90}
                  height={90}
                  className="size-9 object-contain"
                />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  BizLink<span className="text-cyan-400">.</span>
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Trading & Contracting Services WLL
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  CR No. 222380 · P.O. Box 201476 · Doha, Qatar
                </p>
              </div>
            </div>

            {/* Center: Social & Direct Contact Icons matching wireframe */}
            <div className="flex items-center gap-3">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366]/20 border border-white/20 text-white transition-all hover:scale-105"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
              </a>

              <a
                href="tel:+97450091006"
                aria-label="Call BizLink"
                className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-cyan-500/20 border border-white/20 text-white transition-all hover:scale-105"
              >
                <Phone size={18} className="text-cyan-400" />
              </a>

              <a
                href="mailto:bizlink.qa@gmail.com"
                aria-label="Email BizLink"
                className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-amber-500/20 border border-white/20 text-white transition-all hover:scale-105"
              >
                <Mail size={18} className="text-amber-400" />
              </a>
            </div>

            {/* Right: Phone & Location note */}
            <div className="flex flex-col md:items-end text-xs text-slate-300">
              <span className="font-bold text-white text-sm">+974 5009 1006</span>
              <span>Saturday – Thursday: 8:00 AM – 7:00 PM</span>
              <span className="text-[11px] text-cyan-300 mt-0.5">Ain Khalid & Bin Mahmoud</span>
            </div>

          </div>

          {/* Bottom Copyright & Navigation Links */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>
              © {new Date().getFullYear()} BizLink Qatar. Pathas Group of Companies. All rights reserved.
            </p>

            <div className="flex items-center gap-4 font-semibold">
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Offices
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
