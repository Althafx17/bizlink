"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";

interface PriceRow {
  service: string;
  scope: string;
  indicativePrice: string;
}

const priceCatalog: PriceRow[] = [
  {
    service: "Company Formation & 100% Foreign Ownership",
    scope: "CR, Trade License, Computer Card, MOCI Approvals",
    indicativePrice: "From QAR 3,500",
  },
  {
    service: "Commercial Registration (CR) & Municipal License Renewal",
    scope: "Annual Baladiya Inspection & Ministry Signoff",
    indicativePrice: "From QAR 1,800",
  },
  {
    service: "Corporate PRO Support & Labour Clearance",
    scope: "Work Visas, QID Processing, Labour Quota",
    indicativePrice: "From QAR 1,200/mo",
  },
  {
    service: "24/7 Facility Maintenance & Pest Control AMC",
    scope: "Monthly Preventive Visits, On-Call Emergency",
    indicativePrice: "From QAR 2,400/yr",
  },
  {
    service: "Prime Glass Windshield Replacement & Repair",
    scope: "OEM Specification, Mobile On-Site Installation",
    indicativePrice: "From QAR 450",
  },
  {
    service: "Mobile Commercial Fleet Steam & Foam Wash",
    scope: "Doorstep Scheduled Washing for Vans & Sedans",
    indicativePrice: "From QAR 50/vehicle",
  },
  {
    service: "Corporate Brand Identity & Digital Production",
    scope: "Logo, Brochure, Social Collateral & Web Assets",
    indicativePrice: "From QAR 2,900",
  },
];

export function WireframePricing() {
  return (
    <section
      id="pricing"
      aria-label="Service Pricing and Scope"
      className="py-16 sm:py-24 bg-[#090D18] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP: Split Layout (List Left, Image Right) | MOBILE: Image Top, List Bottom (Exact mockup layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Order 2 on Mobile, Col 7 on Desktop: Itemized Price List */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
              TRANSPARENT SCHEDULE
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              Price & Scope
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Indicative commercial rates across our 5 operational divisions in Doha. Every package includes dedicated liaison and formal documentation.
            </p>

            {/* Itemized Table with Dotted Leaders (Exact style from "ПРАЙС" wireframe) */}
            <div className="mt-8 space-y-4">
              {priceCatalog.map((row) => (
                <div
                  key={row.service}
                  className="group rounded-xl border border-white/5 bg-[#0F182A]/60 p-3.5 hover:bg-[#0F182A] hover:border-cyan-400/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {row.service}
                    </span>

                    {/* Dotted leader on tablet/desktop */}
                    <span className="hidden sm:inline-block flex-1 border-b border-dotted border-white/20 mx-2" />

                    <span className="text-xs sm:text-sm font-black text-amber-400 shrink-0">
                      {row.indicativePrice}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {row.scope}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action Button matching "ЗАПИСАТЬСЯ" button in mockup */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 hover:from-[#004088] hover:to-[#0077D7] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>REQUEST DETAILED QUOTATION</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Order 1 on Mobile, Col 5 on Desktop: Large Portrait Showcase Image Card */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-[#0F1E38] shadow-2xl">
              <Image
                src="/images/about/engineering-facility.webp"
                alt="BizLink Operational Engineering Doha"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />

              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl border border-white/15 bg-[#070B14]/90 backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  OFFICIAL COMMERCIAL BROCHURE
                </span>
                <p className="mt-1 text-sm font-bold text-white">
                  Corporate, Industrial & Fleet Specifications
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Fast On-Site Processing</span>
                  <span className="text-amber-400 font-bold">Doha, Qatar</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
