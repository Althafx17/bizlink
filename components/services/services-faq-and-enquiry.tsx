"use client";

import { useActionState, useId, useState } from "react";
import {
  CheckCircle2,
  Mail,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Send,
} from "lucide-react";
import { services } from "@/content/services";
import { company } from "@/content/company";
import { servicesPageFaqs } from "@/content/services-directory";
import { sendEnquiry, type ActionState } from "@/app/contact/actions";

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 9: ACCESSIBLE FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════════════════ */
export function ServicesFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      aria-labelledby="services-faq-heading"
      className="py-16 sm:py-20 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
            Service Enquiries &amp; Details
          </p>
          <h2
            id="services-faq-heading"
            className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-sm text-slate-300">
            Confirmed details on BizLink&apos;s divisions, Doha locations, quotations, and service coverage.
          </p>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0B1528]/85 overflow-hidden">
          {servicesPageFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const buttonId = `${baseId}-btn-${idx}`;
            const panelId = `${baseId}-panel-${idx}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.03] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
                  >
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-cyan-300">
                      {isOpen ? (
                        <Minus size={15} aria-hidden="true" />
                      ) : (
                        <Plus size={15} aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-5 sm:pb-6"
                >
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 10: FINAL CTA & QUOTATION ENQUIRY FORM
   ═══════════════════════════════════════════════════════════════════════════ */
export function ServicesEnquirySection() {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>(services[0].id);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>("");

  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    sendEnquiry,
    {}
  );

  const selectedDivision =
    services.find((d) => d.id === selectedDivisionId) ?? services[0];

  const fieldClasses =
    "w-full min-h-[46px] rounded-xl border border-white/15 bg-[#070B14] px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30";

  const prefilledWhatsappText = state?.submittedData
    ? `Hello BizLink Qatar,\n\nName: ${state.submittedData.name}${
        state.submittedData.companyName ? `\nCompany: ${state.submittedData.companyName}` : ""
      }\nEmail: ${state.submittedData.email}${
        state.submittedData.phone ? `\nPhone: ${state.submittedData.phone}` : ""
      }\nDivision: ${state.submittedData.division}\nService: ${
        state.submittedData.service || "General Division Enquiry"
      }\nRequirement: ${state.submittedData.message}`
    : "Hello BizLink Qatar, I would like to discuss my business requirements and request a quotation.";

  return (
    <section
      id="service-enquiry"
      aria-labelledby="final-enquiry-heading"
      className="scroll-mt-24 py-16 sm:py-24 bg-[#070E1A]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: CTA Heading, Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
                Direct Division Coordination
              </p>
              <h2
                id="final-enquiry-heading"
                className="mt-2 text-3xl sm:text-4xl font-black text-white leading-tight"
              >
                Looking for the Right Business Solution?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell us what your business needs. Our team can help direct your enquiry to the relevant division.
              </p>
            </div>

            {/* Direct Contact Methods */}
            <div className="space-y-3 pt-2">
              <a
                href={`${company.whatsappUrl}?text=${encodeURIComponent(prefilledWhatsappText)}`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[48px] items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1528] p-4 hover:border-cyan-400/50 transition-colors"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-[#25D366]">
                  <MessageCircle size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-slate-400">
                    WhatsApp Consultation
                  </span>
                  <span className="block text-sm font-bold text-white">
                    {company.whatsappLabel}
                  </span>
                </div>
              </a>

              <a
                href={company.phones[0].href}
                className="flex min-h-[48px] items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1528] p-4 hover:border-cyan-400/50 transition-colors"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-slate-400">
                    Doha Business Hotline
                  </span>
                  <span className="block text-sm font-bold text-white">
                    {company.phones[0].label}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex min-h-[48px] items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1528] p-4 hover:border-cyan-400/50 transition-colors"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-slate-400">
                    Corporate Email
                  </span>
                  <span className="block text-sm font-bold text-white">
                    {company.email}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Quotation / Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0B1528] p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Discuss Your Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Complete the structured brief below so the appropriate BizLink division can respond with accurate details.
            </p>

            <form action={formAction} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="block text-xs font-semibold text-slate-200">
                    Full Name <span className="text-cyan-400">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClasses}
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="block text-xs font-semibold text-slate-200">
                    Company Name
                  </span>
                  <input
                    type="text"
                    name="companyName"
                    maxLength={160}
                    autoComplete="organization"
                    placeholder="Organization (optional)"
                    className={fieldClasses}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="block text-xs font-semibold text-slate-200">
                    Email <span className="text-cyan-400">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="name@company.com"
                    className={fieldClasses}
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="block text-xs font-semibold text-slate-200">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={50}
                    autoComplete="tel"
                    placeholder="+974 XXXX XXXX"
                    className={fieldClasses}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="block text-xs font-semibold text-slate-200">
                    Division Selection
                  </span>
                  <select
                    name="division"
                    value={selectedDivisionId}
                    onChange={(e) => {
                      setSelectedDivisionId(e.target.value);
                      setSelectedServiceTitle("");
                    }}
                    className={fieldClasses}
                  >
                    {services.map((div) => (
                      <option key={div.id} value={div.id}>
                        {div.number} · {div.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block space-y-1.5">
                  <span className="block text-xs font-semibold text-slate-200">
                    Required Service
                  </span>
                  <select
                    name="service"
                    value={selectedServiceTitle}
                    onChange={(e) => setSelectedServiceTitle(e.target.value)}
                    className={fieldClasses}
                  >
                    <option value="">General {selectedDivision.name} Enquiry</option>
                    {selectedDivision.subServices.map((sub) => (
                      <option key={sub.id} value={sub.title}>
                        {sub.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="block text-xs font-semibold text-slate-200">
                  Requirement Description <span className="text-cyan-400">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={2500}
                  placeholder="Describe what your business needs (scope, location in Qatar, preferred timeline)..."
                  className={`${fieldClasses} min-h-[110px] resize-y`}
                />
              </label>

              {state?.error && (
                <p
                  role="alert"
                  className="rounded-xl border border-amber-400/35 bg-amber-500/10 px-4 py-3 text-xs sm:text-sm text-amber-200"
                >
                  {state.error}
                </p>
              )}

              {state?.success && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-4 space-y-3"
                >
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-200">
                    <CheckCircle2 size={18} aria-hidden="true" className="shrink-0 mt-0.5 text-emerald-400" />
                    <span>{state.message}</span>
                  </div>
                  {!state.delivered && (
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <a
                        href={`${company.whatsappUrl}?text=${encodeURIComponent(prefilledWhatsappText)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-xs font-bold text-slate-950 hover:brightness-105 transition-all"
                      >
                        <MessageCircle size={15} aria-hidden="true" />
                        <span>Send via WhatsApp</span>
                      </a>
                      <a
                        href={`mailto:${company.email}?subject=${encodeURIComponent(
                          `BizLink Enquiry: ${state.submittedData?.service || state.submittedData?.division || "Service Request"}`
                        )}&body=${encodeURIComponent(prefilledWhatsappText)}`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all"
                      >
                        <Mail size={15} aria-hidden="true" />
                        <span>Open in Email Client</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all disabled:opacity-60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Send size={16} aria-hidden="true" />
                <span>{isPending ? "Validating & Sending…" : "Discuss Your Requirements"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
