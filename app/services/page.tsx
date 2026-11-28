import { shareMetadata } from "@/lib/site";
import {
  ServicesHeroSection,
  DivisionsOverviewSection,
  DetailedDivisionsSection,
  WhyChooseBizLinkSection,
  HowWeWorkSection,
  IndustriesServedSection,
  ProjectsPartnersTrustSection,
} from "@/components/services/services-page-sections";
import { CompleteServiceDirectory } from "@/components/services/service-directory-filter";
import {
  ServicesFaqSection,
  ServicesEnquirySection,
} from "@/components/services/services-faq-and-enquiry";
import { MobileBottomActionDock } from "@/components/shared/marketing-sections";

export const metadata = shareMetadata(
  "/services",
  "Our Services & Business Directory - BizLink Qatar",
  "Explore BizLink Qatar's 32 integrated services across Business & Corporate, Digital & Creative, Trading & Supply, Facility Management, and Automotive Care. Serving Qatar since 2010.",
);

export default function ServicesPage() {
  return (
    <main id="main-content" className="pb-16 md:pb-0 bg-[#070B14] overflow-x-clip text-white">
      {/* 1. Hero — Two-column business overview + 5-division architectural panel */}
      <ServicesHeroSection />

      {/* 2. Five Core Business Divisions Overview */}
      <DivisionsOverviewSection />

      {/* 3. Complete Service Directory — Interactive Search & Division Filters */}
      <CompleteServiceDirectory />

      {/* 4. Detailed Division Information — Alternating Layout for Each of the 5 Divisions */}
      <DetailedDivisionsSection />

      {/* 5. Why Choose BizLink? — Strictly Verified Credentials */}
      <WhyChooseBizLinkSection />

      {/* 6. How We Work — 5-Step Process Timeline */}
      <HowWeWorkSection />

      {/* 7. Industries We Serve */}
      <IndustriesServedSection />

      {/* 8. Projects, Partners & Trust — Verified Registrations & Sister Entities */}
      <ProjectsPartnersTrustSection />

      {/* 9. Frequently Asked Questions — Accessible Accordion */}
      <ServicesFaqSection />

      {/* 10. Final CTA & Structured Quotation Enquiry Form */}
      <ServicesEnquirySection />

      {/* Mobile Quick Action Dock */}
      <MobileBottomActionDock />
    </main>
  );
}
