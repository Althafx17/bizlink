import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Car, Monitor, Truck, Wrench } from "lucide-react";
import { services, type ServiceDivision } from "@/content/services";

const divisionColorPalette = [
  {
    // 01: Blue
    border: "border-sky-400/25 hover:border-sky-400/60",
    iconBox: "bg-sky-500/15 border-sky-400/30 text-sky-300",
    badge: "text-sky-300",
    cta: "text-sky-300 group-hover:text-sky-200",
    glow: "from-sky-500/10",
  },
  {
    // 02: Orange
    border: "border-orange-400/25 hover:border-orange-400/60",
    iconBox: "bg-orange-500/15 border-orange-400/30 text-orange-300",
    badge: "text-orange-300",
    cta: "text-orange-300 group-hover:text-orange-200",
    glow: "from-orange-500/10",
  },
  {
    // 03: Green
    border: "border-emerald-400/25 hover:border-emerald-400/60",
    iconBox: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
    badge: "text-emerald-300",
    cta: "text-emerald-300 group-hover:text-emerald-200",
    glow: "from-emerald-500/10",
  },
  {
    // 04: Blue
    border: "border-cyan-400/25 hover:border-cyan-400/60",
    iconBox: "bg-cyan-500/15 border-cyan-400/30 text-cyan-300",
    badge: "text-cyan-300",
    cta: "text-cyan-300 group-hover:text-cyan-200",
    glow: "from-cyan-500/10",
  },
  {
    // 05: Orange
    border: "border-amber-400/25 hover:border-amber-400/60",
    iconBox: "bg-amber-500/15 border-amber-400/30 text-amber-300",
    badge: "text-amber-300",
    cta: "text-amber-300 group-hover:text-amber-200",
    glow: "from-amber-500/10",
  },
] as const;

function renderDivisionIcon(iconName: ServiceDivision["iconName"]) {
  switch (iconName) {
    case "building":
      return <Building2 className="size-6" aria-hidden="true" />;
    case "monitor":
      return <Monitor className="size-6" aria-hidden="true" />;
    case "truck":
      return <Truck className="size-6" aria-hidden="true" />;
    case "wrench":
      return <Wrench className="size-6" aria-hidden="true" />;
    case "car":
      return <Car className="size-6" aria-hidden="true" />;
  }
}

export function ServicesHeroSection() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      style={{ paddingTop: "var(--site-navbar-height, 96px)" }}
      className="relative overflow-hidden bg-[#070B14] border-b border-white/10"
    >
      {/* Subtle ambient glow consistent with Home hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 size-96 rounded-full bg-[#0056B3]/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-96 rounded-full bg-cyan-500/15 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text Copy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-[#001438]/75 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-300 backdrop-blur-md">
              <span aria-hidden="true" className="size-2 rounded-full bg-cyan-400" />
              ALL BUSINESS SOLUTIONS UNDER ONE ROOF
            </span>

            <h1
              id="services-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]"
            >
              Our Services
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
              Integrated solutions across Business, Trading, Facility, Automotive and Digital Services — serving Qatar since 2010.
            </p>
          </div>

          {/* Right: Single Supporting 3D Brand Visual (consistent with Home hero) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-blue-600/25 blur-3xl opacity-75"
              />
              <div className="relative w-full aspect-[641/570] drop-shadow-[0_20px_50px_rgba(0,140,255,0.4)]">
                <Image
                  src="/images/bizlink_3d_logo_transparent.webp"
                  alt="BizLink Qatar Integrated Business Solutions"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 280px"
                  className="object-contain select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DivisionsOverviewSection() {
  return (
    <section
      aria-labelledby="divisions-overview-heading"
      className="py-14 sm:py-20 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            5 Core Divisions
          </p>
          <h2
            id="divisions-overview-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Explore Our Divisions
          </h2>
        </div>

        {/* Static Scannable 5-Card Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((division, idx) => {
            const palette = divisionColorPalette[idx % divisionColorPalette.length];
            return (
              <Link
                key={division.id}
                href={`/services/${division.id}`}
                className={`group relative flex flex-col justify-between rounded-2xl border bg-gradient-to-br ${palette.glow} via-[#0B1528]/90 to-[#070B14] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-h-[180px] ${palette.border}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`flex size-12 items-center justify-center rounded-xl border ${palette.iconBox}`}
                    >
                      {renderDivisionIcon(division.iconName)}
                    </span>
                    <span className={`text-xs font-mono font-bold ${palette.badge}`}>
                      {division.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-white leading-snug">
                    {division.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-300 line-clamp-1">
                    {division.description}
                  </p>
                </div>

                <div className={`mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold ${palette.cta}`}>
                  <span>Explore Division</span>
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
