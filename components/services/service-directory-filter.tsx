"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { services } from "@/content/services";
import {
  directoryCategories,
  totalCatalogServiceCount,
} from "@/content/services-directory";

const divisionBadgeColors: Record<string, string> = {
  "business-corporate": "bg-sky-500/15 border-sky-400/30 text-sky-300",
  "digital-creative": "bg-orange-500/15 border-orange-400/30 text-orange-300",
  "trading-supply": "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
  "facility-maintenance": "bg-cyan-500/15 border-cyan-400/30 text-cyan-300",
  automotive: "bg-amber-500/15 border-amber-400/30 text-amber-300",
};

interface FlattenedServiceItem {
  id: string;
  divisionId: string;
  divisionNumber: string;
  divisionName: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
}

export function CompleteServiceDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allServices: FlattenedServiceItem[] = useMemo(
    () =>
      services.flatMap((division) =>
        division.subServices.map((sub) => ({
          id: sub.id,
          divisionId: division.id,
          divisionNumber: division.number,
          divisionName: division.name,
          title: sub.title,
          tagline: sub.tagline,
          description: sub.description,
          image: sub.image,
          deliverables: sub.deliverables,
        }))
      ),
    []
  );

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allServices.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.divisionId === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        item.title.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.divisionName.toLowerCase().includes(query) ||
        item.deliverables.some((d) => d.toLowerCase().includes(query))
      );
    });
  }, [allServices, selectedCategory, searchQuery]);

  return (
    <section
      id="service-directory"
      aria-labelledby="directory-heading"
      className="scroll-mt-24 py-16 sm:py-24 bg-[#070B14] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + Total Count */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400">
              Complete Service Directory
            </p>
            <h2
              id="directory-heading"
              className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight"
            >
              Find the Right Service for Your Business
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-300">
            Showing <span className="text-cyan-300 font-bold">{filteredServices.length}</span> of{" "}
            <span className="text-white font-bold">{totalCatalogServiceCount}</span> services across 5 divisions
          </p>
        </div>

        {/* Search Input + Category Filter Bar */}
        <div className="rounded-2xl border border-white/10 bg-[#0B1528]/90 p-4 sm:p-5 mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., Company Formation, SEO, Wholesale Cargo, AMC, Windshield)..."
              aria-label="Search BizLink services"
              className="w-full min-h-[48px] rounded-xl border border-white/15 bg-[#070B14] pl-11 pr-11 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div
            role="group"
            aria-label="Filter services by business division"
            className="flex flex-wrap gap-2"
          >
            {directoryCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={isSelected}
                  className={`inline-flex min-h-[44px] items-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? "bg-[#0088CE] text-white shadow-md shadow-cyan-500/20"
                      : "border border-white/15 bg-[#070B14]/80 text-slate-300 hover:border-cyan-400/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Single Unified Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((item) => {
              const badgeStyle =
                divisionBadgeColors[item.divisionId] ??
                "bg-cyan-500/15 border-cyan-400/30 text-cyan-300";

              return (
                <article
                  key={`${item.divisionId}-${item.id}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B1528]/85 hover:border-cyan-400/45 transition-colors"
                >
                  <div>
                    {/* Distinct Real Photo */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070B14]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-transparent to-transparent pointer-events-none" />
                      <span
                        className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md bg-[#070B14]/75 ${badgeStyle}`}
                      >
                        {item.divisionName}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-cyan-400">
                        {item.tagline}
                      </p>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Explore Service Link */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/10">
                    <Link
                      href={`/services/${item.divisionId}#${item.id}`}
                      className="inline-flex min-h-[44px] w-full items-center justify-between text-xs sm:text-sm font-bold text-cyan-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
                    >
                      <span>Explore Service</span>
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#0B1528]/60 p-10 text-center space-y-4">
            <p className="text-base font-bold text-white">
              No matching services found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-sm text-slate-400">
              Try clearing your filter or search for terms like licensing, trading, cleaning, SEO, or windshield.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-2.5 text-sm font-bold text-cyan-300 hover:bg-cyan-500/20 cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
