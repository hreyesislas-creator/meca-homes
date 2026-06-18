import { site } from "@/lib/site";
import Reveal from "./Reveal";
import LeadForm from "./LeadForm";
import { PhoneIcon, MailIcon, WhatsAppIcon, CheckIcon } from "./Icons";

const assurances = [
  "Direct response from our team",
  "No-obligation project review",
  "Clear next steps within days",
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-steel/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Left — info */}
        <Reveal className="lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Request a Consultation
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Let&apos;s build something extraordinary.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            Share your project anywhere in Miami or South Florida and our team
            will follow up with a tailored path forward — from feasibility to
            final walkthrough.
          </p>

          <ul className="mt-8 space-y-3">
            {assurances.map((a) => (
              <li key={a} className="flex items-center gap-3 text-white/85">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-3">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-gold/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Call us
                </span>
                <span className="block text-lg font-semibold text-white">
                  {site.phone}
                </span>
              </span>
            </a>

            <a
              href={site.emailHref}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-gold/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <MailIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Email us
                </span>
                <span className="block text-lg font-semibold text-white">
                  {site.email}
                </span>
              </span>
            </a>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-gold/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Message us
                </span>
                <span className="block text-lg font-semibold text-white">
                  WhatsApp
                </span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
