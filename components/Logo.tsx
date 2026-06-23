// File-based logo. Renders public/logo.svg directly via a plain <img>. No
// next/image, no onError handler, no inline-SVG fallback — so the only thing
// that can render is /logo.svg. Sizing (height + max-width) is passed in via
// `className`; object-contain guarantees the wide horizontal logo is never
// cropped or distorted.
type LogoProps = {
  className?: string;
  // Retained for call-site compatibility (Header/Footer still pass it); unused
  // because the wordmark now lives inside the SVG file.
  tagline?: string;
};

export default function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Meca Homes"
      className={`object-contain ${className}`}
    />
  );
}
