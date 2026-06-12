"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const subjects = [
  "Product question",
  "Order & shipping",
  "Returns & refunds",
  "Product feedback",
  "Press & partnerships",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.name?.trim() || !data.message?.trim()) {
      setStatus("error");
      setMessage("Please complete all required fields.");
      return;
    }
    if (!EMAIL_RE.test(data.email ?? "")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "support" }),
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
      setMessage(result.message ?? "Thanks — we'll be in touch shortly.");
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
          <label htmlFor="cs-name" className="field-label">Name *</label>
          <input id="cs-name" name="name" className="field-input" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="cs-email" className="field-label">Email *</label>
          <input id="cs-email" name="email" type="email" className="field-input" placeholder="you@email.com" required />
        </div>
      </div>

      <div>
        <label htmlFor="cs-subject" className="field-label">Subject</label>
        <select id="cs-subject" name="subject" className="field-input" defaultValue="">
          <option value="" disabled>Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cs-message" className="field-label">Message *</label>
        <textarea id="cs-message" name="message" rows={5} className="field-input resize-none" placeholder="How can we help?" required />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      <FormMessage status={status} message={message} />
    </form>
  );
}

function FormMessage({ status, message }: { status: Status; message: string }) {
  if (!message) return null;
  const isError = status === "error";
  return (
    <div
      role={isError ? "alert" : "status"}
      className={`rounded-xl px-4 py-3 text-sm ${
        isError
          ? "bg-red-50 text-red-600"
          : "bg-gold/10 text-gold-700"
      }`}
    >
      {message}
    </div>
  );
}
