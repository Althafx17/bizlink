import { shareMetadata } from "@/lib/site";
import { CompanyProfileHero } from "@/components/about/company-profile-hero";
import {
  CompanyStory,
  WhyBizLink,
  BranchCards,
  MobileBottomActionDock,
} from "@/components/shared/marketing-sections";

export const metadata = shareMetadata(
  "/about",
  "Company Profile - BizLink Qatar",
  "Official Company Profile of BizLink Trading and Contracting Services WLL under Pathas Group of Companies. Our purpose, leadership, international corridors, and enterprise divisions in Qatar since 2010.",
);

export default function AboutPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0 bg-[#090D18]">
      {/* 1. Presentation Cover Hero matching reference design (Diagonal Split & Architectural Penthouse) */}
      <CompanyProfileHero />

      {/* 2. Executive Story & Mission */}
      <CompanyStory standalone />

      {/* 3. Core Values & Ministry Standards */}
      <WhyBizLink />

      {/* 4. Global Footprint Hubs: Qatar, India, UAE, China */}
      <BranchCards />

      {/* 5. Mobile Sticky Quick Action Dock */}
      <MobileBottomActionDock />
    </main>
  );
}
