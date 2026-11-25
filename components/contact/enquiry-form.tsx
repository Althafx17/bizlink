"use client";

import { useActionState } from "react";
import Link from "next/link";
import { sendEnquiry } from "@/app/contact/actions";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(sendEnquiry, {});
  const field = "block w-full rounded-lg border border-slate-500 bg-white p-3 text-[#142443]";

  return (
    <section aria-labelledby="enquiry-title" className="mx-auto max-w-2xl px-5 py-14">
      <h2 id="enquiry-title" className="mb-6 text-3xl font-black">Send an enquiry</h2>
      <form action={action} className="space-y-4">
        <label className="block">Name<input className={field} name="name" autoComplete="name" maxLength={120} required /></label>
        <label className="block">Email<input className={field} type="email" name="email" autoComplete="email" maxLength={254} required /></label>
        <label className="block">Message<textarea className={field} name="message" rows={5} maxLength={2500} required /></label>
        <Link href="/privacy" className="block text-sm text-cyan-300 underline">Privacy Policy</Link>
        {state?.error && <p role="alert" className="text-amber-200">{state.error}</p>}
        {state?.message && <p role="alert" className="text-emerald-300">{state.message}</p>}
        <button disabled={pending} className="rounded-full bg-amber-400 px-6 py-3 font-bold text-[#142443] disabled:opacity-60">
          {pending ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </section>
  );
}
