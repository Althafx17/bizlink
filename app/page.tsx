import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Car,
  Check,
  Layers,
  Monitor,
  Package,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { BranchesMap } from "@/components/home/branches-map";
import { SectorCarousel } from "@/components/home/sector-carousel";

const whyItems = [
  {
    title: "Integrated Under One Roof",
    description:
      "Coordinate corporate formation, trading, facility contracts, fleet care, and IT services with a single dependable partner.",
    icon: Layers,
  },
  {
    title: "Qatar Compliance & WPS",
    description:
      "Full regulatory handling for CR licensing, Qatari sponsorship, PRO clearances, MOFA attestation, and WPS payroll.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Group Since 2010",
    description:
      "Part of Pathas Group of Companies spanning Qatar, India, UAE & China, operating from Bin Mahmoud and Ain Khalid.",
    icon: Award,
  },
] as const;

const corePillars = [
  {
    title: "Corporate & WPS Payroll",
    subtitle: "Company Setup • CR • PRO • Attestation • WPS",
    image: "/images/services/business-corporate-card.webp",
    alt: "Corporate office environment in Doha",
    href: "/services#business-corporate",
    cta: "Explore Corporate",
  },
  {
    title: "Trading & Facility AMC",
    subtitle: "Cargo • Perfumes • 24/7 Cleaning • Gypsum & MEP",
    image: "/images/services/facility-maintenance-card.webp",
    alt: "Facility maintenance and commercial interiors",
    href: "/services#facility-maintenance",
    cta: "Explore Facility",
  },
  {
    title: "Automotive & Digital",
    subtitle: "Pathas Mobile Wash • Prime Glass • Computer Center",
    image: "/images/services/automotive-card.webp",
    alt: "Automotive care and detailing in Qatar",
    href: "/services#automotive",
    cta: "Explore Auto & Tech",
  },
] as const;

const flyerCategories = [
  { title: "Business & Corporate", icon: Building2, href: "#svc-business-corporate", dark: true },
  { title: "Trading & Supply", icon: Package, href: "#svc-trading-supply", dark: false },
  { title: "Facility & Maintenance", icon: Wrench, href: "#svc-facility-maintenance", dark: true },
  { title: "Automotive", icon: Car, href: "#svc-automotive", dark: false },
  { title: "Digital & Creative", icon: Monitor, href: "#svc-digital-creative", dark: true },
] as const;

const zigZagServices = [
  {
    id: "business-corporate",
    title: "Business & Corporate Services",
    summary:
      "Streamlined business setup, commercial licensing, Qatari sponsorship arrangements, and fully managed WPS & payroll administration in Qatar.",
    points: [
      "Company formation, CR licensing & PRO",
      "MOFA / Embassy attestation & bank aid",
      "Managed WPS payroll, bookkeeping & auditing",
    ],
    image: "/images/services/business-corporate-bg.webp",
    alt: "Business and corporate setup solutions in Qatar",
    href: "/services#business-corporate",
  },
  {
    id: "trading-supply",
    title: "Trading, Procurement & Perfumes",
    summary:
      "End-to-end commercial supply covering bulk procurement, international cargo, vehicle spare parts, and signature Made-in-Qatar perfumes.",
    points: [
      "Bulk procurement & cargo logistics",
      "Vehicle spare parts & wholesale supply",
      "Made-in-Qatar perfume range (6ml – 50ml)",
    ],
    image: "/images/services/trading-supply-bg.webp",
    alt: "Wholesale procurement and trading distribution",
    href: "/services#trading-supply",
  },
  {
    id: "facility-maintenance",
    title: "Facility, Cleaning & Contracting",
    summary:
      "24/7 commercial cleaning and pest control paired with gypsum partitions, glass works, electrical, plumbing, tiling, and Annual Maintenance Contracts.",
    points: [
      "24/7 pest control & cleaning in Doha",
      "Gypsum, glass, electrical, plumbing & tiles",
      "Comprehensive Annual Maintenance (AMC)",
    ],
    image: "/images/services/facility-maintenance-bg.webp",
    alt: "Facility engineering and interior works",
    href: "/services#facility-maintenance",
  },
  {
    id: "automotive",
    title: "Automotive: Pathas Wash & Prime Glass",
    summary:
      "Convenient doorstep vehicle care anywhere in Qatar — combining mobile car washing and detailing with certified mobile windshield replacement.",
    points: [
      "Pathas Car Wash (Mobile) – anywhere anytime",
      "Prime Glass mobile windshield replacement",
      "Vehicle interior care & fleet contracts",
    ],
    image: "/images/services/automotive-bg.webp",
    alt: "Mobile automotive wash and windshield care",
    href: "/services#automotive",
  },
  {
    id: "digital-creative",
    title: "Digital, E-Commerce & Computer Center",
    summary:
      "Practical technology and growth solutions through Biz Link Computer Center, custom e-commerce websites, SEO, and corporate digital campaigns.",
    points: [
      "Biz Link Computer Center & IT support",
      "Website, e-commerce setup & SEO",
      "Social media & bilingual brand identity",
    ],
    image: "/images/about/philosophy-detail.webp",
    alt: "Modern digital workstation and technology studio in Qatar",
    href: "/services#digital-creative",
  },
] as const;

