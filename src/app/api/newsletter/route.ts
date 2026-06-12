import { NextResponse } from "next/server";
import { EMAIL_RE, clientKey, rateLimit } from "@/lib/rate-limit";

// Required for @cloudflare/next-on-pages — server routes run on the edge.
export const runtime = "edge";

export async function POST(req: Request) {
  // Basic rate limiting: 5 requests per minute per client.
  const limit = rateLimit(clientKey(req, "newsletter"), {
    limit: 5,
    windowMs: 60_000,
  });
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  // --- Integration point -------------------------------------------------
  // Wire to an email provider (e.g. Resend, Mailchimp) or Cloudflare KV here.
  // Example:
  //   await fetch("https://api.resend.com/...", { ... })
  // We intentionally don't persist anything in this build.
  // -----------------------------------------------------------------------

  return NextResponse.json(
    { message: "You're subscribed. Welcome to Zevrian." },
    { status: 200 },
  );
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
