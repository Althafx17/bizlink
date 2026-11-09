import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { services } from "@/content/services";
import { ServicesShowcase } from "@/components/services-showcase";

export const metadata: Metadata = {
  title: "Services | BizLink Qatar",
  description:
    "Explore BizLink Qatar’s integrated business solutions: Business & Corporate, Trading & Supply, Facility Management, Automotive, and Digital & Creative.",
};

const categoryMedia: Record<
  (typeof services)[number]["id"],
  {
    bgImage: string;
    tag: string;
    tagline: string;
    badgeColor: string;
  }
> = {
  "business-corporate": {
    bgImage: "/images/services/business-corporate-bg.webp",
    tag: "Corporate & Legal",
    tagline: "Comprehensive company setup, government compliance & executive advisory in Qatar.",
    badgeColor: "bg-[#D35400] text-white",
  },
  "trading-supply": {
    bgImage: "/images/services/trading-supply-bg.webp",
    tag: "Wholesale & Procurement",
    tagline: "Industrial materials, certified PPE, perfumes, and international cargo distribution.",
    badgeColor: "bg-[#FFA048] text-[#0F1B3D]",
  },
  "facility-maintenance": {
    bgImage: "/images/services/facility-maintenance-bg.webp",
    tag: "Property & AMC",
    tagline: "End-to-end commercial property upkeep, MEP engineering & specialized cleaning.",
    badgeColor: "bg-[#D35400] text-white",
  },
  automotive: {
    bgImage: "/images/services/automotive-bg.webp",
    tag: "Mobile & Workshop",
    tagline: "Doorstep auto detailing, certified auto glass repair & fleet maintenance services.",
    badgeColor: "bg-[#FFA048] text-[#0F1B3D]",
  },
  "digital-creative": {
    bgImage: "/images/services/digital-creative-bg.webp",
    tag: "Tech & Media",
    tagline: "Bespoke digital platforms, high-converting marketing & bilingual branding identity.",
    badgeColor: "bg-[#D35400] text-white",
  },
};

