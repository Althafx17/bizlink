import type { Metadata } from "next";
import { CompanyOverview } from "@/components/company-overview";
import { LandingHero } from "@/components/landing-hero";

export const metadata: Metadata = {
  title: "Hero preview",
  description: "Preview of the BizLink landing hero and company overview.",
  robots: { index: false, follow: false },
};

export default function HeroPreviewPage() {
  return (
    <main>
      <LandingHero homeHref="/hero-preview" about={<CompanyOverview />} />
    </main>
  );
}
