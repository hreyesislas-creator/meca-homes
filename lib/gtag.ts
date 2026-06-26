// Reusable Google Analytics 4 (gtag.js) helper.
//
// Drop-in for any Vuelvete Digital Next.js App Router project:
//   1. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in the environment.
//   2. Render <GoogleAnalytics /> once in the root layout.
//   3. Call event()/pageview() from anywhere on the client.
//
// The Measurement ID is always read from the environment — never hardcode it.
// GA only loads in production and only when an ID is present.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Single source of truth for "should GA run at all".
export const gaEnabled =
  process.env.NODE_ENV === "production" && Boolean(GA_MEASUREMENT_ID);

type GtagArgs = [string, ...unknown[]];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer?: unknown[];
  }
}

// Safe wrapper — no-ops if gtag hasn't loaded (dev, missing ID, blockers, SSR).
export function gtag(...args: GtagArgs) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

// Manual page_view. App Router client navigations don't auto-fire one, so the
// GoogleAnalytics component calls this on every route change.
export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  gtag("event", "page_view", {
    page_path: url,
    page_location: typeof window !== "undefined" ? window.location.href : url,
    send_to: GA_MEASUREMENT_ID,
  });
}

// Generic event helper. Mirrors the gtag('event', action, params) signature.
export function event(action: string, params: Record<string, unknown> = {}) {
  gtag("event", action, params);
}
