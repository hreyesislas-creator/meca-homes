"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import { ArrowIcon, PhoneIcon } from "./Icons";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy-deep"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlays — navy / steel blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(82,111,168,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <div className="reveal is-visible mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.01em] text-white text-balance sm:text-6xl lg:text-[5rem]">
            {t.hero.headlineLead}
            <span className="relative whitespace-nowrap text-gold">
              {t.hero.headlineHighlight}
              <svg
                className="absolute -bottom-2 left-0 h-2.5 w-full text-gold/70"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8.5C40 3.5 160 3.5 198 8.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {t.hero.headlineTail}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {t.hero.subhead}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy shadow-[0_18px_40px_-12px_rgba(245,230,74,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              {t.hero.ctaPrimary}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={site.phoneHref}
              className="group flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5 text-gold" />
              {t.common.call} {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {t.hero.scroll}
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
