"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon, LockIcon } from "./Icons";

const projectTypes = [
  "New Custom Home",
  "Design-Build",
  "Turn-Key Construction",
  "Site Work / Shell",
  "Sewer Lateral Connection",
  "Wet Tapping",
  "Other / Not Sure",
];

const budgets = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $2M",
  "$2M – $5M",
  "$5M+",
  "To be determined",
];

const timelines = [
  "Ready to start",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Just exploring",
];

type Status = "idle" | "loading" | "success" | "error";

const fieldBase =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-[15px] text-ink shadow-sm outline-none transition-colors placeholder:text-ink/40 focus:border-steel focus:ring-2 focus:ring-steel/25";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      location: String(fd.get("location") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      details: String(fd.get("details") ?? ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-premium sm:p-14">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
          Thank you — your request is in.
        </h3>
        <p className="mt-3 max-w-md text-ink/70">
          We&apos;ll review your project details and contact you shortly with
          the next steps. For anything urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-steel">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-steel underline-offset-4 hover:underline"
        >
          Submit another request
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
          Start your project
        </h3>
        <p className="mt-1.5 text-sm text-ink/60">
          Tell us a few details and our team will prepare your next steps.
          Fields marked <span className="font-semibold text-steel">*</span> are
          required.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldBase}
          />
        </Field>

        <Field label="Phone" required>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(786) 300-1441"
            className={fieldBase}
          />
        </Field>

        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldBase}
          />
        </Field>

        <Field label="Project Type">
          <select name="projectType" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              Select a service
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="City / Property Location">
          <input
            name="location"
            type="text"
            placeholder="Miami, FL"
            className={fieldBase}
          />
        </Field>

        <Field label="Budget Range">
          <select name="budget" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Timeline" className="sm:col-span-2">
          <div className="flex flex-wrap gap-2.5">
            {timelines.map((t, i) => (
              <label
                key={t}
                className="cursor-pointer rounded-full border border-navy/15 bg-offwhite px-4 py-2 text-sm font-medium text-navy transition-colors has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-white"
              >
                <input
                  type="radio"
                  name="timeline"
                  value={t}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {t}
              </label>
            ))}
          </div>
        </Field>

        <Field label="Project Details" className="sm:col-span-2">
          <textarea
            name="details"
            rows={4}
            placeholder="Tell us about your lot, vision, square footage, or any specifics that will help us prepare."
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
        {status === "loading" ? "Sending…" : "Request My Consultation"}
        {status !== "loading" && (
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-4 text-center text-sm text-ink/60">
        We&apos;ll review your project and contact you with the next steps.
      </p>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-xs text-ink/45">
        <LockIcon className="h-3.5 w-3.5" />
        Your information is kept private and is never shared.
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
