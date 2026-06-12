"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SupplierForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.company?.trim() || !data.contactName?.trim() || !data.message?.trim()) {
      setStatus("error");
      setMessage("Please complete all required fields.");
      return;
    }
    if (!EMAIL_RE.test(data.email ?? "")) {
      setStatus("error");
      setMessage("Please enter a valid business email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "supplier" }),
      });
      const result = (await res.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(result.message ?? "Thank you — our sourcing team will review your details.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-company" className="field-label">Company name *</label>
          <input id="sp-company" name="company" className="field-input" placeholder="Manufacturer Co." required />
        </div>
        <div>
          <label htmlFor="sp-contact" className="field-label">Contact name *</label>
          <input id="sp-contact" name="contactName" className="field-input" placeholder="Full name" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-email" className="field-label">Business email *</label>
          <input id="sp-email" name="email" type="email" className="field-input" placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="sp-phone" className="field-label">Phone</label>
          <input id="sp-phone" name="phone" type="tel" className="field-input" placeholder="+1 555 000 0000" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-country" className="field-label">Country</label>
          <input id="sp-country" name="country" className="field-input" placeholder="Country of operation" />
        </div>
        <div>
          <label htmlFor="sp-capabilities" className="field-label">Manufacturing capabilities</label>
          <input id="sp-capabilities" name="capabilities" className="field-input" placeholder="e.g. stainless steel, injection molding" />
        </div>
      </div>

      <div>
        <label htmlFor="sp-message" className="field-label">Message *</label>
        <textarea id="sp-message" name="message" rows={5} className="field-input resize-none" placeholder="Tell us about your capabilities, certifications, and product categories." required />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto">
        {status === "loading" ? "Submitting…" : "Submit inquiry"}
      </button>

      {message && (
        <div
          role={status === "error" ? "alert" : "status"}
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "error" ? "bg-red-50 text-red-600" : "bg-gold/10 text-gold-700"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
