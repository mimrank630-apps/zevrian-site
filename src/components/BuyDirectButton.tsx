"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";

type Stage = "idle" | "details" | "processing" | "success";

/**
 * Secondary, UI-only "Buy Direct" flow. This is a presentational mock of a
 * direct-checkout experience — no payment is processed. Amazon remains the
 * primary purchase path. Wire to a real payment provider later.
 */
export function BuyDirectButton({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function startCheckout() {
    setStage("details");
    setOpen(true);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setStage("processing");
    setTimeout(() => setStage("success"), 1400);
  }

  function close() {
    setOpen(false);
    // Reset after the close transition.
    setTimeout(() => setStage("idle"), 250);
  }

  return (
    <>
      <button type="button" onClick={startCheckout} className="btn btn-secondary w-full">
        Buy Direct
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Direct checkout"
        >
          <div
            className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <span className="eyebrow">Direct checkout</span>
                <h3 className="mt-1 text-lg font-semibold text-charcoal-900">
                  {stage === "success" ? "Order confirmed" : product.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-1 text-charcoal-400 transition-colors hover:bg-charcoal-50 hover:text-charcoal-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {stage === "success" ? (
              <SuccessPanel product={product} onClose={close} />
            ) : (
              <>
                <div className="mb-5 flex items-center justify-between rounded-xl bg-charcoal-50 px-4 py-3 text-sm">
                  <span className="text-charcoal-500">Order total</span>
                  <span className="font-semibold text-charcoal-900">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <form onSubmit={submit} className="space-y-4">
                  <Field label="Email" type="email" placeholder="you@email.com" required />
                  <Field label="Card number" placeholder="4242 4242 4242 4242" inputMode="numeric" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Expiry" placeholder="MM / YY" required />
                    <Field label="CVC" placeholder="123" inputMode="numeric" required />
                  </div>

                  <button
                    type="submit"
                    disabled={stage === "processing"}
                    className="btn btn-primary w-full"
                  >
                    {stage === "processing"
                      ? "Processing…"
                      : `Pay ${formatPrice(product.price)}`}
                  </button>

                  <div className="flex items-center gap-3 py-1">
                    <span className="h-px flex-1 bg-charcoal-100" />
                    <span className="text-xs text-charcoal-400">or</span>
                    <span className="h-px flex-1 bg-charcoal-100" />
                  </div>

                  <button
                    type="button"
                    onClick={submit}
                    className="btn w-full bg-[#FFC439] py-3.5 font-bold text-[#003087] hover:brightness-95"
                  >
                    Pay with PayPal
                  </button>

                  <p className="pt-1 text-center text-[11px] leading-relaxed text-charcoal-400">
                    Demo checkout — no payment is processed. For live orders,
                    use the Buy on Amazon option.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function SuccessPanel({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="py-4 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m5 13 4 4L19 7" stroke="#C6A43F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-charcoal-500">
        Thanks — your demo order for{" "}
        <span className="font-medium text-charcoal-900">{product.name}</span> is
        confirmed. In production this is where order fulfillment would begin.
      </p>
      <button type="button" onClick={onClose} className="btn btn-primary mt-6 w-full">
        Done
      </button>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input className="field-input" {...props} />
    </div>
  );
}
