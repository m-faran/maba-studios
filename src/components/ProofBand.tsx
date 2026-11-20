import { SITE_LINKS } from "@/lib/links";
import { ArrowUpRightIcon, ShieldOffCloudIcon } from "./Icons";

const ANCHOR_OUTCOMES = [
  {
    value: "0 Cloud Calls",
    detail:
      "True air-gapped on-device execution—turn on airplane mode and keep working without interruption.",
  },
  {
    value: "4 Shipping Tools",
    detail:
      "Purpose-built software across Android, Windows, and open-source mobile GLSL graphics.",
  },
  {
    value: "$0 Forever",
    detail:
      "No subscriptions, no account creation, no API key configuration, and no metered token limits.",
  },
  {
    value: "Everyday Hardware",
    detail:
      "Quantization-native models and single-pass shaders engineered for budget and mid-range devices.",
  },
];

export function ProofBand() {
  return (
    <section
      id="proof"
      aria-label="Engineering proof and verifiable outcomes"
      className="w-full border-b border-[var(--hairline)] bg-[var(--bg-surface)]"
    >
      <div className="grid grid-cols-1 divide-y divide-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {ANCHOR_OUTCOMES.map((item, idx) => (
          <div
            key={item.value}
            className={`px-6 py-9 sm:px-8 lg:px-10 lg:py-11 ${
              idx % 2 === 1 ? "sm:border-l sm:border-[var(--hairline)] lg:border-l" : ""
            }`}
          >
            <p className="font-editorial tabular-nums text-[1.65rem] font-medium tracking-[-0.02em] text-[var(--ink-primary)] xl:text-[1.85rem]">
              {item.value}
            </p>
            <p className="mt-2.5 text-sm leading-[1.6] text-[var(--ink-secondary)]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Transparent verification bar: zero fabricated reviews or vanity counts */}
      <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--hairline)] bg-[var(--bg-void)] px-6 py-5 sm:flex-row sm:items-center sm:px-10 lg:px-12">
        <div className="flex items-center gap-3 text-sm text-[var(--ink-secondary)]">
          <ShieldOffCloudIcon className="h-4 w-4 shrink-0 text-[var(--accent-cobalt)]" />
          <span>
            Independent edge-AI engineering lab. Inspect our releases directly—no
            synthetic benchmarks or rented endorsements.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a
            href={SITE_LINKS.bamaAiPlay.href}
            className="inline-flex items-center gap-1.5 font-medium text-[var(--ink-primary)] transition-colors hover:text-[var(--accent-cobalt)]"
          >
            <span>BAMA AI on Google Play</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={SITE_LINKS.bamaUpscaler.href}
            className="inline-flex items-center gap-1.5 font-medium text-[var(--ink-primary)] transition-colors hover:text-[var(--accent-cobalt)]"
          >
            <span>BAMA Upscaler GLSL Source</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
