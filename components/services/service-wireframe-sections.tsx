"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import type { ServiceDivision } from "@/content/services";

interface ProcessItem {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export function ServicesIncludedSlider({
  subServices,
}: {
  subServices: readonly ServiceDivision["subServices"][number][];
  icons?: Record<string, React.ReactNode>;
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (idx: number) => {
    const clamped = Math.max(0, Math.min(subServices.length - 1, idx));
    setActiveIndex(clamped);
    const container = scrollContainerRef.current;
    const card = trackRef.current?.children[clamped] as HTMLElement | undefined;
    if (container && card) {
      container.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const scrollLeft = container.scrollLeft;
    let closestIdx = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setActiveIndex(closestIdx);
  };

  return (
    <section
      aria-labelledby="services-included-heading"
      className="py-14 sm:py-20 bg-gradient-to-b from-[#070B14] via-[#091526] to-[#070B14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls & Pagination Dots */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              What&apos;s Included
            </span>
            <h2 id="services-included-heading" className="mt-2 text-2xl sm:text-4xl font-black text-white">
              Services Included
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Carousel Pagination Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Service slides">
              {subServices.map((sub, i) => (
                <button
                  key={sub.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => scrollToCard(i)}
                  aria-label={`Go to ${sub.title}`}
                  className="flex min-h-6 min-w-6 items-center justify-center p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-2.5 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-7 bg-cyan-400"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Left / Right Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToCard(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous service"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white disabled:opacity-35 disabled:pointer-events-none transition-all cursor-pointer"
              >
                <ArrowLeft size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollToCard(activeIndex + 1)}
                disabled={activeIndex === subServices.length - 1}
                aria-label="Next service"
                className="flex size-10 items-center justify-center rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-35 disabled:pointer-events-none transition-all shadow-md shadow-cyan-500/25 cursor-pointer"
              >
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Snap-Scroll Carousel Track (No Visible Scrollbar, Touch-Swipe Enabled) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto snap-x snap-mandatory touch-pan-x pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div ref={trackRef} className="relative flex gap-5 w-max">
            {subServices.map((sub, idx) => (
              <Link
                key={sub.id}
                href={`#${sub.id}`}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group w-[270px] sm:w-[310px] shrink-0 snap-start rounded-2xl border overflow-hidden transition-all shadow-lg ${
                  idx === activeIndex
                    ? "border-cyan-400/60 bg-[#0F1E36]"
                    : "border-white/10 bg-[#0F182A]/80 hover:border-cyan-400/40"
                }`}
              >
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#0B1B36]">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    sizes="(min-width: 640px) 310px, 270px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F182A]/80 via-transparent to-black/25 pointer-events-none" />
                  <span className="absolute top-3 left-3 rounded-md bg-[#070B14]/70 border border-white/15 px-2 py-0.5 text-[11px] font-mono font-bold text-white/90 backdrop-blur-md">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {sub.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-[#070B14]/75 border border-amber-400/35 px-2 py-0.5 rounded-md backdrop-blur-md">
                      {sub.badge}
                    </span>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {sub.title}
                  </h3>
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
  );
}

export function ProcessAccordionCard({
  title,
  image,
  process,
  whatsappUrl,
}: {
  title: string;
  image: string;
  process: readonly ProcessItem[];
  whatsappUrl: string;
}) {
  const [openStep, setOpenStep] = useState<string>(process[0]?.step ?? "01");

  return (
    <section aria-labelledby="service-process-heading" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1B36] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Accordion Steps (matching Wireframe 04: Accordion steps left) */}
            <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
              {process.map((p) => {
                const isOpen = openStep === p.step;
                return (
                  <div
                    key={p.step}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? "border-cyan-400/40 bg-white/[0.06]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenStep(isOpen ? "" : p.step)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-xs font-black border transition-colors ${
                            isOpen
                              ? "bg-cyan-400 text-slate-950 border-cyan-300"
                              : "bg-cyan-400/15 text-cyan-300 border-cyan-400/30"
                          }`}
                        >
                          {p.step}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {p.title}
                        </h3>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-cyan-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[62px] sm:pl-[70px]">
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-300 hover:text-white transition-colors"
                >
                  <span>Start Step 01 with our team</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right: Title + Image (matching Wireframe 04: title and image right) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                  How We Work
                </span>
                <h2 id="service-process-heading" className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  Our Process
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Structured workflow ensuring accountability, compliance, and transparent delivery for {title}.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                <Image
                  src={image}
                  alt={`${title} Process`}
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/75 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFaqAccordion({ faqs }: { faqs: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="service-faq-heading" className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
            Common Questions
          </span>
          <h2 id="service-faq-heading" className="text-2xl sm:text-4xl font-black text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0F182A]/80 backdrop-blur-md overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors hover:bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </h3>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-400">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
