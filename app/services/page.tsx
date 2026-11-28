import { shareMetadata } from "@/lib/site";
import {
  ServicesHeroSection,
  DivisionsOverviewSection,
} from "@/components/services/services-page-sections";
import { MobileBottomActionDock } from "@/components/shared/marketing-sections";

export const metadata = shareMetadata(
  "/services",
  "Our Services & Solutions - BizLink Qatar",
  "Explore BizLink Qatar's 32 verified services across Business & Corporate, Digital & Creative, Trading & Supply, Facility Management, and Automotive Care.",
);

export default function ServicesPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0 bg-[#070B14] overflow-x-clip">
      {/* 1. HERO (single, no card carousel) */}
      <ServicesHeroSection />

      {/* 2. DIVISIONS OVERVIEW (5 static scannable cards) */}
      <DivisionsOverviewSection />

      {/* Mobile Sticky Action Dock */}
      <MobileBottomActionDock />
    </main>
  );
}
