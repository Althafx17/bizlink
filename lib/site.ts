import type { Metadata } from "next";
import { branches, company } from "@/content/company";

export const siteUrl = new URL(process.env.SITE_URL || "https://www.bizlinkqatar.com");

export function shareMetadata(path: string, title: string, description: string): Metadata {
  const images = [{ url: "/images/doha-daytime.webp", alt: "Daytime Doha skyline" }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "BizLink Qatar", url: path, title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BizLink Trading and Contracting GALLERY WLL",
  url: siteUrl.href,
  image: new URL("/images/doha-daytime.webp", siteUrl).href,
  telephone: ["+97477661037", "+97450091006"],
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building 28, Unit 7, Zone 22, Street 342, Al Jazeera Street, Bin Mahmoud",
    addressLocality: "Doha",
    addressCountry: "QA",
    postOfficeBoxNumber: "13710",
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(branches[1].mapsQuery),
};

export const publicPaths = ["/", "/about", "/GALLERY", "/contact", "/privacy"];
