import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceSummaries } from "@/content/brand";
import styles from "./company-overview.module.css";

const principles = [
  { title: "OUR BUSINESS PURPOSE", description: "To bridge business opportunities and provide end-to-end solutions in trading, facility, automotive and digital services — making business easier for clients and partners.", color: "blue" },
  { title: "OUR MISSION", description: "To deliver innovative, reliable and value-driven solutions that help individuals, businesses and organisations achieve their goals.", color: "orange" },
  { title: "OUR VISION", description: "To build a multi-service company known for quality, trust, professional service and long-term customer relationships.", color: "green" },
] as const;

const values = [
  { name: "Integrity", color: "blue" },
  { name: "Reliability", color: "green" },
  { name: "Innovation", color: "orange" },
  { name: "Customer Focus", color: "blue" },
] as const;

const reasons = [
  { title: "INTEGRATED", description: "Multiple business services coordinated through one platform.", color: "blue" },
  { title: "PRACTICAL", description: "Solutions designed around real business and operational needs.", color: "orange" },
  { title: "RELIABLE", description: "Professional support with a focus on long-term relationships.", color: "green" },
] as const;

export function CompanyOverview({
  standalone = false,
  includeWhy = standalone,
  includeServices = true,
}: {
  standalone?: boolean;
  includeWhy?: boolean;
  includeServices?: boolean;
}) {
  const Title = standalone ? "h1" : "h2";
  const Heading = standalone ? "h2" : "h3";

  return (
    <div className={styles.overview}>
      <section className={styles.shell} aria-labelledby="company-overview-title">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>PATHAS GROUP OF COMPANIES</p>
          <Title id="company-overview-title">About BizLink</Title>
          <p className={styles.subhead}>Trust | Integrity | Growth</p>
          <p className={styles.body}>
            Biz Link Trading and Contracting Services WLL is a diversified and trusted business group operating in Qatar under PATHAS GROUP OF COMPANIES. Since 2010, we have focused on practical, reliable and customer-oriented solutions across multiple sectors.
          </p>
        </div>
        <div className={styles.threeColumns}>
          {principles.map(({ title, description, color }) => (
            <div key={title} className={styles.card} data-category={color}>
              <Heading>{title}</Heading><p>{description}</p>
            </div>
          ))}
        </div>
        <section className={styles.values} aria-labelledby="our-values">
          <Heading id="our-values">OUR VALUES</Heading>
          <ul>
            {values.map(({ name, color }) => (
              <li key={name} data-category={color}><span aria-hidden="true" />{name}</li>
            ))}
          </ul>
        </section>
      </section>

      {includeServices && (
        <section id="services" className={styles.services} aria-labelledby="about-services">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>One roof. Multiple solutions.</p><Heading id="about-services">Our services</Heading></div>
              <Link href="/services">View all services <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
            <ul className={styles.summaryGrid}>
              {serviceSummaries.map(({ id, name, summary, color }, index) => (
                <li key={id}>
                  <Link href={'/services#' + id} className={styles.summaryCard} data-category={color}>
                    <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{name}</h3><p>{summary}</p>
                    <ArrowUpRight size={18} aria-hidden="true" className={styles.arrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={styles.footprint} aria-labelledby="footprint-title">
        <div className={styles.shell}>
          <div><Heading id="footprint-title">Business Footprint</Heading><p>QATAR • INDIA • UAE • CHINA</p></div>
          <p>Since 2010 — One trusted partner for multiple business needs.</p>
        </div>
      </section>

      {includeWhy && (
        <section className={styles.shell} aria-labelledby="why-bizlink">
          <div className={styles.sectionHeading}>
            <Heading id="why-bizlink">Why BizLink</Heading>
            <Link href="/contact#branches-title">Our branches <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className={styles.threeColumns}>
            {reasons.map(({ title, description, color }) => (
              <div key={title} className={styles.card} data-category={color}>
                <h3>{title}</h3><p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
