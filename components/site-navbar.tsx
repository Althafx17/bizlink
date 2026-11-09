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

  const isAboutStatic = pathname === "/about" && !isScrolled && !mobileMenuOpen;

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
            ? "w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-5xl rounded-full bg-[#0F1B3D]/90 backdrop-blur-md border border-white/15 shadow-2xl shadow-black/50 min-h-[60px] sm:min-h-[66px] py-2 px-4 sm:px-6"
            : "w-full max-w-7xl bg-transparent border-transparent shadow-none backdrop-blur-none min-h-[72px] sm:min-h-[80px] py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D35400] rounded-full min-h-[44px] min-w-[44px]"
            aria-label="BizLink Qatar Home"
          >
            <span className={`relative flex size-10 items-center justify-center rounded-lg p-1.5 ring-1 transition-transform duration-200 group-hover:scale-105 ${isAboutStatic ? "bg-[#0F1B3D]/10 ring-[#0F1B3D]/15" : "bg-white/10 ring-white/15"}`}>
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
              <span className={`text-sm sm:text-base font-extrabold tracking-tight drop-shadow-sm ${isAboutStatic ? "text-[#0F1B3D]" : "text-white"}`}>
                BizLink<span className="text-[#D35400]">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#FFA048] uppercase">
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
                      ? isAboutStatic
                        ? "bg-[#0F1B3D]/10 text-[#0F1B3D] shadow-sm"
                        : "bg-white/15 text-white shadow-sm"
                      : isAboutStatic
                        ? "text-[#0F1B3D]/75 hover:text-[#0F1B3D] hover:bg-[#0F1B3D]/5"
                        : "text-white/80 hover:text-white hover:bg-white/10 drop-shadow-sm"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#D35400]"
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
              className={`hidden lg:inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold transition-colors duration-150 hover:text-[#FFA048] ${isAboutStatic ? "text-[#0F1B3D]/75" : "text-white/80 drop-shadow-sm"}`}
            >
              <Phone size={14} className="text-[#D35400]" aria-hidden="true" />
              <span>+974 5009 1006</span>
            </a>

            <Link
              href="/contact"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#D35400] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#D35400]/25 transition-all duration-200 hover:bg-[#B84300] hover:shadow-lg hover:shadow-[#D35400]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Free Quote</span>
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
              className={`md:hidden flex size-11 items-center justify-center rounded-full transition-colors ${isAboutStatic ? "border border-[#0F1B3D]/20 bg-[#0F1B3D]/10 text-[#0F1B3D] hover:bg-[#0F1B3D]/15" : "border border-white/20 bg-white/10 text-white hover:bg-white/20"}`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl border border-white/15 bg-[#0F1B3D]/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/60 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-white/15 text-[#FFA048]"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && <span className="size-2 rounded-full bg-[#D35400]" />}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-1">
              <a
                href="tel:+97450091006"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#FFA048]"
              >
                <Phone size={14} className="text-[#D35400]" />
                <span>+974 5009 1006</span>
              </a>
              <span className="text-[11px] font-bold text-white/50">Doha, Qatar</span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
