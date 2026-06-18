import Reveal from "./Reveal";
import {
  ShieldCheckIcon,
  MapPinIcon,
  CompassIcon,
  KeyIcon,
  ClipboardIcon,
} from "./Icons";

const items = [
  { label: "Licensed & Insured", Icon: ShieldCheckIcon },
  { label: "South Florida Specialists", Icon: MapPinIcon },
  { label: "Design-Build Experts", Icon: CompassIcon },
  { label: "Turn-Key Construction", Icon: KeyIcon },
  { label: "Permit & Municipality Coordination", Icon: ClipboardIcon },
];

export default function CredibilityStrip() {
  return (
    <section
      aria-label="Why clients trust Meca Homes"
      className="border-b border-navy/10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-navy/10 sm:grid-cols-3 lg:flex lg:divide-x lg:[&>li]:flex-1">
          {items.map(({ label, Icon }, i) => (
            <Reveal
              key={label}
              as="li"
              delay={i * 70}
              className="flex items-center justify-center gap-3 px-4 py-6 text-center lg:px-6"
            >
              <Icon className="h-5 w-5 shrink-0 text-steel" />
              <span className="text-[13px] font-medium leading-tight tracking-wide text-navy sm:text-sm">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
