import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.categoryBand}>
        <span>BUSINESS</span><span aria-hidden="true"> • </span>
        <span>TRADING</span><span aria-hidden="true"> • </span>
        <span>FACILITY</span><span aria-hidden="true"> • </span>
        <span>MAINTENANCE</span><span aria-hidden="true"> • </span>
        <span>AUTOMOTIVE</span><span aria-hidden="true"> • </span>
        <span>DIGITAL</span>
      </div>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link href="/" aria-label="BizLink home" className={styles.logo}>
              <Image src="/images/bizlink-logo-transparent-1.png" alt="BizLink" width={1120} height={910} sizes="128px" />
            </Link>
            <p className={styles.name}>BIZ LINK - QATAR</p>
            <p className={styles.qualities}>Professional • Reliable • Integrated</p>
            <p className={styles.tagline}>One Roof. Multiple Solutions. One Trusted Partner.</p>
          </div>
          <nav aria-labelledby="footer-links">
            <h2 id="footer-links">Quick links</h2>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div>
            <h2>Contact</h2>
            <ul className={styles.links}>
              <li><a href="tel:+97450091006">+974 5009 1006</a></li>
              <li><a href="tel:+97477661037">+974 7766 1037</a></li>
              <li><a href="mailto:bizlink.qa@gmail.com">bizlink.qa@gmail.com</a></li>
            </ul>
            <address className={styles.address}>
              <Link href="/contact#branches-title">Ain Khalid – Head Office, Doha, Qatar</Link>
              <Link href="/contact#branches-title">Bin Mahmoud – Branch, Doha, Qatar</Link>
            </address>
          </div>
        </div>
        <div className={styles.socialRow}>
          <SocialLinks />
          <p className={styles.legal}>BIZ LINK TRADING AND CONTRACTING SERVICES WLL · CR No. 206520 · P.O. Box 13710</p>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} BIZ LINK TRADING AND CONTRACTING SERVICES WLL. All rights reserved.</p>
      </div>
    </footer>
  );
}
