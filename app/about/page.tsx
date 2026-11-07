import type { Metadata } from "next";
import Link from "next/link";
import { CompanyOverview } from "@/components/company-overview";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Biz Link Trading and Contracting Services WLL, its business purpose, mission, vision and values.",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="text-sm font-bold tracking-wide">BizLink Qatar</Link>
          <nav aria-label="Main navigation">
            <ul className="header-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about" aria-current="page" className="font-bold text-white">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main-content" className="bg-transparent">
        <CompanyOverview standalone />
      </main>
    </>
  );
}
