import type { Metadata } from "next";
import {
  PageIntro,
  SectorIconsBar,
  ServicesDirectory,
  ContactBand,
  MobileBottomActionDock,
} from "@/components/brochure-sections";

export const metadata: Metadata = {
  title: "Our Services | 5 Core Divisions | BizLink Qatar",
  description:
    "Explore BizLink Qatar's 35+ services across Business & Corporate, Digital & Creative, Trading & Supply, Facility Management, and Automotive Care.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0">
      <PageIntro
        title="Our Services Directory"
        subtitle="All Business Solutions Under One Roof — 5 Dedicated Operational Divisions"
      />
      <SectorIconsBar />
      <ServicesDirectory detailed />
      <ContactBand />
      <MobileBottomActionDock />
    </main>
  );
}
