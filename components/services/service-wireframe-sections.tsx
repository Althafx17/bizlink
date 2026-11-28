"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Plus, Minus, ArrowRight } from "lucide-react";
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
  icons,
}: {
  subServices: readonly ServiceDivision["subServices"][number][];
  icons: Record<string, React.ReactNode>;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (idx: number) => {
    setActiveIndex(idx);
    if (!trackRef.current) return;
    const card = trackRef.current.children[idx] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#070B14] via-[#091526] to-[#070B14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Interactive Dot Indicators */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              What&apos;s Included
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white">
              Services Included
            </h2>
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Service slides">
            {subServices.map((sub, i) => (
              <button
                key={sub.id}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to ${sub.title}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex
                    ? "w-7 bg-cyan-400"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Horizontal Slider of Cards with Captions */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <div ref={trackRef} className="flex gap-5 w-max">
            {subServices.map((sub, idx) => (
              <Link
                key={sub.id}
                href={`#${sub.id}`}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group w-[260px] sm:w-[300px] shrink-0 rounded-2xl border overflow-hidden transition-all shadow-lg ${
                  idx === activeIndex
                    ? "border-cyan-400/60 bg-[#0F1E36]"
                    : "border-white/10 bg-[#0F182A]/80 hover:border-cyan-400/40"
                }`}
              >
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[#0B1B36] via-[#0F254B] to-[#0B1B36] flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 group-hover:scale-110 transition-transform">
                    {icons[sub.id]}
                  </span>
                  <span className="absolute top-3 left-3 text-[11px] font-mono font-bold text-white/40">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {sub.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-md">
                      {sub.badge}
                    </span>
                  )}
                </div>

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
    <section className="py-14 sm:py-20">
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
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
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
