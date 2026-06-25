"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";

// Standalone consultation CTA — sits between the final service detail (Wet
// Tapping) and "Our Process". No vertical padding of its own: the offwhite
// padding of the neighbouring sections frames the card so it reads as an
// intentional, centered break filling the white space between them.
export default function ConsultationCta() {
  const { t } = useI18n();
  return (
    <section className="bg-offwhite px-5 sm:px-8">
      <Reveal className="mx-auto max-w-[900px] overflow-hidden rounded-3xl bg-gradient-to-br from-gold to-gold-deep p-8 text-center shadow-premium sm:p-12 lg:p-14">
        <h3 className="font-display text-3xl font-semibold leading-snug text-navy sm:text-4xl">
          {t.services.ctaCardTitle}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy/80 sm:text-lg">
          {t.services.ctaCardBody}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-deep"
        >
          {t.services.ctaCardCta}
          <ArrowIcon className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}