const categoryDetails = {
  "business-corporate": {
    items: [
      "Business Consulting & Company Formation",
      "CR, Licensing & Government Services",
      "Qatari Sponsor Arrangements",
      "Typing, PRO & Documentation Services",
      "Translation & Attestation",
      "Bank Account & WPS Assistance",
      "Auditing & Bookkeeping",
      "E-Commerce & Online Business Setup",
    ],
  },
  "trading-supply": {
    items: [
      "General, Retail & Wholesale Trading",
      "Department Store & Lifestyle Products",
      "Vehicle Spare Parts",
      "Bulk Procurement & Cargo Services",
      "Own-Brand Perfumes & Fragrances",
      "Custom Fragrance Blending",
      "Made in Qatar Perfumes (6ml–50ml)",
      "Retail, Wholesale & Hypermarket Supply",
    ],
  },
  "facility-maintenance": {
    items: [
      "Facility & Hospitality Management",
      "Cleaning & Pest Control",
      "Gypsum Board & Glass Partition Works",
      "Electrical & Plumbing Works",
      "Floor Tiling & Polishing",
      "General Property Maintenance",
      "Annual Maintenance Contracts (AMC)",
    ],
  },
  automotive: {
    items: [
      "Mobile Car Wash & Detailing",
      "Car Interior Cleaning",
      "Mobile Auto Glass Services",
      "Windshield Inspection, Repair & Replacement",
      "Vehicle Glass Replacement",
      "On-Site Auto Glass Services",
    ],
  },
  "digital-creative": {
    items: [
      "Digital Marketing & SEO",
      "Website & E-Commerce Development",
      "Social Media Management",
      "Content Creation & AI Video",
      "Branding & Graphic Design",
      "Weekly & Monthly Digital Packages",
    ],
  },
} satisfies Record<(typeof services)[number]["id"], {
  items: readonly string[];
}>;

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-[#0F1B3D] text-white">
      {/* 1. Interactive Cinematic Showcase (Matching Reference Video) */}
      <ServicesShowcase isStandalonePage />

      {/* 2. Comprehensive Detailed Directory for All 5 Divisions */}
      <section
        id="all-services"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 lg:px-14 border-t border-white/15 bg-gradient-to-b from-[#0F1B3D] via-[#0C152F] to-[#0A1128]"
        aria-labelledby="services-breakdown-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="size-2 rounded-full bg-[#D35400]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA048]">
                  Full Service Directory
                </span>
              </div>
              <h2
                id="services-breakdown-heading"
                className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
              >
                Comprehensive Solutions Portfolio
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/75 leading-relaxed">
                Discover our specialized divisions delivering certified expertise across Qatar. Direct consultation and customized proposals available for every engagement.
              </p>
            </div>

            {/* Quick Filter Navigation */}
            <nav aria-label="Service quick jump" className="shrink-0">
              <ul className="flex flex-wrap gap-2">
                {services.map(({ id, title }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="inline-block rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-white/15 hover:border-[#D35400] hover:text-[#FFA048]"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Service Cards Grid with Matching Background Imagery */}
          <div className="mt-12 space-y-10 sm:space-y-14">
            {services.map(({ id, title, description }, index) => {
              const { items } = categoryDetails[id];
              const media = categoryMedia[id];

              return (
                <section
                  key={id}
                  id={id}
                  aria-labelledby={`${id}-title`}
                  className="scroll-mt-28 relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#131F42]"
                >
                  {/* Matching Banner Visual at Top of Section */}
                  <div className="relative h-44 sm:h-56 lg:h-64 w-full overflow-hidden">
                    <Image
                      src={media.bgImage}
                      alt={title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover object-center brightness-[0.75] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131F42] via-[#131F42]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B3D]/90 via-[#0F1B3D]/50 to-transparent" />

                    {/* Header Details over Banner */}
                    <div className="absolute bottom-6 left-6 sm:left-10 right-6 flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-extrabold ${media.badgeColor}`}
                          >
                            DIVISION {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs font-bold tracking-widest text-white/80 uppercase">
                            {media.tag}
                          </span>
                        </div>
                        <h3
                          id={`${id}-title`}
                          className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white drop-shadow-md"
                        >
                          {title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl">
                          {media.tagline}
                        </p>
                      </div>

                      <div className="hidden sm:flex items-center gap-3">
                        <a
                          href={`https://wa.me/97450091006?text=${encodeURIComponent(
                            `Hello BizLink, I would like to inquire about your ${title} services.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-emerald-600/90 hover:bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-105"
                        >
                          <MessageCircle size={15} />
                          <span>WhatsApp Inquiry</span>
                        </a>
                        <Link
                          href="/contact"
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#D35400] hover:bg-[#B84300] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#D35400]/30 transition-all hover:scale-105"
                        >
                          <span>Request Proposal</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Service Items Grid (Elevated Cards with checkmarks) */}
                  <div className="p-6 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4">
                      Included Capabilities &amp; Service Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-xs sm:text-sm font-medium text-white/95 shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all hover:bg-white/[0.08] hover:border-white/25 hover:translate-y-[-2px]"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#FFA048] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mobile CTAs */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex sm:hidden flex-col gap-2.5">
                      <a
                        href={`https://wa.me/97450091006?text=${encodeURIComponent(
                          `Hello BizLink, I would like to inquire about your ${title} services.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md"
                      >
                        <MessageCircle size={15} />
                        <span>WhatsApp Inquiry</span>
                      </a>
                      <Link
                        href="/contact"
                        className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#D35400] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#D35400]/30"
                      >
                        <span>Request Official Quote</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Bottom Global CTA Banner */}
          <div className="mt-16 rounded-3xl border border-white/20 bg-gradient-to-r from-[#D35400]/20 via-white/5 to-[#0F1B3D] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFA048]">
                Tailored Engagements
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
                Need a Custom Solution in Qatar?
              </h3>
              <p className="text-sm text-white/75 mt-2 max-w-xl">
                Our consultants and specialists are ready to tailor an integrated operational or corporate service package suited to your commercial goals.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/97450091006"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#D35400] hover:bg-[#B84300] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#D35400]/30 transition-all hover:scale-105"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
