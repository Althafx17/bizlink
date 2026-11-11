import { ArrowUpRight, AtSign, Camera, Mail, MessageCircle, Music2, Phone } from "lucide-react";
import type { Metadata } from "next";
import { BranchesMap } from "@/components/home/branches-map";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BizLink Qatar by phone, email or WhatsApp, or visit the Ain Khalid head office and Bin Mahmoud branch in Doha.",
};

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const contactGroups = [
  {
    name: "Phone",
    icon: Phone,
    links: [
      { label: "+974 7766 1037", href: "tel:+97477661037" },
      { label: "+974 5009 1006", href: "tel:+97450091006" },
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
      {
        label: "Follow the WhatsApp channel",
        href: "https://whatsapp.com/channel/0029VazPuoH3QxRu9L9cfa3C",
      },
    ],
  },
];

const socialLinks = [
  { label: "Facebook Page", href: "https://www.facebook.com/share/1Ce1qEyQDQ/", icon: FacebookIcon },
  { label: "Threads", href: "https://www.threads.com/@bizlink_servises_qa", icon: AtSign },
  { label: "Instagram", href: "https://www.instagram.com/bizlink_servises_qa", icon: Camera },
  { label: "TikTok", href: "https://www.tiktok.com/@biz.link.qa", icon: Music2 },
];

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-white pt-20 sm:pt-28 text-[#0B2C5F]">
      <section aria-labelledby="contact-title" className="border-b border-[#0B2C5F]/10 bg-gradient-to-br from-white via-[#F6FAFF] to-[#E8F2FD]">
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:px-12">
          <p className="text-xs font-extrabold tracking-[0.2em] text-[#0077CC] uppercase">BIZ LINK - QATAR</p>
          <h1 id="contact-title" className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0B2C5F]">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#475D7A]">
            One Roof. Multiple Solutions. One Trusted Partner. Reach our team directly for WPS payroll, corporate formation, trading, facility AMC, automotive, or digital inquiries.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <BranchesMap />

        <section
          aria-labelledby="contact-methods"
          className="mt-14 rounded-3xl bg-[#0B2C5F] border border-[#0B2C5F] p-6 text-white sm:p-10 shadow-xl shadow-[#0B2C5F]/15"
        >
          <h2 id="contact-methods" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Get in Touch Directly
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {contactGroups.map(({ name, icon: Icon, links }) => (
              <div key={name} className="border-t border-white/20 pt-4">
                <h3 className="flex items-center gap-2 text-sm font-bold text-[#7CD4FF]">
                  <Icon size={18} aria-hidden="true" className="text-[#00A2E8]" /> {name}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="break-words underline decoration-white/40 underline-offset-4 hover:text-[#7CD4FF] hover:decoration-[#7CD4FF]"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="social-title" className="mt-14">
          <h2 id="social-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2C5F]">
            Follow Biz Link Services Qatar
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit BizLink on ${label}`}
                  className="flex min-h-14 items-center gap-2.5 rounded-2xl border border-[#0B2C5F]/15 bg-[#F2F7FD] px-4 text-sm font-bold text-[#0B2C5F] transition-colors hover:border-[#0056B3] hover:bg-[#EAF2FA] hover:text-[#0056B3]"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  <ArrowUpRight size={16} className="ml-auto shrink-0 text-[#0077CC]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
