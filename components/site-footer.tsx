import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, branches } from "@/content/company";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#071E42] text-white overflow-hidden border-t border-[#0056B3]/30">
      {/* Decorative Top Accent Gradient */}
      <div
        aria-hidden="true"
        className="h-1.5 w-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#0056B3]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="BizLink Qatar Home"
              className="inline-flex items-center gap-3 group"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white p-2 shadow-md">
                <Image
                  src="/images/bizlink-logo-transparent-1.png"
                  alt="BizLink Logo"
                  width={90}
                  height={90}
                  className="size-8 object-contain"
                />
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  BizLink<span className="text-[#0088CE]">.</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300">
                  Trading & Contracting Services WLL
                </span>
              </div>
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-sky-100/80 leading-relaxed max-w-sm">
              Integrated solutions under Pathas Group of Companies (Qatar, India, UAE, China). Serving Doha enterprises with corporate, trading, facility, automotive, and creative solutions.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-sky-200">
              <span className="rounded-full bg-white/10 px-3 py-1">
                {company.registration}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                {company.postBox}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                Founded {company.since}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0088CE]">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-sky-100/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sky-100/80 hover:text-white transition-colors"
                >
                  About BizLink & Group
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sky-100/80 hover:text-white transition-colors"
                >
                  Our 5 Core Divisions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sky-100/80 hover:text-white transition-colors"
                >
                  Branches & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Addresses */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0088CE]">
              Doha Headquarters & Contact
            </h3>
            <ul className="mt-4 space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#0088CE] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+97450091006"
                  className="text-sky-100/90 hover:text-white font-bold"
                >
                  +974 5009 1006
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="tel:+97477661037"
                  className="text-sky-100/90 hover:text-white font-bold"
                >
                  +974 7766 1037
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#0088CE] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sky-100/90 hover:text-white font-medium"
                >
                  {company.email}
                </a>
              </li>

              <li className="flex items-start gap-2 pt-1">
                <MapPin size={15} className="text-[#0088CE] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-sky-100/80 leading-relaxed">
                  <p className="font-bold text-white">Ain Khalid Head Office:</p>
                  <p>Office 164, Souq Naif, Ain Khalid, Doha</p>
                  <p className="font-bold text-white mt-1">Bin Mahmoud Branch:</p>
                  <p>Shop 07, Building 28, Al Jazeera St, Doha</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Category Band from Flyer */}
        <div className="mt-10 rounded-2xl bg-white/5 py-3 px-4 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-sky-200 border border-white/10">
          BUSINESS & CORPORATE · DIGITAL & CREATIVE · TRADING & SUPPLY · FACILITY MANAGEMENT · AUTOMOTIVE CARE
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-sky-200/70">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
