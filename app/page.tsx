import type { Metadata } from "next";
import {
  BrochureCover,
  SectorIconsBar,
  CompanyStory,
  ServicesDirectory,
  BranchCards,
  ContactBand,
  WhyBizLink,
  MobileBottomActionDock,
} from "@/components/brochure-sections";

export const metadata: Metadata = {
  title: "BizLink Qatar | All Business Solutions Under One Roof",
  description:
    "Biz Link Trading and Contracting Services WLL. Integrated corporate, trading, facility maintenance, automotive care, and digital creative solutions in Qatar under Pathas Group of Companies.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0">
      <BrochureCover />
      <SectorIconsBar />
      <CompanyStory />
      <ServicesDirectory />
      <WhyBizLink />
      <BranchCards />
      <ContactBand />
      <MobileBottomActionDock />
    </main>
  );
}
