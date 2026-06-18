"use client";

import { nav, services, site, areaNames } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Logo from "./Logo";
import { PhoneIcon, MailIcon } from "./Icons";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto text-white" tagline={t.brand.tagline} />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-gold"
              >
                <PhoneIcon className="h-4 w-4 text-gold" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-gold"
              >
                <MailIcon className="h-4 w-4 text-gold" />
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t.footer.exploreHeading}
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] transition-colors hover:text-gold"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t.footer.servicesHeading}
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.anchor}`}
                    className="text-[15px] transition-colors hover:text-gold"
                  >
                    {t.services.items[i].title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t.footer.areasHeading}
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1 lg:grid-cols-2">
              {areaNames.map((name) => (
                <li key={name}>
                  <a
                    href="#service-areas"
                    className="text-[15px] transition-colors hover:text-gold"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            <span className="font-semibold text-white/70">{t.footer.seoLead}</span>{" "}
            {t.footer.seoBody}
          </p>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>
              © {year} {site.name}. {t.footer.rights}
            </p>
            <p className="text-white/40">{t.footer.positioning}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
