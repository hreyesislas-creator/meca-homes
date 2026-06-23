// File-based logo. Renders public/logo.svg directly via a plain <img> so there
// is no image-optimizer or onError fallback path that could revert to an old
// asset. Sizing is driven entirely by the `className` passed in (height + width
// auto): Header uses h-9 (36px), Footer uses h-10 (40px).
type LogoProps = {
  className?: string;
  // Retained for call-site compatibility (Header/Footer pass it); no longer used
  // now that the wordmark lives inside the SVG file.
  tagline?: string;
};

export default function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.svg" alt="Meca Homes" className={className} />
  );
}
