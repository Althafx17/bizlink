import { shareMetadata } from "@/lib/site";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactCardsSection } from "@/components/contact/contact-cards-section";
import { ContactMapSection } from "@/components/contact/contact-map-section";
import { WhyBizLink, MobileBottomActionDock } from "@/components/shared/marketing-sections";

export const metadata = shareMetadata(
  "/contact",
  "Contact BizLink Qatar · Branches, Hotline & Advisory",
  "Connect with BizLink Trading and Contracting Services W.L.L. in Doha, Qatar. Ain Khalid Head Office & Bin Mahmoud Typing Centre. Call +974 5009 1006 or email info@bizlinkqatar.com.",
);

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070B14] pb-16 md:pb-0 text-white selection:bg-cyan-500 selection:text-white">
      {/* 1. Curved Framed Contact Hero with Blue Background */}
      <ContactHero />

      {/* 2. Main Two-Column Section: Glassmorphism Cards with Background Images + Interactive Form */}
      <ContactCardsSection />

      {/* 3. Interactive Doha Locations Map with Direction Overlays */}
      <ContactMapSection />

      {/* 4. Why BizLink Trust Credentials */}
      <WhyBizLink />

      {/* 5. Mobile Floating Action Bar */}
      <MobileBottomActionDock />
    </main>
  );
}
