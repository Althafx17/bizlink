"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./landing-hero.module.css";
import { HeroMedia } from "@/components/hero-media";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "About", href: "#landing-about" },
  { label: "Contact", href: "/contact" },
];

function HeroNavigation({ homeHref }: { homeHref: string }) {
  const links = (
    <ul className={styles.navLinks}>
      <li><Link href={homeHref} aria-current="page">Home</Link></li>
      {navigation.map(({ label, href }) => (
        <li key={href}><Link href={href}>{label}</Link></li>
      ))}
    </ul>
  );

  return (
    <header className={styles.navbar}>
      <Link href={homeHref} className={styles.navBrand}>
        <span className={styles.navEmblem} aria-hidden="true">
          <Image src="/images/bizlink-logo-transparent-1.png" alt="" width={1120} height={910} sizes="66px" />
        </span>
        BizLink
      </Link>
      <nav aria-label="Main navigation" className={styles.desktopNav}>{links}</nav>
      <div className={styles.navActions}>
        <Link href="/contact" className={styles.navQuote}>Get a Free Quote</Link>
        <details className={styles.mobileMenu}>
          <summary aria-label="Toggle navigation menu"><Menu size={21} aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">{links}</nav>
        </details>
      </div>
    </header>
  );
}

export function LandingHero({ about, homeHref = "/" }: { about: ReactNode; homeHref?: string }) {
  return (
    <div className={styles.scene}>
      <section className={styles.hero} aria-labelledby="landing-hero-title">
        <HeroMedia />
        <div className={styles.inner}>
          <HeroNavigation homeHref={homeHref} />
          <div className={styles.copy}>
            <p className={styles.kicker}>A PATHAS GROUP COMPANY · DOHA, QATAR</p>
            <div className={styles.brand}>
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink"
                width={1120}
                height={910}
                sizes="(max-width: 42rem) 105px, 145px"
                className={styles.logo}
                preload
              />
            </div>

            <h1 id="landing-hero-title" className={styles.title}>
              <span>ONE ROOF.</span>
              <span>MULTIPLE SOLUTIONS.</span>
              <span>ONE TRUSTED PARTNER.</span>
            </h1>

            <p className={styles.subhead}>
              BIZ LINK - QATAR offers integrated solutions across Business, Trading, Facility, Automotive and Digital Services in Qatar.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>Get a Free Quote</Link>
              <Link href="/services" className={styles.secondary}>
                Explore Our Services <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.bottom}>
            <ul className={styles.credits} aria-label="BizLink registration and contact">
              <li>CR No. 206520</li>
              <li><a href="tel:+97450091006">+974 5009 1006</a></li>
              <li><a href="mailto:bizlink.qa@gmail.com">bizlink.qa@gmail.com</a></li>
            </ul>
            <a href="#landing-about" className={styles.scrollHint}>
              <span>Scroll to explore</span>
              <ChevronDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <motion.div
        id="landing-about"
        className={styles.aboutReveal}
        initial={{ opacity: 0.75, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      >
        {about}
      </motion.div>
    </div>
  );
}