const flyerLeftChecklist = [
  "Company formation, CR/Licensing & Government",
  "Qatari sponsor arrangements",
  "Typing / PRO services",
  "MOFA / Embassy attestation (India / Nepal / Sri Lanka / Pakistan / Philippines / Bangladesh)",
  "WPS (Wage Protection System)",
  "Bookkeeping / Auditing",
] as const;

const flyerRightChecklist = [
  "Bank account opening aid",
  "E-commerce setup & online stores",
  "Vehicle spare parts & procurement / cargo",
  "Made-in-Qatar perfume (6ml – 50ml)",
  "Pest / Cleaning 24/7 Doha & Gypsum / Glass / Electrical / Plumbing / Tiles / AMC",
  "Biz Link Computer Center, Pathas Car Wash (Mobile) & Prime Glass",
] as const;

export default function HomePage() {
  return (
    <main id="main-content" className="bg-white text-[#0B2C5F] overflow-x-clip">
      {/* 1. PROTOTYPE HERO SECTION: Crisp White + Royal/Sky Blue Arch & Circular Emblem */}
      <section
        className="relative bg-gradient-to-br from-white via-[#F6FAFF] to-[#E8F2FD] pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-28 lg:pb-16"
        aria-labelledby="home-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy Stack */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#0077CC]/20 bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0066CC] shadow-sm">
                One Roof · Multiple Solutions
              </p>

              <h1
                id="home-title"
                className="mt-4 text-3xl font-extrabold tracking-tight leading-[1.12] text-[#0B2C5F] sm:text-5xl lg:text-[3.2rem]"
              >
                One Trusted Partner for
                <span className="block text-[#0066CC]">Business Solutions in Qatar.</span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#475D7A] sm:text-base lg:mx-0">
                BizLink Trading and Contracting Services WLL provides corporate setup, managed WPS payroll, procurement, facility management, automotive care, and digital services from Bin Mahmoud &amp; Ain Khalid.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="#services"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#0056B3] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#0056B3]/25 transition hover:bg-[#004088] hover:scale-[1.02]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <a
                  href="tel:+97477661037"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#0B2C5F]/20 bg-white px-5 py-3 text-sm font-bold text-[#0B2C5F] shadow-sm transition hover:border-[#0056B3] hover:text-[#0056B3]"
                >
                  <Phone size={15} className="text-[#0088CE]" aria-hidden="true" />
                  <span>7766 1037 | 5009 1006</span>
                </a>
              </div>
            </div>

            {/* Right Prototype Visual Signature: Tall Arch + Overlapping White Circle Emblem */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[270px] sm:max-w-[330px] lg:max-w-[390px] pb-4 pl-4 sm:pl-8">
                {/* Main Arched Window */}
                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white bg-[#D6E8FB] shadow-2xl shadow-[#0B2C5F]/15">
                  <Image
                    src="/images/doha-skyline.webp"
                    alt="Doha Qatar skyline representing BizLink commercial solutions"
                    fill
                    priority
                    sizes="(max-width: 640px) 360px, 480px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F]/65 via-[#0066CC]/15 to-transparent" />
                  <div className="absolute bottom-4 right-5 text-right text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7CD4FF]">
                      Doha, Qatar
                    </p>
                    <p className="text-xs font-extrabold">Since 2010</p>
                  </div>
                </div>

                {/* Overlapping Circular BizLink Emblem (Bottom-Left of Arch per Prototype) */}
                <div className="absolute -bottom-2 left-0 sm:bottom-2 sm:-left-2 size-28 sm:size-36 lg:size-40 rounded-full border-4 border-white bg-white p-3.5 sm:p-4 shadow-2xl shadow-[#0B2C5F]/20 grid place-items-center">
                  <Image
                    src="/images/bizlink-logo-transparent-1.png"
                    alt="BizLink Trading and Contracting Services WLL"
                    width={1120}
                    height={910}
                    priority
                    sizes="160px"
                    className="h-auto w-[88%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROTOTYPE CURVED ABOUT BANNER (Deep Royal Navy + Sweeping Wave & Arc) */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#0B2C5F] text-white pt-10 pb-12 sm:pt-14 sm:pb-16"
        aria-labelledby="home-about-title"
      >
        {/* Top White Wave Mask matching Mobile & Web Prototype Curve */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-0 right-0 h-7 sm:h-11 w-full text-[#E8F2FD]"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,20 C1180,54 880,4 540,28 C280,46 110,16 0,32 Z"
          />
        </svg>

        {/* Decorative Sweeping Circle Arc on Left matching Prototype Band */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-12 size-[340px] sm:size-[480px] rounded-full bg-[#0066CC]/35"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Rounded Corporate Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[16/10] max-w-md overflow-hidden rounded-[2rem] border-2 border-white/20 bg-[#123D7D] shadow-xl lg:mx-0">
                <Image
                  src="/images/about/interior-main.webp"
                  alt="BizLink corporate operations center in Qatar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2C5F]/75 via-transparent to-[#0095D9]/20" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0B2C5F]">
                  Pathas Group · CR No. 206520
                </span>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#66C7F4]">
                About BizLink WLL
              </p>
              <h2
                id="home-about-title"
                className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl"
              >
                Complete Business Support Since 2010
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#D8E6F8] sm:text-base lg:mx-0">
                Operating in Qatar under the Pathas Group of Companies (Qatar • India • UAE • China), Biz Link Trading and Contracting Services WLL delivers practical, compliant, and cost-effective solutions across five dedicated divisions — making operations simpler for companies and partners across Doha.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link
                  href="/about"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0B2C5F] shadow-md transition hover:bg-[#EAF2FA]"
                >
                  <span>Read Company Profile</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROTOTYPE "WHY US?" 3-COLUMN BENEFITS SECTION */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="why-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0077CC]">
              Trust • Integrity • Growth
            </p>
            <h2
              id="why-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B2C5F] sm:text-4xl"
            >
              Why Businesses Choose BizLink
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(({ title, description, icon: Icon }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center px-4 ${
                  idx === 2 ? "sm:col-span-2 sm:mx-auto sm:max-w-sm lg:col-span-1 lg:max-w-none" : ""
                }`}
              >
                <div className="grid size-16 place-items-center rounded-2xl bg-[#EAF2FA] text-[#0056B3] shadow-sm ring-1 ring-[#0077CC]/15">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B2C5F]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475D7A]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROTOTYPE 3-CARD SOFT BLUE SHOWCASE BAND (NO PERSON PHOTOS) */}
      <section className="bg-[#F2F7FD] py-14 sm:py-20 border-y border-[#0B2C5F]/8" aria-labelledby="pillars-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0077CC]">
              Integrated Divisions
            </p>
            <h2
              id="pillars-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B2C5F] sm:text-4xl"
            >
              Built Around Your Operations
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {corePillars.map(({ title, subtitle, image, alt, href, cta }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center ${
                  idx === 2 ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-sm lg:col-span-1 lg:max-w-none" : ""
                }`}
              >
                <div className="w-full overflow-hidden rounded-3xl border border-[#0B2C5F]/10 bg-white p-3.5 shadow-md shadow-[#0B2C5F]/5 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EAF2FA]">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 py-4 text-center">
                    <h3 className="text-lg font-extrabold text-[#0B2C5F]">{title}</h3>
                    <p className="mt-1 text-xs font-medium text-[#475D7A]">{subtitle}</p>
                  </div>
                </div>

                <Link
                  href={href}
                  className="mt-4 inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-[#0B2C5F]/20 bg-white px-6 py-2 text-xs font-bold text-[#0B2C5F] shadow-sm transition hover:border-[#0056B3] hover:bg-[#0056B3] hover:text-white"
                >
                  <span>{cta}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROTOTYPE ZIG-ZAG SERVICES + FLYER 5 ICONS & CHECKLIST */}
      <section id="services" className="scroll-mt-20 bg-white py-14 sm:py-20" aria-labelledby="home-services-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0077CC]">
              Complete Solutions
            </p>
            <h2
              id="home-services-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B2C5F] sm:text-4xl"
            >
              Our Services
            </h2>

            {/* 5 Circular Icons Band directly inspired by BizLink Flyer */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {flyerCategories.map(({ title, icon: Icon, href, dark }, idx) => (
                <a
                  key={title}
                  href={href}
                  className={`group flex flex-col items-center rounded-2xl border border-[#0B2C5F]/10 bg-[#F7FAFE] p-4 transition hover:border-[#0077CC] hover:bg-[#EAF2FA] ${
                    idx === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <span
                    className={`grid size-14 place-items-center rounded-full text-white shadow-md transition-transform group-hover:scale-105 ${
                      dark ? "bg-[#0B2C5F]" : "bg-[#0088CE]"
                    }`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="mt-3 text-xs sm:text-sm font-extrabold text-[#0B2C5F] text-center">
                    {title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Alternating Zig-Zag Service Rows (Matches Desktop rectangles & Mobile flush half-capsules!) */}
          <div className="mt-14 space-y-12 sm:space-y-16">
            {zigZagServices.map(({ id, title, summary, points, image, alt, href }, index) => {
              const imageRight = index % 2 === 1;

              return (
                <div
                  key={id}
                  id={`svc-${id}`}
                  className="scroll-mt-24 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-12"
                >
                  {/* Visual Block: Flush alternating half-capsule on Mobile/Tablet (per Prototype), Crisp Rounded on Desktop */}
                  <div
                    className={`lg:col-span-6 ${imageRight ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div
                      className={`relative aspect-[16/10] w-[90%] overflow-hidden bg-[#EAF2FA] shadow-lg shadow-[#0B2C5F]/10 sm:w-[82%] lg:w-full lg:rounded-3xl ${
                        imageRight
                          ? "ml-auto -mr-4 sm:-mr-8 lg:mr-0 rounded-l-full lg:rounded-l-3xl"
                          : "mr-auto -ml-4 sm:-ml-8 lg:ml-0 rounded-r-full lg:rounded-r-3xl"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 560px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div
                    className={`lg:col-span-6 ${
                      imageRight ? "lg:order-1 lg:pr-4 text-left" : "lg:order-2 lg:pl-4 text-left"
                    }`}
                  >
                    <h3 className="text-xl font-extrabold text-[#0B2C5F] sm:text-3xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475D7A] sm:text-base">
                      {summary}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm font-medium text-[#0B2C5F]">
                          <Check size={17} className="mt-0.5 shrink-0 text-[#0088CE]" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <Link
                        href={href}
                        className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#0056B3] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#0056B3]/20 transition hover:bg-[#004088]"
                      >
                        <span>More Details</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Complete 2-Column Flyer Checklist Box */}
          <div className="mt-16 rounded-3xl border border-[#0B2C5F]/10 bg-[#F2F7FD] p-6 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[#0B2C5F]/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077CC]">
                  Full Service Scope
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-[#0B2C5F] sm:text-2xl">
                  All Capabilities at a Glance
                </h3>
              </div>
              <Link
                href="/services"
                className="text-xs font-extrabold uppercase tracking-wider text-[#0056B3] hover:underline"
              >
                Open Full Directory →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <ul className="space-y-3">
                {flyerLeftChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#0B2C5F]">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#0088CE]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {flyerRightChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#0B2C5F]">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#0088CE]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROTOTYPE CURVED PROMO BANNER × FLYER WPS SPOTLIGHT */}
      <section className="relative overflow-hidden bg-[#0B2C5F] text-white pt-10 pb-12 sm:pt-14 sm:pb-16" aria-labelledby="wps-promo-title">
        {/* Top White Wave Curve matching Prototype Banner */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-0 left-0 right-0 h-7 sm:h-11 w-full text-white"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,26 C1120,2 820,48 480,22 C240,4 100,28 0,16 Z"
          />
        </svg>

        {/* Large Sweeping Circle on Right matching Prototype Section 6 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 size-[340px] sm:size-[460px] rounded-full bg-gradient-to-tr from-[#0066CC]/55 to-[#00A2E8]/35"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 text-center sm:px-8 sm:py-14">
          <p className="inline-block rounded-full bg-[#0088CE]/25 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#7CD4FF]">
            Get Fully Managed &amp; Outsourced
          </p>
          <h2 id="wps-promo-title" className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
            WPS and Payroll Services in Qatar
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#D8E6F8] sm:text-base">
            Reliable Wage Protection System (WPS) compliance, salary file management, bookkeeping, and auditing support tailored for companies across Doha.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-[#0B2C5F] shadow-xl transition hover:bg-[#EAF2FA]"
            >
              <span>Request Free Quote</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="tel:+97477661037"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <Phone size={15} className="text-[#66C7F4]" aria-hidden="true" />
              <span>7766 1037 | 5009 1006</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. PROTOTYPE 3-CARD INTERACTIVE CAROUSEL SECTION */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#0B2C5F]/8" aria-labelledby="sectors-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0077CC]">
              Sectors We Support
            </p>
            <h2
              id="sectors-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B2C5F] sm:text-4xl"
            >
              Built for Dependable Execution
            </h2>
          </div>

          <SectorCarousel />
        </div>
      </section>

      {/* 8. PROTOTYPE CONTACT + DOHA MAP SECTION */}
      <section className="bg-white py-14 sm:py-20" aria-label="Offices and Map">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <BranchesMap />
        </div>
      </section>
    </main>
  );
}
