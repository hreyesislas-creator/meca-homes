"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translation } from "./translations";

const STORAGE_KEY = "meca-lang";

type LanguageContextValue = {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start as "en" to match the server-rendered HTML (avoids hydration
  // mismatch). If the visitor previously chose Spanish, we switch in the
  // effect below, right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLang(stored) && stored !== "en") {
        setLangState(stored);
      }
    } catch {
      /* localStorage unavailable — stay on default */
    }
  }, []);

  // Keep <html lang>, the document title, and the meta description in sync
  // with the active language (client-side SEO + accessibility signal).
  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence failure */
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}
