"use server";

import { cookies } from "next/headers";
import { z } from "zod";

const enquiry = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(120),
  companyName: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email("Please enter a valid email address").max(254),
  phone: z.string().trim().min(1, "Please enter your phone number").max(50).optional().or(z.literal("")).default(""),
  division: z.string().trim().max(120).optional().default(""),
  service: z.string().trim().max(160).optional().default(""),
  subject: z.string().trim().max(150).optional().default("General Business Inquiry"),
  message: z.string().trim().min(1, "Please describe your requirements").max(2500),
});

export type ActionState = {
  success?: boolean;
  delivered?: boolean;
  error?: string;
  message?: string;
  submittedData?: {
    name: string;
    companyName: string;
    email: string;
    phone: string;
    division: string;
    service: string;
    message: string;
  };
};

export async function sendEnquiry(_previous: ActionState | null, form: FormData): Promise<ActionState> {
  const rawData = {
    name: form.get("name"),
    companyName: form.get("companyName") || "",
    email: form.get("email"),
    phone: form.get("phone") || "",
    division: form.get("division") || "",
    service: form.get("service") || "",
    subject:
      form.get("subject") ||
      (form.get("division")
        ? `Service Enquiry: ${String(form.get("division"))}`
        : "General Business Inquiry"),
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
      delivered: true,
      message: "Thank you! Your enquiry has been submitted to BizLink Qatar. Our relevant division coordinator will respond shortly.",
      submittedData: {
        name: parsed.data.name,
        companyName: parsed.data.companyName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        division: parsed.data.division,
        service: parsed.data.service,
        message: parsed.data.message,
      },
    };
  }

  return {
    success: true,
    delivered: false,
    message:
      "Your requirement brief is validated and ready. Because direct server storage is not enabled in this preview, use the pre-filled WhatsApp or Email buttons below to send it directly to our Doha desk.",
    submittedData: {
      name: parsed.data.name,
      companyName: parsed.data.companyName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      division: parsed.data.division,
      service: parsed.data.service,
      message: parsed.data.message,
    },
  };
}
