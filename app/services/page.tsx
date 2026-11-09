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
    border: "border-t-[#FF6B00]",
    badge: "bg-[#FF6B00] text-white",
    heading: "text-[#FF8A3D]",
  },
  orange: {
    border: "border-t-[#FFA048]",
    badge: "bg-[#FFA048] text-[#0F1B3D]",
    heading: "text-[#FFA048]",
  },
  green: {
    border: "border-t-[#FF6B00]",
    badge: "bg-[#FF6B00] text-white",
    heading: "text-[#FF8A3D]",
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
    <main id="main-content" className="bg-transparent pt-16 sm:pt-20">
      <section aria-labelledby="services-title" className="border-b border-white/20 bg-transparent">
        <div className="shell pt-14 pb-10 sm:pt-20 sm:pb-12">
          <div aria-hidden="true" className="mb-5 flex gap-1">
            <span className="h-1 w-7 rounded-full bg-[#FF6B00]" />
            <span className="h-1 w-7 rounded-full bg-[#FFA048]" />
            <span className="h-1 w-7 rounded-full bg-white/40" />
          </div>
          <h1 id="services-title" className="text-5xl leading-none font-extrabold tracking-tight sm:text-7xl">Our services</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            BIZ LINK - QATAR offers integrated solutions across Business, Trading, Facility, Automotive and Digital Services in Qatar.
          </p>
          <nav aria-label="Service categories" className="mt-8">
            <ul className="flex flex-wrap gap-2.5">
              {services.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-block rounded-full border border-white/20 px-3.5 py-2 text-sm font-bold text-white hover:bg-white/5">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="shell py-12 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
          {services.map(({ id, title }, index) => {
            const { color, items } = categoryDetails[id];
            const palette = categoryColors[color];

            return (
              <section
                key={id}
                id={id}
                aria-labelledby={`${id}-title`}
                className={`scroll-mt-6 rounded-xl border border-white/20 border-t-4 bg-white/5 p-5 sm:p-8 md:last:col-span-2 ${palette.border}`}
              >
                {id !== "automotive" && (
                  <span id={id.split("-")[0]} className="block scroll-mt-6" aria-hidden="true" />
                )}
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className={`grid size-9 shrink-0 place-items-center rounded-md text-sm font-extrabold tabular-nums ${palette.badge}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`${id}-title`} className={`text-base font-extrabold tracking-wide uppercase sm:text-xl ${palette.heading}`}>
                    {title}
                  </h2>
                </div>
                <ul className={`mt-5 divide-y divide-line border-t border-line text-sm leading-relaxed text-white sm:text-base ${id === "digital-creative" ? "md:columns-2 md:gap-10 md:divide-y-0 md:border-t-0" : ""}`}>
                  {items.map((item) => (
                    <li key={item} className={`break-inside-avoid py-2.5 ${id === "digital-creative" ? "md:border-t md:border-line" : ""}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#FF6B00] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E65A00]">
          Get a Free Quote <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
