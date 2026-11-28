import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Globe2,
  Handshake,
  Layers,
  MapPin,
  MessageSquare,
  Monitor,
  Package,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { services, type ServiceDivision } from "@/content/services";
import { company, branches, sisterConcerns } from "@/content/company";
import {
  divisionDetailProfiles,
  verifiedIndustries,
  workflowSteps,
} from "@/content/services-directory";

const divisionColorThemes = [
  {
    accentText: "text-sky-300",
    badgeBg: "bg-sky-500/10 border-sky-400/30 text-sky-300",
    iconBox: "bg-sky-500/15 border-sky-400/30 text-sky-300",
    cardBorder: "border-white/10 hover:border-sky-400/45",
  },
  {
    accentText: "text-orange-300",
    badgeBg: "bg-orange-500/10 border-orange-400/30 text-orange-300",
    iconBox: "bg-orange-500/15 border-orange-400/30 text-orange-300",
    cardBorder: "border-white/10 hover:border-orange-400/45",
  },
  {
    accentText: "text-emerald-300",
    badgeBg: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
    iconBox: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
    cardBorder: "border-white/10 hover:border-emerald-400/45",
  },
  {
    accentText: "text-cyan-300",
    badgeBg: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
    iconBox: "bg-cyan-500/15 border-cyan-400/30 text-cyan-300",
    cardBorder: "border-white/10 hover:border-cyan-400/45",
  },
  {
    accentText: "text-amber-300",
    badgeBg: "bg-amber-500/10 border-amber-400/30 text-amber-300",
    iconBox: "bg-amber-500/15 border-amber-400/30 text-amber-300",
    cardBorder: "border-white/10 hover:border-amber-400/45",
  },
] as const;

