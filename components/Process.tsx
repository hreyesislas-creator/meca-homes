"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl lg:text-5xl">
            {t.process.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            {t.process.intro}
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 top-[2.1rem] hidden h-px w-full bg-gradient-to-r from-transparent via-steel/40 to-transparent lg:block" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {t.process.steps.map((step, i) => (
              <Reveal
                key={i}
                as="li"
                delay={i * 90}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-navy/10 bg-white font-display text-xl font-semibold text-navy shadow-card transition-colors duration-300">
                  <span className="absolute inset-0 rounded-full bg-gold/0 transition-colors" />
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.copy}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
