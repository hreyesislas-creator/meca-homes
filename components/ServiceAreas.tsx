"use client";

import { areaNames } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function ServiceAreas() {
  const { t } = useI18n();
  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="bg-offwhite py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            {t.serviceAreas.eyebrow}
          </span>
          <h2
            id="service-areas-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl lg:text-5xl"
          >
            {t.serviceAreas.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            {t.serviceAreas.intro}
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {areaNames.map((name, i) => (
            <Reveal
              key={name}
              as="li"
              delay={(i % 5) * 70}
              className="group rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-card"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold transition-transform duration-300 group-hover:scale-150"
                />
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {t.serviceAreas.notes[i]}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <p className="text-[15px] text-ink/65">
            {t.serviceAreas.closingLead}
            <a
              href="#contact"
              className="font-semibold text-steel underline-offset-4 hover:underline"
            >
              {t.serviceAreas.closingLink}
            </a>
            {t.serviceAreas.closingTail}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
