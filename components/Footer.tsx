import { nav, services, site, areasServed } from "@/lib/site";
import Logo from "./Logo";
import { PhoneIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto text-white" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              Luxury custom home builders in Miami &amp; South Florida —
              delivering design-build, turn-key construction, site work, shell
              construction, and residential utility connections.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-gold"
              >
                <PhoneIcon className="h-4 w-4 text-gold" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-gold"
              >
                <MailIcon className="h-4 w-4 text-gold" />
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.anchor}`}
                    className="text-[15px] transition-colors hover:text-gold"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Areas Served
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1 lg:grid-cols-2">
              {areasServed.map((area) => (
                <li key={area.name}>
                  <a
                    href="#service-areas"
                    className="text-[15px] transition-colors hover:text-gold"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            <span className="font-semibold text-white/70">
              Custom home builders serving South Florida:
            </span>{" "}
            Proudly building luxury custom homes across Miami, Coral Gables,
            Pinecrest, Coconut Grove, Key Biscayne, Miami Beach, Aventura, Doral,
            Weston, and Fort Lauderdale.
          </p>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="text-white/40">
              {site.positioning} · {site.region}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
