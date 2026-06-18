"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section id="projects" className="bg-navy-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {t.gallery.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
            {t.gallery.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {galleryImages.map((item, i) => {
            const caption = t.gallery.captions[i];
            return (
              <Reveal
                key={item.src}
                delay={(i % 4) * 80}
                className={`group relative overflow-hidden rounded-xl ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={caption}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{caption}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40">
            {t.gallery.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
