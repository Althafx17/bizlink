import Image from "next/image";
import Link from "next/link";
import { HeroMedia } from "@/components/hero-media";
import { CompanyOverview } from "@/components/company-overview";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header home-header">
        <div className="shell header-inner">
          <Link href="/" aria-current="page" className="header-brand">
            BIZ LINK TRADING AND CONTRACTING <span>SERVICES WLL</span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="header-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-stage" aria-labelledby="home-title">
          <HeroMedia />
          <div className="shell hero-inner">
              <div className="hero-copy">
                <p className="hero-kicker">Biz Link · Qatar</p>
                <h1 id="home-title" className="hero-title">
                  One Roof. <br />
                  Multiple Solutions. <br />
                  <span>One Trusted Partner.</span>
                </h1>
                <Link href="/contact" className="quote-button">
                  Get a Free Quote <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <Image
                src="/images/bizlink-logo-transparent-1.png"
                alt="BizLink"
                width={1120}
                height={910}
                sizes="(max-width: 48rem) 190px, (max-width: 80rem) 34vw, 420px"
                className="hero-logo"
                preload
              />
          </div>
          <div className="shell hero-caption">
              <span><span className="location-dot" aria-hidden="true" />Doha, Qatar</span>
              <a href="#company-overview-title" className="hero-scroll-note">Explore BizLink <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <CompanyOverview includeWhy />
      </main>
    </>
  );
}