function renderDivisionIcon(iconName: ServiceDivision["iconName"], className = "size-5") {
  switch (iconName) {
    case "building":
      return <Building2 className={className} aria-hidden="true" />;
    case "monitor":
      return <Monitor className={className} aria-hidden="true" />;
    case "truck":
      return <Truck className={className} aria-hidden="true" />;
    case "wrench":
      return <Wrench className={className} aria-hidden="true" />;
    case "car":
      return <Car className={className} aria-hidden="true" />;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 1: HERO (Two-Column Architectural Composition — No Oversized Logo)
   ═══════════════════════════════════════════════════════════════════════════ */
export function ServicesHeroSection() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      style={{ paddingTop: "var(--site-navbar-height, 96px)" }}
      className="relative overflow-hidden bg-[#070B14] border-b border-white/10"
    >
      {/* Subtle Blue & Cyan Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 size-[420px] rounded-full bg-[#0056B3]/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 size-[420px] rounded-full bg-cyan-500/12 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0B1B36]/80 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-300">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-400" />
              YOUR BUSINESS, CONNECTED
            </span>

            <h1
              id="services-hero-heading"
              className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.08]"
            >
              Complete Business Solutions.{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
                All Under One Roof.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              BizLink delivers integrated business solutions across corporate services, digital and creative solutions, trading and supply, facility management, and automotive care. Serving businesses in Qatar since 2010.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#service-directory"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <a
                href="#service-enquiry"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-sm font-bold text-white hover:bg-white/10 hover:border-cyan-400/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Contact Our Team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Architectural Composition Representing the 5 Divisions */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1B36]/80 via-[#081224]/95 to-[#070B14] p-5 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    BizLink Qatar · {company.registration}
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Five Integrated Business Divisions
                  </p>
                </div>
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                  Since {company.since}
                </span>
              </div>

              <div className="space-y-2.5">
                {services.map((division, idx) => {
                  const theme = divisionColorThemes[idx % divisionColorThemes.length];
                  return (
                    <a
                      key={division.id}
                      href={`#division-${division.id}`}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0F1B30]/75 px-4 py-3 hover:border-cyan-400/45 hover:bg-[#132440] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-h-[56px]"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`flex size-9 shrink-0 items-center justify-center rounded-xl border ${theme.iconBox}`}
                        >
                          {renderDivisionIcon(division.iconName, "size-4")}
                        </span>
                        <div className="min-w-0">
                          <span className={`block text-[10px] font-mono font-bold ${theme.accentText}`}>
                            DIVISION {division.number}
                          </span>
                          <span className="block text-sm font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                            {division.title}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="shrink-0 text-white/35 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 2: FIVE CORE BUSINESS DIVISIONS
   ═══════════════════════════════════════════════════════════════════════════ */
export function DivisionsOverviewSection() {
  return (
    <section
      aria-labelledby="divisions-overview-heading"
      className="py-16 sm:py-20 bg-[#070E1A] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Five Core Divisions
          </p>
          <h2
            id="divisions-overview-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Specialized Divisions Built for Clarity
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            Each BizLink division operates with dedicated specialists, statutory standards, and direct service delivery in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((division, idx) => {
            const theme = divisionColorThemes[idx % divisionColorThemes.length];
            const exampleServices = division.items.slice(0, 3);
            return (
              <article
                key={division.id}
                className={`flex flex-col justify-between rounded-2xl border bg-[#0B1528]/90 p-6 transition-colors ${theme.cardBorder}`}
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`flex size-12 items-center justify-center rounded-xl border ${theme.iconBox}`}
                    >
                      {renderDivisionIcon(division.iconName, "size-6")}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-mono font-bold ${theme.badgeBg}`}
                    >
                      {division.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white leading-snug">
                    {division.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {division.tagline}
                  </p>

                  {/* 3 Verified Example Services */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Capabilities
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {exampleServices.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            size={15}
                            aria-hidden="true"
                            className={`shrink-0 mt-0.5 ${theme.accentText}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${division.id}`}
                    className={`inline-flex min-h-[44px] items-center gap-2 text-sm font-bold ${theme.accentText} hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-1`}
                  >
                    <span>Explore Division</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <a
                    href={`#division-${division.id}`}
                    className="inline-flex min-h-[44px] items-center text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-2"
                  >
                    Quick Details ↓
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 4: DETAILED DIVISION INFORMATION (Alternating Image & Content Layouts)
   ═══════════════════════════════════════════════════════════════════════════ */
export function DetailedDivisionsSection() {
  return (
    <section
      aria-labelledby="detailed-divisions-heading"
      className="py-16 sm:py-24 bg-[#070E1A] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Division Deep Dive
          </p>
          <h2
            id="detailed-divisions-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Detailed Division Capabilities
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            Review how each division operates, who it serves, and the full list of verified capabilities included.
          </p>
        </div>

        {/* Anchor Jump Bar */}
        <nav
          aria-label="Division anchors"
          className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-white/10"
        >
          {services.map((division, idx) => {
            const theme = divisionColorThemes[idx % divisionColorThemes.length];
            return (
              <a
                key={division.id}
                href={`#division-${division.id}`}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 bg-[#0B1528] px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-400/50 hover:text-white transition-colors`}
              >
                <span className={`font-mono font-bold ${theme.accentText}`}>
                  {division.number}
                </span>
                <span>{division.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Five Alternating Division Panels */}
        <div className="space-y-20">
          {services.map((division, idx) => {
            const profile = divisionDetailProfiles[division.id];
            const theme = divisionColorThemes[idx % divisionColorThemes.length];
            const imageOnLeft = idx % 2 === 1;

            return (
              <article
                key={division.id}
                id={`division-${division.id}`}
                className="scroll-mt-28 rounded-3xl border border-white/10 bg-[#0B1528]/70 p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Professional Image Block */}
                  <div
                    className={`lg:col-span-5 ${
                      imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#070B14]">
                      <Image
                        src={division.imageCard}
                        alt={division.title}
                        fill
                        sizes="(min-width: 1024px) 460px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/75 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md ${theme.badgeBg} bg-[#070B14]/80`}
                        >
                          {renderDivisionIcon(division.iconName, "size-3.5")}
                          <span>Division {division.number}</span>
                        </span>
                        <span className="rounded-full bg-[#070B14]/80 border border-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                          {division.subServices.length} Services
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      imageOnLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <span
                        className={`text-xs font-extrabold uppercase tracking-[0.2em] ${theme.accentText}`}
                      >
                        Division {division.number} · {division.tagline}
                      </span>
                      <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                        {division.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                        {division.brochureIntro}
                      </p>
                    </div>

                    {profile && (
                      <div className="rounded-2xl border border-white/10 bg-[#070B14]/60 p-4 sm:p-5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                          What This Division Does
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {profile.whatItDoes}
                        </p>
                      </div>
                    )}

                    {/* Individual Services Offered */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Services Offered
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {division.subServices.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/services/${division.id}#${sub.id}`}
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors min-h-[44px]"
                          >
                            <CheckCircle2
                              size={14}
                              aria-hidden="true"
                              className={`shrink-0 ${theme.accentText}`}
                            />
                            <span className="line-clamp-1">{sub.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Target Customers & Customer Benefits */}
                    {profile && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-white/10">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                            Target Customers
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {profile.targetCustomers.map((customer) => (
                              <li key={customer} className="flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400"
                                />
                                <span>{customer}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                            Customer Benefits
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {profile.customerBenefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400"
                                />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Division CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={`#service-enquiry`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] to-[#0088CE] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all"
                      >
                        <span>Enquire About This Division</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                      <Link
                        href={`/services/${division.id}`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:border-cyan-400/50 hover:text-white transition-colors"
                      >
                        <span>View Full Division Page</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 5: WHY CHOOSE BIZLINK? (Strictly Verified Facts)
   ═══════════════════════════════════════════════════════════════════════════ */
export function WhyChooseBizLinkSection() {
  const verifiedPillars = [
    {
      icon: Award,
      title: `Established in Qatar Since ${company.since}`,
      description:
        "Operating continuously in Doha since 2010 as BizLink Trading and Contracting Services W.L.L., registered under Qatar Commercial Registration CR No. 206520.",
    },
    {
      icon: Layers,
      title: "Five Specialized Business Divisions",
      description:
        "Structured coordination across Corporate Solutions, Digital & Creative, Trading & Supply, Facility Management, and Automotive Care under one leadership.",
    },
    {
      icon: Handshake,
      title: "Pathas Group Business Synergies",
      description:
        "Affiliated with sister entities Pathas Gallery, aapco Limousine W.L.L., and Pathas Imports & Services to support retail, mobility, and sourcing operations.",
    },
    {
      icon: Globe2,
      title: "International Trade & Sourcing Corridors",
      description:
        "Cross-border operational links spanning Qatar, India, UAE, and China supporting commercial procurement, freight forwarding, and customs clearance.",
    },
    {
      icon: Briefcase,
      title: "32 Integrated Service Capabilities",
      description:
        "Eliminate fragmented third-party coordination by engaging one commercial entity for licensing, staffing support, marketing, maintenance, and logistics.",
    },
    {
      icon: MapPin,
      title: "Two Dedicated Service Offices in Doha",
      description:
        "Accessible local teams at our Corporate Head Office in Souq Naif, Ain Khalid (Building #43) and our Typing & PRO Desk in Bin Mahmoud (Building #28).",
    },
  ];

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="py-16 sm:py-20 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Verified Credentials
          </p>
          <h2
            id="why-choose-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Why Choose BizLink?
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            Grounded in long-term Qatar registration, multi-country sourcing presence, and direct accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-[#0B1528]/80 p-6 hover:border-cyan-400/35 transition-colors"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/25 text-cyan-300">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 6: HOW WE WORK (5-Step Process — Horizontal Desktop, Vertical Mobile)
   ═══════════════════════════════════════════════════════════════════════════ */
export function HowWeWorkSection() {
  const stepIcons = [MessageSquare, ClipboardList, FileCheck2, Rocket, ShieldCheck];

  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="py-16 sm:py-20 bg-[#070E1A] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Engagement Workflow
          </p>
          <h2
            id="how-we-work-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            How We Work
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            Proposed general engagement workflow from initial business enquiry to ongoing delivery support.
          </p>
        </div>

        {/* Horizontal 5-Column Timeline on Desktop, Vertical Timeline on Mobile */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-white/15"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {workflowSteps.map((item, idx) => {
              const Icon = stepIcons[idx] ?? CheckCircle2;
              return (
                <li
                  key={item.step}
                  className="relative flex lg:flex-col items-start gap-4 lg:gap-0 rounded-2xl border border-white/10 bg-[#0B1528]/85 p-5"
                >
                  <div className="relative z-10 flex items-center gap-3 shrink-0">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#0E2242] border border-cyan-400/35 text-cyan-300 font-bold">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="lg:mt-4">
                    <span className="text-[11px] font-mono font-bold text-cyan-400">
                      STEP {item.step}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 7: INDUSTRIES WE SERVE
   ═══════════════════════════════════════════════════════════════════════════ */
export function IndustriesServedSection() {
  const industryIcons = [Building2, Store, Target, Package, Car, Sparkles];

  return (
    <section
      aria-labelledby="industries-heading"
      className="py-16 sm:py-20 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Client Segments
          </p>
          <h2
            id="industries-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Industries &amp; Customers We Serve
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            Sector coverage aligned directly with BizLink&apos;s verified corporate, trading, facility, digital, and automotive operations in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verifiedIndustries.map((industry, idx) => {
            const Icon = industryIcons[idx] ?? ShoppingBag;
            return (
              <div
                key={industry.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B1528]/80 p-6 hover:border-cyan-400/35 transition-colors"
              >
                <div>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-cyan-300">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white leading-snug">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10">
                  <Link
                    href={industry.divisionHref}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>See Related Division</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 8: PROJECTS, PARTNERS & TRUST (Verified Assets + Structured Slots)
   ═══════════════════════════════════════════════════════════════════════════ */
export function ProjectsPartnersTrustSection() {
  return (
    <section
      aria-labelledby="trust-partners-heading"
      className="py-16 sm:py-20 bg-[#070E1A] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Group Network &amp; Registrations
          </p>
          <h2
            id="trust-partners-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Projects, Partners &amp; Trust
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            Verified corporate registrations, Pathas Group sister entities, and structured capacity for project credentials.
          </p>
        </div>

        {/* 1. Official Corporate Registrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-white/10 bg-[#0B1528]/90 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              Commercial Registration
            </span>
            <p className="mt-1 text-lg font-black text-white">{company.registration}</p>
            <p className="mt-1 text-xs text-slate-300">{company.name}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B1528]/90 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              Doha Presence
            </span>
            <p className="mt-1 text-lg font-black text-white">Since {company.since}</p>
            <p className="mt-1 text-xs text-slate-300">
              {branches.map((b) => b.title).join(" · ")} ({company.postBox})
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B1528]/90 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              Corporate Group
            </span>
            <p className="mt-1 text-lg font-black text-white">{company.group}</p>
            <p className="mt-1 text-xs text-slate-300">{company.footprint}</p>
          </div>
        </div>

        {/* 2. Verified Pathas Group Sister Companies */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
            Verified Group &amp; Sister Companies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sisterConcerns.map((sister) => (
              <div
                key={sister.name}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B1528]/90 p-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative size-12 shrink-0 rounded-xl bg-white p-1.5 overflow-hidden">
                      <Image
                        src={sister.logo}
                        alt={sister.name}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{sister.name}</h4>
                      <span className="text-[11px] font-semibold text-cyan-300">
                        {sister.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sister.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-slate-400">
                  <MapPin size={14} aria-hidden="true" className="shrink-0 text-cyan-400 mt-0.5" />
                  <span>{sister.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Structured Ready Slots for Confirmed Projects & Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-dashed border-white/20 bg-[#070B14]/60 p-6">
            <div className="flex items-center gap-2.5 text-cyan-300">
              <FileCheck2 size={18} aria-hidden="true" />
              <h3 className="text-base font-bold text-white">Completed Project Case Studies</h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Verified client case studies, corporate fit-out highlights, and sector delivery profiles are curated for publication once formally cleared by our respective division partners.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-white/20 bg-[#070B14]/60 p-6">
            <div className="flex items-center gap-2.5 text-cyan-300">
              <Users size={18} aria-hidden="true" />
              <h3 className="text-base font-bold text-white">Verified Partner &amp; Client Endorsements</h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Client references, supplier authorizations, and division-level service credentials are available upon formal corporate request through our Ain Khalid Head Office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
