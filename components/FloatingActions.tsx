"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop WhatsApp bubble */}
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsappAria}
        className={`fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-500 hover:scale-110 lg:flex ${
          show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Mobile sticky action bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-px border-t border-navy/10 bg-navy/95 backdrop-blur-md transition-transform duration-500 lg:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
        >
          <PhoneIcon className="h-4 w-4 text-gold" />
          {t.floating.call}
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
          {t.floating.whatsapp}
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center bg-gold py-3.5 text-sm font-semibold text-navy"
        >
          {t.floating.quote}
        </a>
      </div>
    </>
  );
}
