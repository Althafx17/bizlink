import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import type { SubService } from "@/content/services";

interface SubServiceDetailCardProps {
  sub: SubService;
  index: number;
  serviceTitle: string;
  whatsappNumber: string;
}

export function SubServiceDetailCard({
  sub,
  index,
  serviceTitle,
  whatsappNumber,
}: SubServiceDetailCardProps) {
  const visibleDeliverables = sub.deliverables.slice(0, 5);
  const additionalDeliverables = sub.deliverables.slice(5);

  const deliverableList = (items: string[], startIndex = 0) => items.map((item, itemIdx) => (
    <div key={`${item}-${startIndex + itemIdx}`} className="flex items-start gap-2.5 text-xs text-slate-200">
      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
      <span className="leading-snug">{item}</span>
    </div>
  ));

  return (
    <article
      id={sub.id}
      className="ui-card group relative overflow-hidden p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-400/15 border border-cyan-400/30 text-xs font-black text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          {sub.badge && (
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-md">
              {sub.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-black uppercase text-white group-hover:text-cyan-300 transition-colors">
          {sub.title}
        </h3>
        <p className="text-xs font-bold text-cyan-300 mt-1 uppercase tracking-wider">{sub.tagline}</p>
        <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">{sub.description}</p>

        <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
            Key Deliverables &amp; Inclusions:
          </span>
          {deliverableList(visibleDeliverables)}
          {additionalDeliverables.length > 0 && (
            <details className="group/details pt-1">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white">
                <span className="group-open/details:hidden">View More</span>
                <span className="hidden group-open/details:inline">View Less</span>
                <ArrowRight size={13} className="transition-transform group-open/details:rotate-90" />
              </summary>
              <div className="mt-2.5 space-y-2.5">{deliverableList(additionalDeliverables, 5)}</div>
            </details>
          )}
        </div>
      </div>

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
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello BizLink Qatar, I am interested in your ${sub.title} under ${serviceTitle}.`)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-bold text-cyan-300 hover:text-white transition-colors w-fit"
        >
          <span>Inquire via WhatsApp</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </article>
  );
}
