"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const enquiry = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(254),
  phone: z.string().trim().max(50).optional().default(""),
  subject: z.string().trim().max(150).optional().default("General Business Inquiry"),
  message: z.string().trim().min(1, "Please enter your message").max(2500),
});

export type ActionState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function sendEnquiry(_previous: ActionState | null, form: FormData): Promise<ActionState> {
  const rawData = {
    name: form.get("name"),
    email: form.get("email"),
    phone: form.get("phone") || "",
    subject: form.get("subject") || "General Business Inquiry",
    message: form.get("message"),
  };

  const parsed = enquiry.safeParse(rawData);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message || "Please check your inputs and try again.";
    return { error: firstError };
  }

  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  const token = process.env.ENQUIRY_WEBHOOK_TOKEN;

  if (endpoint) {
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
      if (!response.ok) {
        return { error: "Your enquiry could not be sent. Please contact us via phone or WhatsApp directly." };
      }
    } catch {
      return { error: "Your enquiry could not be sent. Please contact us via phone or WhatsApp directly." };
    }
  }

  try {
    (await cookies()).set("bizlink_enquiry_sent", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 300,
      path: "/thank-you",
    });
  } catch {
    // Cookie error safe fallback
  }

  return {
    success: true,
    message: "Thank you! Your inquiry has been sent to BizLink Qatar. Our corporate desk will reach out shortly.",
  };
}
