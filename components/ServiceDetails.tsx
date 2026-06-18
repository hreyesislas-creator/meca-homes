import Image from "next/image";
import { services } from "@/lib/site";
import Reveal from "./Reveal";
import { ServiceIcon, ArrowIcon, CheckIcon } from "./Icons";

const images: Record<string, string> = {
  "design-build":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80",
  "turn-key-construction":
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80",
  "site-work-shell":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=80",
  "sewer-lateral":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=80",
  "wet-tapping":
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1100&q=80",
};

export default function ServiceDetails() {
  return (
    <section
      id="service-details"
      className="relative bg-offwhite py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            Services In Detail
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl">
            Specialized expertise, explained.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Each discipline below is delivered to luxury standards across Miami
            and South Florida — engineered, permitted, and built to last.
          </p>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal
                key={service.id}
                as="article"
                id={service.anchor}
                className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`relative ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-premium">
                    <Image
                      src={images[service.id]}
                      alt={`${service.title} — Meca Homes, South Florida`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-navy/85 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                      <span className="text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {service.title}
                    </span>
                  </div>
                </div>

                {/* Copy */}
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-steel">
                    {service.headline}
                  </p>
                  <p className="mt-5 text-[17px] leading-relaxed text-ink/75">
                    {service.long}
                  </p>

                  <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span className="text-[15px] font-medium text-navy">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-deep"
                  >
                    Request a Consultation
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
