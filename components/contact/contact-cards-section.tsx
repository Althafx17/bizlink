"use client";

import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { company, branches } from "@/content/company";
import { sendEnquiry, type ActionState } from "@/app/contact/actions";

export function ContactCardsSection() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    sendEnquiry,
    {}
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Header & 2x2 Glassmorphism Cards with Background Images */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
                / GET IN TOUCH /
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                We are always ready to help you and answer your questions
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                BizLink Trading and Contracting Services W.L.L. connects individuals and enterprise investors with direct corporate formation, facilities engineering, automotive care, and international trading solutions in Qatar.
              </p>
            </motion.div>

            {/* 2x2 Grid of Glassmorphic Cards with Background Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Card 1: Call Center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.12] via-[#0F182A]/70 to-[#070B14]/85 backdrop-blur-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                {/* Background Image with Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/contact/call-center-bg.webp"
                    alt="BizLink Call Center"
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover object-center opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#0F182A]/90 to-[#0F182A]/60" />
                  <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                      Call Center
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                      <Headphones size={16} />
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <a
                      href="tel:+97450091006"
                      className="block text-base font-black text-white hover:text-cyan-300 transition-colors"
                    >
                      +974 5009 1006
                    </a>
                    <a
                      href="tel:+97444121001"
                      className="block text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      +974 4412 1001 <span className="text-[11px] text-slate-400">(Landline)</span>
                    </a>
                    <a
                      href="tel:+97477661037"
                      className="block text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      +974 7766 1037 <span className="text-[11px] text-slate-400">(Support)</span>
                    </a>
                  </div>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-300">24/7 Qatar Hotline</span>
                  <a
                    href="tel:+97450091006"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-cyan-300"
                  >
                    <span>Call</span>
                    <Phone size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Card 2: Our Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.12] via-[#0F182A]/70 to-[#070B14]/85 backdrop-blur-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                {/* Background Image with Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/contact/location-card-bg.webp"
                    alt="BizLink Doha Offices"
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover object-center opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#0F182A]/90 to-[#0F182A]/60" />
                  <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                      Our Location
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                      <MapPin size={16} />
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs leading-relaxed text-slate-200">
                    <div>
                      <p className="font-bold text-white">Head Office (Ain Khalid):</p>
                      <p className="text-slate-300 text-[11px]">Building 43, Street 100, Souq Naif, East Industrial Rd</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">Typing Centre (Bin Mahmoud):</p>
                      <p className="text-slate-300 text-[11px]">Building 28, Street 342, Al Jazeera St</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-300">Doha, Qatar</span>
                  <a
                    href="#doha-map"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-cyan-300"
                  >
                    <span>View Map</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Card 3: Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.12] via-[#0F182A]/70 to-[#070B14]/85 backdrop-blur-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                {/* Background Image with Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/contact/email-card-bg.webp"
                    alt="BizLink Email Desk"
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover object-center opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#0F182A]/90 to-[#0F182A]/60" />
                  <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                      Email
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                      <Mail size={16} />
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <a
                      href={`mailto:${company.email}`}
                      className="block text-sm font-bold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {company.email}
                    </a>
                    <a
                      href={`mailto:${company.secondaryEmail}`}
                      className="block text-xs font-medium text-slate-300 hover:text-white transition-colors break-all"
                    >
                      {company.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-300">Average response: &lt; 2 hrs</span>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-cyan-300"
                  >
                    <span>Write</span>
                    <Send size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Card 4: Social Network & WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.12] via-[#0F182A]/70 to-[#070B14]/85 backdrop-blur-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                {/* Background Image with Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/contact/social-card-bg.webp"
                    alt="BizLink Social Network"
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover object-center opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#0F182A]/90 to-[#0F182A]/60" />
                  <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                      Social network
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                      <Share2 size={16} />
                    </span>
                  </div>

                  {/* WhatsApp Quick Connect */}
                  <div className="mt-4">
                    <a
                      href={company.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 px-3 py-2 text-xs font-bold text-[#25D366] hover:bg-[#25D366]/25 transition-all w-full"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp Direct Instant Chat</span>
                    </a>
                  </div>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  {/* Social Icons matching reference */}
                  <div className="flex items-center gap-3 text-slate-300">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors text-xs font-black"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors text-xs font-black"
                      aria-label="X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors text-xs font-black"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors text-xs font-black"
                      aria-label="Instagram"
                    >
                      ig
                    </a>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">@bizlinkqatar</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN: "Get in Touch" Glassmorphism Form Card matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-gradient-to-br from-white/[0.14] via-[#0F182A]/80 to-[#070B14]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.35),0_0_35px_rgba(0,180,255,0.2)]">
              
              {/* Form Background Image with Luxury Tint */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                  src="/images/contact/form-card-bg.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover object-center opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F182A] via-[#0F182A]/90 to-[#0F182A]/70" />
                <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
              </div>

              {/* Form Header */}
              <div className="relative z-10 mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  Get in Touch
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Define your goals and let our Qatar enterprise specialists support your commercial growth.
                </p>
              </div>

              {/* Interactive Form */}
              <form action={formAction} className="relative z-10 space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={120}
                    placeholder="Full name *"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/[0.1] focus:outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="Email address *"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/[0.1] focus:outline-none transition-all"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone or WhatsApp number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone / WhatsApp (Optional)"
                    maxLength={50}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/[0.1] focus:outline-none transition-all"
                  />
                </div>

                {/* Service / Subject Selector */}
                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject / Service Requirement
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    defaultValue="Business & Corporate Services"
                    className="w-full rounded-xl border border-white/15 bg-[#0F182A] px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Business & Corporate Services">Business & Corporate Services (CR / PRO)</option>
                    <option value="Facility Management & Engineering">Facility Management & 24/7 Engineering</option>
                    <option value="Trading & Sourcing Solutions">Trading, Industrial & Procurement Supply</option>
                    <option value="Automotive Detailing & Care">Mobile Automotive Care & Detailing</option>
                    <option value="Digital Marketing & Creative">Digital Services, Web & Media Production</option>
                    <option value="General Business Inquiry">General Commercial Consultation</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    maxLength={2500}
                    placeholder="Describe your requirement or project in Qatar *"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/[0.1] focus:outline-none transition-all resize-y"
                  />
                </div>

                {/* State Feedback (Error / Success) */}
                {state?.error && (
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs font-semibold text-rose-300">
                    {state.error}
                  </div>
                )}
                {state?.success && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-300">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>{state.message}</span>
                  </div>
                )}

                {/* Submit Button matching reference design */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0056B3] via-[#0088CE] to-[#00B4FF] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60"
                  >
                    <span>{isPending ? "Sending Message…" : "Send a message"}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Privacy & WhatsApp Alternative */}
                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-cyan-400" />
                    <span>Confidential & WPS Compliant</span>
                  </div>
                  <Link href="/privacy" className="hover:text-cyan-300 underline transition-colors">
                    Privacy Policy
                  </Link>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
