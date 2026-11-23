"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Menu, Phone, X } from "lucide-react";

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
    let ticking = false;

    const updateScroll = () => {
      // Change appearance immediately on the first scroll movement (> 20px)
      setIsScrolled(window.scrollY > 20);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Don't render inside the isolated hero preview page
  if (pathname === "/hero-preview") {
    return null;
  }

  return (
    <div
      className={`fixed z-50 left-0 right-0 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "top-3 sm:top-4" : "top-0"
      }`}
    >
      <header
        className={`pointer-events-auto relative flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-6xl rounded-full bg-white/95 backdrop-blur-lg border border-[#0B2C5F]/15 shadow-xl shadow-[#0B2C5F]/10 min-h-[60px] sm:min-h-[66px] py-2 px-4 sm:px-6"
            : mobileMenuOpen
            ? "w-full bg-[#071426]/95 backdrop-blur-xl border-b border-white/10 shadow-xl min-h-[70px] sm:min-h-[78px] py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12"
            : "w-full bg-transparent border-b border-transparent shadow-none min-h-[70px] sm:min-h-[78px] py-3 sm:py-4 px-4 sm:px-8 lg:px-12"
        }`}
      >
        <div className="mx-auto flex items-center justify-between w-full max-w-7xl gap-2">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3] rounded-full min-h-[44px] min-w-[44px]"
            aria-label="BizLink Qatar Home"
          >
            <span
              className={`relative flex size-10 items-center justify-center rounded-xl p-1.5 transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? "bg-[#F2F7FD] ring-1 ring-[#0B2C5F]/10"
                  : "bg-white/10 ring-1 ring-white/20 backdrop-blur-md shadow-inner"
              }`}
            >
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink"
                width={36}
                height={36}
                className="h-7 w-auto object-contain"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-[#0B2C5F]" : "text-white drop-shadow-sm"
                }`}
              >
                BizLink<span className={isScrolled ? "text-[#0088CE]" : "text-cyan-400"}>.</span>
              </span>
              <span
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? "text-[#0077CC]" : "text-cyan-300 drop-shadow-sm"
                }`}
              >
                Qatar
              </span>
            </span>
          </Link>

          {/* Center Nav Links - Desktop */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative min-h-[44px] inline-flex items-center px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? "bg-[#EAF2FA] text-[#0056B3] shadow-sm font-bold"
                        : "text-[#0B2C5F]/75 hover:text-[#0056B3] hover:bg-[#F2F7FD]"
                      : isActive
                      ? "bg-white/20 text-white font-bold backdrop-blur-md border border-white/25 shadow-md shadow-black/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full transition-colors duration-300 ${
                        isScrolled
                          ? "bg-[#0088CE]"
                          : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            <a
              href="tel:+97477661037"
              className={`hidden lg:inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold transition-colors duration-300 ${
                isScrolled
                  ? "text-[#0B2C5F]/80 hover:text-[#0056B3]"
                  : "text-white/90 hover:text-cyan-300 drop-shadow-sm"
              }`}
            >
              <Phone
                size={14}
                className={isScrolled ? "text-[#0088CE]" : "text-cyan-400"}
                aria-hidden="true"
              />
              <span>+974 7766 1037</span>
            </a>

            <Link
              href="/contact"
              className={`group inline-flex min-h-[40px] sm:min-h-[44px] items-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 active:scale-[0.98] ${
                isScrolled
                  ? "bg-[#0056B3] text-white shadow-md shadow-[#0056B3]/25 hover:bg-[#004088] hover:shadow-lg hover:scale-[1.02]"
                  : "border border-cyan-400/45 bg-cyan-400/15 backdrop-blur-md text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:bg-cyan-400/25 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.55)] hover:scale-[1.02]"
              }`}
            >
              <span>Get Started</span>
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className={`md:hidden flex size-10 sm:size-11 items-center justify-center rounded-full transition-colors ${
                isScrolled
                  ? "border border-[#0B2C5F]/15 bg-[#F2F7FD] text-[#0B2C5F] hover:bg-[#EAF2FA]"
                  : "border border-white/25 bg-white/15 backdrop-blur-md text-white hover:bg-white/25"
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 ${
              isScrolled
                ? "border border-[#0B2C5F]/15 bg-white/98 backdrop-blur-xl shadow-[#0B2C5F]/15 text-[#0B2C5F]"
                : "border border-white/20 bg-[#071426]/95 backdrop-blur-2xl shadow-black/60 text-white"
            }`}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                      isScrolled
                        ? isActive
                          ? "bg-[#EAF2FA] text-[#0056B3]"
                          : "text-[#0B2C5F]/80 hover:bg-[#F2F7FD] hover:text-[#0B2C5F]"
                        : isActive
                        ? "bg-white/20 text-cyan-300 font-extrabold border border-white/20"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span
                        className={`size-2 rounded-full ${
                          isScrolled ? "bg-[#0088CE]" : "bg-cyan-400"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div
              className={`mt-3 pt-3 flex items-center justify-between px-1 border-t ${
                isScrolled ? "border-[#0B2C5F]/10" : "border-white/15"
              }`}
            >
              <a
                href="tel:+97450091006"
                className={`inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold ${
                  isScrolled
                    ? "text-[#0B2C5F]/80 hover:text-[#0056B3]"
                    : "text-white/90 hover:text-cyan-300"
                }`}
              >
                <Phone
                  size={14}
                  className={isScrolled ? "text-[#0088CE]" : "text-cyan-400"}
                />
                <span>+974 5009 1006</span>
              </a>
              <span
                className={`text-[11px] font-bold ${
                  isScrolled ? "text-[#475D7A]" : "text-slate-300"
                }`}
              >
                Doha, Qatar
              </span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
