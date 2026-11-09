import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { HeroMedia } from "@/components/hero-media";
import { AboutSection } from "@/components/about-section";
import { ServicesShowcase } from "@/components/services-showcase";

export default function HomePage() {
  return (
    <main id="main-content">
      <section
        className="relative flex min-h-[640px] flex-col justify-between overflow-hidden px-4 pb-4 pt-20 text-white sm:px-8 sm:pt-24 sm:pb-6 lg:min-h-[700px] lg:px-12"
        aria-labelledby="home-title"
      >
        <HeroMedia />

        <div className="relative z-10 my-auto grid w-full grid-cols-1 items-center gap-8 py-6 sm:py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
          <div className="max-w-2xl lg:col-span-7 min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FFA048]">BizLink Qatar</p>
            <h1 id="home-title" className="mt-3.5 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-5xl xl:text-6xl">
              One Trusted Partner.
              <span className="block text-[#FFA048]">Multiple Business Solutions.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              BizLink Trading and Contracting Services provides business solutions in Qatar with a commitment to quality, reliability, and professional service.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/services" className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F47716] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#F47716]/20 transition hover:bg-[#d96009] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Explore Our Services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47716]">
                Get a Free Quote <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3 border-l-2 border-[#F47716] pl-3.5 text-xs sm:text-sm text-white/70">
              <ShieldCheck size={18} className="shrink-0 text-[#FFA048]" aria-hidden="true" />
              <span>Part of the Pathas Group of Companies</span>
            </div>
          </div>

          {/* Right Column: Monumental BizLink Logo Emblem */}
          <div className="relative flex w-full min-w-0 items-center justify-center lg:col-span-5 lg:justify-end py-4 lg:py-0">
            {/* Ambient Radial Warmth Backlight */}
            <div
              className="pointer-events-none absolute size-56 sm:size-72 lg:size-80 rounded-full bg-[#D35400]/25 blur-3xl -z-10"
              aria-hidden="true"
            />

            {/* Majestic Transparent Logo with Responsive Sizing */}
            <div className="relative flex w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[450px] items-center justify-center lg:justify-end">
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink Trading and Contracting Services"
                width={1120}
                height={910}
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 450px"
                className="h-auto w-full max-w-full object-contain filter drop-shadow-[0_0_35px_rgba(211,84,0,0.35)] drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.02]"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-white/15 pt-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="https://wa.me/97450091006" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#FFA048]"><MessageCircle size={14} className="text-[#F47716]" aria-hidden="true" /> +974 5009 1006</a>
            <a href="tel:+97477661037" className="inline-flex items-center gap-2 transition hover:text-[#FFA048]"><Phone size={14} className="text-[#F47716]" aria-hidden="true" /> +974 7766 1037</a>
            <a href="mailto:bizlink.qa@gmail.com" className="inline-flex items-center gap-2 transition hover:text-[#FFA048]"><Mail size={14} className="text-[#F47716]" aria-hidden="true" /> bizlink.qa@gmail.com</a>
          </div>
          <a href="#about" className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.14em] text-white/75 transition hover:text-[#FFA048]">Explore About Us <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
      </section>

      <AboutSection />
      <ServicesShowcase autoPlayInterval={3000} />

      <section className="border-t border-white/10 bg-[#101A2B] px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-12" aria-labelledby="home-contact-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA048]">Start a conversation</p>
            <h2 id="home-contact-title" className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Tell us what your business needs next.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">Connect with the BizLink team for business, trading, facility, automotive, or digital service support in Qatar.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F47716] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#d96009] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Get a Free Quote <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
