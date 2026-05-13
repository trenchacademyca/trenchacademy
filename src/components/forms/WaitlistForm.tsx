"use client";

import { useState } from "react";
import { Button } from "@/components/site/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: wire up delivery (Resend, Mailchimp, etc.).
    try {
      // eslint-disable-next-line no-console
      console.info("[WaitlistForm] submission payload", data);
      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`border border-brand-primary bg-bg ${
          compact ? "px-6 py-5" : "p-8"
        }`}
      >
        <div className="font-display text-xs uppercase tracking-[0.3em] text-brand-primary">
          You&apos;re on the list
        </div>
        <h3
          className={`mt-2 font-display font-bold uppercase leading-tight ${
            compact ? "text-xl" : "text-2xl"
          }`}
        >
          Welcome to the trenches.
        </h3>
        <p className="mt-2 text-sm text-fg-muted">
          We&apos;ll email you the moment the app drops.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-dim focus:border-brand-primary focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className={`flex flex-col gap-3 ${compact ? "sm:flex-row" : "sm:flex-row"}`}>
        <label className="block flex-1">
          <span className="sr-only">Email address</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={inputCls}
            placeholder="Your email"
          />
        </label>
        <Button size="md" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Join the waitlist"}
        </Button>
      </div>
      {error && (
        <div className="border border-brand-primary/60 bg-brand-primary/10 px-4 py-3 text-sm text-fg">
          {error}
        </div>
      )}
      <p className="text-xs text-fg-dim">
        No spam. One email when the app is live.
      </p>
    </form>
  );
}
