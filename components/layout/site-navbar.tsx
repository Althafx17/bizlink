"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hasScrolled, setIsScrolled] = useState(false);
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

  const isScrolled = hasScrolled;

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
      className={`fixed z-50 left-0 right-0 max-w-full flex justify-center pointer-events-none transition-none md:transition-all md:duration-500 md:ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? "top-0 md:top-3 md:sm:top-4" : "top-0"
        }`}
    >
      <header
        className={`site-header-glass pointer-events-auto relative flex items-center transition-none md:transition-all md:duration-500 md:ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-full box-border rounded-none min-h-[60px] py-2 px-4 border-b border-white/10 bg-[#070B14]/95 backdrop-blur-xl shadow-md min-w-0 overflow-visible ${isScrolled
            ? "md:w-[calc(100%-1.5rem)] lg:w-[calc(100%-3rem)] md:max-w-6xl md:rounded-full md:bg-[#070B14]/85 md:border md:border-white/20 md:shadow-[0_8px_32px_rgba(0,0,0,0.6)] md:backdrop-blur-xl md:min-h-[66px] md:py-2 md:px-6"
            : mobileMenuOpen
              ? "md:w-[calc(100%-1rem)] lg:w-[calc(100%-3rem)] md:max-w-[98rem] md:mt-4 md:rounded-2xl md:bg-[#070B14]/75 md:border md:border-white/20 md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:min-h-[78px] md:py-3.5 md:px-8 lg:px-12"
              : "md:w-[calc(100%-1rem)] lg:w-[calc(100%-3rem)] md:max-w-[98rem] md:mt-4 md:rounded-2xl md:bg-[#070B14]/50 md:border md:border-white/15 md:shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:min-h-[78px] md:py-4 md:px-8 lg:px-12"
          }`}
      >
        <div className="mx-auto flex items-center justify-between w-full max-w-7xl min-w-0 gap-2">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3] rounded-full min-h-[44px] min-w-[44px]"
            aria-label="BizLink QATAR"
            data-navbar-brand
          >
            <span
              className="relative flex size-10 items-center justify-center rounded-xl p-1.5 transition-all duration-300 md:group-hover:scale-105 bg-white/10 ring-1 ring-white/20 backdrop-blur-md shadow-inner"
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
                data-brand-wordmark
                className="text-base font-black tracking-tight transition-colors duration-300 text-white drop-shadow-sm"
              >
                BizLink<span className="text-cyan-400">.</span>
              </span>
              <span
                className="mt-1 text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 text-cyan-300 drop-shadow-sm"
              >
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
                  className={`relative min-h-[44px] inline-flex items-center px-3.5 py-2 text-xs lg:text-sm font-semibold transition-all duration-300 ${isActive
                      ? "text-cyan-300 font-bold"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] rounded-none bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
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
              className="hidden lg:inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold transition-colors duration-300 text-white/90 hover:text-cyan-300 drop-shadow-sm"
            >
              <Phone
                size={14}
                className="text-cyan-400"
                aria-hidden="true"
              />
              <span>+974 7766 1037</span>
            </a>

            <Link
              href="/contact"
              className="group hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]"
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
              className="md:hidden flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl p-4 shadow-2xl border border-white/20 bg-[#071426]/95 backdrop-blur-2xl shadow-black/40 text-white animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${isActive
                        ? "bg-white/20 text-cyan-300 font-extrabold border border-white/20"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="size-2 rounded-full bg-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 pt-3 flex items-center justify-between px-1 border-t border-white/15">
              <a
                href="tel:+97450091006"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold text-white/90 hover:text-cyan-300"
              >
                <Phone size={14} className="text-cyan-400" />
                <span>+974 5009 1006</span>
              </a>
              <span className="text-[11px] font-bold text-slate-300">
                Doha, Qatar
              </span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
