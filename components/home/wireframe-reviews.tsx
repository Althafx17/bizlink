"use client";

import { CheckCircle2, MessageSquare, Star } from "lucide-react";

interface ReviewItem {
  id: string;
  author: string;
  role: string;
  company: string;
  comment: string;
  serviceBadge: string;
}

const reviews: ReviewItem[] = [
  {
    id: "r1",
    author: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Al-Mansoor Trading WLL",
    comment:
      "BizLink orchestrated our 100% foreign ownership corporate registration and MOCI approvals in under 48 hours. Absolute precision and professional PRO team.",
    serviceBadge: "CR & Licensing",
  },
  {
    id: "r2",
    author: "Sarah Henderson",
    role: "Operations Head",
    company: "West Bay Commercial Tower",
    comment:
      "Their 24/7 facility maintenance and pest control teams are responsive and punctual. Having a single trusted contractor for all MEP needs has streamlined our property.",
    serviceBadge: "Facility AMC",
  },
  {
    id: "r3",
    author: "Rashid Al-Kuwari",
    role: "Fleet Logistics Lead",
    company: "Doha Express Logistics",
    comment:
      "Prime Glass and Pathas mobile car wash service keep our commercial fleet immaculate. Prompt doorstep service right across our logistics warehouses in Industrial Area.",
    serviceBadge: "Automotive Fleet",
  },
  {
    id: "r4",
    author: "Mohammed V. K.",
    role: "General Contractor",
    company: "Gulf Vertex Engineering",
    comment:
      "Pathas Group supplies our construction sites with certified safety gear and industrial hardware. Genuine stock and same-day delivery across Qatar.",
    serviceBadge: "Industrial Trading",
  },
];

export function WireframeReviews() {
  return (
    <section
      id="reviews"
      aria-label="Client Reviews"
      className="py-16 sm:py-24 bg-[#090D18] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Section matching "ОТЗЫВЫ" from mockup */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
              VERIFIED FEEDBACK
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              Reviews
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#0F182A] px-4 py-2 rounded-full border border-white/10 self-start sm:self-auto">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">5.0</span>
            <span className="text-[11px] text-slate-400">· 1,000+ Clients in Qatar</span>
          </div>
        </div>

        {/* DESKTOP: 4 Cards in 1 Row | MOBILE: 2x2 Grid (Exact wireframe layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl border border-white/10 bg-[#0F182A] p-5 flex flex-col justify-between transition-all hover:border-cyan-400/40 hover:bg-[#121E36] group"
            >
              <div>
                {/* Header with avatar chip & badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0056B3] to-[#0088CE] text-white font-black text-xs shadow-md">
                      {rev.author[0]}
                    </span>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {rev.author}
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        {rev.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/25">
                    {rev.serviceBadge}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="mt-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom verified badge */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300 truncate">{rev.company}</span>
                <span className="flex items-center gap-1 text-emerald-400 text-[10px] shrink-0 font-bold">
                  <CheckCircle2 size={12} />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/97450091006?text=Hello%20BizLink%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20GALLERY%20and%20client%20references."
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors"
          >
            Leave Feedback / Inquire References →
          </a>
        </div>

      </div>
    </section>
  );
}
