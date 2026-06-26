"use client";

// Google Analytics 4 for the Next.js App Router.
//
// Renders nothing and loads no scripts unless GA is enabled (production +
// NEXT_PUBLIC_GA_MEASUREMENT_ID present). The gtag.js loader is injected with
// next/script strategy="afterInteractive" so it never blocks hydration or LCP.
//
// Reusable across Vuelvete Digital projects: drop <GoogleAnalytics /> into the
// root layout — all config comes from the environment via lib/gtag.

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GA_MEASUREMENT_ID, gaEnabled, pageview, event } from "@/lib/gtag";

// Fires a page_view on first load and on every App Router navigation.
// useSearchParams must live under a Suspense boundary (see below).
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    pageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

// Tracks clicks on links that leave the current origin.
function OutboundLinkTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      let target: URL;
      try {
        target = new URL(href, window.location.href);
      } catch {
        return; // anchors like "#contact", "tel:", "mailto:" with bad parse
      }

      if (target.origin !== window.location.origin) {
        event("click", {
          event_category: "outbound",
          event_label: target.href,
          transport_type: "beacon",
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export default function GoogleAnalytics() {
  if (!gaEnabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      {/* send_page_view:false above — RouteChangeTracker owns page_view so the
          initial load and SPA navigations are counted exactly once. */}
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
      <OutboundLinkTracker />
    </>
  );
}
