import { NextResponse } from "next/server";
import { EMAIL_RE, clientKey, rateLimit } from "@/lib/rate-limit";

// Required for @cloudflare/next-on-pages — server routes run on the edge.
export const runtime = "edge";

type FormType = "support" | "supplier";

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  const limit = rateLimit(clientKey(req, "contact"), {
    limit: 4,
    windowMs: 60_000,
  });
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const formType: FormType = body.formType === "supplier" ? "supplier" : "support";
  const email = str(body.email);
  const message = str(body.message);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 },
    );
  }
  if (!message) {
    return NextResponse.json(
      { error: "Please include a message." },
      { status: 422 },
    );
  }

  if (formType === "support") {
    const name = str(body.name);
    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 422 });
    }
  } else {
    const company = str(body.company);
    const contactName = str(body.contactName);
    if (!company || !contactName) {
      return NextResponse.json(
        { error: "Company name and contact name are required." },
        { status: 422 },
      );
    }
  }

  // --- Integration point -------------------------------------------------
  // Forward the submission to email/CRM (e.g. Resend to CONTACT_EMAIL_TO).
  // Example:
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
  //     body: JSON.stringify({ to: process.env.CONTACT_EMAIL_TO, ... }),
  //   });
  // No data is persisted in this build.
  // -----------------------------------------------------------------------

  const successMessage =
    formType === "supplier"
      ? "Thank you — our sourcing team will review your details and follow up."
      : "Thanks for reaching out. Our support team will reply within one business day.";

  return NextResponse.json({ message: successMessage }, { status: 200 });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
