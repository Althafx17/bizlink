import { ArrowUpRight, AtSign, Camera, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact BizLink Qatar by phone, email or WhatsApp, or visit the Ain Khalid head office and Bin Mahmoud branch in Doha.",
};

const branches = [
  {
    name: "AIN KHALID – HEAD OFFICE",
    lines: [
      "Office No. 164, First Floor",
      "Building No. 43, Zone 53, Street 100",
      "Souq Naif, Ain Khalid, Doha, Qatar",
    ],
  },
  {
    name: "BIN MAHMOUD – BRANCH",
    lines: [
      "Shop No. 07, Building No. 28",
      "Zone 22, Street 342",
      "Al Jazeera Street, Bin Mahmoud, Doha, Qatar",
    ],
  },
];

const contactGroups = [
  {
    name: "Phone",
    icon: Phone,
    links: [
      { label: "+974 5009 1006", href: "tel:+97450091006" },
      { label: "+974 7766 1037", href: "tel:+97477661037" },
    ],
  },
  {
    name: "Email",
    icon: Mail,
    links: [
      { label: "bizlink.qa@gmail.com", href: "mailto:bizlink.qa@gmail.com" },
      { label: "bizlink.qatar@gmail.com", href: "mailto:bizlink.qatar@gmail.com" },
    ],
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    links: [
      { label: "Message Biz Link Services Qatar", href: "https://wa.me/97450091006" },
      { label: "Follow the WhatsApp channel", href: "https://whatsapp.com/channel/0029VazPuoH3QxRu9L9cfa3C" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook Page", href: "https://www.facebook.com/share/1Ce1qEyQDQ/", icon: null },
  { label: "Threads", href: "https://www.threads.com/@bizlink_servises_qa", icon: AtSign },
  { label: "Instagram", href: "https://www.instagram.com/bizlink_servises_qa", icon: Camera },
  { label: "TikTok", href: "https://www.tiktok.com/@biz.link.qa", icon: Music2 },
];

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="text-sm font-bold tracking-wide">BizLink Qatar</Link>
          <nav aria-label="Main navigation">
            <ul className="header-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact" aria-current="page" className="font-bold text-white">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section aria-labelledby="contact-title" className="border-b border-white/20 bg-transparent">
          <div className="shell pt-14 pb-10 sm:pt-20 sm:pb-12">
            <p className="text-xs font-bold tracking-[0.15em] text-white/80 uppercase">BIZ LINK - QATAR</p>
            <h1 id="contact-title" className="mt-4 text-5xl leading-none font-extrabold tracking-tight sm:text-7xl">Contact</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              One Roof. Multiple Solutions. One Trusted Partner.
            </p>
          </div>
        </section>

        <div className="bg-transparent">
          <div className="shell py-12 sm:py-16">
            <section aria-labelledby="branches-title">
              <h2 id="branches-title" className="text-3xl font-extrabold tracking-tight">Our branches</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:gap-7">
                {branches.map(({ name, lines }) => (
                  <article key={name} className="rounded-xl border border-white/20 bg-white/5 p-5 sm:p-8">
                    <span aria-hidden="true" className="mb-5 grid size-10 place-items-center rounded-md bg-white/5 text-white">
                      <MapPin size={20} />
                    </span>
                    <h3 className="text-sm font-extrabold tracking-wide sm:text-base">{name}</h3>
                    <address className="mt-3 text-base leading-relaxed text-white/80 not-italic">
                      {lines.map((line) => <span key={line} className="block">{line}</span>)}
                    </address>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="contact-methods" className="mt-12 rounded-xl bg-navy p-5 text-white sm:p-8 lg:p-10">
              <h2 id="contact-methods" className="text-3xl font-extrabold tracking-tight">Get in touch</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {contactGroups.map(({ name, icon: Icon, links }) => (
                  <div key={name} className="border-t border-white/25 pt-4">
                    <h3 className="flex items-center gap-2 text-sm font-bold">
                      <Icon size={18} aria-hidden="true" /> {name}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      {links.map(({ label, href }) => (
                        <li key={href}>
                          <a href={href} className="break-words underline decoration-white/50 underline-offset-4 hover:decoration-white focus-visible:outline-white">
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="social-title" className="mt-12">
              <h2 id="social-title" className="text-3xl font-extrabold tracking-tight">Follow Biz Link Services Qatar</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 lg:grid-cols-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={href}>
                    <a href={href} className="flex min-h-14 items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-3 text-sm font-bold hover:border-navy sm:px-4">
                      {Icon ? <Icon size={18} className="shrink-0" aria-hidden="true" /> : (
                        <span aria-hidden="true" className="grid size-[18px] shrink-0 place-items-center rounded-full bg-navy text-xs text-white">f</span>
                      )}
                      <span>{label}</span>
                      <ArrowUpRight size={16} className="ml-auto shrink-0 text-white/80" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
