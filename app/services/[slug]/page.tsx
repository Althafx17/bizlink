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
    // Division 01: Business & Corporate
    case "company-formation":
      return <Users className="size-5 text-cyan-400" />;
    case "cr-licensing":
      return <FileText className="size-5 text-cyan-400" />;
    case "qatari-sponsorship":
      return <Handshake className="size-5 text-cyan-400" />;
    case "typing-pro-services":
      return <Keyboard className="size-5 text-cyan-400" />;
    case "translation-attestation":
      return <Languages className="size-5 text-cyan-400" />;
    case "bank-wps-assistance":
      return <Landmark className="size-5 text-cyan-400" />;
    case "auditing-bookkeeping":
      return <TrendingUp className="size-5 text-cyan-400" />;
    case "ecommerce-setup":
      return <ShoppingCart className="size-5 text-cyan-400" />;
    // Division 02: Digital & Creative
    case "digital-marketing-seo":
      return <Megaphone className="size-5 text-cyan-400" />;
    case "content-ai-video":
      return <Video className="size-5 text-cyan-400" />;
    case "web-ecommerce-development":
      return <Laptop className="size-5 text-cyan-400" />;
    case "branding-graphic-design":
      return <PenTool className="size-5 text-cyan-400" />;
    case "social-media-management":
      return <Share2 className="size-5 text-cyan-400" />;
    case "digital-retainer-packages":
      return <Layers className="size-5 text-cyan-400" />;
    // Division 03: Trading & Supply
    case "general-wholesale-trading":
      return <ShoppingBasket className="size-5 text-cyan-400" />;
    case "bulk-procurement-cargo":
      return <Truck className="size-5 text-cyan-400" />;
    case "department-lifestyle":
      return <ShoppingBag className="size-5 text-cyan-400" />;
    case "perfumes-fragrances":
      return <FlaskConical className="size-5 text-cyan-400" />;
    case "vehicle-spare-parts":
      return <Cog className="size-5 text-cyan-400" />;
    case "hypermarket-supply":
      return <Store className="size-5 text-cyan-400" />;
    // Division 04: Facility Management & Maintenance
    case "facility-hospitality-management":
      return <Building2 className="size-5 text-cyan-400" />;
    case "cleaning-pest-control":
      return <Sparkles className="size-5 text-cyan-400" />;
    case "gypsum-glass-partitions":
      return <Layers className="size-5 text-cyan-400" />;
    case "electrical-plumbing":
      return <Zap className="size-5 text-cyan-400" />;
    case "floor-tiling-polishing":
      return <LayoutGrid className="size-5 text-cyan-400" />;
    case "property-maintenance-amc":
      return <Calendar className="size-5 text-cyan-400" />;
    // Division 05: Automotive & Mobile Car Care
    case "mobile-car-wash":
      return <Car className="size-5 text-cyan-400" />;
    case "windshield-replacement":
      return <Maximize2 className="size-5 text-cyan-400" />;
    case "car-detailing-interior":
      return <Armchair className="size-5 text-cyan-400" />;
    case "onsite-auto-glass":
      return <MapPin className="size-5 text-cyan-400" />;
    case "auto-glass-repair":
      return <Shield className="size-5 text-cyan-400" />;
    default:
      return <Sparkles className="size-5 text-cyan-400" />;
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

  // Find previous and next service for navigation
  const currentIndex = services.findIndex((s) => s.id === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  return (
    <main id="main-content" className="min-h-screen bg-[#070B14] pb-24 md:pb-16 text-white selection:bg-cyan-500 selection:text-white">
      
      {/* 1. TOP BREADCRUMB & BACK BUTTON BAR */}
      <section className="pt-6 sm:pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-white/10">
            
            {/* Back Button matching user instruction */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] hover:border-cyan-400/40 px-4 py-2 text-xs sm:text-sm font-bold text-slate-200 hover:text-white backdrop-blur-md transition-all w-fit cursor-pointer"
            >
              <ArrowLeft size={16} className="text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>

            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-cyan-300 transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-white/40" />
              <Link href="/services" className="hover:text-cyan-300 transition-colors">
                Services
              </Link>
              <ChevronRight size={13} className="text-white/40" />
              <span className="text-cyan-300 font-semibold truncate max-w-[200px] sm:max-w-none">
                {service.name}
              </span>
            </nav>

          </div>
        </div>
      </section>

      {/* 2. DEDICATED SERVICE HERO SECTION WITH BROCHURE MAIN IMAGE */}
      <section className="py-8 sm:py-12 relative overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-[#0056B3]/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Titles, Brochure Intro & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
                {service.title}
              </h1>

              {/* Tagline & Highlight */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-bold text-cyan-300">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-400">
                  "{service.highlight}"
                </p>
              </div>

              {/* Full Brochure Narrative Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                BizLink provides comprehensive business and corporate services to help you establish and manage operations in Qatar efficiently.
              </p>

              {/* Brochure Commitment Callout Box */}
              <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-950/40 via-[#0F254B]/60 to-transparent p-4 sm:p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 block mb-1">
                      Our Brochure Commitment
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.brochureCommitment}
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span>WhatsApp Consultation</span>
                </a>

                <a
                  href={`tel:${company.whatsappNumber}`}
                  className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] hover:bg-white/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all active:scale-[0.98] text-center"
                >
                  <Phone size={16} className="text-cyan-400" />
                  <span>+974 5009 1006</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/30 transition-colors text-center"
                >
                  <span>Request Official Quotation</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

            {/* Right Column: Main Image from Brochure with Luxury Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-400/40 bg-[#0F254B] shadow-2xl shadow-cyan-950/60 group">
                
                {/* Official Brochure Image */}
                <Image
                  src={service.brochureMainImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays for High-Contrast Presentation */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-[#070B14]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color pointer-events-none" />

                {/* Signature Curved Blue Badge Overlay matching official brochure */}
                <div className="absolute top-4 right-4 z-10 max-w-[200px] sm:max-w-[230px] p-3 sm:p-4 rounded-2xl bg-[#004BB7]/95 border border-white/20 backdrop-blur-md shadow-xl text-right">
                  {service.id === "business-corporate" ? (
                    <span className="block text-xs sm:text-sm font-black text-white leading-tight">
                      <span className="block">Your Business Journey,</span>
                      <span className="block mt-0.5">Made Simple</span>
                      <span className="block text-cyan-300">WithUs</span>
                    </span>
                  ) : service.id === "digital-creative" ? (
                    <span className="block text-xs sm:text-sm font-black text-white leading-tight">
                      <span className="block">Grow Your Brand,</span>
                      <span className="block text-cyan-300 mt-0.5">With BizLink</span>
                    </span>
                  ) : service.id === "trading-supply" ? (
                    <span className="block text-xs sm:text-sm font-black text-white leading-tight">
                      <span className="block">Quality Products.</span>
                      <span className="block text-cyan-300 mt-0.5">Reliable Supply</span>
                      <span className="block text-white/90 text-[10px] mt-0.5 font-bold tracking-wide">Business Excellence</span>
                    </span>
                  ) : service.id === "facility-maintenance" ? (
                    <span className="block text-xs sm:text-sm font-black text-white leading-tight">
                      <span className="block">Maintaining Spaces.</span>
                      <span className="block text-cyan-300 mt-0.5">Enhancing Environments.</span>
                      <span className="block text-white/90 text-[10px] mt-0.5 font-bold tracking-wide">Complete Property Care</span>
                    </span>
                  ) : service.id === "automotive" ? (
                    <span className="block text-xs sm:text-sm font-black text-white leading-tight">
                      <span className="block">Your Car.</span>
                      <span className="block text-cyan-300 mt-0.5">Our Care.</span>
                      <span className="block text-white/90 text-[10px] mt-0.5 font-bold tracking-wide">Your Location</span>
                    </span>
                  ) : (
                    <span className="block text-xs sm:text-sm font-black text-white leading-tight">
                      {service.highlight}
                    </span>
                  )}
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs backdrop-blur-md bg-[#070B14]/80 border border-white/15 rounded-2xl p-3">
                  <div>
                
                    <span className="text-white font-black text-sm">
                      {service.name}
                    </span>
                  </div>
                  
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 SIGNATURE FACILITY SERVICE CARDS SHOWCASE (Auto-scrolled with website scroll matching official brochure Page 06) */}
      {service.id === "facility-maintenance" && (
        <section className="py-2 sm:py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FacilityCardsAutoScroll />
          </div>
        </section>
      )}

      {/* 3. KEY METRICS & TRUST PILLARS BAR (Luminous Glassmorphic Bar) */}
      <section className="py-6 border-y border-white/15 bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-white/[0.06] backdrop-blur-2xl shadow-inner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-md">
              <span className="block text-xl sm:text-2xl font-black text-cyan-300">
                100% Compliant
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">
                Qatar Legal Standing
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-md">
              <span className="block text-xl sm:text-2xl font-black text-white">
                24 - 48h
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">
                Express Approvals SLA
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-md">
              <span className="block text-xl sm:text-2xl font-black text-cyan-300">
                Since 2010
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">
                15+ Years Track Record
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-md">
              <span className="block text-xl sm:text-2xl font-black text-white">
                1,000+ Clients
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5 block">
                Active in Qatar & GCC
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 BROCHURE SIGNATURE SHOWCASE: "Our Services" (Exact Brochure Match from User Document) */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#070B14] via-[#091526] to-[#070B14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* "Our Services" Brochure Card */}
          <div className="relative rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-white/[0.08] via-[#0B1B36]/90 to-[#071426] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
            {/* Header Capsule matching brochure */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0056B3] border border-cyan-400/40 px-5 py-2 text-sm sm:text-base font-black text-white uppercase tracking-wider shadow-lg shadow-cyan-500/20 mb-6 sm:mb-8">
              <Sparkles className="size-4 text-cyan-300" />
              <span>Our Services</span>
            </div>

            {/* 2-Column Grid of 8 Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5">
              {service.subServices.map((sub) => (
                <Link
                  key={sub.id}
                  href={`#${sub.id}`}
                  className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-950/70 border border-cyan-400/30 text-cyan-300 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shrink-0">
                      {getSubServiceIcon(sub.id)}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {sub.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {sub.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </Link>
              ))}
            </div>

            {/* Our Commitment Card matching official Page 05 layout */}
            {service.id === "trading-supply" && service.brochureCommitment && (
              <div className="mt-7 rounded-2xl bg-[#0056B3]/60 border border-cyan-400/40 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
                <span className="inline-block text-xs font-black uppercase tracking-wider text-cyan-300 mb-1.5">
                  Our Commitment
                </span>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                  {service.brochureCommitment}
                </p>
              </div>
            )}

            {/* Complete Property Care Box (Matching official Page 06 layout) */}
            {service.id === "facility-maintenance" && service.brochureCommitment && (
              <div className="mt-7 rounded-2xl bg-[#0056B3]/60 border border-cyan-400/40 p-5 sm:p-6 backdrop-blur-xl shadow-xl flex items-start gap-4">
                <div className="size-12 rounded-xl bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center shrink-0 text-cyan-300">
                  <Building2 className="size-6" />
                </div>
                <div>
                  <span className="inline-block text-sm font-black uppercase tracking-wider text-cyan-300 mb-1">
                    Complete Property Care
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                    {service.brochureCommitment}
                  </p>
                </div>
              </div>
            )}

            {/* Convenience At Your Doorstep Box (Matching official Page 07 layout) */}
            {service.id === "automotive" && service.brochureCommitment && (
              <div className="mt-7 rounded-2xl bg-[#0056B3]/60 border border-cyan-400/40 p-5 sm:p-6 backdrop-blur-xl shadow-xl flex items-start gap-4">
                <div className="size-12 rounded-xl bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center shrink-0 text-cyan-300">
                  <ThumbsUp className="size-6" />
                </div>
                <div>
                  <span className="inline-block text-sm font-black uppercase tracking-wider text-cyan-300 mb-1">
                    Convenience At Your Doorstep
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                    {service.brochureCommitment}
                  </p>
                </div>
              </div>
            )}

            {/* Footer Citation matching brochure */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-cyan-300 font-bold">{service.brochurePage}</span>
                <span className="text-slate-400">· Official Qatar {service.title}</span>
              </div>
              
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPREHENSIVE SUB-SERVICES SECTION (EVERY SUB-SERVICE DETAILED) */}
      <section id="sub-services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
                SPECIALIZED CAPABILITIES
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                Sub-Services &amp; Scope of Work
              </h2>
            </div>
          </div>

          {/* Sub-Services Grid: Every Sub-Service Displayed in a Rich Glassmorphism Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.subServices.map((sub, idx) => (
              <article
                key={sub.id}
                id={sub.id}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.1] via-[#0F182A]/70 to-[#070B14]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Ambient Background Tint */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-400/15 border border-cyan-400/30 text-xs font-black text-cyan-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {sub.badge && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-md">
                        {sub.badge}
                      </span>
                    )}
                  </div>

                  {/* Sub-Service Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white group-hover:text-cyan-300 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs font-bold text-cyan-300 mt-1 uppercase tracking-wider">
                    {sub.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sub.description}
                  </p>

                  {/* Deliverables & Inclusions Checklist */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables &amp; Inclusions:
                    </span>
                    {sub.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer: Regulatory Compliance & Inquire Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  {sub.compliance ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>{sub.compliance}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">Direct Delivery in Doha</span>
                  )}

                  <a
                    href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
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

      {/* 5. 4-STEP SERVICE DELIVERY PROCESS */}
      <section className="py-16 bg-[#0B1B36]/60 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              How We Deliver
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Structured four-stage operational workflow ensuring accountability, compliance, and transparent delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-white/10 bg-[#0F254B]/80 p-6 backdrop-blur-md shadow-lg"
              >
                <span className="text-3xl font-black text-cyan-400/40 block mb-2 font-mono">
                  {p.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. DIVISION FAQS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              COMMERCIAL CLARITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0F182A]/80 p-5 sm:p-6 backdrop-blur-md"
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

      {/* 7. PREVIOUS / NEXT SERVICE NAVIGATION */}
      <section className="py-12 border-t border-white/10 bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Previous Service Link */}
            <Link
              href={`/services/${prevService.id}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all flex items-center gap-4"
            >
              <ArrowLeft size={20} className="text-cyan-400 group-hover:-translate-x-1.5 transition-transform" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Previous Division {prevService.number}
                </span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {prevService.title}
                </span>
              </div>
            </Link>

            {/* Next Service Link */}
            <Link
              href={`/services/${nextService.id}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all flex items-center justify-between gap-4 text-right"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Next Division {nextService.number}
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

      {/* 8. MOBILE ACTION DOCK */}
      <MobileBottomActionDock />
    </main>
  );
}
