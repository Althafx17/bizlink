import type { Metadata } from "next";
import {
  PageIntro,
  CompanyStory,
  WhyBizLink,
  BranchCards,
  MobileBottomActionDock,
} from "@/components/brochure-sections";

export const metadata: Metadata = {
  title: "About BizLink Qatar | Company Overview & Pathas Group",
  description:
    "About Biz Link Trading and Contracting Services WLL under Pathas Group of Companies. Our purpose, vision, mission, and 5 core values in Qatar since 2010.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0">
      <PageIntro
        title="Company Overview"
        subtitle="Trust · Integrity · Growth · Pathas Group of Companies Since 2010"
      />
      <CompanyStory standalone />
      <WhyBizLink />
      <BranchCards />
      <MobileBottomActionDock />
    </main>
  );
}
