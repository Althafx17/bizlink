import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { siteUrl, localBusiness } from "@/lib/site";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteTitle = "BizLink Trading and Contracting Services WLL";

export const viewport: Viewport = {
  themeColor: "#0056B3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s | BizLink",
  },
  description: "BizLink Trading and Contracting Services WLL in Doha, Qatar.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const analyticsId = process.env.NEXT_PUBLIC_GA_ID;
  const analyticsEnabled = analyticsId && /^G-[A-Z0-9]+$/.test(analyticsId);

  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if (location.pathname === '/' && matchMedia('(prefers-reduced-motion: no-preference)').matches) document.documentElement.dataset.homeMotion = 'pending';` }} />
      </head>
      <body className={inter.className}>
        {/* <a className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-[#071426] focus:p-3" href="#main-content">
          Skip to content
        </a> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {analyticsEnabled && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
            <Script id="bizlink-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${analyticsId}');`}
            </Script>
          </>
        )}
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
