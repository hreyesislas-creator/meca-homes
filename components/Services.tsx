"use client";

import { services } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";
import { ServiceIcon, ArrowIcon } from "./Icons";

export default function Services() {
  const { t } = useI18n();
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-steel/20 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {t.services.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            {t.services.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              as="article"
              delay={(i % 3) * 100}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-steel/30 to-navy-deep text-gold ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110">
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                {t.services.items[i].title}
              </h3>
              <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-gold/90">
                {t.services.items[i].headline}
              </p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/70">
                {t.services.items[i].copy}
              </p>

              <a
                href={`#${service.anchor}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-gold"
              >
                {t.services.exploreCta}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal
            as="article"
            delay={200}
            className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-deep p-7 text-navy"
          >
            <h3 className="font-display text-2xl font-semibold leading-snug">
              {t.services.ctaCardTitle}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/80">
              {t.services.ctaCardBody}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              {t.services.ctaCardCta}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
