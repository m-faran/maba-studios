import Image from "next/image";
import { SITE_LINKS } from "@/lib/links";
import { ArrowRightIcon, ArrowUpRightIcon } from "./Icons";

export function FinalCtaFooter() {
  return (
    <>
      {/* Final Conversion CTA Band */}
      <section
        aria-labelledby="final-cta-heading"
        className="relative overflow-hidden border-b border-[var(--hairline)] bg-[var(--bg-void)]"
      >
        {/* Subtle full-circle echo of the approved Milky Way hero plate */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[68%] opacity-80 lg:block"
        >
          <Image
            src="/images/hero-milky-way.webp"
            alt=""
            fill
            sizes="68vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-void)] from-0% via-[var(--bg-void)]/55 via-22% to-transparent to-52%" />
        </div>

        <div className="relative px-6 py-20 sm:px-10 lg:px-12 lg:py-28 xl:px-16">
          <div className="max-w-[44rem]">
            <h2
              id="final-cta-heading"
              className="font-editorial text-4xl font-medium uppercase leading-[1.04] text-[var(--ink-primary)] sm:text-5xl xl:text-[3.75rem]"
            >
              Own Your AI.
              <br />
              Leave The Cloud Behind.
            </h2>

            <p className="mt-6 max-w-[50ch] text-base leading-[1.65] text-[var(--ink-secondary)] sm:text-[1.0625rem]">
              Start with MABA AI free on Google Play, or explore our local-first
              releases for Android, Windows, and mobile GLSL—zero accounts, zero
              subscriptions, zero cloud calls.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href={SITE_LINKS.mabaAiPlay.href}
                {...(SITE_LINKS.mabaAiPlay.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex h-11 items-center gap-2 rounded-[2px] bg-[var(--accent-cobalt)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-cobalt-hover)]"
              >
                <span>Get MABA AI on Google Play</span>
                <ArrowRightIcon className="h-4 w-4" />
              </a>

              <a
                href="#solutions"
                className="inline-flex h-11 items-center justify-center rounded-[2px] border border-[var(--hairline-strong)] bg-[var(--bg-void)]/70 px-6 text-sm font-medium text-[var(--ink-primary)] transition-colors hover:border-[var(--ink-muted)] hover:bg-[var(--bg-surface)]"
              >
                View All Four Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Structured Footer */}
      <footer className="bg-[var(--bg-void)] text-sm text-[var(--ink-secondary)]">
        <div className="grid grid-cols-1 divide-y divide-[var(--hairline)] md:grid-cols-12 md:divide-x md:divide-y-0">
          <div className="px-6 py-12 sm:px-10 md:col-span-5 lg:px-12">
            <a
              href="#top"
              className="font-editorial text-2xl font-medium tracking-[0.04em] text-[var(--ink-primary)]"
            >
              MABA STUDIOS
            </a>
            <p className="mt-4 max-w-[40ch] leading-[1.65] text-[var(--ink-secondary)]">
              Independent edge-AI engineering lab building quantization-native
              language models and local-first software engineered to run 100%
              on-device without cloud servers, accounts, or subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-3 sm:px-10 md:col-span-7 lg:px-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-primary)]">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#maba-ai"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    MABA AI (Android)
                  </a>
                </li>
                <li>
                  <a
                    href="#maba-link"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    MABA Link (Android)
                  </a>
                </li>
                <li>
                  <a
                    href="#virtual-hdd"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    Virtual HDD (Windows)
                  </a>
                </li>
                <li>
                  <a
                    href="#maba-upscaler"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    MABA Upscaler (GLSL)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-primary)]">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#proof"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    Engineering Proof
                  </a>
                </li>
                <li>
                  <a
                    href="#problem"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    Why Local-First
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="transition-colors hover:text-[var(--ink-primary)]"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-primary)]">
                Distribution
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={SITE_LINKS.mabaAiPlay.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-[var(--ink-primary)]"
                  >
                    <span>Google Play</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_LINKS.virtualHdd.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-[var(--ink-primary)]"
                  >
                    <span>Windows Releases</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_LINKS.mabaUpscaler.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-[var(--ink-primary)]"
                  >
                    <span>GitHub Open Source</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[var(--hairline)] px-6 py-6 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:px-10 lg:px-12">
          <p>© MABA Studios. Independent Edge-AI Engineering Lab.</p>
          <p className="font-mono">100% ON-DEVICE · ZERO CLOUD CALLS · NO PAYWALLS</p>
        </div>
      </footer>
    </>
  );
}
