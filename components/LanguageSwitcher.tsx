"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import type { Lang } from "@/lib/i18n/translations";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const { lang, setLang, t } = useI18n();

  // "light" = sits on a dark background (header over hero / navy).
  // "dark"  = sits on a light background (mobile drawer footer, etc.).
  const track =
    variant === "light"
      ? "border-white/25 bg-white/5"
      : "border-navy/15 bg-white";

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-full border p-0.5 ${track} ${className}`}
    >
      {options.map((opt) => {
        const active = lang === opt.code;
        const inactiveText =
          variant === "light" ? "text-white/70" : "text-navy/60";
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={active}
            lang={opt.code}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-300 ${
              active
                ? "bg-gold text-navy shadow-sm"
                : `${inactiveText} hover:text-gold`
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
