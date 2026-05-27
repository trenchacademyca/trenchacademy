"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { programs } from "@/data/programs";
import { Button } from "@/components/site/Button";
import { site } from "@/lib/site";

const levels = [
  "Youth",
  "High School",
  "College / Transfer",
  "Pro / Post-college",
];

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const prefillProgram = searchParams.get("program") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", site.formAccessKey);
    formData.append("subject", "New Inquiry: Trench Academy Website");
    formData.append("from_name", "Trench Academy Website");
    formData.append("Form", "Contact Inquiry");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand-primary bg-surface p-8">
        <div className="font-display text-xs uppercase tracking-[0.3em] text-brand-primary">
          Inquiry received
        </div>
        <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-tight">
          We&apos;ll be in touch.
        </h3>
        <p className="mt-4 text-fg-muted">
          Thanks for your inquiry. A coach will review it and follow up soon.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-dim focus:border-brand-primary focus:outline-none";
  const labelCls = "font-display text-xs uppercase tracking-[0.2em] text-fg-dim";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Your Name *</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className={`mt-2 ${inputCls}`}
            placeholder="Full name"
          />
        </label>
        <label className="block">
          <span className={labelCls}>Email *</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={`mt-2 ${inputCls}`}
            placeholder="you@email.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`mt-2 ${inputCls}`}
            placeholder="(555) 555-5555"
          />
        </label>
        <label className="block">
          <span className={labelCls}>Athlete Level *</span>
          <select
            required
            name="level"
            defaultValue=""
            className={`mt-2 ${inputCls} appearance-none`}
          >
            <option value="" disabled>
              Select level
            </option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={labelCls}>Program Interest</span>
        <select
          name="program"
          defaultValue={prefillProgram}
          className={`mt-2 ${inputCls} appearance-none`}
        >
          <option value="">No preference / not sure yet</option>
          {programs.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className={labelCls}>Position(s)</span>
        <input
          name="position"
          type="text"
          className={`mt-2 ${inputCls}`}
          placeholder="e.g. OL, DL, OT, OG, C, DE, DT"
        />
      </label>

      <label className="block">
        <span className={labelCls}>Your Message</span>
        <textarea
          name="message"
          rows={5}
          className={`mt-2 ${inputCls} resize-y`}
          placeholder="Goals, current school/team, year, and anything else we should know."
        />
      </label>

      {error && (
        <div className="border border-brand-primary/60 bg-brand-primary/10 px-4 py-3 text-sm text-fg">
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button size="lg" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}
