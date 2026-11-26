"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const branches = [
  {
    id: "bin-mahmoud",
    label: "Bin Mahmoud Branch",
    shortLabel: "Bin Mahmoud",
    addressLines: [
      "Building # 28, Unit # 7, Zone # 22, Street # 342",
      "Al Jazeera Street, Main Road",
      "Bin Mahmoud, Doha, Qatar (P.O. Box # 13710)",
    ],
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=51.4940%2C25.2760%2C51.5160%2C25.2910&layer=mapnik&marker=25.2835%2C51.5050",
    mapsDirectUrl:
      "https://www.google.com/maps/search/?api=1&query=Al+Jazeera+Street+Bin+Mahmoud+Doha+Qatar",
  },
  {
    id: "ain-khalid",
    label: "Ain Khalid Head Office",
    shortLabel: "Ain Khalid HQ",
    addressLines: [
      "Office No. 164, First Floor, Building No. 43",
      "Zone 53, Street 100, Souq Naif",
      "Ain Khalid, Doha, Qatar",
    ],
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=51.4340%2C25.2060%2C51.4620%2C25.2240&layer=mapnik&marker=25.2150%2C51.4480",
    mapsDirectUrl:
      "https://www.google.com/maps/search/?api=1&query=Ain+Khalid+Doha+Qatar",
  },
] as const;

export function BranchesMap() {
  const [selectedBranchId, setSelectedBranchId] = useState<(typeof branches)[number]["id"]>("bin-mahmoud");
  const activeBranch = branches.find((b) => b.id === selectedBranchId) ?? branches[0];

  return (
    <div id="offices-map" className="scroll-mt-24 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
      {/* Left Info Column (adapts cleanly to Tablet 2-col and Mobile stack per Prototype) */}
      <div className="lg:col-span-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0077CC]">
          Visit Our Offices
        </p>
        <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0B2C5F]">
          Always Happy to Welcome You
        </h2>

        {/* Branch Tabs */}
        <div className="mt-5 inline-flex rounded-full border border-[#0B2C5F]/15 bg-[#F2F7FD] p-1">
          {branches.map((branch) => {
            const active = branch.id === activeBranch.id;
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => setSelectedBranchId(branch.id)}
                className={`min-h-[38px] rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  active
                    ? "bg-[#0056B3] text-white shadow-sm"
                    : "text-[#0B2C5F]/75 hover:text-[#0056B3]"
                }`}
              >
                {branch.shortLabel}
              </button>
            );
          })}
        </div>

        {/* Contact & Address Details Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#EAF2FA] text-[#0056B3]">
              <MapPin size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B2C5F]">
                {activeBranch.label}
              </p>
              <address className="mt-1 text-sm leading-relaxed text-[#475D7A] not-italic">
                {activeBranch.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#EAF2FA] text-[#0056B3]">
              <Clock size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B2C5F]">
                Working Hours
              </p>
              <p className="mt-1 text-sm text-[#475D7A]">Sun – Thu: 08:00 – 18:00</p>
              <p className="text-xs font-semibold text-[#0077CC]">24/7 Facility &amp; Pest Emergency</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#EAF2FA] text-[#0056B3]">
              <Phone size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B2C5F]">
                Telephone &amp; WhatsApp
              </p>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-[#0B2C5F]">
                <a href="tel:+97477661037" className="hover:text-[#0056B3]">
                  +974 7766 1037
                </a>
                <a href="tel:+97450091006" className="hover:text-[#0056B3]">
                  +974 5009 1006
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#EAF2FA] text-[#0056B3]">
              <Mail size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B2C5F]">
                Email
              </p>
              <a
                href="mailto:bizlink.qa@gmail.com"
                className="mt-1 block text-sm font-semibold text-[#0056B3] hover:underline"
              >
                bizlink.qa@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/97450091006"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0056B3] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#0056B3]/20 transition hover:bg-[#004088]"
          >
            <MessageCircle size={15} aria-hidden="true" />
            <span>WhatsApp Chat</span>
          </a>
          <a
            href={activeBranch.mapsDirectUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[#0B2C5F]/20 bg-white px-5 py-2.5 text-xs font-bold text-[#0B2C5F] transition hover:border-[#0056B3] hover:text-[#0056B3]"
          >
            <span>Open in Google Maps</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Right Interactive Map Frame (matches Prototype 'Карта' block) */}
      <div className="lg:col-span-7">
        <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full overflow-hidden rounded-3xl border border-[#0B2C5F]/15 bg-[#EAF2FA] shadow-xl shadow-[#0B2C5F]/10">
          <iframe
            key={activeBranch.id}
            title={`BizLink ${activeBranch.label} Location Map`}
            src={activeBranch.mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

