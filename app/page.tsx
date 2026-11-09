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
        className="relative flex min-h-[760px] flex-col justify-between overflow-hidden px-4 pb-5 pt-24 text-white sm:px-8 sm:pt-28 lg:min-h-[820px] lg:px-12"
        aria-labelledby="home-title"
      >
        <HeroMedia />

        <div className="relative z-10 my-auto grid w-full grid-cols-1 items-center gap-12 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
          <div className="max-w-2xl lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FFA048]">BizLink Qatar</p>
            <h1 id="home-title" className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              One Trusted Partner.
              <span className="block text-[#FFA048]">Multiple Business Solutions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              BizLink Trading and Contracting Services provides business solutions in Qatar with a commitment to quality, reliability, and professional service.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/services" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F47716] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#F47716]/20 transition hover:bg-[#d96009] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Explore Our Services <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47716]">
                Get a Free Quote <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 border-l-2 border-[#F47716] pl-4 text-sm text-white/70">
              <ShieldCheck size={19} className="shrink-0 text-[#FFA048]" aria-hidden="true" />
              <span>Part of the Pathas Group of Companies</span>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:justify-self-end">
            <div className="relative ml-auto aspect-[4/5] w-[min(100%,28rem)] overflow-hidden rounded-[2rem] border border-white/20 bg-[#101A2B] shadow-2xl shadow-black/40 sm:rounded-[2.5rem]">
              <div className="absolute inset-0 hidden lg:block">
                <Image src="/images/about/engineering-facility.webp" alt="Professional facility and engineering environment in Qatar" fill priority sizes="(max-width: 1024px) 92vw, 420px" className="object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/95 via-[#080D18]/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#080D18]/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">Qatar operations</div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFA048]">Business support</p>
                    <p className="mt-1 text-lg font-bold text-white">Built for dependable execution.</p>
                  </div>
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/90 p-2 shadow-xl">
                    <Image src="/images/bizlink-logo-transparent-1.png" alt="BizLink" width={1120} height={910} sizes="48px" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 grid place-items-center bg-[#F7F9FC] lg:hidden">
                <Image src="/images/bizlink-logo-transparent-1.png" alt="BizLink logo" width={1120} height={910} sizes="280px" className="hero-logo-color-cycle h-auto w-[72%] object-contain" />
                <span className="absolute bottom-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F1B3D]/60">BizLink Qatar</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-[#101A2B]/95 px-4 py-3 shadow-xl sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">One roof</p>
              <p className="mt-1 text-sm font-bold text-white">Integrated services</p>
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
