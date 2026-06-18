import { faqs, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-offwhite py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">
            Questions, Answered
          </span>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance sm:text-4xl lg:text-5xl"
          >
            Custom Home Building FAQs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Common questions about building a luxury custom home in Miami and
            South Florida — from cost and timelines to permitting, site work,
            and utility connections.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group px-6 py-5 transition-colors open:bg-navy/[0.02] sm:px-8"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {faq.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-transform duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-[15px] text-ink/65">
            Still have questions about your project?{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-steel underline-offset-4 hover:underline"
            >
              Call {site.phone}
            </a>{" "}
            or{" "}
            <a
              href="#contact"
              className="font-semibold text-steel underline-offset-4 hover:underline"
            >
              request a consultation
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
