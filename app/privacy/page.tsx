import { company } from "@/content/company";
import { shareMetadata } from "@/lib/site";

export const metadata = shareMetadata("/privacy", "Privacy Policy", "How BizLink handles enquiry information and website analytics.");

export default function PrivacyPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-5 px-5 pt-32 pb-16">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <h2 className="text-xl font-bold">Enquiries</h2>
      <p>When you contact BizLink, we use the contact details and message you provide to respond to your enquiry.</p>
      <h2 className="text-xl font-bold">Website analytics</h2>
      <p>When enabled, the website uses Google Analytics to measure visits and interactions.</p>
      <h2 className="text-xl font-bold">External Services</h2>
      <p>Maps, WhatsApp and social links are provided by third parties and are subject to their own privacy policies.</p>
      <h2 className="text-xl font-bold">Privacy questions</h2>
      <p>Email <a className="underline" href={`mailto:${company.email}`}>{company.email}</a> for questions about your information.</p>
    </main>
  );
}
