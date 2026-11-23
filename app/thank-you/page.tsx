import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "BizLink enquiry confirmation.",
  robots: { index: false, follow: true },
};

export default async function ThankYouPage() {
  if (!(await cookies()).has("bizlink_enquiry_sent")) redirect("/contact");

  return (
    <main id="main-content" className="mx-auto min-h-[65svh] max-w-3xl px-5 pt-32 pb-16">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm text-cyan-300">
          <li><Link href="/">Home</Link></li>
          <li><span aria-hidden="true">/ </span><Link href="/contact">Contact</Link></li>
          <li aria-current="page"><span aria-hidden="true">/ </span>Thank you</li>
        </ol>
      </nav>
      <h1 className="mt-5 text-4xl font-black">Thank you for your enquiry</h1>
      <p className="mt-4">BizLink has received your message.</p>
      <Link href="/services" className="mt-6 inline-block text-cyan-300 underline">Explore Services</Link>
    </main>
  );
}
