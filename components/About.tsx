import Image from "next/image";
import Reveal from "./Reveal";
import { CheckIcon } from "./Icons";

const pillars = [
  "Design & architectural planning",
  "Permitting & municipal approvals",
  "Site preparation & utilities",
  "Construction & quality oversight",
  "Inspections & code compliance",
  "Final walkthrough & handover",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-offwhite py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80"
              alt="Interior of a Meca Homes luxury custom residence in South Florida with refined finishes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl border border-navy/10 bg-white p-5 shadow-card sm:-right-6 sm:block">
            <div className="font-display text-3xl font-semibold text-navy">
              One Builder.
            </div>
            <div className="mt-1 text-sm font-medium text-steel">
              Total accountability.
            </div>
          </div>
          <div className="absolute -left-4 -top-4 -z-10 hidden h-32 w-32 rounded-full bg-gold/20 blur-2xl lg:block" />
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            About Meca Homes
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl lg:text-5xl">
            A single point of responsibility, from first sketch to final key.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Meca Homes is a luxury custom home builder serving Miami and South
            Florida. We unify every phase of your project under one accountable
            team — design, permitting, site preparation, construction,
            inspections, and the final walkthrough — so you always know exactly
            where your home stands.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            That single point of responsibility removes the gaps, delays, and
            finger-pointing that plague multi-vendor builds. The result is a
            calmer process, a protected budget, and a residence crafted to the
            highest standard.
          </p>

          <ul className="mt-9 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] font-medium text-navy">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
