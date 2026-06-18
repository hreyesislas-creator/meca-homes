import { trustItems } from "@/lib/site";

export default function TrustStrip() {
  return (
    <section className="border-y border-navy/10 bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:gap-x-6">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-3 sm:gap-6">
              <span className="text-sm font-medium tracking-wide text-white/85 sm:text-base">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
