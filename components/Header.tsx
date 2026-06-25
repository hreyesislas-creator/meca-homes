"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { setMobileMenuOpen } from "@/lib/mobileMenu";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import { PhoneIcon } from "./Icons";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Broadcast so the floating action bar can hide while the drawer is open.
    setMobileMenuOpen(open);
    return () => {
      document.body.style.overflow = "";
      setMobileMenuOpen(false);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={t.a11y.homeLink}>
          <Logo
            className="h-10 w-auto max-w-[220px] lg:h-11 lg:max-w-[260px]"
            tagline={t.brand.tagline}
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-white"
            >
              {t.nav[item.key]}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <LanguageSwitcher variant="light" />
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_8px_24px_-8px_rgba(245,230,74,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            {t.header.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="light" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
          >
            <span className="sr-only">{t.a11y.menu}</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — a single, solid, full-screen overlay. No transition, no
          blur, no transparent panel, no nested z-index. Hidden on lg+ (desktop),
          matching the desktop nav breakpoint so the tablet range keeps the
          hamburger + overlay in sync. */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto bg-[#081832] text-white lg:hidden">
          {/* Top row: logo · language · close */}
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="flex items-center"
              aria-label={t.a11y.homeLink}
            >
              <Logo className="h-10 w-auto max-w-[200px]" tagline={t.brand.tagline} />
            </a>
            <div className="flex items-center gap-2">
              <LanguageSwitcher variant="light" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.a11y.closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-1 flex-col justify-center gap-1 px-6 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-3xl text-white transition-colors duration-200 hover:text-gold"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex flex-col gap-3 px-6 pb-8 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-gold px-6 py-4 text-center text-base font-semibold text-navy"
            >
              {t.header.cta}
            </a>
            <a
              href={site.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-base font-semibold text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              {t.common.call} {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
