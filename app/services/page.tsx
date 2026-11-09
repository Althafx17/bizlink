import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore BizLink Qatar’s business and corporate, trading and supply, facility and maintenance, automotive, and digital and creative services.",
};

const categoryColors = {
  blue: {
    border: "border-t-[#D35400]",
    badge: "bg-[#D35400] text-white",
    heading: "text-[#FFA048]",
  },
  orange: {
    border: "border-t-[#FFA048]",
    badge: "bg-[#FFA048] text-[#0F1B3D]",
    heading: "text-[#FFA048]",
  },
  green: {
    border: "border-t-[#D35400]",
    badge: "bg-[#D35400] text-white",
    heading: "text-[#FFA048]",
  },
} as const;

const categoryDetails = {
  "business-corporate": {
    color: "blue",
    items: [
      "Business Consulting & Company Formation",
      "CR, Licensing & Government Services",
      "Qatari Sponsor Arrangements",
      "Typing, PRO & Documentation Services",
      "Translation & Attestation",
      "Bank Account & WPS Assistance",
      "Auditing & Bookkeeping",
      "E-Commerce & Online Business Setup",
    ],
  },
  "trading-supply": {
    color: "orange",
    items: [
      "General, Retail & Wholesale Trading",
      "Department Store & Lifestyle Products",
      "Vehicle Spare Parts",
      "Bulk Procurement & Cargo Services",
      "Own-Brand Perfumes & Fragrances",
      "Custom Fragrance Blending",
      "Made in Qatar Perfumes (6ml–50ml)",
      "Retail, Wholesale & Hypermarket Supply",
    ],
  },
  "facility-maintenance": {
    color: "green",
    items: [
      "Facility & Hospitality Management",
      "Cleaning & Pest Control",
      "Gypsum Board & Glass Partition Works",
      "Electrical & Plumbing Works",
      "Floor Tiling & Polishing",
      "General Property Maintenance",
      "Annual Maintenance Contracts (AMC)",
    ],
  },
  automotive: {
    color: "blue",
    items: [
      "Mobile Car Wash & Detailing",
      "Car Interior Cleaning",
      "Mobile Auto Glass Services",
      "Windshield Inspection, Repair & Replacement",
      "Vehicle Glass Replacement",
      "On-Site Auto Glass Services",
    ],
  },
  "digital-creative": {
    color: "orange",
    items: [
      "Digital Marketing & SEO",
      "Website & E-Commerce Development",
      "Social Media Management",
      "Content Creation & AI Video",
      "Branding & Graphic Design",
      "Weekly & Monthly Digital Packages",
    ],
  },
} satisfies Record<(typeof services)[number]["id"], {
  color: keyof typeof categoryColors;
  items: readonly string[];
}>;

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-transparent pt-20 sm:pt-28">
      <section aria-labelledby="services-title" className="border-b border-white/20 bg-transparent">
        <div className="shell pt-14 pb-10 sm:pt-20 sm:pb-12">
          <div aria-hidden="true" className="mb-5 flex gap-1">
            <span className="h-1 w-7 rounded-full bg-[#D35400]" />
            <span className="h-1 w-7 rounded-full bg-[#FFA048]" />
            <span className="h-1 w-7 rounded-full bg-white/40" />
          </div>
          <h1 id="services-title" className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.2]">
            Our services
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            BIZ LINK - QATAR offers integrated solutions across Business, Trading, Facility, Automotive and Digital Services in Qatar.
          </p>
          <nav aria-label="Service categories" className="mt-8">
            <ul className="flex flex-wrap gap-2.5">
              {services.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 hover:border-[#D35400]"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="shell py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map(({ id, title }, index) => {
            const { color, items } = categoryDetails[id];
            const palette = categoryColors[color];

            return (
              <section
                key={id}
                id={id}
                aria-labelledby={`${id}-title`}
                className={`scroll-mt-24 rounded-2xl border border-white/20 border-t-4 bg-white/5 p-6 sm:p-8 shadow-[0_8px_20px_rgba(0,0,0,0.25)] md:last:col-span-2 ${palette.border}`}
              >
                {id !== "automotive" && (
                  <span id={id.split("-")[0]} className="block scroll-mt-24" aria-hidden="true" />
                )}
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`grid size-9 shrink-0 place-items-center rounded-lg text-sm font-extrabold tabular-nums shadow-sm ${palette.badge}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    id={`${id}-title`}
                    className={`text-base font-extrabold tracking-wide uppercase sm:text-xl ${palette.heading}`}
                  >
                    {title}
                  </h2>
                </div>

                {/* Elevated Service Cards replacing flat lists */}
                <div className={`mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 ${id === "digital-creative" ? "lg:grid-cols-3" : ""}`}>
                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-white shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-all hover:bg-white/[0.08] hover:border-white/20"
                    >
                      <span className="size-2 rounded-full bg-[#D35400] shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D35400] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#D35400]/30 transition-all hover:bg-[#B84300] hover:shadow-xl hover:scale-[1.02]"
        >
          <span>Get a Free Quote</span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
