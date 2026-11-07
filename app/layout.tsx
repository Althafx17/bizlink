import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";

const siteTitle = "BizLink Trading and Contracting Services WLL";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | BizLink",
  },
  description: "BizLink Trading and Contracting Services WLL in Doha, Qatar.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<SiteFooter /></body>
    </html>
  );
}
