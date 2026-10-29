"use client";

import { useState } from "react";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SupplierForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    const interests = formData.getAll("interest").map(String);

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

    const details = [
      `Company: ${data.company.trim()}`,
      `Contact: ${data.contactName.trim()}`,
      `Email: ${data.email.trim()}`,
      data.phone?.trim() ? `Phone: ${data.phone.trim()}` : "",
      data.website?.trim() ? `Website: ${data.website.trim()}` : "",
      data.capabilities?.trim() ? `Brands / product lines: ${data.capabilities.trim()}` : "",
      interests.length ? `Categories: ${interests.join(", ")}` : "",
    ].filter(Boolean);
    const lines = [...details, "", data.message.trim()];
    const subject = `Wholesale partnership - ${data.company.trim()}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("success");
    setMessage(`Your email app should now open with your details ready to send. If it doesn't, email us directly at ${siteConfig.email}.`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-company" className="field-label">Company name *</label>
          <input id="sp-company" name="company" className="field-input" placeholder="Brand or distributor name" required />
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
          <label htmlFor="sp-website" className="field-label">Website</label>
          <input id="sp-website" name="website" type="url" className="field-input" placeholder="https://" />
        </div>
        <div>
          <label htmlFor="sp-capabilities" className="field-label">Brands / product lines</label>
          <input id="sp-capabilities" name="capabilities" className="field-input" placeholder="e.g. brands you own or distribute" />
        </div>
      </div>

      <fieldset>
        <legend className="field-label">Product interest</legend>
        <div className="mt-1 grid gap-2.5 sm:grid-cols-2">
          {categories.map((c) => (
            <label
              key={c.slug}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-charcoal-200 px-4 py-3 text-sm text-charcoal-600 transition-colors hover:border-charcoal-900 has-[:checked]:border-gold has-[:checked]:bg-gold/5"
            >
              <input
                type="checkbox"
                name="interest"
                value={c.name}
                className="h-4 w-4 accent-gold"
              />
              {c.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="sp-message" className="field-label">Message *</label>
        <textarea id="sp-message" name="message" rows={5} className="field-input resize-none" placeholder="Tell us about your brand, product range and wholesale terms." required />
      </div>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Submit inquiry
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
