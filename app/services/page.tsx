import { shareMetadata } from "@/lib/site";
import { ServicesHeroPresentation } from "@/components/services/services-hero-presentation";
import {
  SectorIconsBar,
  ServicesDirectory,
  ContactBand,
  MobileBottomActionDock,
} from "@/components/brochure-sections";

export const metadata = shareMetadata(
  "/services",
  "Our Services & Solutions - BizLink Qatar",
  "Explore BizLink Qatar's 35+ verified enterprise services across Business & Corporate, Digital & Creative, Trading & Supply, Facility Management, and Automotive Care.",
);

export default function ServicesPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0 bg-[#070A10]">
      {/* 1. Services Hero Presentation Cover matching reference design (3D Fanned-out Cards & Gold Accents) */}
      <ServicesHeroPresentation />

      {/* 2. Operational Sectors & Highlights */}
      <SectorIconsBar />

      {/* 3. Comprehensive Itemized 35+ Services Directory */}
      <ServicesDirectory detailed />

      {/* 4. Consultation & Contact */}
      <ContactBand />

      {/* 5. Mobile Sticky Dock */}
      <MobileBottomActionDock />
    </main>
  );
}
