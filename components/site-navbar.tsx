"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Don't render inside the isolated hero preview page
  if (pathname === "/hero-preview") {
    return null;
  }

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-5xl rounded-full bg-[#0F1B3D]/85 backdrop-blur-md border border-white/15 shadow-2xl shadow-black/50 py-2 sm:py-2.5 px-3 sm:px-6"
          : "top-0 left-0 right-0 w-full bg-[#0F1B3D]/40 backdrop-blur-sm border-b border-white/10 py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8"
      }`}
    >
      <div className={`flex items-center justify-between ${isScrolled ? "w-full" : "max-w-7xl mx-auto"}`}>
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-full"
          aria-label="BizLink Qatar Home"
        >
          <span className="relative flex size-9 items-center justify-center rounded-lg bg-white/10 p-1 ring-1 ring-white/15 transition-transform group-hover:scale-105">
            <Image
              src="/images/bizlink-logo-transparent-1.png"
              alt="BizLink"
              width={36}
              height={36}
              className="h-6 w-auto object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-white">
              BizLink<span className="text-[#FF6B00]">.</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#FFA048] uppercase">
              Qatar
            </span>
          </span>
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-[#FF6B00]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="tel:+97450091006"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 transition-colors hover:text-[#FFA048]"
          >
            <Phone size={13} className="text-[#FF6B00]" aria-hidden="true" />
            <span>+974 5009 1006</span>
          </a>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#FF6B00] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#FF6B00]/25 transition-all duration-200 hover:bg-[#E65A00] hover:shadow-lg hover:shadow-[#FF6B00]/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Get a Free Quote</span>
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl border border-white/15 bg-[#0F1B3D]/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/60 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-white/15 text-[#FFA048]"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="size-1.5 rounded-full bg-[#FF6B00]" />}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-1">
            <a
              href="tel:+97450091006"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#FFA048]"
            >
              <Phone size={13} className="text-[#FF6B00]" />
              <span>+974 5009 1006</span>
            </a>
            <span className="text-[11px] font-bold text-white/50">Doha, Qatar</span>
          </div>
        </div>
      )}
    </header>
  );
}

