"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does company formation and commercial licensing take in Qatar?",
    answer:
      "Under our express commercial setup track, standard Commercial Registration (CR), Trade Licensing, and Establishment Card approvals typically take 2 to 3 business days, provided all shareholder identification and initial documents are submitted.",
  },
  {
    question: "Can foreign nationals own 100% of a company in Qatar through BizLink?",
    answer:
      "Yes. In accordance with Qatar Foreign Investment Law No. 1 of 2019, foreign investors can hold up to 100% ownership in eligible commercial sectors. BizLink facilitates all Ministry of Commerce and Industry (MOCI) legal procedures from start to finish.",
  },
  {
    question: "Is your facility maintenance and pest control service available 24/7?",
    answer:
      "Yes. Our facility engineering, cleaning, and pest control divisions operate 24/7 emergency dispatch across Doha, Al Rayyan, Al Wakrah, and Lusail for both commercial properties and residential estates.",
  },
  {
    question: "How does the mobile automotive and glass service operate?",
    answer:
      "Prime Glass and Pathas Car Wash provide fully equipped mobile vans. We come directly to your office, residential villa, or commercial depot in Doha for on-site windshield replacement, rock chip repairs, and steam car washing.",
  },
  {
    question: "Do you supply industrial consumables and safety equipment in bulk?",
    answer:
      "Yes. Our trading division maintains verified warehouse stock of certified PPE, power tools, fasteners, electrical equipment, and building maintenance supplies with same-day delivery throughout Qatar.",
  },
  {
    question: "Where are your physical offices located in Doha?",
    answer:
      "BizLink operates two physical offices: our Head Office in Ain Khalid (Building 03, Zone 56, Street 340) and our Branch Office in Bin Mahmoud (Building 18, Zone 22, Street 840). Both are open Saturday through Thursday.",
  },
];

export function WireframeFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-24 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section matching "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ" from mockup */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
            COMMON INQUIRIES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Essential information regarding commercial setup, facility retainers, and operational logistics in Qatar.
          </p>
        </div>

        {/* Accordion List with First Item Open & Highlighted (Matching wireframe) */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isFirst = idx === 0;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-cyan-400/40 bg-[#0F2242] shadow-xl shadow-cyan-500/10"
                    : "border-white/10 bg-[#0F182A]/70 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-bold ${
                      isOpen ? "text-cyan-200" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-cyan-400 text-[#070B14] rotate-180"
                        : "bg-white/10 text-slate-300"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Have an unlisted question?{" "}
          <a
            href="https://wa.me/97450091006"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 font-bold hover:underline"
          >
            Chat directly with our advisors on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
