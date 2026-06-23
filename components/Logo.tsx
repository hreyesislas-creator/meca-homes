"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo({
  className = "h-9 w-auto",
  tagline = "Luxury Builders",
}: {
  className?: string;
  tagline?: string;
}) {
  // File-based logo (public/logo.svg). If the file is missing or fails to load,
  // we gracefully fall back to the original code-generated logo below.
  const [useFallback, setUseFallback] = useState(false);

  if (!useFallback) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        <Image
          src="/logo.svg"
          alt="Meca Homes"
          width={640}
          height={160}
          priority
          unoptimized
          onError={() => setUseFallback(true)}
          className="h-full w-auto"
        />
      </span>
    );
  }

  // Fallback: original inline SVG + text wordmark (uses currentColor for text).
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-full w-auto"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="9"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        {/* Stylized roofline "M" */}
        <path
          d="M9 28V15l6 6 5-9 5 9 6-6v13"
          stroke="var(--color-gold)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 31h22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-wide">
          MECA HOMES
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-current/60">
          {tagline}
        </span>
      </span>
    </span>
  );
}
