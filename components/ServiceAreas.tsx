import { areasServed } from "@/lib/site";
import Reveal from "./Reveal";

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="bg-offwhite py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            Where We Build
          </span>
          <h2
            id="service-areas-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl lg:text-5xl"
          >
            Serving South Florida
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Meca Homes delivers luxury residential construction throughout South
            Florida — from custom homes in Miami and Coral Gables to waterfront
            residences in Key Biscayne and Fort Lauderdale. Wherever your lot
            sits across Miami-Dade and Broward, our design-build team brings the
            same single point of responsibility to your project.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {areasServed.map((area, i) => (
            <Reveal
              key={area.name}
              as="li"
              delay={(i % 5) * 70}
              className="group rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-card"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold transition-transform duration-300 group-hover:scale-150"
                />
                {area.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {area.note}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <p className="text-[15px] text-ink/65">
            Don&apos;t see your community?{" "}
            <a
              href="#contact"
              className="font-semibold text-steel underline-offset-4 hover:underline"
            >
              Contact us
            </a>{" "}
            — we serve custom home projects across the wider South Florida region.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
