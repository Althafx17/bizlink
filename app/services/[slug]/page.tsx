import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cog,
  ExternalLink,
  FileText,
  FlaskConical,
  Handshake,
  HelpCircle,
  Keyboard,
  Landmark,
  Languages,
  Laptop,
  Layers,
  Megaphone,
  MessageCircle,
  PenTool,
  Phone,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  Users,
  Video,
  Zap,
  LayoutGrid,
  Armchair,
  Car,
  MapPin,
  Maximize2,
  Shield,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";
import { services, type ServiceDivision } from "@/content/services";
import { company } from "@/content/company";
import { MobileBottomActionDock } from "@/components/shared/marketing-sections";
import { FacilityCardsAutoScroll } from "@/components/services/facility-cards-auto-scroll";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getSubServiceIcon(id: string) {
  switch (id) {
    case "company-formation": return <Users className="size-5 text-cyan-400" />;
    case "cr-licensing": return <FileText className="size-5 text-cyan-400" />;
    case "qatari-sponsorship": return <Handshake className="size-5 text-cyan-400" />;
    case "typing-pro-services": return <Keyboard className="size-5 text-cyan-400" />;
    case "translation-attestation": return <Languages className="size-5 text-cyan-400" />;
    case "bank-wps-assistance": return <Landmark className="size-5 text-cyan-400" />;
    case "auditing-bookkeeping": return <TrendingUp className="size-5 text-cyan-400" />;
    case "ecommerce-setup": return <ShoppingCart className="size-5 text-cyan-400" />;
    case "digital-marketing-seo": return <Megaphone className="size-5 text-cyan-400" />;
    case "content-ai-video": return <Video className="size-5 text-cyan-400" />;
    case "web-ecommerce-development": return <Laptop className="size-5 text-cyan-400" />;
    case "branding-graphic-design": return <PenTool className="size-5 text-cyan-400" />;
    case "social-media-management": return <Share2 className="size-5 text-cyan-400" />;
    case "digital-retainer-packages": return <Layers className="size-5 text-cyan-400" />;
    case "general-wholesale-trading": return <ShoppingBasket className="size-5 text-cyan-400" />;
    case "bulk-procurement-cargo": return <Truck className="size-5 text-cyan-400" />;
    case "department-lifestyle": return <ShoppingBag className="size-5 text-cyan-400" />;
    case "perfumes-fragrances": return <FlaskConical className="size-5 text-cyan-400" />;
    case "vehicle-spare-parts": return <Cog className="size-5 text-cyan-400" />;
    case "hypermarket-supply": return <Store className="size-5 text-cyan-400" />;
    case "facility-hospitality-management": return <Building2 className="size-5 text-cyan-400" />;
    case "cleaning-pest-control": return <Sparkles className="size-5 text-cyan-400" />;
    case "gypsum-glass-partitions": return <Layers className="size-5 text-cyan-400" />;
    case "electrical-plumbing": return <Zap className="size-5 text-cyan-400" />;
    case "floor-tiling-polishing": return <LayoutGrid className="size-5 text-cyan-400" />;
    case "property-maintenance-amc": return <Calendar className="size-5 text-cyan-400" />;
    case "mobile-car-wash": return <Car className="size-5 text-cyan-400" />;
    case "windshield-replacement": return <Maximize2 className="size-5 text-cyan-400" />;
    case "car-detailing-interior": return <Armchair className="size-5 text-cyan-400" />;
    case "onsite-auto-glass": return <MapPin className="size-5 text-cyan-400" />;
    case "auto-glass-repair": return <Shield className="size-5 text-cyan-400" />;
    default: return <Sparkles className="size-5 text-cyan-400" />;
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Qatar · BizLink`,
    description: `${service.tagline} ${service.brochureIntro.slice(0, 140)}...`,
    alternates: {
      canonical: `https://bizlinkqatar.com/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | BizLink Qatar`,
      description: service.tagline,
      url: `https://bizlinkqatar.com/services/${service.id}`,
      siteName: "BizLink Qatar",
      images: [
        {
          url: service.brochureMainImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.id === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  return (
    <main id="main-content" className="min-h-screen bg-[#070B14] pb-24 md:pb-16 text-white selection:bg-cyan-500 selection:text-white">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 01: HERO — Full-width image with H1 and CTA button
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
        {/* Full-width Background Image */}
        <Image
          src={service.brochureMainImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-[#070B14]/20 pointer-events-none" />

        {/* Breadcrumb bar at top */}
        <div className="absolute top-0 inset-x-0 z-20 pt-6 sm:pt-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#070B14]/50 hover:bg-[#070B14]/70 px-4 py-2 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all w-fit"
              >
                <ArrowLeft size={16} className="text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                <span>All Services</span>
              </Link>

              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/70">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={13} className="text-white/40" />
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={13} className="text-white/40" />
                <span className="text-cyan-300 font-semibold">{service.name}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero content at bottom */}
        <div className="relative z-10 w-full pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Division {service.number}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg font-semibold text-cyan-300">
                {service.tagline}
              </p>

              <a
                href={`${company.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>Get Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 02: SERVICE OVERVIEW — Card with intro, image & tags
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1D30]/90 via-[#0B1B36]/80 to-[#070B14]/90 p-6 sm:p-10 shadow-xl backdrop-blur-xl overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left: Title, Small Image & Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                    Overview
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-amber-400 uppercase tracking-wider">
                    &ldquo;{service.highlight}&rdquo;
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.brochureIntro}
                </p>

                {/* Commitment callout */}
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-950/30 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 block mb-1">
                        Our Commitment
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.brochureCommitment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tag row */}
                <div className="flex flex-wrap gap-2">
                  {service.items.slice(0, 4).map((item) => (
                    <span key={item} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                  {service.items.length > 4 && (
                    <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-bold text-cyan-300">
                      +{service.items.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Big Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                  <Image
                    src={service.imageCard}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="rounded-full bg-[#070B14]/70 border border-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      {service.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2.5: FACILITY CARDS (only for facility-maintenance)
         ═══════════════════════════════════════════════════════════════ */}
      {service.id === "facility-maintenance" && (
        <section className="py-2 sm:py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FacilityCardsAutoScroll />
          </div>
        </section>
      )}


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 03: SERVICES INCLUDED — Title, dots, slider of cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#070B14] via-[#091526] to-[#070B14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                What&apos;s Included
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white">
                Our Services
              </h2>
            </div>
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {service.subServices.slice(0, 6).map((_, i) => (
                <span key={i} className={`size-2 rounded-full ${i === 0 ? "bg-cyan-400" : "bg-white/20"}`} />
              ))}
            </div>
          </div>

          {/* Horizontal scrolling cards */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <div className="flex gap-5 w-max">
              {service.subServices.map((sub) => (
                <Link
                  key={sub.id}
                  href={`#${sub.id}`}
                  className="group w-[260px] sm:w-[300px] shrink-0 rounded-2xl border border-white/10 bg-[#0F182A]/80 overflow-hidden hover:border-cyan-400/50 transition-all shadow-lg"
                >
                  {/* Card image placeholder with icon */}
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[#0B1B36] via-[#0F254B] to-[#0B1B36] flex items-center justify-center">
                    <span className="flex size-16 items-center justify-center rounded-2xl bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 group-hover:scale-110 transition-transform">
                      {getSubServiceIcon(sub.id)}
                    </span>
                    {sub.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-md">
                        {sub.badge}
                      </span>
                    )}
                  </div>
                  {/* Card caption */}
                  <div className="p-4 sm:p-5">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {sub.title}
                    </h4>
                    <p className="mt-1.5 text-[11px] sm:text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {sub.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 04: PROCESS — Dark card, accordion steps left, image right
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B1B36] border border-white/10 p-6 sm:p-10 shadow-xl overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left: Title + Accordion Steps */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                    How We Work
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    Our Process
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">
                    Structured workflow ensuring accountability, compliance, and transparent delivery.
                  </p>
                </div>

                <div className="space-y-4">
                  {service.process.map((p, idx) => (
                    <div
                      key={p.step}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 border border-cyan-400/30 text-sm font-black text-cyan-300">
                          {p.step}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                  <Image
                    src={service.brochureMainImage}
                    alt={`${service.title} Process`}
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/80 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 05: WHY IT MATTERS — Sub-services detail + side images
         ═══════════════════════════════════════════════════════════════ */}
      <section id="sub-services" className="py-14 sm:py-20 bg-gradient-to-b from-[#070B14] to-[#091526]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              Detailed Scope
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white">
              Sub-Services & Deliverables
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every service comes with clearly defined deliverables, compliance standards, and direct WhatsApp inquiry.
            </p>
          </div>

          {/* Sub-services list */}
          <div className="space-y-6">
            {service.subServices.map((sub, idx) => (
              <article
                key={sub.id}
                id={sub.id}
                className="group rounded-3xl border border-white/10 bg-[#0F182A]/80 p-6 sm:p-8 hover:border-cyan-400/40 transition-all shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/15 border border-cyan-400/30 text-xs font-black text-cyan-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {sub.badge && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-md">
                        {sub.badge}
                      </span>
                    )}
                  </div>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-950/70 border border-cyan-400/30 text-cyan-300">
                    {getSubServiceIcon(sub.id)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-xs font-bold text-cyan-300 mt-1 uppercase tracking-wider">
                  {sub.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sub.description}
                </p>

                {/* Deliverables */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-2.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Key Deliverables:
                  </span>
                  {sub.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  {sub.compliance ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>{sub.compliance}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">Direct Delivery in Doha</span>
                  )}

                  <a
                    href={`${company.whatsappUrl}?text=${encodeURIComponent(
                      `Hello BizLink Qatar, I am interested in your ${sub.title} under ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-cyan-300 hover:text-white transition-colors w-fit"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 06: FAQ — Centered title, accordion rows
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0F182A]/80 p-5 sm:p-6 backdrop-blur-md hover:border-cyan-400/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 07: CTA BAND + NAVIGATION
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#0B1B36] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* CTA Block */}
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Get Started?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Contact our team for a free consultation. We&apos;ll guide you through every step of {service.title.toLowerCase()} in Qatar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${company.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>WhatsApp Consultation</span>
              </a>

              <a
                href={company.phones[0].href}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all"
              >
                <Phone size={16} className="text-cyan-400" />
                <span>{company.phones[0].label}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/30 transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Previous / Next Navigation */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/services/${prevService.id}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all flex items-center gap-4"
            >
              <ArrowLeft size={20} className="text-cyan-400 group-hover:-translate-x-1.5 transition-transform" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Previous · Division {prevService.number}
                </span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {prevService.title}
                </span>
              </div>
            </Link>

            <Link
              href={`/services/${nextService.id}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all flex items-center justify-between gap-4 text-right"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Next · Division {nextService.number}
                </span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {nextService.title}
                </span>
              </div>
              <ArrowRight size={20} className="text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* Mobile Action Dock */}
      <MobileBottomActionDock />
    </main>
  );
}
