"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { event } from "@/lib/gtag";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon, LockIcon } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

const fieldBase =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-[15px] text-ink shadow-sm outline-none transition-colors placeholder:text-ink/40 focus:border-steel focus:ring-2 focus:ring-steel/25";

export default function LeadForm() {
  const { t } = useI18n();
  const f = t.form;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      projectType: String(fd.get("projectType") ?? ""),
      location: String(fd.get("location") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      details: String(fd.get("details") ?? ""),
    };

    // Client-side validation with localized message.
    if (!payload.name || !payload.phone || !payload.email) {
      setStatus("error");
      setError(f.errorRequired);
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // Server messages are English; show the localized equivalent.
        throw new Error(res.status === 422 ? f.errorRequired : f.errorGeneric);
      }
      setStatus("success");
      form.reset();

      // GA4 lead-generation conversion.
      event("generate_lead", {
        event_category: "Lead",
        event_label: "Contact Form",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : f.errorGeneric);
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-premium sm:p-14">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
          {f.successTitle}
        </h3>
        <p className="mt-3 max-w-md text-ink/70">
          {f.successBodyLead}
          <a href={site.phoneHref} className="font-semibold text-steel">
            {site.phone}
          </a>
          {f.successBodyTail}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-steel underline-offset-4 hover:underline"
        >
          {f.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-premium sm:p-8 lg:p-10"
    >
      <div className="mb-7 border-b border-navy/10 pb-6">
        <h3 className="font-display text-xl font-semibold text-navy">
          {f.header}
        </h3>
        <p className="mt-1.5 text-sm text-ink/60">
          {f.introLead}
          <span className="font-semibold text-steel">*</span>
          {f.introTail}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.labels.name} required>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={f.placeholders.name}
            className={fieldBase}
          />
        </Field>

        <Field label={f.labels.phone} required>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={f.placeholders.phone}
            className={fieldBase}
          />
        </Field>

        <Field label={f.labels.email} required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={f.placeholders.email}
            className={fieldBase}
          />
        </Field>

        <Field label={f.labels.projectType}>
          <select name="projectType" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              {f.selectServiceDefault}
            </option>
            {f.projectTypes.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label={f.labels.location}>
          <input
            name="location"
            type="text"
            placeholder={f.placeholders.location}
            className={fieldBase}
          />
        </Field>

        <Field label={f.labels.budget}>
          <select name="budget" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              {f.selectRangeDefault}
            </option>
            {f.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>

        <Field label={f.labels.timeline} className="sm:col-span-2">
          <div className="flex flex-wrap gap-2.5">
            {f.timelines.map((opt, i) => (
              <label
                key={opt}
                className="cursor-pointer rounded-full border border-navy/15 bg-offwhite px-4 py-2 text-sm font-medium text-navy transition-colors has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-white"
              >
                <input
                  type="radio"
                  name="timeline"
                  value={opt}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
        </Field>

        <Field label={f.labels.details} className="sm:col-span-2">
          <textarea
            name="details"
            rows={4}
            placeholder={f.placeholders.details}
            className={`${fieldBase} resize-none`}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy shadow-[0_18px_40px_-14px_rgba(245,230,74,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? f.submitting : f.submit}
        {status !== "loading" && (
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-4 text-center text-sm text-ink/60">{f.microcopy}</p>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-xs text-ink/45">
        <LockIcon className="h-3.5 w-3.5" />
        {f.privacy}
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="ml-0.5 text-steel">*</span>}
      </span>
      {children}
    </label>
  );
}
