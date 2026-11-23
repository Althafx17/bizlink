"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const enquiry = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().max(254),
  message: z.string().trim().min(1).max(2500),
});

export async function sendEnquiry(_previous: string | null, form: FormData) {
  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  if (!endpoint) return "Please contact BizLink by phone, email or WhatsApp.";

  const parsed = enquiry.safeParse({
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
  });
  if (!parsed.success) return "Enter your name, a valid email address and your message.";

  const token = process.env.ENQUIRY_WEBHOOK_TOKEN;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(parsed.data),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (!response.ok) return "Your enquiry could not be sent. Please try again or use the contact links below.";
  } catch {
    return "Your enquiry could not be sent. Please try again or use the contact links below.";
  }

  (await cookies()).set("bizlink_enquiry_sent", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 300,
    path: "/thank-you",
  });
  redirect("/thank-you");
}
