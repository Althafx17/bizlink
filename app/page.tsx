import { shareMetadata } from "@/lib/site";
import { WireframeHero } from "@/components/home/wireframe-hero";
import { WireframeAbout } from "@/components/home/wireframe-about";
import { SisterConcernCompanies, WireframeVisionMission } from "@/components/home/wireframe-vision-mission";
import { WireframeGallery } from "@/components/home/wireframe-gallery";
import { WireframeContacts } from "@/components/home/wireframe-contacts";
import { MobileBottomActionDock } from "@/components/shared/marketing-sections";

export const metadata = shareMetadata(
  "/",
  "Business Services in Doha, Qatar",
  "BizLink Trading and Contracting Services WLL. Integrated corporate, trading, facility maintenance, automotive care, and digital creative solutions in Qatar under Pathas Group of Companies.",
);

export default function HomePage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0 bg-[#070B14]">
      {/* 1. Hero: Split Editorial Headline & 3D Showcase Card (Desktop) / Vertical Stack (Mobile) */}
      <WireframeHero />

      {/* 2. About Us: Corporate Photo & 3 Feature Pillars (Speed, Standards, Hubs) */}
      <WireframeAbout />

      {/* 3. Vision and Mission: Positioned above Services per user instruction */}
      <WireframeVisionMission />

      {/* 4. Services: 5 Core Operational Divisions */}
      <WireframeGallery />

      {/* 5. Sister Concerns: Group companies positioned after the service divisions */}
      <SisterConcernCompanies />

      {/* WireframeReviews (VERIFIED FEEDBACK): Hidden per user instruction */}
      {/* WireframeLoyalty (ENTERPRISE CONTRACTS): Hidden per user instruction */}

      {/* 6. Pricing & Scope: Itemized List with Dotted Leaders & Portrait Showcase Card */}
      {/* <WireframePricing /> */}

      {/* WireframeFaq (FAQ): Hidden per user instruction */}

      {/* 7. Contacts & Location: Floating Card with Google Map Integration */}
      <WireframeContacts />

      {/* Mobile Sticky Action Dock for Instant WhatsApp & Calls */}
      <MobileBottomActionDock />
    </main>
  );
}
