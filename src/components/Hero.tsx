import Image from "next/image";
import { SITE_LINKS } from "@/lib/links";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="grid min-h-[calc(100svh-5rem)] w-full grid-cols-1 border-b border-[var(--hairline)] lg:grid-cols-2"
    >
      {/* Left Pane: Strictly minimal above the fold */}
      <div className="flex flex-col justify-center border-b border-[var(--hairline)] px-5 py-16 sm:px-12 lg:border-r lg:border-b-0 lg:px-12 lg:py-24 xl:px-16">
        <div className="w-full max-w-[40rem]">
          <h1 className="font-editorial text-[2.05rem] font-semibold uppercase leading-[1.06] tracking-[-0.025em] text-[var(--ink-primary)] sm:text-[3.1rem] lg:text-[2.85rem] xl:text-[3.55rem] 2xl:text-[4.15rem]">
            <span className="block sm:whitespace-nowrap">Local-First AI</span>
            <span className="block sm:whitespace-nowrap">For Every Device.</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-[0.95rem] leading-[1.65] text-[var(--ink-secondary)] sm:text-base">
            Quantization-native models and local-first software engineered for
            budget and mid-range hardware. Zero cloud calls, accounts, API keys,
            or paywalls.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-9">
            <a
              href={SITE_LINKS.mabaAiPlay.href}
              {...(SITE_LINKS.mabaAiPlay.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex h-11 items-center justify-center rounded-[2px] bg-[var(--accent-cobalt)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-cobalt-hover)]"
            >
              Get MABA AI
            </a>

            <a
              href="#solutions"
              className="inline-flex h-11 items-center justify-center rounded-[2px] border border-[var(--hairline-strong)] bg-transparent px-6 text-sm font-medium text-[var(--ink-primary)] transition-colors hover:border-[var(--ink-muted)] hover:bg-[var(--bg-surface)]"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Right Pane: Edge-to-edge Milky Way astrophotography plate */}
      <div className="relative min-h-[340px] w-full overflow-hidden bg-black sm:min-h-[440px] lg:min-h-full">
        <Image
          src="/images/hero-milky-way.webp"
          alt="Deep-space Milky Way starfield and midnight-cobalt galactic dust lanes"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="animate-cosmos-settle object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-void)]/20 via-transparent to-transparent"
        />
      </div>
    </section>
  );
}
