import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";

export const metadata: Metadata = {
  title: "About Us | BizLink Qatar",
  description:
    "Learn about Biz Link Trading and Contracting Services WLL under Pathas Group of Companies, our founding principles, philosophy, mission, vision, and corporate footprint across Qatar.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-white min-h-screen">
      <AboutSection isStandalonePage />
    </main>
  );
}
