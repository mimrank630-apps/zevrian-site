"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "You're subscribed. Welcome to Zevrian.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const inputBase = dark
    ? "border-charcoal-700 bg-charcoal-900 text-white placeholder:text-charcoal-500 focus:border-gold"
    : "field-input";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Enter your email"
          autoComplete="email"
          className={`flex-1 rounded-full px-5 py-3.5 text-sm outline-none transition-colors ${inputBase} ${
            dark ? "border" : ""
          }`}
          aria-invalid={status === "error"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-gold whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>

      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`mt-3 text-sm ${
            status === "error"
              ? "text-red-500"
              : dark
                ? "text-gold-light"
                : "text-gold-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
