"use client";

import { useSyncExternalStore } from "react";

// Tiny shared store so sibling components (Header drawer + FloatingActions bar)
// can react to the mobile menu being open without a context provider — keeps the
// page a server component for SEO. SSR snapshot is always `false`.
let open = false;
const listeners = new Set<() => void>();

export function setMobileMenuOpen(value: boolean) {
  if (open === value) return;
  open = value;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useMobileMenuOpen() {
  return useSyncExternalStore(
    subscribe,
    () => open,
    () => false,
  );
}
