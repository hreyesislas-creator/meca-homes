"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { aboutImages } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";
import { CheckIcon, ArrowIcon } from "./Icons";

const AUTO_ROTATE_MS = 4500;

function AboutSlideshow({ alt }: { alt: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = aboutImages.length;

  const goTo = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-rotate, pausing on hover/focus interaction.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      AUTO_ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <div
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium"
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {aboutImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />

      {/* Manual navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ArrowIcon className="h-5 w-5 rotate-180" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ArrowIcon className="h-5 w-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2.5">
        {aboutImages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-gold" : "w-1.5 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative overflow-hidden bg-offwhite pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image slideshow */}
        <Reveal className="relative">
          <AboutSlideshow alt={t.about.imageAlt} />
          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-2 z-10 hidden rounded-xl border border-navy/10 bg-white p-5 shadow-card sm:-right-6 sm:block">
            <div className="font-display text-3xl font-semibold text-navy">
              {t.about.cardTitle}
            </div>
            <div className="mt-1 text-sm font-medium text-steel">
              {t.about.cardSub}
            </div>
          </div>
          <div className="absolute -left-4 -top-4 -z-10 hidden h-32 w-32 rounded-full bg-gold/20 blur-2xl lg:block" />
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl lg:text-5xl">
            {t.about.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            {t.about.body[0]}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            {t.about.body[1]}
          </p>

          <ul className="mt-9 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {t.about.pillars.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] font-medium text-navy">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
