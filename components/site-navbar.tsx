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
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        isScrolled
          ? "top-3 sm:top-4"
          : "top-0"
      }`}
    >
      <header
        className={`pointer-events-auto relative flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled || mobileMenuOpen
            ? "w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-6xl rounded-full bg-white/95 backdrop-blur-lg border border-[#0B2C5F]/15 shadow-xl shadow-[#0B2C5F]/10 min-h-[60px] sm:min-h-[66px] py-2 px-4 sm:px-6"
            : "w-full bg-white/95 backdrop-blur-md border-b border-[#0B2C5F]/10 shadow-none min-h-[70px] sm:min-h-[78px] py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12"
        }`}
      >
        <div className="mx-auto flex items-center justify-between w-full max-w-7xl gap-2">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3] rounded-full min-h-[44px] min-w-[44px]"
            aria-label="BizLink Qatar Home"
          >
            <span className="relative flex size-10 items-center justify-center rounded-xl bg-[#F2F7FD] p-1.5 ring-1 ring-[#0B2C5F]/10 transition-transform duration-200 group-hover:scale-105">
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
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#0B2C5F]">
                BizLink<span className="text-[#0088CE]">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#0077CC] uppercase">
                Qatar
              </span>
            </span>
          </Link>

          {/* Center Nav Links - Desktop (min 44px touch targets) */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative min-h-[44px] inline-flex items-center px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#EAF2FA] text-[#0056B3] shadow-sm font-bold"
                      : "text-[#0B2C5F]/75 hover:text-[#0056B3] hover:bg-[#F2F7FD]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#0088CE]"
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
              className="hidden lg:inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold text-[#0B2C5F]/80 transition-colors duration-150 hover:text-[#0056B3]"
            >
              <Phone size={14} className="text-[#0088CE]" aria-hidden="true" />
              <span>+974 7766 1037</span>
            </a>

            <Link
              href="/contact"
              className="group inline-flex min-h-[40px] sm:min-h-[44px] items-center gap-1.5 rounded-full bg-[#0056B3] px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#0056B3]/25 transition-all duration-200 hover:bg-[#004088] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Mobile Menu Button (44px target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex size-10 sm:size-11 items-center justify-center rounded-full border border-[#0B2C5F]/15 bg-[#F2F7FD] text-[#0B2C5F] transition-colors hover:bg-[#EAF2FA]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl border border-[#0B2C5F]/15 bg-white/98 backdrop-blur-xl p-4 shadow-2xl shadow-[#0B2C5F]/15 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-[#EAF2FA] text-[#0056B3]"
                        : "text-[#0B2C5F]/80 hover:bg-[#F2F7FD] hover:text-[#0B2C5F]"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && <span className="size-2 rounded-full bg-[#0088CE]" />}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 pt-3 border-t border-[#0B2C5F]/10 flex items-center justify-between px-1">
              <a
                href="tel:+97450091006"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold text-[#0B2C5F]/80 hover:text-[#0056B3]"
              >
                <Phone size={14} className="text-[#0088CE]" />
                <span>+974 5009 1006</span>
              </a>
              <span className="text-[11px] font-bold text-[#475D7A]">Doha, Qatar</span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
