import type { Metadata } from "next";
import { CompanyOverview } from "@/components/company-overview";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Biz Link Trading and Contracting Services WLL, its business purpose, mission, vision and values.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-transparent pt-20 sm:pt-24">
      <CompanyOverview standalone />
    </main>
  );
}
