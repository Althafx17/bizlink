import type { Metadata } from "next";
import {
  PageIntro,
  BranchCards,
  ContactBand,
  WhyBizLink,
  MobileBottomActionDock,
} from "@/components/brochure-sections";

export const metadata: Metadata = {
  title: "Contact & Branches | BizLink Qatar",
  description:
    "Visit BizLink's Ain Khalid Head Office or Bin Mahmoud Branch in Doha, Qatar. Call +974 5009 1006 or +974 7766 1037, or email bizlink.qa@gmail.com.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0">
      <PageIntro
        title="Our Branches & Contact"
        subtitle="Two Locations in Doha · Same Commitment to Commercial Excellence"
      />
      <BranchCards />
      <ContactBand social />
      <WhyBizLink />
      <MobileBottomActionDock />
    </main>
  );
}
